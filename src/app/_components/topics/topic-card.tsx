import { TopicsType } from "@/types/topic-types";
import Image from "next/image";
import Link from "next/link";

export const TopicCard: React.FC<TopicsType> = ({ title, image }) => {
  return (
    <div className="shadow-2xl rounded-b-xl mr-auto ml-auto mt-2 w-[156px]">
      <figure className="bg-secondary rounded-t-xl">
        <Image
          src={image}
          title="title"
          id="id"
          width={156}
          height={85}
          alt="topics"
          className="rounded-t-xl opacity-65 h-[85px] w-[156px]"
        />
      </figure>
      <div className="card-body bg-white rounded-b-xl">
        <Link
          href="/"
          className="text-sm font-bold items-center flex justify-center p-4"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};
