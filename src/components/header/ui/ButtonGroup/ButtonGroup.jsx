"use client";

import { useCallback } from "react"

import { useRouter } from "next/navigation";

import { Button } from "common";
    


const ButtonGroup = ({ mobile = false }) => {

const navigate=useRouter()

    const isOpenHamburger = false

    const funcHandler = useCallback(
         (name) => {
           navigate.push(name);
        },
        []
    );
 


    const header_btns = [
        {
            id: "upload",
            text: 'Yükləyin',
            name: "light_btn",
            func: () => funcHandler("/upload"),
        },
        {
            id: "dowload",
            text: 'Download free for 30 days',
            name: "main_btn",
            func: () => funcHandler("/login"),
        },
        {
            id: "login",
            text: 'Giriş edin',
            name: "light_btn",
            func: () => funcHandler("/login"),
        },
    ];

    return (
        header_btns.map(({ id, width, text, name, func }) => (
            <div
                key={id}
                className={`font-semibold leading-6 ${isOpenHamburger ? "my-5" : "my-0"
                    } ${width} ${!mobile ? "hidden xl:block" : ''}`}
                onClick={func}
            >
                <Button {...{ name, text, onClick:func }} />
            </div>
        ))
    );
};
export default ButtonGroup