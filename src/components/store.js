import loggin from '../reducers/reducers'
import isLogged from '../actions/actions'
import { createStore } from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, loggin);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
