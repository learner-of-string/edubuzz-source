/* eslint-disable react/prop-types */
import Subjects from "./Home/Subjects";
import Qna from "./Home/Qna";

const Home = ({ fetchQna, allQna }) => {
  return (
    <div>
      <Subjects fetchQna={fetchQna}></Subjects>
      <Qna allQna={allQna}></Qna>
    </div>
  );
};

export default Home;
