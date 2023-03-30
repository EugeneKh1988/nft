import React from "react"
import Image from "next/image";
import logoImage from "@/public/logo.webp";

// fontawsome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// svg icons
import SvgIcons from "./SvgIcons";
import Link from "next/link";


const Header: React.FC = () => {
    return (
      <div className="navbar min-h-[120px] bg-white/20 fixed z-10 backdrop-blur-md justify-between px-4 xl:px-[60px]">
        {/* logo image */}
        <div className="w-[164px] mr-3">
          <Image src={logoImage} alt="Logo"></Image>
        </div>
        {/* search field */}
        <div className="hidden lg:block grow max-w-[300px] relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="#5a5d79"
            className="w-[16px] absolute left-3 top-4"
          />
          <input
            type="text"
            placeholder="Search"
            className="input bg-white rounded-[14px] ring-[#8358ff] pl-8 focus:outline-none border-[#ccc]
              focus:border-[#8358ff] border-2 w-full placeholder:text-[#5a5d79]"
          />
        </div>

        {/* horizontal menu */}
        <ul className="hidden lg:flex items-center text-[18px]">
          <li className="px-1">
            <Link href="/" className="block px-4 py-2 hover:text-[#8358ff] cursor-pointer">
              Home
            </Link>
          </li>
          <li className="dropdown dropdown-hover px-1">
            <label
              tabIndex={0}
              className="block px-4 py-2 hover:text-[#8358ff] cursor-pointer"
            >
              Pages
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-white rounded-box w-[450px] text-[14px]"
            >
              <div className="grid grid-cols-2">
                <ul className="menu menu-compact w-auto rounded-box px-2 py-4">
                  <li>
                    <Link href="/maintanance" className="flex justify-between">
                      Maintenance
                      <span className="badge bg-[#10b981] text-white rounded-[5px] border-none">
                        NEW
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/study" className="flex justify-between">
                      Single Case Study
                      <span className="badge bg-[#10b981] text-white rounded-[5px] border-none">
                        NEW
                      </span>
                    </Link>
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
                    <a className="flex justify-between">
                      Case Studies
                      <span className="badge bg-[#10b981] text-white rounded-[5px] border-none">
                        NEW
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="flex justify-between">
                      Careers
                      <span className="badge bg-[#10b981] text-white rounded-[5px] border-none">
                        NEW
                      </span>
                    </a>
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
          <li className="dropdown dropdown-hover px-1">
            <label
              tabIndex={1}
              className="block px-4 py-2 hover:text-[#8358ff] cursor-pointer"
            >
              Explore
            </label>
            <ul
              tabIndex={1}
              className="dropdown-content menu shadow bg-white rounded-box w-[400px] text-[14px]"
            >
              <div className="grid grid-cols-2">
                <ul className="menu menu-compact w-auto rounded-box px-2 py-4">
                  <li>
                    <a>
                      <span className="rounded-full bg-[#f5f8fa] p-2">
                        <SvgIcons
                          name="nft"
                          width={24}
                          height={24}
                          className="fill-[#131740] w-4 h-4"
                        />
                      </span>
                      All NFTs
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="rounded-full bg-[#f5f8fa] p-2">
                        <SvgIcons
                          name="photography"
                          width={24}
                          height={24}
                          className="fill-[#428af8] w-4 h-4"
                        />
                      </span>
                      Photography
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="rounded-full bg-[#f5f8fa] p-2">
                        <SvgIcons
                          name="art"
                          width={24}
                          height={24}
                          className="fill-[#36c496] w-4 h-4"
                        />
                      </span>
                      Art
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="rounded-full bg-[#f5f8fa] p-2">
                        <SvgIcons
                          name="sports"
                          width={24}
                          height={24}
                          className="fill-[#737ef2] w-4 h-4"
                        />
                      </span>
                      Sports
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="rounded-full bg-[#f5f8fa] p-2">
                        <SvgIcons
                          name="mouse"
                          width={24}
                          height={24}
                          className="fill-[#fbc675] w-4 h-4"
                        />
                      </span>
                      Collectibles
                    </a>
                  </li>
                </ul>
                <ul className="menu menu-compact w-auto rounded-box px-2 py-4">
                  <li>
                    <a>
                      <span className="rounded-full bg-[#f5f8fa] p-2">
                        <SvgIcons
                          name="card"
                          width={24}
                          height={24}
                          className="fill-[#8dd059] w-4 h-4"
                        />
                      </span>
                      Tradind Cards
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="rounded-full bg-[#f5f8fa] p-2">
                        <SvgIcons
                          name="letter"
                          width={24}
                          height={24}
                          className="fill-[#8358ff] w-4 h-4"
                        />
                      </span>
                      Domain Names
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="rounded-full bg-[#f5f8fa] p-2">
                        <SvgIcons
                          name="utility"
                          width={24}
                          height={24}
                          className="fill-[#f05c5c] w-4 h-4"
                        />
                      </span>
                      Utility
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="rounded-full bg-[#f5f8fa] p-2">
                        <SvgIcons
                          name="world"
                          width={24}
                          height={24}
                          className="fill-[#46c7e3] w-4 h-4"
                        />
                      </span>
                      Virtual Worlds
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </li>
          <li className="dropdown dropdown-hover px-1">
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
          <li className="px-1">
            <a className="block px-4 py-2 hover:text-[#8358ff] cursor-pointer">
              Create
            </a>
          </li>
        </ul>

        {/* buttons */}
        <div>
          <button className="hidden lg:inline-flex btn btn-circle group bg-white focus:bg-[#8358ff] hover:bg-[#8358ff] border-[#ccc] hover:border-[#8358ff] w-12 h-10 mr-2">
            <SvgIcons
              name="wallet"
              width={24}
              height={24}
              className="group-hover:fill-white group-focus:fill-white fill-[#131740]"
            />
          </button>
          <button className="btn btn-circle group bg-white focus:bg-[#8358ff] hover:bg-[#8358ff] border-[#ccc] hover:border-[#8358ff] w-12 h-10 mr-2">
            <SvgIcons
              name="user"
              width={24}
              height={24}
              className="group-hover:fill-white group-focus:fill-white fill-[#131740]"
            />
          </button>
          <button className="btn btn-circle group bg-white focus:bg-[#8358ff] hover:bg-[#8358ff] border-[#ccc] hover:border-[#8358ff] w-12 h-10">
            <SvgIcons
              name="moon"
              width={24}
              height={24}
              className="group-hover:fill-white group-focus:fill-white fill-[#131740]"
            />
          </button>
          <button className="ml-2 lg:hidden btn btn-circle group bg-white focus:bg-[#8358ff] hover:bg-[#8358ff] border-[#ccc] hover:border-[#8358ff] w-12 h-10">
            <SvgIcons
              name="expand"
              width={24}
              height={24}
              className="group-hover:fill-white group-focus:fill-white fill-[#131740]"
            />
          </button>
        </div>
      </div>
    );
}

export default Header;