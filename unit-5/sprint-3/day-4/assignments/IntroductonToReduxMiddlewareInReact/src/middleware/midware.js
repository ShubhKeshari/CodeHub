
// middleware.js
export const loggerActionMiddleWare = (store) => (next) => (action) => {
    console.log('Action Type', action.type);
    return next(action);
}

export const loggerPayloadMiddleWare = (store) => (next) => (action) => {
    console.log('Payload', action.payload);
    return next(action);
}
