import { HeroHeading } from "@/sections/Hero/components/HeroHeading";
import { HeroSubheading } from "@/sections/Hero/components/HeroSubheading";
import { HeroButton } from "@/sections/Hero/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[500px] mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 md:left-[27px] md:top-[19px]">
      <div className="bg-transparent shadow-[rgb(0,0,255)_0px_0px_0px_0px] box-border caret-transparent h-auto max-w-full min-h-[100px] w-full md:h-[550px] md:max-w-none md:w-[712px]">
        <HeroHeading
          text="Discover The Amazing Works of..."
          headingLevel="h5"
          containerVariant="p-[15px] md:w-[705px] md:left-[1.5px] md:top-[104px]"
          desktopTextSize="text-[37px]"
          desktopLineHeight="leading-[51.8px]"
          mobileTextSize="text-xl"
          mobileLineHeight="leading-[30px]"
          fontFamily="font-montserrat"
          desktopBlockLineHeight="leading-[22.4px]"
          mobileBlockLineHeight="leading-7"
        />
        <HeroHeading
          text="Misha Creations"
          headingLevel="h2"
          containerVariant="px-[15px] py-[5px] md:w-[701px] md:left-[2.5px] md:top-[149px]"
          desktopTextSize="text-[50px]"
          desktopLineHeight="leading-[75px]"
          mobileTextSize="text-[35px]"
          mobileLineHeight="leading-[52.5px]"
          fontFamily="font-lato_black"
          desktopBlockLineHeight="leading-[70px]"
          mobileBlockLineHeight="leading-[49px]"
        />
        <HeroSubheading />
        <HeroButton />
      </div>
    </div>
  );
};
