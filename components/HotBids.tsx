import React from "react";
import useSWR from "swr";

import Image from "next/image";
import fire from "@/public/fire.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";

// 
import { INft } from "@/lib/dbNft";

interface IHotBids {
    nftCount: number;
};

const HotBids: React.FC<IHotBids> = ({nftCount}) => {
    const fetcher = (args: string) => fetch(args).then((res) => res.json());
    const { data, error } = useSWR(`/api/likes?count=${nftCount}`, fetcher);
    const mostLikedNft: INft[] = data && data.nft ? data.nft : [];

    return (
      <div className="my-8">
        <div className="flex justify-center items-center mb-8">
          <Image src={fire} alt="Fire" className="h6 w-6" />
          <h1 className="text-[#131740] text-3xl font-bold">Hot bids</h1>
        </div>
        <div className="px-4 xl:px-[100px]">
          <Swiper
            navigation={true}
            slidesPerView={4}
            spaceBetween={30}
            grabCursor={true}
            modules={[Navigation]}
            wrapperClass="pb-8"
          >
            {mostLikedNft.map((slide) => (
              <SwiperSlide key={slide._id}>
                <div className="card w-[300px] bg-white hover:shadow-xl border">
                  <figure className="p-5 rounded-[16px]">
                    <img
                      src={slide.img_path}
                      alt={slide.name}
                      className="rounded-[16px]"
                    />
                  </figure>
                  <div className="card-body p-5 pt-0">
                    <h2 className="card-title">{slide.name}</h2>
                    <p>Current Bid {slide.current_bid}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
};

export default HotBids;
