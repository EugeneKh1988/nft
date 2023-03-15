import type { NextPage } from "next";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import HotBids from "@/components/HotBid/HotBids";
import Collections from "@/components/Collections/Collections";

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="Our home page for nft project">
      <Hero />
      <HotBids nftCount={7} />
      <Collections />
    </Layout>
  );
};

export default Home;