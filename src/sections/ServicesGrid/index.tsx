import { ServiceCard } from "@/sections/ServicesGrid/components/ServiceCard";

export const ServicesGrid = () => {
  return (
    <div className="relative bg-white bg-[url('https://storage.builderall.com//franquias/2/40901/editor-html/11359123.jpg')] bg-origin-border bg-size-[50%] box-border caret-transparent h-auto min-h-[50px] w-full bg-center mx-auto md:h-[503px]">
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
        <ServiceCard
          imageUrl="https://c.animaapp.com/mho76w1tvCmShf/assets/11248420.jpeg"
          linkUrl=""
          containerVariant="md:left-[-0.5px] md:top-[108.938px]"
          innerContainerVariant="md:left-[17.3625px] md:top-[19.0625px]"
          imageContainerVariant="md:w-[141px] md:left-[51.5px] md:top-[71.8125px]"
          textContainerVariant="z-[4] md:left-[15px] md:top-[277.75px]"
        />
        <ServiceCard
          imageUrl="https://c.animaapp.com/mho76w1tvCmShf/assets/11248512.jpeg"
          linkUrl=""
          containerVariant="md:left-[285px] md:top-[108.938px]"
          innerContainerVariant="md:left-[20.375px] md:top-[22.0625px]"
          imageContainerVariant="md:w-[225px] md:left-[9.5px] md:top-[98.8125px]"
          textContainerVariant="z-[6] md:left-[15px] md:top-[278.75px]"
          showBreak={true}
        />
        <ServiceCard
          imageUrl="https://c.animaapp.com/mho76w1tvCmShf/assets/11248529.jpeg"
          linkUrl=""
          containerVariant="md:left-[855px] md:top-[109.938px]"
          innerContainerVariant="md:left-[20.375px] md:top-[18.0625px]"
          imageContainerVariant="md:w-[225px] md:left-[9.5px] md:top-[80.8125px]"
          textContainerVariant="z-[6] md:left-[15px] md:top-[279.75px]"
          showBreak={true}
        />
        <ServiceCard
          imageUrl="https://c.animaapp.com/mho76w1tvCmShf/assets/11248514.jpg"
          linkUrl=""
          containerVariant="md:left-[570px] md:top-[109.938px]"
          innerContainerVariant="md:left-[19.375px] md:top-[20.0625px]"
          imageContainerVariant="md:w-[225px] md:left-[9.5px] md:top-[77.8125px]"
          textContainerVariant="z-[6] md:left-[15px] md:top-[273.75px]"
          showBreak={true}
        />
      </div>
      <div className="absolute border-b-neutral-800 border-t-zinc-100 box-border caret-transparent hidden left-[calc(50%_-_400px)] w-full z-10 border-t-[50px] border-x-transparent border-x-[400px] md:left-[calc(50%_-_132px)] md:w-[33%] md:border-x-[132px]"></div>
    </div>
  );
};
