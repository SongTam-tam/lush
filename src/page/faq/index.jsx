import { useState } from "react";
import FaqVisual from "../../component/faq/Visual/FaqVisual";
import Gnb from "../../component/faq/Gnb/Gnb";
import Question from "../../component/faq/Question/Question";
import Info from "../../component/faq/Info/Info";
import { QuestionStyle } from "../../component/faq/Question/style";
import faqData from "../../assets/api/dataComponents/faqData";
import Pagination from "../../component/faq/pagination/Pagination";

const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const FAQ = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; 

  const currentData =
    currentPage === 1 ? faqData : shuffleArray(faqData);

  return (
    <div>
      <FaqVisual />
      <Gnb />
      <Info />
      <QuestionStyle>
        {currentData.map((item) => (
          <Question key={item.id} faqData={item} />
        ))}
        <Pagination
          pageNumber={totalPages}
          onCurrent={(num) => setCurrentPage(num)}
        />
      </QuestionStyle>
    </div>
  );
};

export default FAQ;
