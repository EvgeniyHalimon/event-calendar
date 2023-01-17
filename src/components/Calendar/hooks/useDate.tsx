import { useContext, useEffect, useState } from 'react';

import AppContext from '@/components/Context/Context';

export const useDate = (nav : any) => {
  const [dateDisplay, setDateDisplay] = useState('');
  const [days, setDays] = useState<any>([]);
  const { month, year } = useContext(AppContext);

  useEffect(() => {
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dt = new Date();

    const daysPrevMonth = new Date(year, month, 0).getDate();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setDateDisplay(`${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`);
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    const d = 42 - (paddingDays + daysInMonth);

    const daysArr: any = [];

    for (let i = 1; i <= paddingDays + daysInMonth + d; i++) {
      const dayString = `${i - paddingDays}/${month + 1}/${year}`;
      const dayNum = `${i - paddingDays}`;

      if((daysInMonth + paddingDays) < i){
        daysArr.push({
          dayNum: i - daysInMonth - paddingDays,
          value: 'padding',
          isCurrentDay: false,
          date: '',
        });
      } else if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          date: dayString,
          dayNum: dayNum,
        });
      } else {
        daysArr.push({
          dayNum: (daysPrevMonth - paddingDays) + i,
          value: 'padding',
          date: '',
        });
      }
    }

    setDays(daysArr);
  }, [nav, month, year]);

  return {
    days,
    dateDisplay,
  };
};