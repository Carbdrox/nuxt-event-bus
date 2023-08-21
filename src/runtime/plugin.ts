import {defineNuxtPlugin} from '#app';
import {EventBus} from "./EventBus";

const eventBus = new EventBus();

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('event', {
        on: eventBus.addListener,
        off: eventBus.removeListener,
        emit: eventBus.emit
    });
})
