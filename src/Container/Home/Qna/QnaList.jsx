/* eslint-disable react/prop-types */
const QnaList = ({ question, answer }) => {
  console.log(question, answer);

  return (
    <div className="collapse collapse-plus bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QnaList;
