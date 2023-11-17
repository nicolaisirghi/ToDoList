import { legacy_createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;