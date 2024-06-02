'use client'
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { Loading } from "common";

export default function VerifyUser({ code }) {
    
    const router = useRouter()

    const [loading, setLoading] = useState(true);

    const handleVerify = async () => {
        setLoading(true);
        const response = await fetch(`/api/verify-code`, {
            method: "POST",
            credentials: 'include',
            body: JSON.stringify({ verificationCode: code}),
        });
        setLoading(false);
    };

    // useEffect(() => {
    //     if(code){
    //         handleVerify()
    //     }
    // }, [code])

    return (
        <div style={{ height: "100vh" }}>
            {loading && <Loading />}
        </div>
    );
}