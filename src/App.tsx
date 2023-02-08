import React from 'react';
import styles from './App.module.scss';
import { Content, Header, Sidebar } from './components';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}
