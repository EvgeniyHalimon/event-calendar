import { FC, useRef, useState } from 'react';

import { IUsers } from '@/types/types';

import { deleteDataFromBackend, putDataToBackend } from '@/utils/getDataFromBackend';

import styles from '../Users/Users.module.scss';

interface IUserInfo{
    user : IUsers
    users: IUsers[]
    setUsers: any
}

const UserInfo:FC<IUserInfo> = ({ user, users, setUsers }) => {
  const [username, setUsername] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<any>(null);
    
  const handleDelete = async (id: number) => {
    await deleteDataFromBackend(`users/${id}`);
    setUsers(users.filter((user: IUsers) => user.id !== id));
  };

  const handleChange = () => {
    setUsername(inputRef?.current?.value);
  };

  const handleEdit = (username: string) => {
    setIsEditing(!isEditing);
    setUsername(username);
  };

  const handlePut = async (user: IUsers) => {
    await putDataToBackend(`users/${user.id}`, { ...user, username: username });
    setIsEditing(!isEditing);
    const updatedUsersArray = users.map((usr: IUsers) => {
      return usr.id === user.id  ? { ...usr, username: username } : usr;
    });
    setUsers(updatedUsersArray);
  };

  return (
    <div className={styles.userItem}>
      {isEditing ? 
        <input value={username} ref={inputRef} onChange={handleChange}/> : 
        <p>{user.username}</p>
      }
      <div className={styles.buttonBlock}>
        {isEditing ? 
          <button onClick={() => handlePut(user)}>save</button> : 
          <button onClick={() => handleEdit(user.username)}>edit</button>
        }
        <button onClick={() => handleDelete(user.id)}>delete</button>
      </div>
    </div> 
  );
};

export default UserInfo;
