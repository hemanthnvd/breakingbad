import Image from "next/image";
import { useRouter } from "next/router";
const Category = () => {
  const router = useRouter();
  return (
    <>
      <div className="justify-between m-16 grid grid-cols-2">
        <div className="text-white">
          <h1 className="m-2 text-3xl">Characters</h1>
          <p className="mx-2 my-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus et nisi maxime quae
            voluptate recusandae sapiente magnam beatae iure tenetur?
          </p>
          <button
            className="bg-transparent hover:bg-[#FF9042] text-[#FF5147] font-semibold hover:text-white py-2 px-4 border border-[#FF5147] hover:border-transparent rounded-full m-2"
            onClick={() => router.push("/characters")}
          >
            Get Characters
          </button>
        </div>
        <div className="flex justify-center">
          <Image src={"/3.gif"} width={325} height={182} className="rounded-xl" />
        </div>
      </div>
      <div className="justify-between m-16 grid grid-cols-2">
        <div className="text-white">
          <h1 className="m-2 text-3xl">Episodes</h1>
          <p className="mx-2 my-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus et nisi maxime quae
            voluptate recusandae sapiente magnam beatae iure tenetur?
          </p>
          <button
            className="bg-transparent hover:bg-[#FF9042] text-[#FF5147] font-semibold hover:text-white py-2 px-4 border border-[#FF5147] hover:border-transparent rounded-full m-2"
            onClick={() => router.push("/episodes")}
          >
            Get Episodes
          </button>
        </div>
        <div className="flex justify-center">
          <Image src={"/1.gif"} width={325} height={182} className="rounded-xl" m-5 />
        </div>
      </div>
      <div className="justify-between m-16 grid grid-cols-2">
        <div className="text-white">
          <h1 className="m-2 text-3xl">Quotes</h1>
          <p className="mx-2 my-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus et nisi maxime quae
            voluptate recusandae sapiente magnam beatae iure tenetur?
          </p>
          <button
            className="bg-transparent hover:bg-[#FF9042] text-[#FF5147] font-semibold hover:text-white py-2 px-4 border border-[#FF5147] hover:border-transparent rounded-full m-2"
            onClick={() => router.push("/quotes")}
          >
            Get Quotes
          </button>
        </div>
        <div className="flex justify-center">
          <Image src={"/saymyname.gif"} width={325} height={182} className="rounded-xl " />
        </div>
      </div>
      <div className="justify-between m-16 grid grid-cols-2">
        <div className="text-white">
          <h1 className="m-2 text-3xl">Deaths</h1>
          <p className="mx-2 my-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus et nisi maxime quae
            voluptate recusandae sapiente magnam beatae iure tenetur?
          </p>
          <button
            className="bg-transparent hover:bg-[#FF9042] text-[#FF5147] font-semibold hover:text-white py-2 px-4 border border-[#FF5147] hover:border-transparent rounded-full m-2"
            onClick={() => router.push("/deaths")}
          >
            Get Deaths
          </button>
        </div>
        <div className="flex justify-center">
          <Image src={"/giphy.gif"} width={325} height={182} className="rounded-xl" />
        </div>
      </div>
    </>
  );
};

export default Category;
