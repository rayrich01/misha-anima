import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";
import { FooterLogin } from "@/sections/Footer/components/FooterLogin";
import { FooterPoweredBy } from "@/sections/Footer/components/FooterPoweredBy";

export const Footer = () => {
  return (
    <div className="relative bg-black/100 box-border caret-transparent h-auto min-h-[50px] w-full mx-auto md:h-[368px]">
      <div className="absolute box-border caret-transparent hidden min-h-full min-w-full overflow-hidden left-0">
        <video
          playsinline=""
          className="absolute box-border caret-transparent min-h-full min-w-full overflow-hidden left-0"
        >
          <source
            src=""
            type=""
            className="text-black box-border caret-transparent leading-[normal] text-start font-times_new_roman"
          />
        </video>
      </div>
      <div className="relative bg-transparent box-border caret-transparent h-full max-w-none min-h-[50px] w-full mx-auto px-[15px] md:max-w-[1140px]">
        <div className="absolute box-border caret-transparent hidden min-h-full min-w-full overflow-hidden left-0">
          <video
            playsinline=""
            className="absolute box-border caret-transparent min-h-full min-w-full overflow-hidden left-0"
          >
            <source
              src=""
              type=""
              className="text-black box-border caret-transparent leading-[normal] text-start font-times_new_roman"
            />
          </video>
        </div>
        <FooterContent />
        <FooterLinks />
        <FooterCopyright />
        <FooterLogin />
        <FooterPoweredBy />
      </div>
      <div className="absolute border-b-neutral-800 border-t-zinc-100 box-border caret-transparent hidden left-[calc(50%_-_400px)] w-full z-10 border-t-[50px] border-x-transparent border-x-[400px] md:left-[calc(50%_-_132px)] md:w-[33%] md:border-x-[132px]"></div>
    </div>
  );
};
