import { Box } from '@mui/material';

import { useContext } from 'react';

import styles from '../Calendar/Calendar.module.scss';

import AppContext from '../Context/Context';

import Day from './Day';
import { useDate } from './hooks/useDate';

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
        {days.map((d: any, index: number) => 
          <>
            {d.value === 'padding' ?
              <Day date={d.dayNum} key={index}
                cardClass={styles.cardBackground}
                textClass={styles.disText}            
              /> :
              <Day date={d.dayNum} key={index} />}
          </>
        )}
      </Box>
    </Box>
  );
};

export default MonthlyViewList;