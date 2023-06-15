'use client';
import { useCallback, useState, useEffect, ReactNode } from 'react';
import Autoplay from 'embla-carousel-autoplay';
// Carousel
import useEmblaCarousel, {
	EmblaCarouselType,
	EmblaOptionsType,
} from 'embla-carousel-react';
// Component
import { DotButton } from './Dots';

type Props = {
	options: EmblaOptionsType;
	containerClassName: string;
	autoplay?: boolean;
	dots?: boolean;
	children: ReactNode;
};

export default function EmblaCarousel({
	children,
	options,
	autoplay,
	dots,
	containerClassName,
}: Props) {
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({
			playOnInit: autoplay,
		}),
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		emblaApi.on('reInit', onInit);
		emblaApi.on('reInit', onSelect);
		emblaApi.on('select', onSelect);
	}, [emblaApi, onInit, onSelect]);

	return (
		<>
			<div className={containerClassName} ref={emblaRef}>
				<div className='flex'>{children}</div>

				{dots && (
					<ul className='absolute bottom-[30px] left-0 right-0 z-10 m-auto flex h-6 w-min list-none items-center justify-center gap-2 rounded-xl border-2 border-solid border-white p-2 text-center'>
						{scrollSnaps.map((_, index) => (
							<li key={index} className='grid flex-1 place-items-center'>
								<DotButton
									selected={index === selectedIndex}
									onClick={() => scrollTo(index)}
								/>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	);
}
