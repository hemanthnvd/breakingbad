import Image from "next/image";
const About = () => {
  return (
    <div className="text-white mx-2 my-16 md:m-16 grid md:grid-cols-2">
      <div>
        <h1 className="m-2 text-2xl md:text-3xl text-[#016936] font-bold">ABOUT</h1>
        <p className="mx-2 mt-8 mb-4 text-sm md:text-lg">
          Breaking Bad is an American crime drama television series created and produced by Vince
          Gilligan. Set and filmed in Albuquerque, New Mexico, the series follows Walter White
          (Bryan Cranston), an underpaid, overqualified, and dispirited high-school chemistry
          teacher who is struggling with a recent diagnosis of stage-three lung cancer. White turns
          to a life of crime and partners with a former student, Jesse Pinkman (Aaron Paul), to
          produce and distribute crystal meth to secure his family&apos;s financial future before he
          dies, while navigating the dangers of the criminal underworld. The show aired on AMC from
          January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62
          episodes.
        </p>
        <h1 className="m-2 text-xl text-[#016936] font-bold">CREATOR</h1>
        <p className="m-2 text-sm md:text-lg">Vince Gilligan</p>
        <h1 className="m-2 text-xl text-[#016936] font-bold">STARRING</h1>
        <p className="m-2 text-sm md:text-lg">
          Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris, Betsy Brandt, RJ Mitte, Bob Odenkirk,
          Giancarlo Esposito, Jonathan Banks .
        </p>
      </div>
      <div className="m-2 md:m-20 md:ml-40 2xl:flex 2xl:justify-center">
        <Image src={"/1234.png"} alt="img" width={341.88} height={212.52} className="rounded-xl" />
      </div>
    </div>
  );
};

export default About;
