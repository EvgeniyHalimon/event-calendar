import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

import { FC, useState } from 'react';

import { IUsers } from '@/types/types';
import { postDataToBackend } from '@/utils/getDataFromBackend';

interface IAddNewUserModal{
    users: IUsers[]
    setUsers: any
}

const AddNewUserModal:FC<IAddNewUserModal> = ({ users, setUsers }) => {
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', password: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewUser({ username: '', password: '' });
  };

  const handleAddNewUser = async () => {
    await postDataToBackend('users', newUser);
    setOpen(false);
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ marginBottom: '10px' }}>
        Add new user
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNewUser}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddNewUserModal;