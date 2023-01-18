export interface IUsers{
    id: number, 
    username: string,
    password: string,
}

export interface IEvents{
    id: number,
    eventName: string,
    eventDate: string,
}

export interface IAppContext{
    month: number, 
    setMonth: any,
    year: number, 
    setYear: any,
    number: number, 
    setNumber: any,
    events: IEvents[], 
    setEvents: any
}

export interface IDaysTypes{
    value: number | string,
    date: string, 
    dayNum: number | string,
}