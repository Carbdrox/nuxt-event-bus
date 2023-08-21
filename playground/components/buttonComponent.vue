<template>
    <div>
        <h2>Button Component</h2>
        <button @click="fireEvent">
            test
        </button>

        <button @click="fireEvent2">
            test2
        </button>
    </div>
</template>

<script>
import {defineNuxtComponent} from "#app";

export default defineNuxtComponent({
    name: 'buttonComponent',
    created() {
        this.$event.on('childEvent', this.listener)
    },
    methods: {
        fireEvent() {
            this.$event.emit('testEvent');
        },
        fireEvent2() {
            this.$event.emit('secondEvent');
        },
        listener(text) {
            console.warn(text);
        }
    }
});
</script>
