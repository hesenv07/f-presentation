import { EmailVeritification, VerifyCode } from "components";

export default function VerifyPage({ searchParams }) {
        
        const { code, email } = searchParams || {};

        return (
                code ? <VerifyCode code={code} email={email} /> : <EmailVeritification email={email} />
        );
}