import { IComment } from "@/lib/dbComments";
import React from "react";
import useSWR from "swr";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import CommentItem from "./CommentItem";

type ComType = {
    last: number;
};

const Comments: React.FC<ComType> = ({last}) => {
  // collection data from server
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/comments?last=${last}`,
    fetcher
  );
  const comments: IComment[] = data && data.com ? data.com : [];

  return (
    <div className="bg-[#f5f8fa] py-10 px-4 lg:px-[120px]">
      <div className="max-w-[450px] mx-auto text-center">
        <h1 className="text-[#131740] font-bold text-3xl">
          Satisfied Customers
        </h1>
        <p className="text-xl mt-4 mb-6">
          10,000k+ Customers Those Who Already Tried Our Services.
        </p>
      </div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment._id}>
            <CommentItem slide={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comments;
