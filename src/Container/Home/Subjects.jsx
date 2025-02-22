import PropTypes from "prop-types";

const Subjects = ({ fetchQna }) => {
  return (
    <div className="my-5">
      {/* <ul>
        <li>
          <a href="#">Physics</a>
        </li>
        <li>
          <a href="#">Chemistry</a>
        </li>
        <li>
          <a href="#">Higher Math</a>
        </li>
        <li>
          <a href="#">Biology</a>
        </li>
      </ul> */}
      {/* these will work after learning react-router-dom. But currently it will work only with some filter buttons*/}

      <div
        className="flex justify-center gap-10 lg:gap-10 flex-wrap
      "
      >
        <button
          className="btn btn-outline btn-accent"
          onClick={() => fetchQna("Physics")}
        >
          Physics
        </button>
        <button
          className="btn btn-outline btn-accent"
          onClick={() => fetchQna("Chemistry")}
        >
          Chemistry
        </button>
        <button
          className="btn btn-outline btn-accent"
          onClick={() => fetchQna("HigherMath")}
        >
          Higher Math
        </button>
        <button
          className="btn btn-outline btn-accent"
          onClick={() => fetchQna("Biology")}
        >
          Biology
        </button>
      </div>
    </div>
  );
};
Subjects.propTypes = {
  fetchQna: PropTypes.func.isRequired,
};

export default Subjects;
