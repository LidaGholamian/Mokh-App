"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { TopTeacherList } from "./top-teacher-list";
import teachers from "../../constant/teachers.json";

export const TopTeacher: React.FC = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col justify-center items-center gap-7">
        <h3 className="text-secondary text-2xl font-bold">برترین مدرسین</h3>
        <p className="w-72 text-sm">
          رتبه مدرسین بر اساس امتیازی است که فراگیران بعد از هر جلسه به کلاس خود
          می‌دهند (مثلا)
        </p>
      </div>
      <Swiper spaceBetween={5} slidesPerView={1.6} className="h-72 w-80">
        <div className="flex gap-1 justify-start items-center overflow-hidden rounded-lg w-[380px]">
          {teachers.map((teacher, i) => (
            <SwiperSlide>
              <TopTeacherList
                key={i}
                id={teacher.id}
                title={teacher.title}
                image={teacher.image}
                desc={teacher.desc}
                rate={teacher.rate}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
