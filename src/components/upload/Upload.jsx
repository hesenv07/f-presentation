'use client';

import { useState } from "react";

import { DragDropUpload, UploadForm } from "./ui";

const Upload = () => {

    const [files, setFiles] = useState(null);

    return files ? <UploadForm/> :
      <div className="flex mt-10 lg:mt-24 items-center justify-center h-full flex-col">
        <h1 className="text-2xl font-bold">Upload and share with over 70 million people</h1>
        <p className=" text-blue_gray">Presentations, Documents, Infographics, and more</p>
        <DragDropUpload
            files={files}
            func={(file) => setFiles(file)}
        />;
        <p className=" text-blue_gray">Supported file types: Powerpoint (ppt, pptx, ppsx, potx), PDF, Word (doc, docx)</p>
    </div>
}

export default Upload;