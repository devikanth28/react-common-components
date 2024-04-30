export default Observables;
declare class Observables {
    observers: {};
    subscribe: ({ type, payload }: {
        type: any;
        payload: any;
    }) => void;
    subscribeAll: (actions: any) => void;
    unSubscribe: (key: any) => void;
    unSubscribeAll: (keys: any) => void;
    notify: ({ type, payload }: {
        type: any;
        payload: any;
    }) => void;
    clear: () => void;
    get: () => {};
}
