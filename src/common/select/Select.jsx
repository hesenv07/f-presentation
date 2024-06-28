"use client";
import { Fragment, useCallback, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import classnames from "classnames";
import { CheckIcon } from "components/svgs";

const { Button, Options, Option } = Listbox;

const Select = ({
  options,
  defaultValue,
  selected,
  func,
  isError,
  funcError,
  errorMessage,
  title,
}) => {
  const classHandler = useCallback((id, value) => {
    switch (id) {
      case "option": {
        return classnames(
          {
            "bg-main text-white": value,
            "text-slate-700": !value,
          },
          "relative cursor-default select-none py-2 pl-3 pr-9"
        );
      }
      case "font": {
        return classnames(
          {
            "font-semibold": value,
            "font-normal": !value,
          },
          "block truncate"
        );
      }
      case "text": {
        return classnames(
          {
            "text-white": value,
            "text-main": !value,
          },
          "absolute inset-y-0 right-0 flex items-center pr-4"
        );
      }
    }
  }, []);

  useEffect(() => {
    if (selected && isError) {
      funcError(false);
    }
  }, [selected, funcError, isError]);

  return (
    <div>
      {title && <label className="text-blue_gray block mb-2">{title}</label>}
      <Listbox value={selected} onChange={(value) => func(value)}>
        {({ open }) => (
          <>
            <div className="relative">
              <Button className="relative border-2  focus:outline-none focus:ring-0 focus:border-main w-full cursor-default rounded-lg text-slate-700 lg:text-base bg-white py-1.5 pl-4 pr-2 text-left  border-solid border-slate-300  sm:text-sm sm:leading-6">
                <span
                  className={`block truncate ${selected?.name ? "text-slate-700" : "text-slate-400"
                    }`}
                >
                  {selected?.name ?? defaultValue?.name}
                </span>
              </Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg text-slate-700 focus:outline-none sm:text-sm">
                  {options?.map((service) => {
                    const { name, id } = service;
                    return (
                      <Option
                        key={id}
                        className={({ active }) => classHandler("option", active)}
                        value={service}
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={classHandler("font", selected)}>
                              {name}
                            </span>
                            {selected ? (
                              <span className={classHandler("text", active)}>
                                <CheckIcon />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Option>
                    );
                  })}
                </Options>
              </Transition>
              <p
                className={`text-base text-red-500 leading-6 mt-1 ${isError ? "opacity-100" : "opacity-0"
                  }`}
              >
                {errorMessage ?? "Please select , field is required!"}
              </p>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Select;