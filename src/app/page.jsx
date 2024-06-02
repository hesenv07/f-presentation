
import { Banner } from "common";

import { Header, Category, Footer,Items } from "components";

import { SITENAME, SITENAME_DESCRİPTİON } from "contants";

export const metadata = {
  title: SITENAME,
  description: SITENAME_DESCRİPTİON,
};

export default function Home() {
  return (
    <main className="min-h-screen  max-h-auto relative">
      <Category />
      <Banner />
      <Items />
      <Items  />
    </main>
  );
}
