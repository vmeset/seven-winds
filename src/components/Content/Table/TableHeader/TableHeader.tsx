import React from 'react';
import styles from './TableHeader.module.scss';
import { TableHeaderProps } from './TableHeader.types';
import cn from 'classnames'

export function TableHeader({className, ...props}: TableHeaderProps) {

    return (
        <div className={cn(styles.tableHeader, className)}>
            <div>Уровень</div>
            <div>Основная з/п</div>
            <div>Оборудование</div>
            <div>Накладные расходы</div>
            <div>Сметная прибыль</div>
        </div>
    )
}