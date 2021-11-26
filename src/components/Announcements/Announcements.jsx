import React, { useContext, useState } from 'react';
import Input from '../../UI/Input/Input';
import List from '../List/List';
import cls from './Announcements.module.scss';
import { FirebaseContext } from '../../context/firebase/firebaseContext';

const Announcements = () => {
  const { announcements } = useContext(FirebaseContext);
  const [searchQuery, setSearchQuery] = useState('');
  const onChange = ({ target }) => setSearchQuery(target.value);

  const searchedAnnouncementsByTitle = announcements.filter(
    ({ title }) => title.includes(searchQuery)
  );

  return (
    <div className={cls.wrapper}>
      <Input
        placeholder="Search by title..."
        value={searchQuery}
        onChange={onChange}
      />
      <List announcements={searchedAnnouncementsByTitle} />
    </div>
  );
};

export default Announcements;
