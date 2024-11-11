import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const CalendarCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .react-calendar {
    border: none;
  }
`;

const CalendarComponent: React.FC = () => {
  const [date, setDate] = useState<Date | null>(new Date());

  const handleChange: CalendarProps['onChange'] = (newDate) => {
    if (newDate instanceof Date) {
      setDate(newDate);
    }
  };

  return (
    <CalendarCard style={{ height: '100%', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', width: '20rem'}}>
      <Calendar
        onChange={handleChange}
        value={date}
        locale="ru-RU"
      />
    </CalendarCard>
  );
};

export default CalendarComponent;
