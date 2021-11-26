import React, { useContext, useState } from 'react';
import Input from '../../UI/Input/Input';
import cls from './Form.module.scss';
import Button from '../../UI/Button/Button';
import Textarea from '../../UI/Textarea/Textarea';
import { FirebaseContext } from '../../context/firebase/firebaseContext';

const isValidData = ({ title, description }) =>
  title.trim() && description.trim();

const Form = () => {
  const [announcement, setAnnouncement] = useState({
    title: '',
    description: ''
  });
  const { createAnnouncement: create } = useContext(FirebaseContext);

  const onSubmit = event => {
    event.preventDefault();

    if (!isValidData(announcement)) return;

    create({
      ...announcement,
      creationTime: new Date(),
      id: Date.now()
    });
    setAnnouncement({
      title: '',
      description: ''
    });
  };

  const changeTitle = ({ target }) =>
    setAnnouncement({ ...announcement, title: target.value });

  const changeDescription = ({ target }) =>
    setAnnouncement({ ...announcement, description: target.value });

  return (
    <form className={cls.form} onSubmit={onSubmit}>
      <Input
        placeholder="Title..."
        value={announcement.title}
        onChange={changeTitle}
      />
      <Textarea
        placeholder="Description..."
        value={announcement.description}
        onChange={changeDescription}
      />
      <Button>Add</Button>
    </form>
  );
};

export default Form;
