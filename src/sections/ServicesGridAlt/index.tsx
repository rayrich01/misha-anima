import { ServiceCardAlt } from "@/sections/ServicesGridAlt/components/ServiceCardAlt";

export const ServicesGridAlt = () => {
  return (
    <div className="relative bg-white bg-[url('https://storage.builderall.com//franquias/2/40901/editor-html/11359123.jpg')] bg-origin-border bg-size-[50%] box-border caret-transparent h-auto min-h-[50px] w-full bg-center mx-auto md:h-[451px]">
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
        <ServiceCardAlt
          imageUrl="https://c.animaapp.com/mho76w1tvCmShf/assets/11248589.jpg"
          linkUrl=""
          containerVariant="p-[15px] md:left-[2.5px] md:top-[34px]"
          layoutVariant="bg-transparent shadow-[rgb(0,0,255)_0px_0px_0px_0px] box-border caret-transparent h-auto max-w-full min-h-[50px] w-full md:h-[362px] md:max-w-none md:w-[284px]"
          imageContainerVariant="p-[5px] md:left-[15.3625px] md:top-[19.0625px]"
          textContainerVariant="max-w-screen-md px-[100px] py-[15px] z-[5] md:text-left md:w-[221px] md:left-[11.5px] md:top-[56.875px]"
          imageAlt=""
          linkText="CLICK HERE!"
        />
        <ServiceCardAlt
          imageUrl="https://c.animaapp.com/mho76w1tvCmShf/assets/11248605.jpeg"
          linkUrl=""
          containerVariant="p-[5px] md:left-[590.375px] md:top-[50.0625px]"
          layoutVariant="bg-black/100 shadow-[rgba(78,78,246,0.3)_1px_3px_14px_0px] box-border caret-transparent h-auto max-w-full min-h-[50px] w-full rounded-[10px] md:h-[325px] md:max-w-none md:w-[244px]"
          imageContainerVariant="relative box-border caret-transparent max-w-screen-md text-center w-auto z-[5] mx-auto px-[100px] py-[15px] left-0 top-0 md:absolute md:max-w-none md:text-left md:w-[225px] md:mx-0 md:p-0 md:left-[9.5px] md:top-[74.875px]"
          textContainerVariant="relative box-border caret-transparent max-w-[500px] w-auto z-[6] mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:w-[231px] md:mx-0 md:p-0 md:left-[7.5px] md:top-[264.75px]"
        />
        <ServiceCardAlt
          imageUrl="https://c.animaapp.com/mho76w1tvCmShf/assets/11248599.jpeg"
          linkUrl=""
          containerVariant="p-[15px] md:left-[286px] md:top-8"
          layoutVariant="bg-transparent shadow-[rgb(0,0,255)_0px_0px_0px_0px] box-border caret-transparent h-auto max-w-full min-h-[50px] w-full md:h-[362px] md:max-w-none md:w-[284px]"
          imageContainerVariant="p-[5px] md:left-[20.375px] md:top-[21.0625px]"
          textContainerVariant="md:top-[267.75px]"
        />
        <ServiceCardAlt
          imageUrl="https://c.animaapp.com/mho76w1tvCmShf/assets/11248607.jpg"
          linkUrl=""
          containerVariant="p-[15px] md:left-[855px] md:top-[31px]"
          layoutVariant="bg-transparent shadow-[rgb(0,0,255)_0px_0px_0px_0px] box-border caret-transparent h-auto max-w-full min-h-[50px] w-full md:h-[362px] md:max-w-none md:w-[284px]"
          imageContainerVariant="p-[5px] md:left-[20.375px] md:top-[18.0625px]"
          textContainerVariant="md:left-[15px] md:top-[280.75px]"
        />
        <div className="relative box-border caret-transparent max-w-[500px] mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 md:left-[571px] md:top-[31px]">
          <div className="bg-transparent shadow-[rgb(0,0,255)_0px_0px_0px_0px] box-border caret-transparent h-auto max-w-full min-h-[50px] w-full md:h-[362px] md:max-w-none md:w-[284px]"></div>
        </div>
      </div>
      <div className="absolute border-b-neutral-800 border-t-zinc-100 box-border caret-transparent hidden left-[calc(50%_-_400px)] w-full z-10 border-t-[50px] border-x-transparent border-x-[400px] md:left-[calc(50%_-_132px)] md:w-[33%] md:border-x-[132px]"></div>
    </div>
  );
};
