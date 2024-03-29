import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

    // @ts-ignore
    if (module.hot) {
        // @ts-ignore
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
