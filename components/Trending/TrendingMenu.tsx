import React from "react";
import SvgIcons from "../SvgIcons";

import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ITrendingMenu {
    nftType: string;
    sortType: string;
    verified: boolean;
    lazyMinted: boolean;
    onNftTypeChange: (type: string) => void;
    onSortTypeChange: (type: string) => void;
    onVerifiedChange: (verified: boolean) => void;
    onShowLazyMintedChange: (lazyMinted: boolean) => void;
};

const TrendingMenu: React.FC<ITrendingMenu> = ({
  nftType,
  sortType,
  verified,
  lazyMinted,
  onNftTypeChange,
  onSortTypeChange,
  onVerifiedChange,
  onShowLazyMintedChange,
}) => {
  const types = [
    { name: "All", type: "all" },
    { name: "Art", type: "art", icon: "art" },
    { name: "Collectibles", type: "collectibles", icon: "collection" },
    { name: "Domain", type: "domain", icon: "letter" },
    { name: "Music", type: "music", icon: "music" },
    { name: "Photography", type: "photography", icon: "photography" },
    { name: "Virtual World", type: "virtual", icon: "world" },
  ];

  const sortBy = [
    { name: "Recently added", type: "id" },
    { name: "Price: Low to High", type: "priceUp" },
    { name: "Price: High to Low", type: "priceDown" },
    { name: "Auction Ending Soon", type: "auction" },
  ];
  return (
    <div className="flex justify-between items-center md:px-[100px] pb-5">
      <div className="flex flex-wrap">
        {types.map((item) => {
          return (
            <button
              key={item.type}
              className={
                item.type !== nftType
                  ? "btn  my-1 mr-1 bg-white text-[#5a5d79] border-[#e7e8ec] hover:bg-[#8358ff] hover:text-white hover:border-[#8358ff] normal-case btn-sm group"
                  : "btn  my-1 mr-1 bg-[#8358ff] text-white border-[#8358ff] hover:bg-[#6d3ff6] hover:border-[#8358ff] normal-case btn-sm"
              }
              onClick={() => onNftTypeChange(item.type)}
            >
              <SvgIcons
                name={item.icon ? item.icon : ""}
                width={24}
                height={24}
                className={
                  item.type !== nftType
                    ? "group-hover:fill-white w-4 h-4 mr-1"
                    : "fill-white w-4 h-4 mr-1"
                }
              />
              {item.name}
            </button>
          );
        })}
      </div>
      {/* dropdown menu*/}
      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="block border border-[#e7e8ec] min-w-[200px] w-full pl-2 pr-30 py-1 rounded-lg relative m-1 font-medium"
        >
          Trending
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-3 absolute top-2 right-2"
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu menu-compact p-2 shadow bg-white rounded-[12px] w-56"
        >
          <li className="text-[#afb0be] font-medium">
            <span className="hover:bg-white active:bg-white active:text-[#afb0be]">
              SortBy
            </span>
          </li>
          {sortBy.map((sort) => {
            return (
              <li key={sort.type} onClick={() => onSortTypeChange(sort.type)}>
                <a className="flex justify-between items-center">
                  {sort.name}
                  {sortType === sort.type ? (
                    <FontAwesomeIcon icon={faCheck} className="w-3" />
                  ) : null}
                </a>
              </li>
            );
          })}
          <li className="text-[#afb0be] font-medium">
            <span className="hover:bg-white active:bg-white active:text-[#afb0be]">
              Options
            </span>
          </li>
          <li>
            <a className="flex justify-between">
              Verified Only
              <input type="checkbox" className="toggle toggle-sm" checked={verified} onChange={() => onVerifiedChange(!verified)} />
            </a>
          </li>
          <li>
            <a className="flex justify-between">
              NFSW Only
              <input type="checkbox" className="toggle toggle-sm" />
            </a>
          </li>
          <li>
            <a className="flex justify-between">
              Show Lazy Minted
              <input type="checkbox" className="toggle toggle-sm" checked={lazyMinted} onChange={() => onShowLazyMintedChange(!lazyMinted)} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrendingMenu;
