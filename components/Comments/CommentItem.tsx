import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

// images


// swiper
import { SwiperSlide } from "swiper/react";

//
import { IComment } from "@/lib/dbComments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

interface ICommentItem {
  slide: IComment;
}

const Commenttem: React.FC<ICommentItem> = ({ slide }) => {
  
  return (
    <div className="card bg-white border px-6 py-8 flex space-x-8 2xl:flex-row">
      <div className="indicator">
        <span className="indicator-item badge w-16 h-16 p-0 rounded-full bg-white border-none grid place-items-center place-content-center">
          <span className="w-14 h-14 rounded-full bg-[#8358ff] grid place-items-center place-content-center">
            <FontAwesomeIcon icon={faQuoteLeft} className="w-6" />
          </span>
        </span>
        <div className="grid w-44 h-44 place-items-center">
          <img
            src={slide.img_path}
            alt={slide.name}
            className="rounded-[20px]"
          />
        </div>
      </div>
      <div>
        <div className="rating rating-sm">
          {[1, 2, 3, 4, 5].map((value) =>
            slide.rate === value ? (
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
                key={value}
              />
            ) : (
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                readOnly
                key={value}
              />
            )
          )}
        </div>
        <p className="mb-2">{slide.comment}</p>
        <p className="font-bold text-base mb-1">{slide.name}</p>
        <p className="text-sm text-[#9b9dae]">{slide.position}</p>
      </div>
    </div>
  );
};

export default Commenttem;
