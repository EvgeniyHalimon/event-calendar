import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton } from '@mui/material';
import { useEffect, useContext } from 'react';

import AppContext from '@/components/Context/Context';

import styles from '../Calendar/Calendar.module.scss';

const MonthPicker = () => {
  const { month, setMonth, year, setYear } = useContext(AppContext);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


  const goBackward = () => {
    if(month <= 11) setMonth(month - 1);
    if(month == 0){
      setMonth(11); 
      setYear(year - 1);
    }
  };

  const goForward = () => {
    if(month <= 11) setMonth(month + 1);
    if(month == 11){
      setMonth(0);
      setYear(year + 1);
    }
  };

  useEffect(() => {

  },[month, year]);

  return(
    <Box className={styles.pickerBlock}>
      <IconButton className={styles.iconButton} onClick={() => goBackward()}>
        <ArrowBackIosIcon className={styles.arrow}/>
      </IconButton>
      <p className={styles.range}>{months[month].toUpperCase()} {year}</p>
      <IconButton className={styles.iconButton} onClick={() => goForward()}>
        <ArrowForwardIosIcon className={styles.arrow}/>
      </IconButton>
    </Box>
  );
};

export default MonthPicker;