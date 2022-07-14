import { HeartIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
const CharacterCard = (props) => {
  const router = useRouter();
  const showCharDetail = () => {
    router.push(`/characters/${props.char_id}`);
  };
  return (
    <div className="cursor-pointer rounded bg-[#379557] m-5 w-fit " onClick={showCharDetail}>
      <img src={props.img} alt="bbimage" className="h-64 rounded-t" />
      <div className="flex justify-between">
        <h1 className="m-2.5">{props.name}</h1>
        <HeartIcon className="cursor-pointer h-5 w-5 m-2.5 bg-white text-gray-600 rounded-xl " />
      </div>
    </div>
  );
};

export default CharacterCard;
