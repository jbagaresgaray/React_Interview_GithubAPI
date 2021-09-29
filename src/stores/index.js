import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import rootReducer from "./reducer";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    stateReconciler: hardSet,
  },
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefault) {
    const defaultMiddlewares = getDefault({
      serializableCheck: {
        ignoredActions: [
          "persist/REGISTER",
          "persist/REHYDRATE",
          "persist/PERSIST",
        ],
      },
    });
    return defaultMiddlewares;
  },
});

const persistor = persistStore(store);
export { store, persistor };
