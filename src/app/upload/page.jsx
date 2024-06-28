


import { Upload } from "components";
import { SITENAME, SITENAME_DESCRİPTİON } from "contants";

export const metadata = {
  title: SITENAME,
  description: SITENAME_DESCRİPTİON,
};

export default function UploadPage() {
  return (
    <main className="min-h-screen  max-h-auto relative">
    <Upload/>
    </main>
  );
}
