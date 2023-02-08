import { TableCellProps } from './TableCell.props';

export function TableCell({value, setValue, editMode, editField, className, ...props}: TableCellProps) {

    const handleKeydown = (event: any) => {
        if(event.key == 'Enter') {
            editField()
        }
    }

    return (
        <div className={className} {...props}>
            {editMode 
            ? 
                <input value={value} 
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeydown} /> 
            : 
                <span>{value}</span>
            }
        </div>
    )
}