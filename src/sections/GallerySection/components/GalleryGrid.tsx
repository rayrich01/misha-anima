import { useState } from "react";
import { GalleryControls } from "@/sections/GallerySection/components/GalleryControls";

const galleryImages = [
  [
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268725.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268726.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268727.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268767.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268766.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268765.jpg",
  ],
  [
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268767.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268725.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268765.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268726.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268727.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268766.jpg",
  ],
  [
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268726.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268765.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268767.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268725.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268727.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268766.jpg",
  ],
  [
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268727.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268766.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268725.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268765.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268726.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268767.jpg",
  ],
  [
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268766.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268727.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268726.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268767.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268765.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268725.jpeg",
  ],
  [
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268765.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268767.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268727.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268726.jpeg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268766.jpg",
    "https://storage.builderall.com//franquias/2/40901/editor-html/11268725.jpeg",
  ],
];

export const GalleryGrid = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative box-border caret-transparent h-auto max-w-[553px] w-auto mx-auto pt-[5px] pb-[21px] px-[15px] left-0 top-0 md:absolute md:h-[952px] md:max-w-none md:w-[1121px] md:mx-0 md:p-0 md:left-[6.5px] md:top-[163.875px]">
      <div className="relative box-border caret-transparent grid grid-cols-[100%] grid-rows-[calc(100%_-_40px)_40px] h-full min-h-[435px] w-full overflow-hidden md:grid-rows-[calc(100%_-_75px)_75px]">
        <div className="box-border caret-transparent gap-x-[5px] grid grid-cols-[repeat(4,1fr)] gap-y-[5px] w-full transition-opacity duration-500">
          <div 
            className="relative bg-cover box-border caret-transparent flex float-left col-end-[span_2] row-end-[span_2] overflow-hidden bg-[position:50%_top] hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${galleryImages[currentSlide][0]})` }}
          ></div>
          <div 
            className="relative bg-cover box-border caret-transparent flex float-left overflow-hidden bg-[position:50%_top] hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${galleryImages[currentSlide][1]})` }}
          ></div>
          <div 
            className="relative bg-cover box-border caret-transparent flex float-left overflow-hidden bg-[position:50%_top] hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${galleryImages[currentSlide][2]})` }}
          ></div>
          <div 
            className="relative bg-cover box-border caret-transparent flex float-left col-end-[span_2] row-end-[span_2] overflow-hidden bg-[position:50%_top] hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${galleryImages[currentSlide][3]})` }}
          ></div>
          <div 
            className="relative bg-cover box-border caret-transparent flex float-left overflow-hidden bg-[position:50%_top] hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${galleryImages[currentSlide][4]})` }}
          ></div>
          <div 
            className="relative bg-cover box-border caret-transparent flex float-left overflow-hidden bg-[position:50%_top] hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${galleryImages[currentSlide][5]})` }}
          ></div>
        </div>
        <GalleryControls 
          currentSlide={currentSlide} 
          totalSlides={galleryImages.length}
          onSlideChange={setCurrentSlide}
        />
      </div>
    </div>
  );
};
