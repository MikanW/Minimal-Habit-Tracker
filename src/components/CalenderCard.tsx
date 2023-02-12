import { Calendar, Card, theme } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Dayjs } from 'dayjs';
import React from 'react';

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};

const CalenderCard: React.FC = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
      <div className='CalenderCard' style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
  );
};

export default CalenderCard;