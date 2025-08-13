import NewList from "./NewList/NewList";
import { NewStyle } from "./style";

const New = () => {
  return (
    <NewStyle>
      <h2>NEW ARRIVAL</h2>
      <div className="content">
        <NewList />
      </div>
    </NewStyle>
  );
};

export default New;
