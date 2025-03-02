import Subjects from "./Home/Subjects";
import Qna from "./Home/Qna";
import PropTypes from "prop-types";

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

Home.propTypes = {
  fetchQna: PropTypes.func.isRequired,
  allQna: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchTerm: PropTypes.func.isRequired,
};

export default Home;
