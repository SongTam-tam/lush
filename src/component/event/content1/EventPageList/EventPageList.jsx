import { EventPageListStyle } from "./style";

const EventPageList = ({ data }) => {
  const { title, description, dateRange, image } = data;
  return (
    <EventPageListStyle>
      <div>
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{dateRange}</span>
    </EventPageListStyle>
  );
};

export default EventPageList;
