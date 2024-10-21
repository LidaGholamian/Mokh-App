import Link from "next/link";
import { FooterTopicProps } from "../types/footer-topics.type";
import { IoIosArrowBack } from "react-icons/io";

const Data: FooterTopicProps[] = [
  {
    id: 1,
    title: "درسی",
  },
  {
    id: 2,
    title: "زبان",
  },
  {
    id: 3,
    title: "هنر",
  },
];

const topic: FooterTopicProps[] = [
  {
    id: 4,
    title: "ورزش",
  },
  {
    id: 5,
    title: "مهارت",
  },
  {
    id: 6,
    title: "تکنولوژِی",
  },
];

export const FooterTopics: React.FC = () => {
  return (
    <div className="flex flex-col w-full ">
      <p className="text-secondary font-bold">موضوعات</p>
      <div className="flex justify-center items-center mt-5">
        <div className="w-40">
          <ul className="flex flex-col gap-3">
            {Data.map((d, i) => (
              <div key={i} className="flex flex-col">
                <li>
                  <Link
                    href={"/"}
                    className="flex justify-start items-center text-neutral-shadow gap-1"
                  >
                    <IoIosArrowBack className="text-primary text-2xl" />
                    {d.title}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-40">
          <ul className="flex flex-col gap-3">
            {topic.map((t, i) => (
              <div key={i} className="flex flex-col">
                <li>
                  <Link
                    href={"/"}
                    className="flex justify-start items-center text-neutral-shadow gap-1"
                  >
                    <IoIosArrowBack className="text-primary text-2xl" />
                    {t.title}
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
