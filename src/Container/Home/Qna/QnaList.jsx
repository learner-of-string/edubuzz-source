import PropTypes from "prop-types";

const QnaList = ({ qna }) => {
  // console.log(qna);

  return (
    <div className="collapse collapse-plus bg-base-200 border-2">
      <input type="checkbox" />
      <div
        className="collapse-title text-xl font-medium"
        dangerouslySetInnerHTML={{ __html: qna.question }}
      ></div>
      <div className="collapse-content">
        <p dangerouslySetInnerHTML={{ __html: qna.answer }}></p>
      </div>
    </div>
  );
};

QnaList.propTypes = {
  qna: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
};

export default QnaList;
