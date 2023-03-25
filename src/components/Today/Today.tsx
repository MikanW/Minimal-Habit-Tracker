import CurrentTime from "../CurrentTime";
import CardCalender from "../CalenderCard";
import AllHabits from "../AllHabits";
import DailyView from "../DailyView";

const Today = () => {
  return (
    <div className="Today">
        <div className="TodayLeftCol">
          <CurrentTime />
          <CardCalender />
        </div>
        <div className="TodayMiddleCol">
          <AllHabits type="today"/>
        </div>
        <div className="TodayRightCol">
          <h3> TimeLine </h3>
          <DailyView />
        </div>
    </div>

  );
};

export default Today;