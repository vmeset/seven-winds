export interface IRow {
    child: IRow[]
    equipmentCosts: number
    estimatedProfit: number
    id: number
    machineOperatorSalary: number
    mainCosts: number
    materials: number
    mimExploitation: number
    overheads: number
    rowName: string
    salary: number
    supportCosts: number
    total: number
    parentId?: number
}

export interface IRequest {
    equipmentCosts: number
    estimatedProfit: number
    machineOperatorSalary: number
    mainCosts: number
    materials: number
    mimExploitation: number
    overheads: number
    parentId: number
    rowName: string
    salary: number
    supportCosts: number
}

export interface IPostResponse {
    changed: IRow[]
    current: IRow
}