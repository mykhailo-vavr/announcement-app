import React, { useReducer } from 'react';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import axios from 'axios';

const url =
  'https://announcementapp-69072-default-rtdb.europe-west1.firebasedatabase.app/';

const FirebaseState = ({ children }) => {
  const initialState = {
    announcements: []
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const createAnnouncement = async announcement => {
    await axios.put(
      `${url}/announcements/${announcement.id}.json`,
      announcement
    );
    dispatch({ type: 'CREATE', payload: announcement });
  };

  const fetchAnnouncements = async () => {
    const res = await axios.get(`${url}/announcements.json`);
    if (res.data) {
      const payload = Object.keys(res.data).map(key => res.data[key]);
      dispatch({ type: 'FETCH', payload });
    }
  };

  const removeAnnouncement = async id => {
    await axios.delete(`${url}/announcements/${id}.json`);
    dispatch({
      type: 'REMOVE',
      payload: id
    });
  };

  const updateAnnouncement = async announcement => {
    await axios.put(
      `${url}/announcements/${announcement.id}.json`,
      announcement
    );
    dispatch({
      type: 'UPDATE',
      payload: announcement
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        createAnnouncement,
        fetchAnnouncements,
        removeAnnouncement,
        updateAnnouncement,
        announcements: state.announcements
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
