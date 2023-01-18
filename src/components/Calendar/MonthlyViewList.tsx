import { Box } from '@mui/material';

import { useContext, useEffect, useState } from 'react';



import AppContext from '../Context/Context';

import Day from './Day';
import { useDate } from './hooks/useDate';
import { IDaysTypes } from '@/types/types';
import { getDataFromBackend } from '@/utils/getDataFromBackend';
import styles from '../Calendar/Calendar.module.scss';

interface IDays{
  shortName: string,
  longName: string
}

const daysArr: IDays[] = [
  { shortName: 'Mon', longName : 'Monday' },
  { shortName: 'Tue', longName : 'Tuesday' },
  { shortName: 'Wed', longName : 'Wednesday' },
  { shortName: 'Thur', longName : 'Thursday' },
  { shortName: 'Fri', longName : 'Friday' },
  { shortName: 'Sat', longName : 'Saturday' },
  { shortName: 'Sun', longName : 'Sunday' },
];

const MonthlyViewList = () => {
  const { number } = useContext(AppContext);
  const { days } = useDate(number);

  const {events, setEvents} = useContext(AppContext)
  const [monthEvents, setMonthEvents] = useState(events)

  const getEvents = async() => {
    const eventsData = await getDataFromBackend('events')
    setMonthEvents(eventsData.data)
    setEvents(eventsData.data)
  }

  useEffect(() => {
    getEvents()
  }, [events.length])

  return(
    <Box>
      <Box className={`${styles.firstBlock} ${styles.daysBox}`}>
        {daysArr.map((day: IDays) => 
          <p 
            key={day.longName} 
            style={{ width: `${100 / 7}%` }}
            className={`${styles.days}`}
          >
            {day.shortName.toUpperCase()}
          </p>
        )}
      </Box>
      <Box className={styles.secondBlock}>
        {days.map((day: IDaysTypes, index: number) => 
          <>
            {day.value === 'padding' ?
              <Day 
                key={index}
                date={day}
                cardClass={styles.cardBackground}
                events={monthEvents}  
                setEvents={setMonthEvents}      
              /> :
              <Day date={day} key={index} events={monthEvents} setEvents={setMonthEvents}/>}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MonthlyViewList;