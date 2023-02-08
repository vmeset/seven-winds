import React from 'react';
import styles from './Header.module.scss';
import {ReactComponent as BackIcon} from './back.svg'
import {ReactComponent as OptionIcon} from './icon.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <OptionIcon />
      <BackIcon />
      <ul>
        <li className={styles.active}><span>Просмотр</span></li>
        <li>Управление</li>
      </ul>
    </div>
  )
}