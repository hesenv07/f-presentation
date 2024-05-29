
import { Banner, Container } from "common";

import { Header, Category } from "components";
import { Items } from "components/items";

import { SITENAME, SITENAME_DESCRİPTİON } from "contants";

export const metadata = {
  title: SITENAME,
  description: SITENAME_DESCRİPTİON,
};

export default function Home() {
  return (
    <main className="min-h-screen  max-h-auto relative">
      <Header />
      <Category />
      <Banner />
      <Items />
      <Items />
    </main>
  );
}
