import { Box } from '@mui/material';
import { FC, useRef, useContext, useState } from 'react';

import styles from '../Calendar/Calendar.module.scss';
import { IDaysTypes, IEvents } from '@/types/types';
import AppContext from '../Context/Context';
import { deleteDataFromBackend, getDataFromBackend, putDataToBackend } from '@/utils/getDataFromBackend';
import AddNewEventModal from './AddNewEventModal';

interface IDateCard{
  date : IDaysTypes,
  events: IEvents[],
  setEvents: any,
  cardClass?: string,
}

const Day: FC<IDateCard> = ({ date, events, setEvents, cardClass }) => {
  const [eventname, setEventname] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<any>(null);

  const handleChange = () => {
    setEventname(inputRef?.current?.value);
  };

  const handleDelete = async(event: IEvents) => {
    console.log("🚀 ~ file: Day.tsx:28 ~ handleDelete ~ event", event.id)
    await deleteDataFromBackend(`events/${event.id}`)
    const updatedEvents = events.filter((evt: IEvents) => {
      return evt.id !== event.id
    })
    setEvents(updatedEvents)
  }

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
        <AddNewEventModal date={date} events={events} setNewEvents={setEvents}/>
      </Box>
      <Box className={styles.calendarInnerBox}>
        {events?.map((event: IEvents) => {
          return date.date === event.eventDate ? 
          <>
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
          </>
          : null
        })}
      </Box>
    </div>
  );
};

export default Day;