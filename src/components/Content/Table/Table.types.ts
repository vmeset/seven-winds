import { IRow } from "../../../models/IRow";

export interface TableProps {
    rows: IRow[]
    deleteRow: (parentId: number) => void
    createRow: (parentId: number) => void
}