import { NextPage } from 'next';

import MonthPicker from '@/components/Calendar/MonthPicker';
import MonthlyViewList from '@/components/Calendar/MonthlyViewList';

const Calendar:NextPage = () => {
  return (
    <>
      <MonthPicker />
      <MonthlyViewList />
    </>
  );
};
export default Calendar;