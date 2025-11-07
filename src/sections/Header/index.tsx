import { Logo } from "@/sections/Header/components/Logo";
import { CallToAction } from "@/sections/Header/components/CallToAction";
import { PhoneButton } from "@/sections/Header/components/PhoneButton";
import { Navigation } from "@/sections/Header/components/Navigation";
import { SocialLinks } from "@/sections/Header/components/SocialLinks";
import { SocialIcons } from "@/sections/Header/components/SocialIcons";

export const Header = () => {
  return (
    <div className="relative bg-white bg-[url('https://storage.builderall.com//franquias/2/40901/editor-html/11359123.jpg')] bg-origin-border bg-size-[50%] box-border caret-transparent h-auto min-h-[50px] w-full bg-center mx-auto md:h-[182px]">
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
        <Logo />
        <CallToAction />
        <PhoneButton />
        <Navigation />
        <SocialLinks />
        <SocialIcons />
      </div>
      <div className="absolute border-b-neutral-800 border-t-zinc-100 box-border caret-transparent hidden left-[calc(50%_-_400px)] w-full z-10 border-t-[50px] border-x-transparent border-x-[400px] md:left-[calc(50%_-_132px)] md:w-[33%] md:border-x-[132px]"></div>
    </div>
  );
};
