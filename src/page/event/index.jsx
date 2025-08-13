import EventVisual from "../../component/event/Visual/EventVisual";
import Eventpage from "../../component/event/content1/Eventpage";
import Gnb from "../../component/event/content1/Gnb/Gnb";

const Event = () => {
  return (
    <div>
      <EventVisual />
      <Gnb />
      <Eventpage />
    </div>
  );
};

export default Event;
