import React, { useContext } from 'react';
import Button from '../../UI/Button/Button';
import cls from './ListItem.module.scss';
import { FirebaseContext } from '../../context/firebase/firebaseContext';

const ListItem = ({ item, openModal, setIsShowModal }) => {
  const { removeAnnouncement: remove } = useContext(FirebaseContext);
  return (
    <>
      <li
        className={cls.item}
        onClick={() => {
          setIsShowModal(true);
          openModal(item);
        }}
      >
        <span>{item.title}</span>
        <span className={cls.btn_container}>
          <Button
            onClick={event => {
              event.stopPropagation();
              setIsShowModal(false);
              openModal(item);
            }}
          >
            Edit
          </Button>
          <Button
            onClick={event => {
              event.stopPropagation();
              remove(item.id);
            }}
          >
            Remove
          </Button>
        </span>
      </li>
    </>
  );
};

export default ListItem;
