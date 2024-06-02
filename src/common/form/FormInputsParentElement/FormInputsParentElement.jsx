"use client";
export const FormInputsParentElement = ({
  children,
  classes,
}) => (
  <div
    className={`w-full mx-auto gap-7 flex flex-col ${classes} md:gap-[32px] md:w-full relative`}
  >
    {children}
  </div>
);


export default FormInputsParentElement;
