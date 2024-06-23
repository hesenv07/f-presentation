'use client';

import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import { useFormik } from "formik";

import { Button, Input, Divider } from "common";

import { SocialLinks } from "common/sosial-link";

import { FormInputsParentElement, FormLayout, FormParentElement, InputInfoElements } from "common/form";

import { initialValues, SOCIAL_LINKS } from "./consts";

import { validationSchema } from "./validation";


const Login = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: () => handleSubmit(),
    });

    const inputs = [
        {
            id: "email",
            type: "text",
            name: "email",
            defaultValue: "",
            placeholder: "Email",
            error: formik?.errors?.email,
            value: formik.values?.email,
            onChange: formik?.handleChange,
        },
        {
            id: "password",
            type: "password",
            name: "password",
            placeholder: "Şifrə",
            pass_icon: "hidden_pass_icon",
            error: formik?.errors?.password,
            value: formik.values?.password,
            onChange: formik?.handleChange,
        },
    ];


    const isTouched = useCallback(
        (name) => {
            const isTouched = name in formik.touched;
            return isTouched;
        },
        [formik]
    );

    const handleSubmit = async () => {
        setLoading(true);
        const response = await fetch(`/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
            body: JSON.stringify({ ...formik.values }),
        });

        setLoading(false);
        if (!response.ok) {
        }
        if (response.ok) {
            router.refresh()
        }

    };
    return (
        <FormParentElement>
            <FormLayout func={formik?.handleSubmit}>
                <FormInputsParentElement>
                    <InputInfoElements>
                        {inputs?.map(({ id, error, name, ...rest }) => {
                            const errMessage = isTouched(name) ? error : "";
                            return (
                                <Input                    
                                    key={id}
                                    {...{ id, error: errMessage, name, ...rest }}
                                />
                            );
                        })}
                    </InputInfoElements>

                    <Button
                        classes='!py-3'
                        type="submit"
                        name={"main_btn"}
                        text="Daxil ol"
                    />
                </FormInputsParentElement>
                <SocialLinks links={SOCIAL_LINKS} />
                <Divider
                    classes="mb-10"
                    title="Hesabınız yoxdur? Qeydiyyatdan keçin"
                />
                <Button
                    type="button"
                    classes='!py-3'
                    name={"light_btn"}
                    text="Qeydiyyatdan keçin"
                    onClick={() => router.push("/register")}
                />
            </FormLayout>
        </FormParentElement>
    );
}

export default Login;