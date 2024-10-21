import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const SearchBar: React.FC = () => {
  return (
    <form className="flex flex-col gap-3 w-full rounded-2xl bg-white">
      <div className="rounded-lg relative flex items-center h-10">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#29AFBD" }}
          width={20}
          height={20}
          className="absolute top-[1%] translate-y-[45%] right-2"
        />
        <input
          id="teacher"
          type="search"
          className="bg-neutral border-none outline-none w-full h-full rounded-lg pt-2 pb-2 text-sm text-neutral-shadow pr-8"
          placeholder="نام درس و مدرس و ..."
        />
      </div>
      <div className="rounded-lg relative flex items-center h-10">
        <FontAwesomeIcon
          icon={faLocationDot}
          style={{ color: "#29AFBD" }}
          width={20}
          height={20}
          className="absolute top-[1%] translate-y-[45%] right-2"
        />
        <input
          id="teacher"
          type="search"
          className="bg-neutral border-none outline-none w-full h-full rounded-lg pt-2 pb-2 text-sm text-neutral-shadow pr-8"
          placeholder="شهر..."
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="large"
        className=" bg-primary text-white rounded-lg h-full p-2 font-bold"
      >
        جستجو
      </Button>
    </form>
  );
};
