export type ServiceCardAltProps = {
  imageUrl: string;
  imageAlt?: string;
  linkUrl: string;
  linkText?: string;
  containerVariant: string;
  layoutVariant: string;
  imageContainerVariant?: string;
  textContainerVariant?: string;
};

export const ServiceCardAlt = (props: ServiceCardAltProps) => {
  const {
    imageUrl,
    imageAlt = "",
    linkUrl,
    linkText = "CLICK HERE!",
    containerVariant,
    layoutVariant,
    imageContainerVariant = "",
    textContainerVariant = "",
  } = props;

  return (
    <div
      className={`relative box-border caret-transparent max-w-[500px] mx-auto left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 ${containerVariant}`}
    >
      <div className={layoutVariant}>
        <div
          className={`relative box-border caret-transparent mx-auto left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 ${imageContainerVariant}`}
        >
          <div className="box-border caret-transparent bg-black/100 shadow-[rgba(78,78,246,0.3)_1px_3px_14px_0px] h-auto max-w-full min-h-[50px] w-full rounded-[10px] md:h-[325px] md:max-w-none md:w-[244px]">
            <div
              className={`box-border caret-transparent text-center md:text-left ${imageContainerVariant ? imageContainerVariant.replace("relative box-border caret-transparent mx-auto left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0", "") : ""}`}
            >
              <div className="box-border caret-transparent text-center md:text-left">
                <div className="shadow-[rgb(0,0,0)_0px_0px_0px_0px] box-border caret-transparent text-center md:text-left">
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    title={imageAlt}
                    className="box-border caret-transparent max-w-[400px] text-center w-full md:max-w-none md:text-left"
                  />
                </div>
              </div>
            </div>
            <div
              className={`relative box-border caret-transparent max-w-[500px] w-auto z-[6] mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:w-[214px] md:mx-0 md:p-0 md:left-[15px] ${textContainerVariant}`}
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
                              value=""
                              href={linkUrl}
                              className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                            >
                              {linkText}
                            </a>
                          </strong>
                        </span>
                      </span>
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
                              value=""
                              href={linkUrl}
                              className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                            >
                              {linkText}
                            </a>
                          </strong>
                        </span>
                      </span>
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
