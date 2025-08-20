import React from "react";
import { EventPageStyle } from "./style";
import EventPageList from "./EventPageList/EventPageList";

const Eventpage = ({ data }) => {
  return (
    <EventPageStyle>
      {data.map((item) => (
        <EventPageList key={item.id} data={item} />
      ))}
    </EventPageStyle>
  );
};

export default Eventpage;
