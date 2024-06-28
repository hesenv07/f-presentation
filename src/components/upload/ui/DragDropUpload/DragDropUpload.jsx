"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "common";

import classnames from "classnames";

 const DragDropUpload = ({
  files,
  func,
  isSuccess,
  text = "or Drag and Drop here",
  errMess = "error message",
  noFormik = false,
}) => {
  const inputRef = useRef();
  const [isFocused, setIsFocused] = useState(false);

  const dragDropClasses = classnames(
    {
      "py-[70px] h-full": !files,
      "min-h-[256px] h-full": files,
    },
    "relative bg-alice_blue max-w-xl my-5 mx-auto cursor-pointer border-2 border-dashed border-mainLightPurple rounded-lg bg-mainBgPurple w-full flex justify-center items-center"
  );

  const dragStartHandler = (e) => {
    e.preventDefault();
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e) => {
    e.preventDefault();
    func(e?.dataTransfer?.files[0]);
  };

  useEffect(() => {
    if (files && isSuccess) {
      func(null);
    }
  }, [files, func, isSuccess]);

  return (
    <>
      <div
        className={dragDropClasses}
        onDragStart={(e) => dragStartHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragLeaveHandler(e)}
        onDrop={(e) => dropHandler(e)}
        onClick={() => inputRef?.current?.click()}
      >
        {files ? (
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-2 justify-center items-center text-slate-700">
              <span>{files?.type}</span>
              <span>{files?.name}</span>
            </div>
            <div className="text-slate-700">
              <button
                onClick={() => func(null)}
                className="border border-solid border-input-border px-8 text-sm py-1 rounded-md hover:bg-blue-100 hover:border-blue-500 hover:text-blue-500"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full min-h-full flex  justify-center items-center">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              hidden
              onChange={(e) => func(e.target.files[0])}
              onFocus={() => setIsFocused(true)}
              ref={inputRef}
            />
            <div className="flex flex-col items-center justify-center gap-1">
            <Button name="main_btn" text='Select Documents To Upload' />
              <div className="flex flex-col gap-1">
                <div className="flex justify-center items-center text-base gap-1  flex-wrap">
                  <span className="text-blue_gray font-normal text-sm">{text}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {!files && noFormik && (
        <p
          className={`text-base text-red-500 leading-6 -mt-3 ${
            !files ? "opacity-100" : "opacity-0"
          }`}
        >
          {errMess ?? "error message"}
        </p>
      )}
    </>
  );
};

export default DragDropUpload;
