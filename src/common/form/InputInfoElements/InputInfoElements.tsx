"use client";
 const InputInfoElements = ({
  children,
  classes,
}) => (
  <div className={`gap-2 md:gap-4 ${classes} flex flex-col relative`}>
    {children}
  </div>
);
export default InputInfoElements;