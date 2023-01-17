export interface IUsers{
    id: number, 
    username: string,
    password: string,
}

export interface IEvents{
    id: number,
    eventName: string,
    startDate: string,
    endDate: string
}

export interface IAppContext{
    month: number, 
    setMonth: any,
    year: number, 
    setYear: any,
    number: number, 
    setNumber: any,
}