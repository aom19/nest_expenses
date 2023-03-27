export const data : IData ={
    report : []
}

export interface IData{
    report: IReport[]
}

export interface IReport{
    id:string,
    source : string,
    amount: number,
    created_at: Date,
    updated_at: Date
    type:ReportType
}


export enum ReportType{
    INCOME = 'income',
    EXPENSE = 'expense'
}



data.report.push({
    id:'1',
    source:'salary',
    amount:1000,
    created_at:new Date(),
    updated_at:new Date(),
    type:ReportType.INCOME
})

data.report.push({
    id:'2',
    source:'rent',
    amount:1000,
    created_at:new Date(),
    updated_at:new Date(),
    type:ReportType.EXPENSE
})
