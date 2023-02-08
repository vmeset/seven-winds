import axios from 'axios'
import { IPostResponse, IRequest, IRow } from '../models/IRow'

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const eID = 31472

export const createRowInEntity = async (row: IRequest) => {
    const {data} = await $host.post<IPostResponse>(`v1/outlay-rows/entity/${eID}/row/create`, row)
    return data
}
export const updateRow = async (rID: number, row: IRow) => {
    const {data} = await $host.post(`v1/outlay-rows/entity/${eID}/row/${rID}/update`, row)
    return data
}
export const removeRow = async (rID: number) => {
    const {data} = await $host.delete(`v1/outlay-rows/entity/${eID}/row/${rID}/delete`)
    return data
}
export const getTreeRows = async () => {
    const {data} = await $host.get<IRow[]>(`v1/outlay-rows/entity/${eID}/row/list`)
    return data
}