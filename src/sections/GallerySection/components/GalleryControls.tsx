export type GalleryControlsProps = {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
};

export const GalleryControls = ({ currentSlide, totalSlides, onSlideChange }: GalleryControlsProps) => {
  return (
    <div className="items-center box-border caret-transparent gap-x-2.5 grid grid-flow-col justify-center gap-y-2.5 z-[99]">
      <div className="items-center box-border caret-transparent gap-x-2.5 grid grid-flow-col justify-center gap-y-2.5 z-[99]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`box-border caret-transparent block h-[15px] w-[15px] rounded-[50%] transition-colors ${
              currentSlide === index ? 'bg-sky-400' : 'bg-stone-200 hover:bg-stone-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
