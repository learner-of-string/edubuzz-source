import PropTypes from "prop-types";
import QnaList from "./Qna/QnaList";

const Qna = ({ allQna, searchTerm }) => {
  // console.log(allQna);

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
        {allQna.map((qna) =>
          qna.question.toLowerCase().includes(searchTerm) ||
          qna.answer.toLowerCase().includes(searchTerm) ? (
            <li key={qna.id} className="py-2">
              <QnaList qna={qna} />
            </li>
          ) : (
            []
          )
        )}
      </ul>
    );
  }

  // return <div>{searchedQna}</div>;
};

Qna.propTypes = {
  allQna: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default Qna;
