const Card = (props) => {
  return (
    <div className="flex h-32 w-64 bg-red-200 rounded text-2xl text-red-100 cursor-pointer justify-center items-center">
      {props.children}
    </div>
  );
};

export default Card;
