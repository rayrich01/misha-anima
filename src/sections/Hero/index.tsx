import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <div className="relative bg-white bg-[url('https://storage.builderall.com//franquias/2/40901/editor-html/11248436.jpg')] bg-origin-border bg-no-repeat bg-cover box-border caret-transparent h-auto min-h-[500px] w-full bg-center mx-auto md:h-[500px]">
      <div className="absolute box-border caret-transparent min-h-full min-w-full overflow-hidden left-0">
        <video
          playsInline
          autoPlay
          loop
          muted
          className="absolute box-border caret-transparent min-h-full min-w-full overflow-hidden object-cover left-0"
        >
          <source
            src="https://storage.builderall.com//franquias/2/40901/editor-html/11359121.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative bg-transparent box-border caret-transparent h-full max-w-none min-h-[500px] w-full mx-auto px-[15px] md:max-w-[1140px]">
        <HeroContent />
      </div>
      <div className="absolute border-b-neutral-800 border-t-zinc-100 box-border caret-transparent hidden left-[calc(50%_-_400px)] w-full z-10 border-t-[50px] border-x-transparent border-x-[400px] md:left-[calc(50%_-_132px)] md:w-[33%] md:border-x-[132px]"></div>
    </div>
  );
};
