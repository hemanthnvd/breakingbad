const CharacterDetail = (props) => {
  return <div className="flex">
  <img src={props.det.img} alt="charImage" className="rounded m-12 h-96"/>
  <div className="m-12">
    <p>{props.det.name}</p>
    <p>{props.det.birthday}</p>
    <p>{props.det.occupation}</p>
    <p>{props.det.status}</p>
    <p>{props.det.nickname}</p>
    <p>{props.det.portrayed}</p>
  </div>
  </div>;
};

export default CharacterDetail;
