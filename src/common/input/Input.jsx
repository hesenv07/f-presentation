"use client";
import { useState, useCallback, memo } from "react";

import Image from "next/image";


 const Input = memo(function Input({
  type = "text",
  title,
  name,
  placeholder,
  pass_icon,
  onChange,
  value,
  id,
  error,
  warning,
  searchClass,
  disabled = false,
  date = false,
}) {
  const PASS_ICON = {
    HIDDEN_PASS: "eye-slash-icon",
    REVEAL_HIDDEN_PASS: "eye-icon",
  };

  const [inputType, setInputType] = useState(false);

  const changeInputType = useCallback(() => {
    setInputType(!inputType);
  }, [inputType]);

  const { REVEAL_HIDDEN_PASS, HIDDEN_PASS } = PASS_ICON;

  const password_icon = inputType ? HIDDEN_PASS : REVEAL_HIDDEN_PASS;


  return (
    <div className="flex flex-col w-full">
      <div className={`relative rounded-3xl w-full border-red-300 ${"border-input-border"}`}>
        {title && <label className="text-[#94A3B8] block mb-3">{title}</label>}
        <input
          type={type === "password" ? (inputType ? "text" : "password") : type}
          {...{ id, name, placeholder, onChange, value, disabled }}
          className={`${searchClass
            ? ""
            : `rounded-lg border  px-4 md:px-[20px] border-solid  ${error ? "border-red-300" : warning
              ? "border-orange-300 placeholder:text-orange-500"
              : "border-[#D3D1D6] placeholder:text-input-text-color"}`
            }  block w-full md:h-10  hover:border-main h-8  my-2 md:my-0  outline-none text-[#334155] xsm:text-sm lg:text-base xsm:leading-6`}
        />
        <div className="cursor-pointer absolute flex items-center inset-y-3 right-2">
          <div className="relative flex justify-center items-center gap-2">
            {!date && error && (
              <div className="flex items-center">
                <Image
                  src="/icons/error-input.svg"
                  width={18}
                  height={18}
                  alt="error"
                />
              </div>
            )}
            {warning && (
              <div className="flex items-center">
                <Image
                  src="/icons/warning-input.svg"
                  width={18}
                  height={18}
                  alt="error"
                />
              </div>
            )}
            {pass_icon && (
              <div className="cursor-pointer" onClick={changeInputType}>
                <Image
                  src={`/icons/${password_icon}.svg`}
                  width={18}
                  height={18}
                  alt="error"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {error && <p
        className={`text-base hidden  text-red-500  leading-6 ${error?.length ? "!block mb-0 pt-1" : "hidden"
          }`}
      >
        {error ?? ""}
      </p>}

    </div>
  );
});


export default Input; 