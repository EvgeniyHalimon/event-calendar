import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

import { FC, useState } from 'react';

import { IDaysTypes, IEvents } from '@/types/types';
import { postDataToBackend } from '@/utils/getDataFromBackend';

import styles from '../Calendar/Calendar.module.scss';

interface IAddNewUserModal{
  date: IDaysTypes,
  events: IEvents[],
  setNewEvents: any,
  getEvent: any
}

const AddNewEventModal:FC<IAddNewUserModal> = ({ date, events, setNewEvents, getEvent }) => {
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({ eventName: '', eventDate: date.date });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewEvent({ eventName: '', eventDate: '' });
  };

  const handleAddNewUser = async () => {
    await postDataToBackend('events', newEvent);
    setOpen(false);
    setNewEvents([...events, newEvent]);
    setNewEvent({ eventName: '', eventDate: date.date });
    getEvent();
  };

  return (
    <div>
      <button onClick={handleClickOpen} className={styles.dateButton} >
        <p className={`${styles.calendarText} ${styles.calendarDateNum}`}>{date.dayNum}</p>
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new event</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event"
            type="text"
            fullWidth
            variant="standard"
            value={newEvent.eventName}
            onChange={(e) => setNewEvent({ ...newEvent, eventName: e.target.value })}
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

export default AddNewEventModal;