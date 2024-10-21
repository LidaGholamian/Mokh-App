import { TopicsType } from "@/types/topic-types";
import Image from "next/image";

export const ClassesList: React.FC<TopicsType> = ({ title, image }) => {
  return (
    <div className="flex flex-col items-center bg-white h-[150px] rounded-xl gap-3">
      <figure className="flex justify-center items-center bg-secondary rounded-t-xl">
        <Image
          src={image}
          width={160}
          height={91}
          alt="majasame-sazi"
          className="w-[180px] h-auto rounded-t-lg opacity-60"
        />
      </figure>
      <p>{title}</p>
    </div>
  );
};
