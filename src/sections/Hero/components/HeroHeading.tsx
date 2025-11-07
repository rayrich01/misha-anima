export type HeroHeadingProps = {
  text: string;
  headingLevel: "h2" | "h5";
  containerVariant: string;
  desktopTextSize: string;
  desktopLineHeight: string;
  mobileTextSize: string;
  mobileLineHeight: string;
  fontFamily: string;
  desktopBlockLineHeight: string;
  mobileBlockLineHeight: string;
};

export const HeroHeading = (props: HeroHeadingProps) => {
  const HeadingTag = props.headingLevel;

  return (
    <div
      className={`relative box-border caret-transparent max-w-[500px] w-auto mx-auto left-0 top-0 md:absolute md:max-w-none md:mx-0 md:p-0 ${props.containerVariant}`}
    >
      <div className="box-border caret-transparent">
        <span className="box-border caret-transparent hidden md:block">
          <HeadingTag className="caret-transparent">
            <span
              className={`box-border caret-transparent ${props.fontFamily}`}
            >
              <span
                className={`${props.desktopTextSize} box-border caret-transparent ${props.desktopLineHeight}`}
              >
                <span
                  className={`box-border caret-transparent block ${props.desktopBlockLineHeight}`}
                >
                  <span className="text-white box-border caret-transparent">
                    {props.text}
                  </span>
                </span>
              </span>
            </span>
          </HeadingTag>
        </span>
        <span
          className={`${props.mobileTextSize} box-border caret-transparent block ${props.mobileLineHeight} text-center md:hidden`}
        >
          <HeadingTag className="caret-transparent">
            <span
              className={`box-border caret-transparent ${props.fontFamily}`}
            >
              <span className="box-border caret-transparent">
                <span
                  className={`box-border caret-transparent block ${props.mobileBlockLineHeight}`}
                >
                  <span className="text-white box-border caret-transparent">
                    {props.text}
                  </span>
                </span>
              </span>
            </span>
          </HeadingTag>
        </span>
      </div>
    </div>
  );
};
