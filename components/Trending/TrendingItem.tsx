import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

// images
import fire from "@/public/fire.png";
import ethSvg from "@/public/eth-icon.svg";
import { faClockRotateLeft, faEllipsisH, faHeart as solidHeart, faListDots } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";


//
import { INft } from "@/lib/dbNft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ITrendingItem {
  item: INft;
}

const TrendingItem: React.FC<ITrendingItem> = ({ item }) => {
  const [liked, setLiked] = useState(false);
  const [likeValue, setLikesValue] = useState(item.likes);

  const onLike: () => void = () => {
    if (liked) {
      setLikesValue(likeValue - 1);
      setLiked(false);
    } else {
      setLikesValue(likeValue + 1);
      setLiked(true);
    }
  };

  return (
    <div className="card max-w-[300px] w-full bg-white hover:shadow-xl border">
      <figure className="p-5 rounded-[16px] relative">
        <Link href={""}>
          <img src={item.img_path} alt={item.name} className="rounded-[16px]" />
        </Link>
        <div className="inline-flex items-center bg-white rounded-md absolute top-7 right-8 p-1">
          <FontAwesomeIcon
            icon={liked ? solidHeart : regularHeart}
            className={
              liked
                ? "w-4 cursor-pointer mr-1 text-red-500"
                : "w-4 cursor-pointer mr-1 hover:text-red-500"
            }
            onClick={() => onLike()}
          />
          <p>{likeValue}</p>
        </div>
      </figure>
      <div className="card-body p-5 pt-0">
        <div className="flex justify-between">
          <Link href={""}>
            <h2 className="card-title hover:text-[#8358ff] text-[18px]">
              {item.name}
            </h2>
          </Link>
          <div>
            <FontAwesomeIcon icon={faEllipsisH} className="w-4" />
          </div>
        </div>
        <p>{item.desc}</p>
        <div className="mt-3 flex justify-between">
          <a className="text-[#8358ff] cursor-pointer text-sm font-medium">
            Buy now
          </a>
          <div className="inline-flex">
            <FontAwesomeIcon icon={faClockRotateLeft} className="w-4 mr-1" />
            <a className="cursor-pointer text-sm font-medium text-[#131740]">
              View History
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingItem;
