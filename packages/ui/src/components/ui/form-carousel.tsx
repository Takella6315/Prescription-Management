'use client';

import * as React from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { cn } from 'ui/lib/utils';
import { Button } from 'ui/components/ui/button';

type FormCarouselApi = UseEmblaCarouselType[1];
type UseFormCarouselParameters = Parameters<typeof useEmblaCarousel>;
type FormCarouselOptions = UseFormCarouselParameters[0];
type FormCarouselPlugin = UseFormCarouselParameters[1];

type FormCarouselProps = {
  opts?: FormCarouselOptions;
  plugins?: FormCarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: FormCarouselApi) => void;
  disableKeyboardNavigation?: boolean;
};

type FormCarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  disableKeyboardNavigation: boolean;
} & FormCarouselProps;

const FormCarouselContext =
  React.createContext<FormCarouselContextProps | null>(null);

function useFormCarousel() {
  const context = React.useContext(FormCarouselContext);

  if (!context) {
    throw new Error('useFormCarousel must be used within a <FormCarousel />');
  }

  return context;
}

const FormCarousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & FormCarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      disableKeyboardNavigation,
      children,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: FormCarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Tab' && disableKeyboardNavigation === true) {
          const activeElement = document.activeElement as HTMLElement;
          const activeSlide = activeElement.closest('.embla-slide');

          if (activeSlide) {
            const focusableElements = activeSlide.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            );

            const firstFocusableElement = focusableElements[0];
            const lastFocusableElement =
              focusableElements[focusableElements.length - 1];

            if (event.shiftKey) {
              if (activeElement === firstFocusableElement) {
                event.preventDefault();
              }
            } else {
              if (activeElement === lastFocusableElement) {
                event.preventDefault();
              }
            }
          }
        } else if (
          event.key === 'ArrowLeft' &&
          disableKeyboardNavigation === false
        ) {
          event.preventDefault();
          scrollPrev();
        } else if (
          event.key === 'ArrowRight' &&
          disableKeyboardNavigation === false
        ) {
          event.preventDefault();
          scrollNext();
        }
      },
      [disableKeyboardNavigation, scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <FormCarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          disableKeyboardNavigation: disableKeyboardNavigation || false,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn('relative', className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </FormCarouselContext.Provider>
    );
  },
);
FormCarousel.displayName = 'FormCarousel';

const FormCarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useFormCarousel();

  return (
    <div ref={carouselRef} className="h-full w-full overflow-x-hidden">
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  );
});
FormCarouselContent.displayName = 'CarouselContent';

const FormCarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useFormCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        'w-full shrink-0 grow-0 basis-full overflow-x-hidden overflow-y-scroll',
        orientation === 'horizontal' ? 'pl-4' : 'pt-8',
        'embla-slide',
        className,
      )}
      {...props}
    />
  );
});
FormCarouselItem.displayName = 'FormCarouselItem';

const FormCarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useFormCarousel();

  return (
    <Button
      type="button"
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-left-12 top-1/2 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
FormCarouselPrevious.displayName = 'FormCarouselPrevious';

const FormCarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useFormCarousel();

  return (
    <Button
      type="button"
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        'absolute h-8 w-8 rounded-full',
        orientation === 'horizontal'
          ? '-right-12 top-1/2 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
FormCarouselNext.displayName = 'FormCarouselNext';

export {
  type FormCarouselApi,
  FormCarousel,
  FormCarouselContent,
  FormCarouselItem,
  FormCarouselPrevious,
  FormCarouselNext,
};
