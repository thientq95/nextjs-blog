import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = {};

const rootReducer = combineReducers({

});

let store = configureStore({
    reducer
});

const makeStore = ({ isServer }: {isServer: Boolean}) => {
    if (isServer) {
        return store = configureStore({
            reducer
        });
    } else {
        const persistConfig = {
            key: 'shoppingCart',
            whileList: [],
            storage, // if needed, user a safer storage
        }

        const persistedReducer = persistReducer(persistConfig, rootReducer);

        store = configureStore({
            reducer: persistedReducer
        });

        // @ts-ignore:next-line
        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
}

// export an assembled wrapper
// @ts-ignore:next-line
export const wrapper = createWrapper(makeStore, {debug: true});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch



