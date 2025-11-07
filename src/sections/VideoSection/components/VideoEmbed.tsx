export const VideoEmbed = () => {
  return (
    <div className="relative box-border caret-transparent h-auto max-w-[500px] w-auto mx-auto p-[15px] left-0 top-0 md:absolute md:h-[790px] md:max-w-none md:top-[-5px] md:w-[1137px] md:mx-0 md:p-0 md:left-[1.5px]">
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent w-full overflow-hidden before:accent-auto before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:pt-[56.25%] before:border-separate before:font-apple_system">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent">
              <iframe
                src="https://www.youtube.com/embed/aEariCgLKik?&controls=0&start=0&end=0"
                className="absolute box-border caret-transparent h-full w-full left-0 inset-y-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
