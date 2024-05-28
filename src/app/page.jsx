
import { Banner } from "common/banner";

import { Header,Category } from "components";

import { SITENAME,SITENAME_DESCRİPTİON } from "contants";

export const metadata = {
  title: SITENAME,
  description: SITENAME_DESCRİPTİON,
};

export default function Home() {
  return (
    <main className="min-h-screen  max-h-auto relative">
    <Header />
    <Category/>
    <Banner/>
    </main>
  );
}
