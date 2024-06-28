"use client";
import { forwardRef } from "react";
 const Textarea = forwardRef(function Textarea(
  { title, rows = 9, classes, extraClass, ...rest },
  ref
) {
  const mainClasses = extraClass
    ? extraClass
    : `block w-full text-base rounded-lg border border-solid border-slate-300 py-6 px-5 outline-none text-slate-700 shadow-sm placeholder:text-slate-400 sm:text-sm ${classes}`;
  return (
    <div className="w-full">
      {title && (
        <label className="text-blue_gray block mb-2">{title}</label>
      )}
      <textarea {...{ rows, ...rest, ref }} className={mainClasses} />
    </div>
  );
});

export default Textarea;