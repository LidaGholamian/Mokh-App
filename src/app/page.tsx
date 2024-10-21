import { Classes } from "./_components/classe";
import { HomeHeroSection } from "./_components/home-hero-section";
import { SliderMobile } from "./_components/slider";
import { TopImage } from "./_components/top-image";
import { TopTeacher } from "./_components/top-teacher";
import { TopicCardList } from "./_components/topics";

export default function Home() {
  return (
    <section className="flex flex-col items-center min-h-screen bg-neutral">
      <HomeHeroSection />
      <div className="flex flex-col justify-center items-center mr-auto ml-auto w-[80%]">
        <TopImage />
        <TopicCardList />
      </div>
      <SliderMobile />
      <TopTeacher />
      <Classes />
    </section>
  );
}
