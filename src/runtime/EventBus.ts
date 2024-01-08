import {EventListenerObject} from "../@types/EventListener";

export class EventBus {

    private listeners: EventListenerObject = {};

    addListener(eventName: string, listener: Function, amount: number = -1): void {
        if (!this.listeners) {
            this.listeners = {};
        }

        if (!this.listeners.hasOwnProperty(eventName)) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push({
            amount: amount,
            callback: listener
        });
    }

    removeListener(eventName: string = '', listener: Function | null = null): void {

        if (!this.listeners) {
            return;
        }

        if (!eventName || !this.listeners.hasOwnProperty(eventName)) {
            return;
        }

        if (!listener) {
            delete this.listeners[eventName];
            return;
        }

        for (let index: number in this.listeners[eventName]) {
            if (this.listeners[eventName][index]['callback'] === listener) {
                delete this.listeners[eventName][index];
            }
        }
    }

    removeAllListeners(): void {
        if (!this.listeners) {
            return;
        }

        for (let key in this.listeners) {
            delete this.listeners[key];
        }
    }

    emit(eventName: string, parameters: object = {}): void {
        if (!this.listeners?.hasOwnProperty(eventName)) {
            return;
        }

        for (let index: number in this.listeners[eventName]) {

            this.listeners[eventName][index]['callback'](parameters);

            if (this.listeners[eventName][index]['amount'] - 1 === 0) {
                delete this.listeners[eventName][index];
                continue;
            }

            this.listeners[eventName][index]['amount'] -= 1;
        }
    }
}
