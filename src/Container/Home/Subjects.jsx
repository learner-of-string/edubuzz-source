/* eslint-disable react/prop-types */
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

      <div className="flex justify-center gap-10">
        <button className="btn btn-outline btn-accent">All QNA</button>
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
      </div>
    </div>
  );
};

export default Subjects;
