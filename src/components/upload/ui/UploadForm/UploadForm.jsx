'use client';
import { useState } from "react";

import { useFormik } from "formik";
import { initialValues } from "./consts";
import { validationSchema } from "./validation";
import { Button, Input, Select, Textarea } from "common";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
import ProgressBar from "../ProgressBar/ProgressBar";

const UploadForm = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        // onSubmit: () => handleSubmit(),
    });

    return <div className="flex max-w-2xl mx-auto mt-10 items-center justify-center h-full flex-col">
        <h1 className="text-2xl font-bold">Add more information to your upload</h1>
        <p className="text-blue_gray">Tip: Better titles and descriptions lead to more readers</p>
        <div className="border-2 mt-5 py-2 my-5 border-dashed border-main  shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
            <div className="flex max-w-2xl w-full px-5 py-5 items-center ">
                <CircularProgressBar progress={65} />
                <div className="pl-4">
                    <h1 className="font-bold  ">Arif Hasanov Resume 1212121 21212 .pdf</h1>
                    <p className="text-blue_gray text-sm">Creating upload...</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-2 ">
                <form className="">
                    <div className="px-4 py-6 sm:p-8">
                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                            <Input
                                title="Title*"
                                placeholder="Enter a title"
                                name="name"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                error={formik.touched.title && formik.errors.title}
                            />

                            <Select
                                selected={formik.values.category}
                                defaultValue={{ id: 0, name: "Select a category" }}
                                func={(value) => formik.setFieldValue("category", value)}
                                options={[
                                    { id: 1, name: "Category 1" },
                                    { id: 2, name: "Category 2" },
                                    { id: 3, name: "Category 3" },
                                    { id: 4, name: "Category 4" },
                                ]}
                                title="Category*"
                            />

                            <Textarea
                                title="Description*"
                                rows={5}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex px-5 items-center gap-x-5 justify-between ">
                <ProgressBar progress={65} />
                <div className="flex items-center gap-x-3">
                    <Button text='Cancel' name="light_btn" />
                    <Button text='Publish' name="main_btn" />
                </div>
            </div>
        </div>
    </div>

}


export default UploadForm;