import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface TableCellProps extends 
DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    value: string | number
    editMode: boolean
    setValue: any
    editField: any
}