import { VideoEmbed } from "@/sections/VideoSection/components/VideoEmbed";

export const VideoSection = () => {
  return (
    <div className="relative bg-black/100 box-border caret-transparent hidden h-auto min-h-[50px] w-full mx-auto md:h-[652px]">
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
        <div className="relative box-border caret-transparent max-w-[500px] w-auto mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:w-[1026px] md:mx-0 md:p-0 md:left-[57px] md:top-[19px]">
          <div className="box-border caret-transparent">
            <span className="box-border caret-transparent hidden md:block">
              <h4 className="text-black text-[35px] font-medium box-border caret-transparent leading-[38.5px] text-center mb-2 font-muli">
                <span className="text-amber-200 box-border caret-transparent">
                  <span className="box-border caret-transparent">
                    Discover More About King BJ Garrett!
                  </span>
                </span>
              </h4>
            </span>
            <span className="text-xs box-border caret-transparent block leading-[18px] text-center md:hidden">
              <h4 className="text-black text-xl font-medium box-border caret-transparent leading-[22px] mb-2 font-muli">
                <span className="text-amber-200 box-border caret-transparent">
                  <span className="box-border caret-transparent">
                    Discover More About King BJ Garrett!
                  </span>
                </span>
              </h4>
            </span>
          </div>
        </div>
        <VideoEmbed />
      </div>
      <div className="absolute border-b-neutral-800 border-t-zinc-100 box-border caret-transparent hidden left-[calc(50%_-_400px)] w-full z-10 border-t-[50px] border-x-transparent border-x-[400px] md:left-[calc(50%_-_132px)] md:w-[33%] md:border-x-[132px]"></div>
    </div>
  );
};
