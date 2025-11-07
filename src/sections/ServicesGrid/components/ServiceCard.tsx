export type ServiceCardProps = {
  imageUrl: string;
  linkUrl: string;
  containerVariant: string;
  innerContainerVariant: string;
  imageContainerVariant: string;
  textContainerVariant: string;
  showBreak?: boolean;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div
      className={`relative box-border caret-transparent max-w-[500px] mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 ${props.containerVariant}`}
    >
      <div className="bg-transparent shadow-[rgb(0,0,255)_0px_0px_0px_0px] box-border caret-transparent h-auto max-w-full min-h-[50px] w-full md:h-[362px] md:max-w-none md:w-[284px]">
        <div
          className={`relative box-border caret-transparent max-w-[500px] mx-auto p-[5px] left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 ${props.innerContainerVariant}`}
        >
          <div className="bg-black/100 shadow-[rgba(78,78,246,0.3)_1px_3px_14px_0px] box-border caret-transparent h-auto max-w-full min-h-[50px] w-full rounded-[10px] md:h-[325px] md:max-w-none md:w-[244px]">
            <div
              className={`relative box-border caret-transparent max-w-screen-md text-center w-auto z-[5] mx-auto px-[100px] py-[15px] left-0 top-0 md:absolute md:max-w-none md:text-left md:mx-0 md:p-0 ${props.imageContainerVariant}`}
            >
              <div className="box-border caret-transparent text-center md:text-left">
                <div className="shadow-[rgb(0,0,0)_0px_0px_0px_0px] box-border caret-transparent text-center md:text-left">
                  <img
                    src={props.imageUrl}
                    alt=""
                    title=""
                    className="box-border caret-transparent max-w-[400px] text-center w-full md:max-w-none md:text-left"
                  />
                </div>
              </div>
            </div>
            <div
              className={`relative box-border caret-transparent max-w-[500px] w-auto mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:w-[214px] md:mx-0 md:p-0 md:left-[15px] ${props.textContainerVariant}`}
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
                              href={props.linkUrl}
                              className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                            >
                              CLICK HERE!
                            </a>
                          </strong>
                        </span>
                      </span>
                      {props.showBreak && (
                        <br className="box-border caret-transparent" />
                      )}
                      {props.showBreak && (
                        <span className="box-border caret-transparent"></span>
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
                              value=""
                              href={props.linkUrl}
                              className="text-blue-600 box-border caret-transparent hover:text-sky-700 hover:underline hover:border-sky-700"
                            >
                              CLICK HERE!
                            </a>
                          </strong>
                        </span>
                      </span>
                      {props.showBreak && (
                        <br className="box-border caret-transparent" />
                      )}
                      {props.showBreak && (
                        <span className="box-border caret-transparent"></span>
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
