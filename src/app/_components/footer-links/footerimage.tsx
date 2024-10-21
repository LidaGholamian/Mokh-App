import Image from "next/image";
import { FooterImageProps } from "../types/footer-image";

export const FooterImage: React.FC<FooterImageProps> = ({ image }) => {
  return (
    <div className="w-[155px] flex justify-center items-center p-5">
      <Image
        src={image}
        width={73}
        height={82}
        alt="namad"
        className="w-[73px] h-auto"
      />
    </div>
  );
};
