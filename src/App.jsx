import "./App.css";
import data from "./data.json";
import Header from "./components/Header.jsx";
import Questions from "./components/Questions.jsx";

function App() {
  const questions = data.map((qna) => {
    return <Questions qna={qna} key={qna.id} />;
    //plusMinus
  });

  return (
    <div className="main">
      <Header />
      <div className="question">{questions}</div>
    </div>
  );
}

export default App;
