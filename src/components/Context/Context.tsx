import { createContext } from 'react';

import { IAppContext } from '@/types/types';

const initialState: IAppContext = {
  month: 0, 
  setMonth: null,
  year: 0, 
  setYear: null,
  number: 0, 
  setNumber: null,
  events: [{ id: 0, eventName: '', startDate: '', endDate: '' }],
  setEvents: null,
};

const AppContext = createContext<IAppContext>(initialState);

export default AppContext;