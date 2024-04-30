
class Observables {
    constructor() {
        this.observers = {};
    }

    subscribe = ({ type, payload }) => {
        if (!this.observers[type]) {
            this.observers[type] = payload;
        }
    }

    subscribeAll = (actions) => {
        Object.entries(actions).map(([key,handler])=>{
            this.subscribe({type:key,payload:handler});
        })
    }

    unSubscribe = (key) => {
        Object.entries(this.observers).forEach(([keyValue, fun]) => {
            if (fun == key || key ===keyValue) {
               delete this.observers[key];
            }
        })
    }

    unSubscribeAll = (keys) => {
        keys.map(key => {
            this.unSubscribe(key);
        })
    }

    notify = ({ type, payload }) => {
        Object.entries(this.observers).forEach(([key, func]) => {
            if (key === 'ALL' || key === type) {
                func({type,payload});
            }
        })
    }

    clear = () => {
        this.observers = {};
    }

    get = () => {
        return this.observers;
    }
}
export default Observables;
