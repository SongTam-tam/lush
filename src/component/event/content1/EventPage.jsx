import React from "react";
import { EventPageStyle } from "./style";
import EventPageList from "./EventPageList/EventPageList";
import eventData from "../../../assets/api/eventData";

const Eventpage = () => {
  return (
    <EventPageStyle>
      {eventData.map((data, idx) => (
        <EventPageList key={data.id} data={data} />
      ))}

      {/* <button>
        <img src="./images/icons/prev.jpg" alt="prev" />
      </button>

      <button>
        <img src="./images/icons/next.jpg" alt="next" />
      </button> */}
    </EventPageStyle>
  );
};

export default Eventpage;
