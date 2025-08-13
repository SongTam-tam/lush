import FaqVisual from "../../component/faq/Visual/FaqVisual";
import Gnb from "../../component/faq/Gnb/Gnb";
import Question from "../../component/faq/Question/Question";
import Info from "../../component/faq/Info/Info";
import { QuestionStyle } from "../../component/faq/Question/style";
import faqData from "../../assets/api/dataComponents/faqData";

const FAQ = () => {
  return (
    <div>
      <FaqVisual />
      <Gnb />
      <Info />
      <QuestionStyle>
        {faqData.map((item) => (
          <Question key={item.id} faqData={item} />
        ))}
      </QuestionStyle>
    </div>
  );
};

export default FAQ;
