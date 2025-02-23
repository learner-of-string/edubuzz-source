/* eslint-disable react/prop-types */
import Subjects from "./Home/Subjects";
import Qna from "./Home/Qna";

const Home = ({ fetchQna, allQna, searchTerm, onSearchTerm }) => {
  return (
    <div>
      <Subjects
        fetchQna={fetchQna}
        onSearchTerm={onSearchTerm}
        searchTerm={searchTerm}
      ></Subjects>
      <Qna allQna={allQna} searchTerm={searchTerm}></Qna>
    </div>
  );
};

export default Home;
