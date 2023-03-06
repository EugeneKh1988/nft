import React from "react"
import Image from "next/image";
import logoImage from "@/public/logo.webp";

// fontawsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// svg icons
import svgIconWallet from "@/public/btn1.svg";
import SvgIcons from "./SvgIcons";


const Header: React.FC = () => {
    return (
      <div className="navbar min-h-[120px] bg-white/20 fixed z-10 backdrop-blur-md justify-between px-[60px]">
        {/* logo image */}
        <div className="max-w-[164px]">
          <Image src={logoImage} alt="Logo"></Image>
        </div>
        {/* search field */}
        <div className="grow max-w-[300px] relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="#5a5d79"
            className="w-[20px] absolute left-3"
          />
          <input
            type="text"
            placeholder="Search"
            className="input bg-white rounded-[14px] ring-[#8358ff] pl-8 focus:outline-none border-[#ccc]
              focus:border-[#8358ff] border-2 w-full placeholder:text-[#5a5d79]"
          />
        </div>

        {/* horizontal menu */}
        <ul className="flex items-center text-[20px]">
          <li className="px-2">
            <a className="block px-4 py-2 hover:text-[#8358ff] cursor-pointer">
              Home
            </a>
          </li>
          <li className="px-2">
            <a className="block px-4 py-2">Pages</a>
          </li>
          <li className="px-2">
            <a className="block px-4 py-2">Explore</a>
          </li>
          <li className="px-2">
            <a className="block px-4 py-2">Resources</a>
          </li>
          <li className="px-2">
            <a className="block px-4 py-2">Create</a>
          </li>
        </ul>

        {/* buttons */}
        <div>
          <button className="btn btn-circle group bg-white focus:bg-[#8358ff] hover:bg-[#8358ff] border-[#ccc] hover:border-[#8358ff]">
            <SvgIcons name="wallet" width={24} height={24} className="group-hover:fill-white group-focus:fill-white fill-black" />
          </button>
        </div>
      </div>
    );
}

export default Header;