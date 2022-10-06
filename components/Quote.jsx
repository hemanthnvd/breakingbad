import { useEffect } from "react";
import QuoteCard from "./ui/QuoteCard";
import { useSelector, useDispatch } from "react-redux";
import { quotesAction } from "../store/quotes";
const Quote = () => {
  const dispatch = useDispatch();
  const quoList = useSelector((state) => state.quotes.quoList);
  const text = useSelector((state) => state.input.text);
  let quoLi = [];
  useEffect(() => {
    const fetchQuo = async () => {
      let Quo = await fetch("https://www.breakingbadapi.com/api/quotes");
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
  return <>{quoList.filter((jsx) => jsx.props.quote.toLowerCase().includes(text.toLowerCase()))}</>;
};

export default Quote;
