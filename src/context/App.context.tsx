import { createContext, PropsWithChildren, useState } from 'react'
import { IRow } from '../models/IRow'

export interface IAppContext {
	rows: IRow[]
	setRows?: (newRows: IRow[]) => void
}

export const AppContext = createContext<IAppContext>({ rows: []})

export const AppContextProvider = ({ rows, children }: PropsWithChildren<IAppContext>): JSX.Element => {

	const [rowsState, setRowsState] = useState<IRow[]>(rows)
	const setRows = (newRows: IRow[]) => {
		setRowsState(newRows)
	}

	return <AppContext.Provider value={{ rows: rowsState, setRows }}>
		{children}
	</AppContext.Provider>
}