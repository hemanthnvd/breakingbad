import { useEffect, useState } from "react";
import Card from "./ui/Card";

const Category = () => {
  let li = [];
  const [list, changeList] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      const res = await fetch("https://www.breakingbadapi.com/api/");
      res = await res.json();
      for (const key in res) {
        li.push(<Card k={key}>{key.toUpperCase()}</Card>);
      }
      changeList(li);
      li = [];
    };
    fetchapi();
  }, []);
  return (
    <>
      <div className="flex mx-14 my-12 justify-between ">{list}</div>
    </>
  );
};

export default Category;
