import React from "react";
import Image from "next/image";

// images
import hero from "@/public/hero.jpg";
import gradient from "@/public/gradient.jpg";
import flyImg from "@/public/3D_elements.png";

// styles
import styles from "@/styles/Hero.module.css";


const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${gradient.src})`}}>
      <div className="hero-content flex-col lg:flex-row lg:justify-between pt-[145px] gap-14">
        <div className="">
          <h1 className="text-[#131740] text-5xl font-bold">
            Buy, Sell And Collect NFTs.
          </h1>
          <p className="pt-8 text-[#2d2d2e] text-xl">
            The Worlds Largest Digital Marketplace For Crypto Collectibles And
            Non-Fungible Tokens
          </p>
          <div className="pt-5">
            <button
              className="btn bg-[#8358ff] text-white rounded-[18px] border-none
             focus:bg-[#552cce] hover:bg-[#552cce] normal-case max-w-[170px] w-full mr-4 shadow-md"
            >
              Upload
            </button>
            <button
              className="btn bg-white text-[#8358ff] rounded-[18px] border-[#ccc]
             focus:bg-[#8358ff] hover:bg-[#8358ff] normal-case focus:text-white
             hover:text-white max-w-[170px] w-full hover:border-none shadow-md"
            >
              Explore
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={hero}
            alt="Hero image"
            className="rotate-[12deg] rounded-[160px]"
          />
          <Image src={flyImg} alt="Flying img" className={styles.animation} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
