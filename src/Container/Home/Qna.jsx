import PropTypes from "prop-types";
import QnaList from "./Qna/QnaList";

const Qna = ({ allQna }) => {
  console.log(allQna);

  if (allQna.length === 0) {
    return (
      <div role="alert" className="alert text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-8 w-8 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="font-bold text-4xl">
          Select your subject to see the questions
        </span>
      </div>
    );
  } else {
    return (
      <ul>
        {allQna.map((QNA) => (
          <li key={QNA.id} className="py-2">
            <QnaList qna={QNA} />
          </li>
        ))}
      </ul>
    );
  }
};

Qna.propTypes = {
  allQna: PropTypes.array.isRequired,
};

export default Qna;
