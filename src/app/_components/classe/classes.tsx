"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import classes from "../../constant/classes.json";
import { ClassesList } from "./classes-list";

export const Classes: React.FC = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.3}
      className="h-52 w-80 mt-10 mb-3"
    >
      <div className="flex gap-1 justify-start items-center overflow-hidden rounded-lg w-[380px]">
        {classes.map((classe, i) => (
          <SwiperSlide key={i}>
            <ClassesList
              id={classe.id}
              title={classe.title}
              image={classe.image}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
