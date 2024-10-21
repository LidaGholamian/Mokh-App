"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import videos from "../../constant/videos.json";
import { SliderDetails } from "./slider-details";

import "swiper/css";
import { Button } from "../button";
import { HiChevronRight } from "react-icons/hi";

export const SliderMobile: React.FC = () => {
  return (
    <div className="bg-white p-2 mt-14 flex flex-col justify-center items-center mb-10 pb-20 w-full">
      <h2 className="text-secondary font-semibold text-2xl">
        برترین ویدئوهای آمـوزشی
      </h2>
      <Swiper spaceBetween={5} slidesPerView={1.6} className="h-80 w-80">
        <div className="flex gap-1 justify-start items-center overflow-hidden rounded-lg w-[380px]">
          {videos.map((video, i) => (
            <SwiperSlide key={i}>
              <SliderDetails
                id={video.id}
                title={video.title}
                image={video.image}
                desc={video.desc}
                session={video.session}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="text-secondary flex flex-col justify-center items-center w-full gap-5">
          <div className="flex flex-col justify-center items-center pt-3">
            <p className="font-bold text-3xl">218 +</p>
            <div className="w-52 h-1 rounded-xl bg-primary"></div>
          </div>
          <p className="text-xl">ویدئو با موضوعات مختلف</p>
        </div>
        <Button
          variant="primary"
          size="large"
          className=" bg-primary text-white rounded-lg text-sm font-bold w-48 flex items-center justify-center pt-2 pb-2"
        >
          <HiChevronRight className="text-3xl" />
          مشاهده تمام ویدئوها
        </Button>
      </div>
    </div>
  );
};
