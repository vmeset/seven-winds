import { useEffect, useState } from 'react';
import { createRowInEntity, getTreeRows } from '../../http/api';
import { IRequest, IRow } from '../../models/IRow';
import styles from './Content.module.scss';
import { Table } from './Table/Table';

export function Content() {

  const [rows, setRows] = useState<IRow[]>([])

  useEffect(() => {
    getTreeRows().then((data) => setRows(data))
  }, [])

  function searchForDelete(item: number, arr: IRow[]) {
    for (let i = 0; i < arr.length; i++)
    if(arr[i].id === item) {
      return arr.splice(i, 1)
    } else if(arr[i].child.length > 0) {
      searchForDelete(item, arr[i].child)
    }
    return arr
  }

  function searchForPush(id: number, arr: IRow[], newRow: IRow) {
    for (let i = 0; i < arr.length; i++)
    if(arr[i].id === id) {
      arr.push(newRow)
    } else if(!!arr[i].child && arr[i].child.length > 0) {
      searchForPush(id, arr[i].child, newRow)
    }
    return arr
  }

  const createRow = async (id: number) => {
    const newRow: IRequest = {
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      parentId: id,
      rowName: "",
      salary: 0,
      supportCosts: 0
    }
    const response = await createRowInEntity(newRow)
    const newRows = searchForPush(id, rows, response.current)
    setRows([...newRows])
  }

  const deleteRow = (id: number) => {
    const newRows = (searchForDelete(id, rows))
    setRows([...newRows])
  }
  
  return (
    <div className={styles.content}>
        <div className={styles.contentHeader}>
          <p>Строительно-монтажные работы</p>
        </div>
        <Table rows={rows} createRow={createRow} deleteRow={deleteRow} />
    </div>
  )
}