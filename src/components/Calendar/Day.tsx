import { Box } from '@mui/material';
import { FC } from 'react';

import styles from '../Calendar/Calendar.module.scss';

interface IDateCard{
  date : string,
  cardClass?: string,
  textClass?: string,
}

const Day: FC<IDateCard> = ({ date, cardClass, textClass }) => {
  return(
    <div className={`${styles.calendarDate} ${styles.calendarDayStat} ${cardClass}`}>
      <Box className={`${styles.calendarInnerBox}`}>
        <p className={`${styles.calendarText} ${styles.calendarDateNum} ${textClass}`}>{date}</p>
      </Box>
      <Box className={styles.calendarInnerBox}>
        EVENTS
      </Box>
    </div>
  );
};

export default Day;