import Image from "next/image";

export const HomeHeroSection: React.FC = () => {
  return (
    <div className="flex items-center bg-secondary container">
      <Image
        src="/image/surface.png"
        width={375}
        height={247}
        alt="surface"
        className="opacity-20 container w-[375] h-auto"
        priority
      />
    </div>
  );
};
