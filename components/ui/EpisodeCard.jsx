import Link from "next/dist/client/link";
const EpisodeCard = (props) => {
  return (
    <>
      <div className="rounded bg-[#00AB41] m-5 p-3">
        <div className="flex justify-between">
          <h1>
            S{Number(props.season)} E{props.episode}
          </h1>
          <h1>{props.air_date}</h1>
        </div>

        <h1></h1>
        <h1 className="text-white ">{props.title}</h1>
        <h2></h2>
        <h3>
          Characters :{" "}
          {props.characters.map((item) => (
            <Link key={item} href={`/characters/`}>{`${item}, `}</Link>
          ))}
        </h3>
        <h3>Series : {props.series}</h3>
      </div>
    </>
  );
};

export default EpisodeCard;
