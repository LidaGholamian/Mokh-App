import { TopicCard } from "./topic-card";
import topics from "../../constant/topics.json";

export const TopicCardList: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-10 container w-[320px]">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            id={topic.id}
            title={topic.title}
            image={topic.image}
          />
        ))}
      </div>
    </>
  );
};
