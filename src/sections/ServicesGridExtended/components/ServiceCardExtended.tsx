export type ServiceCardExtendedProps = {
  variant: string;
  linkUrl?: string;
  showContent?: boolean;
};

export const ServiceCardExtended = (props: ServiceCardExtendedProps) => {
  const { variant, linkUrl = "", showContent = true } = props;

  if (variant === "p-[15px] md:left-[855px] md:top-[31px]") {
    return (
      <div
        className={`relative box-border caret-transparent max-w-[500px] mx-auto left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 ${variant}`}
      >
        <div className="box-border caret-transparent h-auto max-w-full min-h-[50px] w-full md:max-w-none bg-transparent shadow-[rgb(0,0,255)_0px_0px_0px_0px] md:h-[362px] md:w-[284px]"></div>
      </div>
    );
  }

  if (variant === "p-[5px] md:left-[874.375px] md:top-[48.0625px]") {
    return (
      <div
        className={`relative box-border caret-transparent max-w-[500px] mx-auto left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 ${variant}`}
      >
        <div className="box-border caret-transparent bg-black/100 shadow-[rgba(78,78,246,0.3)_1px_3px_14px_0px] h-auto max-w-full min-h-[50px] w-full rounded-[10px] md:h-[325px] md:max-w-none md:w-[244px]">
          <div className="relative box-border caret-transparent mx-auto left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 max-w-screen-md text-center w-auto z-[5] px-[100px] py-[15px] md:text-left md:w-[202px] md:left-[21px] md:top-[62.875px]">
            <div className="box-border caret-transparent text-center md:text-left"></div>
          </div>
          <div className="relative box-border caret-transparent max-w-[500px] w-auto z-[6] mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:w-[214px] md:mx-0 md:p-0 md:left-[15px] md:top-[280.775px]">
            <div className="box-border caret-transparent">
              <span className="box-border caret-transparent hidden md:block">
                <p className="caret-transparent text-center">
                  <span className="box-border caret-transparent font-open_sans">
                    <span className="box-border caret-transparent"></span>
                    <span className="text-sm box-border caret-transparent leading-[21px]">
                      <span className="box-border caret-transparent block leading-[19.6px]">
                        <span className="text-amber-200 box-border caret-transparent">
                          Discover More...
                        </span>
                        <strong className="font-bold box-border caret-transparent">
                          <a
                            type="page"
                            value={linkUrl}
                            className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                          >
                            CLICK HERE!
                          </a>
                        </strong>
                        <br className="box-border caret-transparent" />
                        <strong className="font-bold box-border caret-transparent"></strong>
                        <br className="box-border caret-transparent" />
                        <strong className="font-bold box-border caret-transparent"></strong>
                      </span>
                    </span>
                    <span className="box-border caret-transparent"></span>
                  </span>
                </p>
              </span>
              <span className="text-sm box-border caret-transparent block leading-[21px] text-center md:hidden">
                <p className="caret-transparent">
                  <span className="box-border caret-transparent font-open_sans">
                    <span className="box-border caret-transparent"></span>
                    <span className="box-border caret-transparent">
                      <span className="box-border caret-transparent block leading-[19.6px]">
                        <span className="text-amber-200 box-border caret-transparent">
                          Discover More...
                        </span>
                        <strong className="font-bold box-border caret-transparent">
                          <a
                            type="page"
                            value={linkUrl}
                            className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                          >
                            CLICK HERE!
                          </a>
                        </strong>
                        <br className="box-border caret-transparent" />
                        <strong className="font-bold box-border caret-transparent"></strong>
                        <br className="box-border caret-transparent" />
                        <strong className="font-bold box-border caret-transparent"></strong>
                      </span>
                    </span>
                    <span className="box-border caret-transparent"></span>
                  </span>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const innerDivClass =
    variant === "p-[15px] md:left-[286px] md:top-8"
      ? "max-w-[500px] p-[5px] md:left-[20.375px] md:top-[21.0625px]"
      : variant === "p-[15px] md:left-[571px] md:top-[31px]"
        ? "max-w-[500px] p-[5px] md:left-[19.375px] md:top-[20.0625px]"
        : "max-w-[500px] p-[5px] md:left-[16.3625px] md:top-[19.0625px]";
  const imageContainerClass =
    variant === "p-[15px] md:left-[286px] md:top-8"
      ? "z-[6] md:w-[225px] md:left-[8.5px] md:top-[79.875px]"
      : variant === "p-[15px] md:left-[571px] md:top-[31px]"
        ? "z-[5] md:w-[146px] md:left-[49px] md:top-[70.875px]"
        : "z-[5] md:w-[217px] md:left-[13.5px] md:top-[79.875px]";
  const textContainerClass =
    variant === "p-[15px] md:left-[286px] md:top-8"
      ? "md:top-[273.775px]"
      : variant === "p-[15px] md:left-[571px] md:top-[31px]"
        ? "md:top-[276.775px]"
        : "md:top-[275.775px]";

  return (
    <div
      className={`relative box-border caret-transparent max-w-[500px] mx-auto left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 ${variant}`}
    >
      <div className="box-border caret-transparent h-auto max-w-full min-h-[50px] w-full md:max-w-none bg-transparent shadow-[rgb(0,0,255)_0px_0px_0px_0px] md:h-[362px] md:w-[284px]">
        <div
          className={`relative box-border caret-transparent mx-auto left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 ${innerDivClass}`}
        >
          <div className="box-border caret-transparent bg-black/100 shadow-[rgba(78,78,246,0.3)_1px_3px_14px_0px] h-auto max-w-full min-h-[50px] w-full rounded-[10px] md:h-[325px] md:max-w-none md:w-[244px]">
            <div
              className={`relative box-border caret-transparent max-w-screen-md text-center w-auto mx-auto px-[100px] py-[15px] left-0 top-0 md:absolute md:max-w-none md:text-left md:mx-0 md:p-0 ${imageContainerClass}`}
            >
              <div className="box-border caret-transparent text-center md:text-left"></div>
            </div>
            <div
              className={`relative box-border caret-transparent max-w-[500px] w-auto z-[6] mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:w-[214px] md:mx-0 md:p-0 md:left-[15px] ${textContainerClass}`}
            >
              <div className="box-border caret-transparent">
                <span className="box-border caret-transparent hidden md:block">
                  <p className="caret-transparent text-center">
                    <span className="box-border caret-transparent font-open_sans">
                      <span className="box-border caret-transparent"></span>
                      <span className="text-sm box-border caret-transparent leading-[21px]">
                        <span className="box-border caret-transparent block leading-[19.6px]">
                          <span className="text-amber-200 box-border caret-transparent">
                            Discover More...
                          </span>
                          <strong className="font-bold box-border caret-transparent">
                            <a
                              type="page"
                              value={linkUrl}
                              className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                            >
                              CLICK HERE!
                            </a>
                          </strong>
                        </span>
                      </span>
                      {variant === "p-[15px] md:left-[286px] md:top-8" && (
                        <>
                          <br className="box-border caret-transparent" />
                          <span className="box-border caret-transparent"></span>
                        </>
                      )}
                    </span>
                  </p>
                </span>
                <span className="text-sm box-border caret-transparent block leading-[21px] text-center md:hidden">
                  <p className="caret-transparent">
                    <span className="box-border caret-transparent font-open_sans">
                      <span className="box-border caret-transparent"></span>
                      <span className="box-border caret-transparent">
                        <span className="box-border caret-transparent block leading-[19.6px]">
                          <span className="text-amber-200 box-border caret-transparent">
                            Discover More...
                          </span>
                          <strong className="font-bold box-border caret-transparent">
                            <a
                              type="page"
                              value={linkUrl}
                              className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                            >
                              CLICK HERE!
                            </a>
                          </strong>
                        </span>
                      </span>
                      {variant === "p-[15px] md:left-[286px] md:top-8" && (
                        <>
                          <br className="box-border caret-transparent" />
                          <span className="box-border caret-transparent"></span>
                        </>
                      )}
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
