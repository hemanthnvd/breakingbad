const CharacterDetail = (props) => {
  return (
    <div className="flex">
      <img src={props.det.img} alt="charImage" className="rounded m-12 h-96" />
      <div className="m-12 text-white text-xl">
        <p className="m-3">Name : {props.det.name}</p>
        <p className="m-3">Birthday : {props.det.birthday}</p>
        <p className="m-3">Occupaion : {props.det.occupation}</p>
        <p className="m-3">Status : {props.det.status}</p>
        <p className="m-3">Nickname : {props.det.nickname}</p>
        <p className="m-3">Portrayed : {props.det.portrayed}</p>
        <p className="m-3">Appeared in seasons : {props.det.appearance}</p>
        <p className="m-3">Category: {props.det.category}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
