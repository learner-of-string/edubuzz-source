import QnaList from "./Qna/QnaList";

const Qna = ({ allQna }) => {
  console.log(allQna);

  allQna.map((QNA) => {
    <ul>
      return(
      <li key={QNA.id}>
        <QnaList qna={QNA}></QnaList>
      </li>
      )
    </ul>;
  });
};

export default Qna;
