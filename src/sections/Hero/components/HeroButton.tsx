export const HeroButton = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[500px] text-left mx-auto p-[15px] left-0 top-0 md:absolute md:max-w-none md:text-center md:mx-0 md:p-0 md:left-1.5 md:top-[252.938px]">
      <div className="content-center items-center bg-amber-400/100 shadow-[rgb(166,218,255)_0px_0px_0px_0px] box-border caret-transparent hidden h-[52px] text-left w-56 mx-auto rounded-[7px] md:flex md:text-center">
        <a
          href="/contact-us"
          className="text-blue-600 items-center box-border caret-transparent flex flex-col h-[52px] justify-center min-h-0 min-w-0 text-left align-middle w-full mx-auto md:min-h-[auto] md:min-w-[auto] md:text-center hover:text-sky-700 hover:underline hover:border-sky-700"
        >
          <span className="text-slate-900/100 text-xl font-bold box-border caret-transparent block leading-[30px] min-h-0 min-w-0 text-center align-middle w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent font-muli_black md:min-h-[auto] md:min-w-[auto]">
            CONTACT US!
          </span>
          <small className="text-white text-[15px] font-bold box-border caret-transparent hidden leading-[22.5px] text-center align-middle w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent font-book_antiqua"></small>
        </a>
      </div>
      <div className="content-center items-center bg-amber-400/100 shadow-[rgb(166,218,255)_0px_0px_0px_0px] box-border caret-transparent flex h-[52px] text-left w-56 mx-auto rounded-[7px] md:hidden md:text-center">
        <a
          href="/contact-us"
          className="text-blue-600 items-center box-border caret-transparent flex flex-col h-[52px] justify-center min-h-[auto] min-w-[auto] text-left align-middle w-full mx-auto md:min-h-0 md:min-w-0 md:text-center hover:text-sky-700 hover:underline hover:border-sky-700"
        >
          <span className="text-slate-900/100 text-xl font-bold box-border caret-transparent block leading-[30px] min-h-[auto] min-w-[auto] text-center align-middle w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent font-muli_black md:min-h-0 md:min-w-0">
            CONTACT US!
          </span>
          <small className="text-white text-[15px] font-bold box-border caret-transparent hidden leading-[22.5px] text-center align-middle w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent font-book_antiqua"></small>
        </a>
      </div>
    </div>
  );
};
