import Header from "./Container/Header";
import Home from "./Container/Home";
import { useState } from "react";

const Container = () => {
  const [allQna, setAllQna] = useState([]);

  const fetchQna = async (jsonFileName) => {
    fetch(`/jsonQNA/${jsonFileName}.json`)
      .then((res) => res.json())
      .then((data) => setAllQna(data));
  };

  // console.log(allQna.length);

  return (
    <div className="m-5">
      <Header></Header>
      <Home fetchQna={fetchQna} allQna={allQna}></Home>
    </div>
  );
};

export default Container;
