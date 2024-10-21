import { GoDotFill } from "react-icons/go";
import { FooterTopicProps } from "../types/footer-topics.type";
import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const faq: FooterTopicProps[] = [
  {
    id: 1,
    title: "آیا لورم ساختگی است؟",
  },
  {
    id: 2,
    title: "آیا لورم ساختگی است؟",
  },
  {
    id: 3,
    title: "آیا لورم ساختگی است؟",
  },
  {
    id: 4,
    title: "آیا لورم ساختگی است؟",
  },
];

export const FooterFaq: React.FC = () => {
  return (
    <div className="flex items-start gap-5 w-full mt-5 text-neutral-shadow">
      <div className="w-1/2">
        <ul className="text-secondary pb-2">سئوالات متداول</ul>
        {faq.map((f, i) => (
          <li key={i} className="list-none flex items-center text-sm pt-4">
            <Link
              href={"/"}
              className="flex justify-start items-center text-neutral-shadow gap-1"
            >
              <GoDotFill className="text-primary" />
              {f.title}
            </Link>
          </li>
        ))}
      </div>
      <div className="w-1/2 ">
        <ul className="text-secondary flex flex-col gap-6">
          تماس با ما
          <li className="text-neutral-shadow text-xs flex items-center gap-2">
            <Image
              src="/image/mail.png"
              width={15}
              height={15}
              alt="Email"
              className="w-[15px] h-auto"
            />
            <Link href={"/"}>info@gajino.com</Link>
          </li>
          <li className="text-neutral-shadow text-xs flex items-center gap-2">
            <Image
              src="/image/tell.png"
              width={15}
              height={15}
              alt="tell"
              className="w-[15px] h-auto"
            />
            <span>021-6420</span>
          </li>
          <li className="text-neutral-shadow text-xs flex items-start gap-2">
            <FaLocationDot className="text-primary text-2xl" />
            <span>
              تهران کیلومتر 14 جاده مخصوص - بلوار ایران خودرو - نرسیده به فتح -
              پلاک 2
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
