'use client';

import { useCallback, useState } from "react";

import { useRouter } from "next/navigation";

import { useFormik } from "formik";

import { Button, Input, Divider } from "common";

import { SocialLinks } from "common/sosial-link";

import { FormInputsParentElement, FormLayout, FormParentElement, InputInfoElements } from "common/form";

import { initialValues, SOCIAL_LINKS } from "./consts";

import { validationSchema } from "./validation";


const Register = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: () => handleSubmit(),
    });

    const inputs = [
        {
            id: "username",
            type: "text",
            name: "username",
            defaultValue: "",
            placeholder: "Username",
            error: formik?.errors?.username,
            value: formik.values?.username,
            onChange: formik?.handleChange,
        },
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
        const response = await fetch(`/api/register`, {
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
            router.push('/verify-code?email=' + formik.values.email)
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
                        text="Təsdiq et"
                    />
                </FormInputsParentElement>
                <SocialLinks links={SOCIAL_LINKS} />
                <Divider
                    classes="mb-10"
                    title="Hesabınız var? Daxil olun"
                />
                <Button
                    type="button"
                    classes='!py-3'
                    name={"light_btn"}
                    text="Daxil ol"
                    onClick={() => router.push("/login")}
                />
            </FormLayout>
        </FormParentElement>
    );
}

export default Register;