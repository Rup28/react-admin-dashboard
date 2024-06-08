// src/components/Calendar.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Paper } from '@mui/material';

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: 'event 1', date: '2023-06-01' },
    { title: 'event 2', date: '2023-06-02' },
  ]);

  const handleDateClick = (arg) => {
    const title = prompt('Enter event title');
    if (title) {
      setEvents([...events, { title, date: arg.dateStr }]);
    }
  };

  return (
    <Paper style={{ padding: 16, marginTop: 16 }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
      />
    </Paper>
  );
};

export default Calendar;
