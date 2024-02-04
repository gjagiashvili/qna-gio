import { useState } from "react";
import styles from "../modules/Questions.module.scss";

function Questions(props) {
  //   const [plus, setPlus] = useState(false)
  const [show, setShow] = useState(props.qna.show);

  function plusminusHandler() {
    setShow(function (openCheck) {
      return !openCheck;
    });
  }

  return (
    <div
      className={styles.singleQuestion}
      id={styles.oneQuestion}
      onClick={plusminusHandler}
    >
      <div className={styles.questionText}>
        <h2 className={styles.mainQuestionText}>{props.qna.question}</h2>
        <button className={styles.button}></button>
      </div>
      {show && <p className={styles.answer}>{props.qna.answer}</p>}
    </div>
  );
}

export default Questions;
