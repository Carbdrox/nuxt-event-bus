# Nuxt3 Event-Bus
A Nuxt3 plugin which adds a global event bus to your nuxt-project.

<a href="https://www.npmjs.com/package/nuxt-event-bus"><img src="https://img.shields.io/npm/dt/nuxt-event-bus" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/nuxt-event-bus"><img src="https://img.shields.io/npm/v/nuxt-event-bus" alt="Latest Stable Version"></a>
<a href="https://www.npmjs.com/package/nuxt-event-bus"><img src="https://img.shields.io/npm/l/nuxt-event-bus" alt="License"></a>


## Installation

### Using npm

```
npm i nuxt-event-bus --save
```

## Usage
Inside your Components e.g. `App.vue`
```javascript
export default {
    created() {
        this.$event.on('eventName', () => {
            console.log('event Fired!')
        });
    },
    methods: {
        fireEvent() {
            this.$event.emit('eventName');
        }
    }
}
```

### Interface
This Plugin provides the following interface   
`this.$event.on(eventName, listener, amount)`:

| Parameter | Required | Description                                                                     |
|-----------|----------|---------------------------------------------------------------------------------|
| eventName | yes      | The name of the event to listen for.                                            |
| listener  | yes      | The function that will be executed when the event is fired.                     |
| amount    | no       | The number of times the listener should be executed. (empty or -1 for no limit) |

`this.$event.off(eventName, listener)`:

| Parameter | Required | Description                                                                                                                |
|-----------|----------|----------------------------------------------------------------------------------------------------------------------------|
| eventName | no       | The name of the event to remove. If no eventName specified, all events will be deleted                                     |
| listener  | no       | The function of the event to be deleted. If no function is specified, all functions of the specified event will be deleted |

`this.$event.emit(eventName, params)`:

| Parameter  | Required | Description                                                                                                  |
|------------|----------|--------------------------------------------------------------------------------------------------------------|
| eventName  | yes      | The name of the event to be fired.                                                                           |
| parameters | no       | The parameter to be passed to the event. If multiple parameters are required, they must be passed as object. |

## License

MIT

