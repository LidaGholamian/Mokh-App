import Image from "next/image";
import { FooterTopics } from "../footer-topics/footer-topic";
import { FooterFaq } from "../footer-faq";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mr-auto ml-auto w-[80%] gap-5">
      <Image
        width={37}
        height={40}
        src="/image/BG.svg"
        alt="mokh-logo"
        className="ml-auto mt-5"
      />
      <p className="text-sm text-neutral-base">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>
      <FooterTopics />
      <FooterFaq />
      <p className="mt-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        quibusdam. Hic aspernatur eaque est quaerat eos illo iure numquam earum
        optio alias a eveniet quibusdam odit ipsa deleniti, voluptatibus totam.
      </p>
    </div>
  );
};
