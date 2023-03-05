import type { NextPage } from "next";
import Layout from "@/components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home" description="Our home page for nft project">
      <p className="text-center text-orange-500 font-medium">Main page</p>
    </Layout>
  );
};

export default Home;