import React, { useContext, useState } from 'react';
import ListItem from '../ListItem/ListItem';
import cls from './List.module.scss';
import Modal from '../../UI/Modal/Modal';
import Textarea from '../../UI/Textarea/Textarea';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { FirebaseContext } from '../../context/firebase/firebaseContext';
import { getSimilarAnnouncements } from './getSimilarAnnouncements';

const isValidData = ({ title, description }) =>
  title.trim() && description.trim();

const List = ({ announcements }) => {
  const { updateAnnouncement: update } = useContext(FirebaseContext);
  const [activeModal, setActiveModal] = useState(false);
  const [isShowModal, setIsShowModal] = useState(true);
  const [announcement, setAnnouncement] = useState({
    title: '',
    description: ''
  });

  const openModal = item => {
    setAnnouncement(item);
    setActiveModal(true);
  };

  const changeTitle = ({ target }) =>
    setAnnouncement({ ...announcement, title: target.value });

  const changeDescription = ({ target }) =>
    setAnnouncement({ ...announcement, description: target.value });

  const onClick = () => {
    if (!isValidData(announcement)) return;
    update(announcement);
    setActiveModal(false);
  };

  const similarAnnouncements = () =>
    getSimilarAnnouncements(announcement, announcements, 3);

  return (
    <>
      <ul className={cls.list}>
        {announcements.length ? (
          announcements.map(item => {
            return (
              <ListItem
                item={item}
                key={item.id}
                openModal={openModal}
                setIsShowModal={setIsShowModal}
              />
            );
          })
        ) : (
          <span>There are no announcements...</span>
        )}
      </ul>
      <Modal active={activeModal} setActive={setActiveModal}>
        {isShowModal ? (
          <>
            <h2>{announcement.title}</h2>
            <br />
            <p>{announcement.description}</p>
            <br />
            <p>{announcement.creationTime?.toLocaleDateString()}</p>
            <br />
            <h3>Top similar announcements:</h3>
            {similarAnnouncements().map((item, i) => (
              <p key={i}>{item.title}</p>
            ))}
          </>
        ) : (
          <>
            <Input
              value={announcement.title}
              onChange={changeTitle}
            ></Input>
            <br />
            <Textarea
              value={announcement.description}
              onChange={changeDescription}
            />
            <br />
            <Button onClick={onClick}>Update</Button>
          </>
        )}
      </Modal>
    </>
  );
};

export default List;
