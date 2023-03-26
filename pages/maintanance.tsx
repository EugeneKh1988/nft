import type { NextPage } from "next";
import Layout from "@/components/Layout";

//
import heroImg from "@/public/maintanance.jpg";


const Maintanance: NextPage = () => {
  return (
    <Layout title="Maintanance" description="Maintanance page for nft project">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="text-white text-[28px] capitalize">
              We will be back soon...
            </p>
            <h1 className="text-white text-[48px] capitalize font-bold py-4">
              website is under maintanance
            </h1>
            <button
              className="btn bg-[#8358ff] text-white rounded-[18px] border-none
             focus:bg-[#552cce] hover:bg-[#552cce] max-w-[170px] w-full mr-4 shadow-md capitalize"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Maintanance;
