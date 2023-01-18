import { Box, AppBar, Toolbar, Button } from '@mui/material';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

import styles from '../Layout/Layout.module.scss'

interface ILayout{
    children: ReactNode
}

const Layout:FC<ILayout> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Box className={styles.linkBox} sx={{ flexGrow: 1 }}>
            <Link href='/users'>
                Users
            </Link>
            <Link href='/calendar'>
                Calendar
            </Link>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;