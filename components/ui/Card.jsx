import { useRouter } from "next/router";

const Card = (props) => {
  const router = useRouter()
  const clickHandler = ()=>{
    router.push(`/${props.k}`)
  }
  return (
    <div className="flex h-32 w-64 my-10 bg-red-200 rounded text-2xl text-red-100 cursor-pointer justify-center items-center" onClick={clickHandler}>
      {props.children}
    </div>
  );
};

export default Card;
