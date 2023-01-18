import { NextPage } from 'next';

import Layout from '@/components/Layout/Layout';
import UsersList from '@/components/Users/Users';

import styles from '../styles/Home.module.scss';

const Users: NextPage & { Layout: any } = () => {
  return (
    <div className={styles.pageWrapper}>
      <UsersList/>
    </div>
  );
};

Users.Layout = Layout;
export default Users;