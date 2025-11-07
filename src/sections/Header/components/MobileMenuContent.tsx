import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type MobileMenuContentProps = {
  isOpen: boolean;
};

export const MobileMenuContent = ({ isOpen }: MobileMenuContentProps) => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="box-border caret-transparent animate-accordion-down">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <a 
            href="#home"
            className="text-amber-200 text-[15px] font-bold bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent block leading-[22.5px] text-center border px-4 py-2 border-solid border-transparent font-montserrat hover:text-black hover:bg-amber-200 transition-colors"
          >
            HOME
          </a>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <button
            onClick={() => setGalleryOpen(!galleryOpen)}
            className="text-amber-200 text-[15px] font-bold bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent w-full flex items-center justify-center gap-2 leading-[22.5px] text-center border px-4 py-2 border-solid border-transparent font-montserrat hover:text-black hover:bg-amber-200 transition-colors"
          >
            GALLERY
            <ChevronDown className={`w-4 h-4 transition-transform ${galleryOpen ? 'rotate-180' : ''}`} />
          </button>
          <div className={`box-border caret-transparent overflow-hidden transition-all ${galleryOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
            <a href="#gallery-skies" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Airbrushed Skies and Airbrushed Galaxies
            </a>
            <a href="#gallery-cabinets" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Cabinet Finishes
            </a>
            <a href="#gallery-decorative" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Decorative Arts
            </a>
            <a href="#gallery-murals" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Murals
            </a>
            <a href="#gallery-venetian" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Venetian Plaster
            </a>
            <a href="#gallery-wood" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Faux Wood Marquetry
            </a>
            <a href="#gallery-marble" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Marble
            </a>
            <a href="#gallery-niches" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Niches
            </a>
            <a href="#gallery-concrete" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Happy Feet Concrete
            </a>
            <a href="#gallery-children" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Children's Themescapes
            </a>
            <a href="#gallery-ceilings" className="text-amber-200 text-[15px] font-bold bg-black/100 box-border caret-transparent clear-both block leading-[22.5px] text-center w-full px-6 py-1 font-montserrat hover:bg-amber-200 hover:text-black transition-colors">
              Ceilings
            </a>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <a 
            href="#about"
            className="text-amber-200 text-[15px] font-bold bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent block leading-[22.5px] text-center border px-4 py-2 border-solid border-transparent font-montserrat hover:text-black hover:bg-amber-200 transition-colors"
          >
            ABOUT
          </a>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <a 
            href="#contact"
            className="text-amber-200 text-[15px] font-bold bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent block leading-[22.5px] text-center border px-4 py-2 border-solid border-transparent font-montserrat hover:text-black hover:bg-amber-200 transition-colors"
          >
            CONTACT
          </a>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <a 
            href="#blog"
            className="text-amber-200 text-[15px] font-bold bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] box-border caret-transparent block leading-[22.5px] text-center border px-4 py-2 border-solid border-transparent font-montserrat hover:text-black hover:bg-amber-200 transition-colors"
          >
            BLOG
          </a>
        </div>
      </div>
    </div>
  );
};
