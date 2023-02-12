import { Col, Row } from "antd";
import CurrentTime from "./CurrentTime";
import CardCalender from "./CalenderCard";

const Today = () => {
  return (
    <div className="Today">
        <div className="TodayLeftCol">
          <CurrentTime />
          <CardCalender />
        </div>
        <div className="TodayRightCol">
          <p>col 2</p>
        </div>
    </div>

  );
};

export default Today;