import { useState } from "react";
import EventVisual from "../../component/event/Visual/EventVisual";
import Gnb from "../../component/event/content1/Gnb/Gnb";
import Pagination from "../../component/event/pagination/Pagination";
import Eventpage from "../../component/event/content1/Eventpage";
import eventData from "../../assets/api/eventData";

const Event = () => {
  const [currentPage, setCurrentPage] = useState(1);

  let currentData;
  if (currentPage === 1) {
    currentData = eventData;
  } else {
    currentData = shuffleArray(eventData);
  }

  return (
    <div>
      <EventVisual />
      <Gnb />
      <Eventpage data={currentData} />
      <Pagination
        pageNumber={5} 
        onCurrent={setCurrentPage}
      />
    </div>
  );
};

export default Event;

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
