import { TableProps } from './Table.types';
import styles from './Table.module.scss';
import { TableHeader } from './TableHeader/TableHeader';
import { TableRow } from './TableRow/TableRow';
import { IRow } from '../../../models/IRow';

export function Table({rows, createRow, deleteRow}: TableProps) {

    const buildLvl = (rows: IRow[], level: number) => {
        let newLvl = level + 1
        return (
            <>
                {rows.map((row) => 
                    <div key={row.id} className={styles.rowItem}>
                        <TableRow row={row} createRow={createRow} deleteRow={deleteRow} 
                            className={styles.row} level={level} />
                        {row.child && row.child.length > 0 && buildLvl(row.child, newLvl)}
                    </div>
                )}
            </>
        )
    }

    return (
        <div className={styles.table}>
            <TableHeader className={styles.row} />
            {buildLvl(rows, 0)}
        </div>
    )
}