"use client";

import Image from "next/image";
import { SliderType } from "../types/slider.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const TopTeacherList: React.FC<SliderType> = ({
  title,
  image,
  desc,
  rate,
}) => {
  return (
    <div className="bg-white flex flex-col gap-2 justify-center items-center shadow-xl rounded-xl w-[180px] h-[250px] mt-3 mb-5">
      <figure className="flex justify-center items-center rounded-t-xl">
        <Image
          src={image}
          width={70}
          height={70}
          alt="modares-1"
          className="rounded-full w-[70px] h-auto "
        />
      </figure>
      <h3 className="text-secondary-content font-bold text-lg">{title}</h3>
      <p className="text-neutral-base pb-5 border-b-primary text-sm">{desc}</p>
      <div className="flex justify-center items-center gap-5">
        <div className="flex gap-2 w-[45px] ">
          <FontAwesomeIcon
            icon={faStar}
            size="sm"
            style={{ color: "#FFD43B" }}
          />
          <span className="text-neutral-base text-sm">{rate}</span>
        </div>

        <span className="text-neutral-base text-sm"> از 582 نفر</span>
      </div>
      <button className="text-primary text-xl w-8 h-8 mt-5">&lt;</button>
    </div>
  );
};
