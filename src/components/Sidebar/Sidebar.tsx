import React from 'react';
import styles from './Sidebar.module.scss';
import {ReactComponent as ArrowIcon} from './arrow.svg'
import {ReactComponent as ItemIcon} from './item.svg'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
            <div>
                <p className={styles.title}>Название проекта</p>
                <p className={styles.subTitle}>Аббревиатура</p> 
            </div>
            <ArrowIcon />
        </div>
        <ul>
            <li><ItemIcon />first</li>
            <li className={styles.active}>
                <ItemIcon />
                Title
            </li>
            <li><ItemIcon />last</li>
        </ul>
    </div>
  )
}
