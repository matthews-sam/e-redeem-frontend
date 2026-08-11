import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaViewportRefType } from 'embla-carousel-react'
import type {
  EmblaCarouselType,
  EmblaOptionsType,
  EmblaPluginType,
} from 'embla-carousel'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

type CarouselOrientation = 'horizontal' | 'vertical'

interface CarouselContextValue {
  carouselRef: EmblaViewportRefType
  api: EmblaCarouselType | undefined
  opts?: EmblaOptionsType
  orientation: CarouselOrientation
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel(): CarouselContextValue {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }
  return context
}

interface CarouselProps extends React.ComponentPropsWithoutRef<'div'> {
  orientation?: CarouselOrientation
  opts?: EmblaOptionsType
  // Receives the Embla instance once ready, for callers driving it externally.
  setApi?: (api: EmblaCarouselType) => void
  plugins?: EmblaPluginType[]
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: EmblaCarouselType | undefined) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
}

const navButtonClasses =
  'absolute flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-r-border bg-white text-r-ink shadow-sm transition-colors hover:bg-r-signal-tint hover:text-r-signal disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-r-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-r-signal'

function CarouselPrevious({ className, ...props }: React.ComponentPropsWithoutRef<'button'>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      type="button"
      data-slot="carousel-previous"
      className={cn(
        navButtonClasses,
        orientation === 'horizontal'
          ? 'top-1/2 -left-4 -translate-y-1/2 sm:-left-12'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </button>
  )
}

function CarouselNext({ className, ...props }: React.ComponentPropsWithoutRef<'button'>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      type="button"
      data-slot="carousel-next"
      className={cn(
        navButtonClasses,
        orientation === 'horizontal'
          ? 'top-1/2 -right-4 -translate-y-1/2 sm:-right-12'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }
