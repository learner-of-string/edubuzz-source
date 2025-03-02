import Header from "./Container/Header";
import Home from "./Container/Home";
import { useState } from "react";

const Container = () => {
  const [allQna, setAllQna] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchQna = async (jsonFileName) => {
    fetch(`./jsonQNA/${jsonFileName}.json`)
      .then((res) => res.json())
      .then((data) => setAllQna(data));
  };

  // console.log(allQna.length);
  // console.log(searchTerm);

  return (
    <div className="m-5">
      <Header searchTerm={searchTerm} onSearchTerm={setSearchTerm}></Header>
      <Home
        fetchQna={fetchQna}
        allQna={allQna}
        searchTerm={searchTerm}
        onSearchTerm={setSearchTerm}
      ></Home>
    </div>
  );
};

export default Container;
