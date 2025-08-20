import { useState } from "react";
import { QuestionStyle } from "./style";

const Question = ({ faqData }) => {
  const { id, date, question, answer, image } = faqData;
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="faq-item">
      <div
        className="question-container"
        onClick={toggleAccordion}
        role="button"
        tabIndex={0}
        style={{ cursor: "pointer" }}
      >
        <div className="question-content">
          <ul>
            <li>{id}</li>
            <li>{question}</li>
          </ul>

          <div className="date-arrow-container">
            {!isActive && <p className="date">{date}</p>}
            {image && (
              <div className={`question-image ${isActive ? "active" : ""}`}>
                <img src={image} alt="화살표 이미지" />
              </div>
            )}
          </div>
        </div>
      </div>
      {isActive && (
        <div className="answer-container">
          <div className="answer-content">
            <p>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
