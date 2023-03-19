import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

// images
import fire from "@/public/fire.png";
import ethSvg from "@/public/eth-icon.svg";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

// swiper
import {SwiperSlide } from "swiper/react";

//
import { INft } from "@/lib/dbNft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IHotBidItem {
  slide: INft;
}

const HotBidItem: React.FC<IHotBidItem> = ({ slide }) => {
    const [liked, setLiked] = useState(false);
    const [likeValue, setLikesValue] = useState(slide.likes);

    const onLike: () => void = () => {
        if (liked) {
            setLikesValue(likeValue - 1);
            setLiked(false);
        }
        else {
            setLikesValue(likeValue + 1);
            setLiked(true);
        }
    };

  return (
    <div className="card max-w-[300px] w-full bg-white hover:shadow-xl border">
      <figure className="p-5 rounded-[16px]">
        <Link href={""}>
          <img
            src={slide.img_path}
            alt={slide.name}
            className="rounded-[16px]"
          />
        </Link>
      </figure>
      <div className="card-body p-5 pt-0">
        <div className="flex justify-between">
          <Link href={""}>
            <h2 className="card-title hover:text-[#8358ff] text-[18px]">{slide.name}</h2>
          </Link>
          <div className="inline-flex border rounded-md px-1 py-1">
            <Image src={ethSvg} alt="ETH" className="w-3 mr-2" />
            <p className="text-[#12ba82]">{slide.cost} ETH</p>
          </div>
        </div>
        <p>Current Bid {slide.current_bid} ETH</p>
        <div className="mt-3 flex justify-between">
          <a className="text-[#8358ff] cursor-pointer text-sm font-medium">
            Place bid
          </a>
          <div className="inline-flex items-center">
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
        </div>
      </div>
    </div>
  );
};

export default HotBidItem;
