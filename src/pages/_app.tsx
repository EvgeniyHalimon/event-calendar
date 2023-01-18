import { CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import { FC, PropsWithChildren, useMemo, useState } from 'react';

import AppContext from '@/components/Context/Context';
import '@/styles/globals.scss';

const Noop: FC = ({ children }: PropsWithChildren<{}>) => <>{children}</>;

export default function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const d = new Date();
  const m = d.getMonth();
  const y = d.getFullYear();
  const [month, setMonth] = useState(m);
  const [year, setYear] = useState(y);
  const [number, setNumber] = useState<number>(0);
  const [events, setEvents] = useState<any>([]);
  const [rangeOfEvents, setRangeOfEvent] = useState([]);

  const AppContextValue = useMemo(() => 
    ({ month, setMonth, year, setYear, number, setNumber }), [month, year, number]);

  return (
    <AppContext.Provider
      value={AppContextValue}    
    >
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
