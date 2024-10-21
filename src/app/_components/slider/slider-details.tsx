import { SliderType } from "@/types/slider.type";
import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export const SliderDetails: React.FC<SliderType> = ({
  title,
  image,
  desc,
  session,
}) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-start shadow-xl rounded-xl w-[180px] h-[250px] mt-3 mb-5">
      <figure className="flex justify-center items-center bg-secondary rounded-t-xl">
        <Image
          src={image}
          width={160}
          height={91}
          alt="majasame-sazi"
          className="w-[180px] h-auto rounded-t-lg opacity-60"
        />
      </figure>
      <div className="flex flex-col pr-2 text-secondary mt-2 gap-1">
        <p className="text-[8px]">{session}</p>
        <h3 className="text-[14px] font-bold">{title}</h3>
        <h4 className="text-[12px] font-bold">{desc}</h4>
      </div>
      <Link
        href={"/"}
        className="text-primary font-bold w-full flex items-center text-sm pr-4"
      >
        <HiChevronRight className="text-2xl pt-1" />
        مشاهده ویدئوها
      </Link>
    </div>
  );
};
