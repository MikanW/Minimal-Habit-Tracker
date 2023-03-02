import { Col, Row } from "antd";
import CurrentTime from "../CurrentTime";
import CardCalender from "../CalenderCard";
import HabitListDragable from "./HabitListDragable";

const Today = () => {
  return (
    <div className="Today">
        <div className="TodayLeftCol">
          <CurrentTime />
          <CardCalender />
        </div>
        <div className="TodayRightCol">
          <HabitListDragable />
        </div>
    </div>

  );
};

export default Today;