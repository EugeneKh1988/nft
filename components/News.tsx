import React from "react";
import SvgIcons from "./SvgIcons";

const News: React.FC = () => {
  return (
    <div className="bg-[#fbfdff] md:px-[100px]">
      <h2 className="text-center text-[#131740] text-lg sm:text-3xl font-bold pt-14 pb-8">
        Create And Sell Your NFTs
      </h2>
      <div className="pt-9 grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="rounded-full bg-[#beaaf7] inline-flex justify-center items-center p-3 mb-3 ">
            <div className="rounded-full bg-[#8358ff] inline-flex justify-center items-center">
              <SvgIcons
                width={24}
                height={24}
                name="wallet"
                className="w-6 fill-white m-5"
              />
            </div>
          </div>
          <h2 className="text-[#131740] text-lg">1. Setup your wallet</h2>
          <p className="mt-2">
            Once You've Set Up Your Wallet Of Choice, Connect It To Open Seaby
            Clicking The NFT Marketplacein The Topright Corner.
          </p>
        </div>
        <div className="text-center">
          <div className="rounded-full bg-[#c4f2e3] inline-flex justify-center items-center p-3 mb-3 ">
            <div className="rounded-full bg-[#10b981] inline-flex justify-center items-center">
              <SvgIcons
                width={24}
                height={24}
                name="wallet"
                className="w-6 fill-white m-5"
              />
            </div>
          </div>
          <h2 className="text-[#131740] text-lg">2. Create Your Collection</h2>
          <p className="mt-2">
            Click Create And Set Up Your Collection. Add Social Links, A
            Description, Profile & Banner Images, Andset A Secondary Sales Fee.
          </p>
        </div>
        <div className="text-center">
          <div className="rounded-full bg-[#cddffb] inline-flex justify-center items-center p-3 mb-3 ">
            <div className="rounded-full bg-[#428af8] inline-flex justify-center items-center">
              <SvgIcons
                width={24}
                height={24}
                name="gallery"
                className="w-6 fill-white m-5"
              />
            </div>
          </div>
          <h2 className="text-[#131740] text-lg">3. Add Your NFTs</h2>
          <p className="mt-2">
            Upload Your Work (Image, Video, Audio, Or 3D Art), Add A Title And
            Description, And Customize Your NFTswith Properties, Stats.
          </p>
        </div>
        <div className="text-center">
          <div className="rounded-full bg-[#ffd0d0] inline-flex justify-center items-center p-3 mb-3 ">
            <div className="rounded-full bg-[#ef4444] inline-flex justify-center items-center">
              <SvgIcons
                width={24}
                height={24}
                name="list"
                className="w-6 fill-white m-5"
              />
            </div>
          </div>
          <h2 className="text-[#131740] text-lg">4. List Them For Sale</h2>
          <p className="mt-2">
            Choose Between Auctions, Fixed-Price Listings, And Declining-Price
            Listings. You Choose How You Want Tosell Your NFTs!
          </p>
        </div>
      </div>
      <h1 className="text-center text-[22px] max-w-[800px] mx-auto mt-10 pb-5">
        Join Our Mailing List To Stay In The Loop With Our Newest Feature
        Releases, NFT Drops, And Tips And Tricks For Navigating Xhibiter
      </h1>
      <div className="text-center">
        <div className="relative inline-flex pb-9 max-w-[400px] w-full">
          <input
            type="text"
            placeholder="Email Address"
            className="rounded-[20px] text-[1.5rem] pl-4 pr-10 py-2 focus:outline-[#5c38c9] w-full border-[#ccc] border"
          />
          <button
            className="absolute btn normal-case right-4 top-[10px] 
            rounded-[20px] bg-[#8358ff] border-none py-2 px-7 h-5 min-h-8 hover:bg-[#5c38c9]"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
