const DeathCard = (props) => {
  return (
    <>
      <div className="rounded bg-[#016936] m-5 p-3">
        <h1>Dead : {props.death}</h1>
        <h1>Cause : {props.cause}</h1>
        <h1>Responsible : {props.responsible}</h1>
        <h1>Season : {props.season}</h1>
        <h1>Episode: {props.episode}</h1>
        <h1>Number of Deaths : {props.number_of_deaths}</h1>
      </div>
    </>
  );
};

export default DeathCard;
