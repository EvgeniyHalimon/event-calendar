import { NextPage } from 'next';

import MonthPicker from '@/components/Calendar/MonthPicker';
import MonthlyViewList from '@/components/Calendar/MonthlyViewList';
import Layout from '@/components/Layout/Layout';

import styles from '../styles/Home.module.scss';

const Calendar:NextPage & { Layout: any } = () => {
  return (
    <div className={styles.pageWrapper}>
      <MonthPicker />
      <MonthlyViewList />
    </div>
  );
};

Calendar.Layout = Layout;
export default Calendar;