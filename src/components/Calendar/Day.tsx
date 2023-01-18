import { Box } from '@mui/material';
import { FC, useRef, useState } from 'react';

import { IDaysTypes, IEvents } from '@/types/types';

import { deleteDataFromBackend, putDataToBackend } from '@/utils/getDataFromBackend';

import styles from '../Calendar/Calendar.module.scss';


import AddNewEventModal from './AddNewEventModal';

interface IDateCard{
  date : IDaysTypes,
  events: IEvents[],
  setEvents: any,
  getEvent: any
  cardClass?: string,
}

const Day: FC<IDateCard> = ({ date, events, setEvents, getEvent, cardClass }) => {
  const [eventname, setEventname] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<any>(null);

  const handleChange = () => {
    setEventname(inputRef?.current?.value);
  };

  const handleDelete = async(event: IEvents) => {
    await deleteDataFromBackend(`events/${event.id}`);
    const updatedEvents = events.filter((evt: IEvents) => {
      return evt.id !== event.id;
    });
    setEvents(updatedEvents);
  };

  const handleEdit = (event: string) => {
    setIsEditing(!isEditing);
    setEventname(event);
  };

  const handlePut = async (event: IEvents) => {
    await putDataToBackend(`events/${event.id}`, { ...event, eventName: eventname });
    setIsEditing(!isEditing);
    const updatedUsersArray = events.map((evt: IEvents) => {
      return evt.id === event.id  ? { ...evt, eventName: eventname } : evt;
    });
    setEvents(updatedUsersArray);
  };

  return(
    <div className={`${styles.calendarDate} ${styles.calendarDayStat} ${cardClass}`}>
      <Box className={`${styles.calendarInnerBox}`}>
        <AddNewEventModal date={date} events={events} setNewEvents={setEvents} getEvent={getEvent}/>
      </Box>
      <Box>
        {events?.map((event: IEvents) => {
          return date.date === event.eventDate ? 
            <div className={styles.calendarInnerBox} key={event.id}>
              {isEditing ? 
                <input value={eventname} ref={inputRef} onChange={handleChange}/> : 
                <p>{event.eventName}</p>
              }
              {isEditing ? 
                <button id={styles.saveButton} onClick={() => handlePut(event)}>save</button> :
                <div>
                  <button onClick={() => handleEdit(event.eventName)}>e</button> 
                  <button onClick={() => handleDelete(event)}>x</button>
                </div>
              }
            </div>
            : null;
        })}
      </Box>
    </div>
  );
};

export default Day;