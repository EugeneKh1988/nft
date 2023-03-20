import React from "react";
import Image from "next/image";
import logoImage from "@/public/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


const Footer: React.FC = () => {
  return (
    <>
      <div className="footer sm:grid-flow-col sm:grid-rows-2 md:grid-rows-1 p-10 bg-white text-[#131740]">
        <div>
          <Image
            src={logoImage}
            alt="Logo"
            className="max-w-[164px] w-full"
          ></Image>
          <p className="mt-5">
            Create, Sell And Collect Truly Rare Digital Artworks. <br /> Powered
            By Blockchain Technology.
          </p>
          <div className="mt-6 grid grid-flow-col gap-4 place-items-center">
            <Link href="https://www.facebook.com">
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 text-[#a1a2b3] hover:text-[#8358ff]"
              />
            </Link>
            <Link href="https://www.twitter.com">
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-6 text-[#a1a2b3] hover:text-[#8358ff]"
              />
            </Link>
            <Link href="https://www.discord.com">
              <FontAwesomeIcon
                icon={faDiscord}
                className="w-6 text-[#a1a2b3] hover:text-[#8358ff]"
              />
            </Link>
            <Link href="https://www.instagram.com">
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 text-[#a1a2b3] hover:text-[#8358ff]"
              />
            </Link>
            <Link href="https://www.tiktok.com">
              <FontAwesomeIcon
                icon={faTiktok}
                className="w-6 text-[#a1a2b3] hover:text-[#8358ff]"
              />
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title capitalize text-[#131740] opacity-90">
            Marketplace
          </span>
          <a className="link no-underline hover:text-[#8358ff]">All NFTs</a>
          <a className="link no-underline hover:text-[#8358ff]">Art</a>
          <a className="link no-underline hover:text-[#8358ff]">Music</a>
          <a className="link no-underline hover:text-[#8358ff]">Domain Names</a>
          <a className="link no-underline hover:text-[#8358ff]">Collections</a>
          <a className="link no-underline hover:text-[#8358ff]">
            Virtual World
          </a>
        </div>
        <div>
          <span className="footer-title capitalize text-[#131740] opacity-90">
            Company
          </span>
          <a className="link no-underline hover:text-[#8358ff]">Explore</a>
          <a className="link no-underline hover:text-[#8358ff]">About</a>
          <a className="link no-underline hover:text-[#8358ff]">Contact Us</a>
          <a className="link no-underline hover:text-[#8358ff]">Our Blog</a>
          <a className="link no-underline hover:text-[#8358ff]">FAQ</a>
        </div>
        <div>
          <span className="footer-title capitalize text-[#131740] opacity-90">
            My Account
          </span>
          <a className="link no-underline hover:text-[#8358ff]">Authors</a>
          <a className="link no-underline hover:text-[#8358ff]">Collection</a>
          <a className="link no-underline hover:text-[#8358ff]">
            Author Profile
          </a>
          <a className="link no-underline hover:text-[#8358ff]">Create Item</a>
        </div>
      </div>
      <footer className="footer px-10 py-4 bg-white text-[#131740] gap-y-0 sm:gap-y-2">
        <p className="justify-self-center sm:place-self-start">
          © 2023 Xhibiter — Made By Ib-Themes
        </p>
        <div className="sm:place-self-center justify-self-center sm:justify-self-end inline-flex">
          <a className="link no-underline hover:text-[#8358ff]">
            Terms And Conditions
          </a>
          <a className="link no-underline hover:text-[#8358ff]">
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
