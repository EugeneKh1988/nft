import React from "react"
import Image from "next/image";
import logoImage from "@/public/logo.webp";

// fontawsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// svg icons
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
          <li className="dropdown dropdown-hover px-2">
            <label
              tabIndex={0}
              className="block px-4 py-2 hover:text-[#8358ff] cursor-pointer"
            >
              Pages
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-white rounded-box w-[350px] text-[14px]"
            >
              <div className="grid grid-cols-2">
                <ul className="menu menu-compact w-auto rounded-box px-2 py-4">
                  <li>
                    <a>Maintenance</a>
                  </li>
                  <li>
                    <a>Single Case Study</a>
                  </li>
                  <li>
                    <a>Item Details</a>
                  </li>
                  <li>
                    <a>Collection</a>
                  </li>
                  <li>
                    <a>Rankings</a>
                  </li>
                  <li>
                    <a>Edit Profile</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                  <li>
                    <a>Login</a>
                  </li>
                  <li>
                    <a>Terms of service</a>
                  </li>
                </ul>
                <ul className="menu menu-compact w-auto rounded-box px-2 py-4">
                  <li>
                    <a>Case Studies</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                  <li>
                    <a>Explore Colections</a>
                  </li>
                  <li>
                    <a>Activity</a>
                  </li>
                  <li>
                    <a>User</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Wallet</a>
                  </li>
                  <li>
                    <a>Page404</a>
                  </li>
                </ul>
              </div>
            </ul>
          </li>
          <li className="dropdown dropdown-hover px-2">
            <label
              tabIndex={1}
              className="block px-4 py-2 hover:text-[#8358ff] cursor-pointer"
            >
              Explore
            </label>
            <ul
              tabIndex={1}
              className="dropdown-content menu shadow bg-white rounded-box w-[350px] text-[14px]"
            >
              <div className="grid grid-cols-2">
                <ul className="menu menu-compact w-auto rounded-box px-2 py-4">
                  <li>
                    <a>All NFTs</a>
                  </li>
                  <li>
                    <a>Photography</a>
                  </li>
                  <li>
                    <a>Art</a>
                  </li>
                  <li>
                    <a>Sports</a>
                  </li>
                  <li>
                    <a>Collectibles</a>
                  </li>
                </ul>
                <ul className="menu menu-compact w-auto rounded-box px-2 py-4">
                  <li>
                    <a>Tradind Cards</a>
                  </li>
                  <li>
                    <a>Domain Names</a>
                  </li>
                  <li>
                    <a>Utility</a>
                  </li>
                  <li>
                    <a>Virtual Worlds</a>
                  </li>
                </ul>
              </div>
            </ul>
          </li>
          <li className="dropdown dropdown-hover px-2">
            <label
              tabIndex={2}
              className="block px-4 py-2 hover:text-[#8358ff] cursor-pointer"
            >
              Resources
            </label>
            <ul
              tabIndex={2}
              className="dropdown-content menu menu-compact shadow bg-white rounded-box w-52 px-2 py-4"
            >
              <li>
                <a>Help Center</a>
              </li>
              <li>
                <a>Platform Status</a>
              </li>
              <li>
                <a>Partners</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Single Post</a>
              </li>
              <li>
                <a>Newsletter</a>
              </li>
            </ul>
          </li>
          <li className="px-2">
            <a className="block px-4 py-2">Create</a>
          </li>
        </ul>

        {/* buttons */}
        <div>
          <button className="btn btn-circle group bg-white focus:bg-[#8358ff] hover:bg-[#8358ff] border-[#ccc] hover:border-[#8358ff] w-12 h-10 mr-2">
            <SvgIcons
              name="wallet"
              width={24}
              height={24}
              className="group-hover:fill-white group-focus:fill-white fill-black"
            />
          </button>
          <button className="btn btn-circle group bg-white focus:bg-[#8358ff] hover:bg-[#8358ff] border-[#ccc] hover:border-[#8358ff] w-12 h-10 mr-2">
            <SvgIcons
              name="user"
              width={24}
              height={24}
              className="group-hover:fill-white group-focus:fill-white fill-black"
            />
          </button>
          <button className="btn btn-circle group bg-white focus:bg-[#8358ff] hover:bg-[#8358ff] border-[#ccc] hover:border-[#8358ff] w-12 h-10">
            <SvgIcons
              name="moon"
              width={24}
              height={24}
              className="group-hover:fill-white group-focus:fill-white fill-black"
            />
          </button>
        </div>
      </div>
    );
}

export default Header;