export const PhoneButton = () => {
  return (
    <div className="relative box-border caret-transparent max-w-[500px] text-left z-0 mx-auto p-[5px] left-0 top-0 md:absolute md:max-w-none md:text-center md:mx-0 md:p-0 md:left-[307.5px] md:top-[64.3px]">
      <div className="content-center items-center bg-[linear-gradient(90deg,rgb(0,0,0)_0%,rgb(252,222,123)_100%)] shadow-[rgba(0,0,0,0.3)_0px_0px_2px_2px] box-border caret-transparent hidden h-[52px] text-left w-[203px] mx-auto rounded-[5px] md:flex md:text-center">
        <a className="items-center box-border caret-transparent flex flex-col h-[52px] justify-center min-h-0 min-w-0 text-left align-middle w-full mx-auto md:min-h-[auto] md:min-w-[auto] md:text-center">
          <span className="text-white/100 text-lg font-bold box-border caret-transparent block leading-[27px] min-h-0 min-w-0 text-center align-middle w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent font-lato_black md:min-h-[auto] md:min-w-[auto]">
            (281) 650-0500‬
          </span>
          <small className="text-white text-[15px] font-bold box-border caret-transparent hidden leading-[22.5px] text-center align-middle w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent font-book_antiqua"></small>
        </a>
      </div>
      <div className="content-center items-center bg-[linear-gradient(90deg,rgb(0,0,0)_0%,rgb(252,222,123)_100%)] shadow-[rgba(0,0,0,0.3)_0px_0px_2px_2px] box-border caret-transparent flex h-[52px] text-left w-[203px] mx-auto rounded-[5px] md:hidden md:text-center">
        <a className="items-center box-border caret-transparent flex flex-col h-[52px] justify-center min-h-[auto] min-w-[auto] text-left align-middle w-full mx-auto md:min-h-0 md:min-w-0 md:text-center">
          <span className="text-white/100 font-bold box-border caret-transparent block min-h-[auto] min-w-[auto] text-center align-middle w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent font-lato_black md:min-h-0 md:min-w-0">
            (281) 650-0500‬
          </span>
          <small className="text-white text-[15px] font-bold box-border caret-transparent hidden leading-[22.5px] text-center align-middle w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent font-book_antiqua"></small>
        </a>
      </div>
    </div>
  );
};
