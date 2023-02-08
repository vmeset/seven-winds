import { DetailedHTMLProps, HTMLAttributes } from "react"
import { IRow } from "../../../../models/IRow"

export interface TableRowProps extends 
DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    row: IRow
    level: number
    createRow: (parentId: number) => void
    deleteRow: (parentId: number) => void
}