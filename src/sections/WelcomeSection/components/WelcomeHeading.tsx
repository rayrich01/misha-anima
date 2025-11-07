export const WelcomeHeading = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[500px] w-auto mx-auto p-[5px] left-0 top-0 md:absolute md:max-w-none md:w-[800px] md:mx-0 md:p-0 md:left-[170px] md:top-[37.9375px]">
      <div className="box-border caret-transparent">
        <span className="box-border caret-transparent hidden md:block">
          <h2 className="text-black text-[45px] font-medium box-border caret-transparent leading-[49.5px] text-center mb-2 font-muli_black">
            <span className="text-amber-200 box-border caret-transparent">
              Welcome to Misha Creations!
            </span>
          </h2>
        </span>
        <span className="text-[28px] box-border caret-transparent block leading-[42px] text-center md:hidden">
          <h2 className="text-black text-[25px] font-medium box-border caret-transparent leading-[27.5px] mb-2 font-muli_black">
            <span className="text-amber-200 box-border caret-transparent">
              Welcome to Misha Creations!
            </span>
          </h2>
        </span>
      </div>
    </div>
  );
};
