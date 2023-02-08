import styles from './TableRow.module.scss';
import {ReactComponent as NoteIcon} from './note.svg'
import {ReactComponent as DeleteIcon} from './delete.svg'
import {ReactComponent as TrashIcon} from './trash.svg'
import { TableRowProps } from './TableRow.types';
import cn from 'classnames'
import { useState } from 'react';
import { TableCell } from './TableCell/TableCell';
import { updateRow, removeRow } from '../../../../http/api';

export function TableRow({row, createRow, deleteRow, className, level, ...props}: TableRowProps) {
    
    const [editMode, setEditMode] = useState(false)
    const [rowValue, setRowValue] = useState(row)

    let iconMargin = 20 * level

    const editField = async () => {
        rowValue.id && await updateRow(rowValue.id, rowValue)
        setEditMode(false)
    }

    const deleteItem = async () => {
        deleteRow(rowValue.id)
        await removeRow(rowValue.id)
    }

    return (
        <div className={cn(className)} {...props}
            onDoubleClick={() => setEditMode(true)}
        >
            <div className={cn(styles.icon, {
                [styles.firstLvl]: level == 0
            })}>
                <span style={{marginLeft: iconMargin}}>
                    <NoteIcon onClick={() => createRow(rowValue.id)} />
                    <TrashIcon className={styles.deleteIcon} onClick={deleteItem} />
                </span>
            </div>
            <TableCell value={rowValue.rowName} editField={editField}
                setValue={(val: any) => setRowValue({...rowValue, rowName: val})}
                editMode={editMode}
            />
            <TableCell value={rowValue.salary} editField={editField}
                setValue={(val: any) => setRowValue({...rowValue, salary: val})}
                editMode={editMode}
            />
            <TableCell value={rowValue.overheads} editField={editField}
                setValue={(val: any) => setRowValue({...rowValue, overheads: val})}
                editMode={editMode}
            />
            <TableCell value={rowValue.estimatedProfit} editField={editField}
                setValue={(val: any) => setRowValue({...rowValue, estimatedProfit: val})}
                editMode={editMode}
            />
        </div>
    )
}