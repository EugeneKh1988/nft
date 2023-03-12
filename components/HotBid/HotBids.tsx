import React, { useEffect, useState } from "react";
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
import HotBidItem from "./HotBidItem";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

interface IHotBids {
    nftCount: number;
};

const HotBids: React.FC<IHotBids> = ({nftCount}) => {
    const fetcher = (args: string) => fetch(args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(`/api/likes?count=${nftCount}`, fetcher);
    const mostLikedNft: INft[] = data && data.nft ? data.nft : [];

    const [outputBlock, setOutputBlock] = useState<React.ReactNode>(null);

    const loadingBlock = (
      <div className="bg-slate-200 h-12 flex justify-center items-center rounded-md">
        <FontAwesomeIcon icon={faSpinner} spin={true} className="w-8 animate-spin" />
      </div>
    );

    const errorBlock = (
      <div className="bg-slate-200 h-12 text-center flex justify-center items-center rounded-md">
        <FontAwesomeIcon icon={faTriangleExclamation} className="w-8 text-red-600 mr-1" />
        <p className="">Ошибка получения данных</p>
      </div>
    );

    const dataBlock = (
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        modules={[Navigation]}
        wrapperClass="pb-8"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {mostLikedNft.map((slide) => (
          <SwiperSlide key={slide._id}>
            <HotBidItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    );


    useEffect(() => {
      if (isLoading) {
        setOutputBlock(loadingBlock);
        return;
      } else if (error || !data || (data && data.error)) {
        setOutputBlock(errorBlock);
      } else {
        setOutputBlock(dataBlock);
      }
    }, [data, error, isLoading]);

    return (
      <div className="my-8">
        <div className="flex justify-center items-center mb-8">
          <Image src={fire} alt="Fire" className="h6 w-6" />
          <h1 className="text-[#131740] text-3xl font-bold">Hot bids</h1>
        </div>
        <div className="px-4 xl:px-[100px]">
          { outputBlock }
        </div>
      </div>
    );
};

export default HotBids;
