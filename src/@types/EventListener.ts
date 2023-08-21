export interface EventListener {
    amount: number,
    callback: Function
}

export interface EventListenerObject {
    [key: string]: EventListener[]
}
