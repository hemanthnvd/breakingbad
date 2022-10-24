const QuoteCard = (props) => {
  return (
    <>
      <div className="rounded bg-[#016936] m-5 p-3">
        <h1>{props.quote}</h1>
        <h1 className="flex justify-end">-{props.author}</h1>
        <h1>Series : {props.series}</h1>
      </div>
    </>
  );
};

export default QuoteCard;
