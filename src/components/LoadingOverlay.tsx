export const LoadingOverlay = () => {
  return (
    <div className="fixed bg-white box-border caret-transparent hidden h-full w-full z-[90002] left-0 top-0">
      <div className="absolute bg-slate-900/40 box-border caret-transparent h-[50px] left-[calc(50%_-_25px)] w-[50px] z-[2] overflow-hidden rounded-[50%] top-2/4 before:accent-auto before:shadow-[rgb(255,255,255)_0px_0px_0px_48px_inset] before:box-border before:caret-transparent before:text-neutral-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[50px] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-[50px] before:z-[1] before:rounded-[50%] before:border-separate before:border-[5px] before:border-dotted before:border-transparent before:inset-0 before:font-apple_system after:accent-auto after:box-border after:caret-transparent after:text-neutral-800 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[50px] after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-left after:indent-[0px] after:normal-case after:visible after:w-[50px] after:z-0 after:border-neutral-800 after:rounded-[50%] after:border-separate after:border-[10px] after:border-solid after:inset-0 after:font-apple_system"></div>
      <p className="box-border caret-transparent hidden mb-4">
        We are creating your account and will soon redirect you to the checkout.
      </p>
    </div>
  );
};
