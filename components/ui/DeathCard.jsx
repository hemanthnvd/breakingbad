const DeathCard = (props) => {
  return (
    <>
      <h1>{props.death_id}</h1>
      <h1>{props.death}</h1>
      <h1>{props.cause}</h1>
      <h1>{props.responsible}</h1>
      <h1>{props.season}</h1>
      <h1>{props.episode}</h1>
      <h1>{props.number_of_deaths}</h1>
    </>
  );
};

export default DeathCard;
