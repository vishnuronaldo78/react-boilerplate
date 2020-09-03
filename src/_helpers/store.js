import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

let middlewares = [thunkMiddleware, promise];
// if (process.env.NODE_ENV === "development") {
//     const loggerMiddleware = createLogger();
//     middlewares = [...middlewares, loggerMiddleware];
// }

let wDevTools = composeWithDevTools(applyMiddleware(...middlewares));
let woDevTools = applyMiddleware(...middlewares);

/* Enable Redux DevTools only when NODE_ENV === development */
const opts = (__DEV__) ? wDevTools : woDevTools;
export const store = createStore(
    rootReducer,
    opts,
);
