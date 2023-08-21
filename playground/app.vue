<template>
  <div>
    Nuxt module playground!
      <button @click="fireEvent">
          test
      </button>

      <button-component></button-component>
  </div>
</template>

<script>
import {defineNuxtComponent} from "#app";

export default defineNuxtComponent({
    mounted() {
        this.$event.$on('testEvent', this.listener);
        this.$event.$on('secondEvent', this.listener2);
        // this.$on('testEvent', this.listener);
    },
    methods: {
        listener() {
            console.log('hello from app');
        },
        listener2() {
            console.log('hello from app2');
        },
        fireEvent() {
            this.$event.$emit('childEvent', 'Hello from Child');
        }
    }
})
</script>
