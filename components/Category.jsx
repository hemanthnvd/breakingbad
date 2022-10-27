import Image from "next/image";
import { useRouter } from "next/router";
import a from "../public/3.gif";
import b from "../public/1.gif";
import c from "../public/saymyname.gif";
import d from "../public/giphy.gif";
const Category = () => {
  const router = useRouter();
  return (
    <>
      <div className="justify-between m-2 md:m-16 mt-10 grid grid-cols-2" id="category">
        <div className="text-white">
          <h1 className="m-1 md:m-2 text-2xl md:text-3xl">Characters</h1>

          <p className="mx-1 my-2 md:mx-2 md:my-8 text-sm md:text-lg">
            Have a look at all the characters in Breaking Bad.
          </p>
          <button
            className="bg-transparent hover:bg-[#E92C2C] text-[#FF5147] font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border border-[#FF5147] hover:border-transparent rounded md:rounded-full m-1 md:m-2"
            onClick={() => router.push("/characters")}
          >
            Get Characters
          </button>
        </div>
        <div className="flex justify-center">
          <Image src={a} alt="chargif" className="rounded-xl" />
        </div>
      </div>
      <div className="justify-between mx-2 my-16 md:m-16 grid grid-cols-2">
        <div className="text-white">
          <h1 className="m-1 md:m-2 text-2xl md:text-3xl">Episodes</h1>
          <p className="mx-1 my-2 md:mx-2 md:my-8 text-sm md:text-lg">
            Gives details of all the shows in Breaking Bad Franchise aired between 20-01-2008 and
            08-10-2018.
          </p>
          <button
            className="bg-transparent hover:bg-[#E92C2C] text-[#FF5147] font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border border-[#FF5147] hover:border-transparent rounded md:rounded-full m-1 md:m-2"
            onClick={() => router.push("/episodes")}
          >
            Get Episodes
          </button>
        </div>
        <div className="flex justify-center">
          <Image src={b} alt="epigif" className="rounded-xl" m-5 />
        </div>
      </div>
      <div className="justify-between mx-2 my-16 md:m-16 grid grid-cols-2">
        <div className="text-white">
          <h1 className="m-1 md:m-2 text-2xl md:text-3xl">Quotes</h1>
          <p className="mx-1 my-2 md:mx-2 md:my-8 text-sm md:text-lg">
            Breaking Bad was filled with a lot of awesome quotes. Have a look at the best lines from
            different characters.
          </p>
          <button
            className="bg-transparent hover:bg-[#E92C2C] text-[#FF5147] font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border border-[#FF5147] hover:border-transparent rounded md:rounded-full m-1 md:m-2"
            onClick={() => router.push("/quotes")}
          >
            Get Quotes
          </button>
        </div>
        <div className="flex justify-center">
          <Image src={c} alt="quotegif" className="rounded-xl " />
        </div>
      </div>
      <div className="justify-between mx-2 my-16 md:m-16 grid grid-cols-2">
        <div className="text-white">
          <h1 className="m-1 md:m-2 text-2xl md:text-3xl">Deaths</h1>
          <p className="mx-1 my-2 md:mx-2 md:my-8 text-sm md:text-lg">
            This is a list of all deaths of characters in Breaking Bad.
          </p>
          <button
            className="bg-transparent hover:bg-[#E92C2C] text-[#FF5147] font-semibold hover:text-white py-1 px-2 md:py-2 md:px-4 border border-[#FF5147] hover:border-transparent rounded md:rounded-full m-1 md:m-2"
            onClick={() => router.push("/deaths")}
          >
            Get Deaths
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src={d}
            alt="deathgif"
            // width={325}
            // height={182}
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Category;
