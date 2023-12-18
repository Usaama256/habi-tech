import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PAUSE,
  PURGE,
  REGISTER,
  WebStorage,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userRedux, navRedux, notifiRedux, lightsRedux } from "./slices";

interface PersistConfig {
  key: string;
  version: number;
  storage: WebStorage;
}

const persistConfig: PersistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userRedux,
  nav: navRedux,
  notifications: notifiRedux,
  lights: lightsRedux,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PURGE, REHYDRATE, PAUSE, PERSIST, REGISTER],
      },
    });
  },
});

export const reduxPersistor = persistStore(reduxStore);

export type RootState = ReturnType<typeof reduxStore.getState>; //Store State type
export type AppDispatch = typeof reduxStore.dispatch; //Store dispatch type
