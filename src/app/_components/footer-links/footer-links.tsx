import { FooterImage } from "./footerimage";
import namad from "../../constant/namad.json";

export const FooterLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-[320px]">
      {namad.map((n, i) => (
        <FooterImage key={n.id} id={n.id} image={n.image} />
      ))}
    </div>
  );
};
