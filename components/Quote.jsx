import { useEffect } from "react";
import QuoteCard from "./ui/QuoteCard";
import { useSelector, useDispatch } from "react-redux";
import { quotesAction } from "../store/quotes";
import { useState } from "react";
const Quote = () => {
  const dispatch = useDispatch();
  const quoList = useSelector((state) => state.quotes.quoList);
  const text = useSelector((state) => state.input.text);
  let quoLi = [];
  const [filter, setFilter] = useState(true);
  useEffect(() => {
    const fetchQuo = async () => {
      let Quo = await fetch("https://breakingbadwebapp.netlify.app/api/quotes");
      Quo = await Quo.json();
      for (const qu in Quo) {
        quoLi.push(
          <QuoteCard
            quo_id={Quo[qu].quote_id}
            quote={Quo[qu].quote}
            author={Quo[qu].author}
            series={Quo[qu].series}
          />
        );
      }
      dispatch(quotesAction.addQuo(quoLi));
    };
    fetchQuo();
  }, []);
  const optChange = (e) => {
    if (e.target.value === "quote") {
      setFilter(true);
    } else if (e.target.value === "author") {
      setFilter(false);
    }
  };
  return (
    <>
      <div className="flex justify-end text-white m-2">
        <h1 className="m-2">Search by : </h1>
        <div className="inline-block relative w-40">
          <select
            className="block appearance-none w-full bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={optChange}
          >
            <option value={"quote"} className="text-xs md:text-base">
              Quote
            </option>
            <option value={"author"} className="text-xs md:text-base">
              Author
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      {filter &&
        quoList.filter((jsx) => jsx.props.quote.toLowerCase().includes(text.toLowerCase()))}
      {filter ||
        quoList.filter((jsx) => jsx.props.author.toLowerCase().includes(text.toLowerCase()))}
    </>
  );
};

export default Quote;
