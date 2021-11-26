import React from 'react';
import Announcements from '../Announcements/Announcements';
import Container from '../Container/Container';
import Form from '../Form/Form';
import cls from './Main.module.scss';

const Main = () => {
  return (
    <div className={cls.main}>
      <Container>
        <Form />
        <Announcements />
      </Container>
    </div>
  );
};

export default Main;
