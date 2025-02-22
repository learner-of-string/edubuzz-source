import Subjects from "./Home/Subjects";
import Qna from "./Home/Qna";
import PropTypes from "prop-types";

const Home = ({ fetchQna, allQna }) => {
  return (
    <div>
      <Subjects fetchQna={fetchQna}></Subjects>
      <Qna allQna={allQna}></Qna>
    </div>
  );
};

Home.propTypes = {
  fetchQna: PropTypes.func.isRequired,
  allQna: PropTypes.array.isRequired,
};

export default Home;
