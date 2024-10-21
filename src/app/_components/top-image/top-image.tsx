import { SearchBar } from "../searchBar";

export const TopImage: React.FC = () => {
  return (
    <div className="text-center -mt-24 flex flex-col justify-center items-center gap-4 z-10 w-full">
      <h1 className="text-xl text-white font-bold align-text-bottom ">
        دنبال یاد گرفتن چی با کی هستی؟
      </h1>
      <div className="bg-white  rounded-2xl w-full flex justify-center items-center p-4">
        <SearchBar />
      </div>
    </div>
  );
};
