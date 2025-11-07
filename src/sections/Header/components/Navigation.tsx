import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";
import { MobileMenu } from "@/sections/Header/components/MobileMenu";

export const Navigation = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[500px] z-[1] mx-auto py-[5px] left-0 top-0 md:absolute md:max-w-none md:mx-0 md:py-0 md:left-[614px] md:top-[66.75px]">
      <div className="box-border caret-transparent">
        <DesktopMenu />
        <MobileMenu />
      </div>
    </div>
  );
};
