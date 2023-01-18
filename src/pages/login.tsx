import { NextPage } from 'next';

import Layout from '@/components/Layout/Layout';
import LoginUser from '@/components/Login/Login';
import styles from '../styles/Home.module.scss'

const Login: NextPage & { Layout: any }  = () => {
  return (
    <div className={styles.pageWrapper}>
      <LoginUser/>
    </div>
  );
};

Login.Layout = Layout;
export default Login;