import { useState, useEffect } from "react";
import { Card } from "antd";
import moment from 'moment';

const CurrentTime = () => {
  const [curTime, setCurTime] = useState(moment());

  useEffect(() => {

    const id = setInterval(() => {
      setCurTime(moment());
    }, 1000);

    return () => {
      clearInterval(id);
    }
  }, [])

  return (
    <Card className="CurrentTimeCard">
      <h1>{curTime.format('HH:mm:ss')}</h1>
      <h2>{' ✨ '}{curTime.format('YYYY.MM.DD')}{' ✨ '}</h2>
    </Card>
  );
};

export default CurrentTime;