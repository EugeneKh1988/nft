import type { NextPage } from "next";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="Our home page for nft project">
      <Hero />
    </Layout>
  );
};

export default Home;