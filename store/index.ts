import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from './reducers/cart';

const reducer = {
    cart: cartReducer
};

const rootReducer = combineReducers({
    cart: cartReducer,
});

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

let store = configureStore({
    reducer,
    middleware: customizedMiddleware,
});

const makeStore = ({ isServer }: {isServer: Boolean}) => {
    if (isServer) {
        return store = configureStore({
            reducer,
            middleware: customizedMiddleware,
        });
    } else {
        const persistConfig = {
            key: 'shoppingCart',
            whileList: ['cart'],
            storage, // if needed, user a safer storage
        }

        const persistedReducer = persistReducer(persistConfig, rootReducer);

        store = configureStore({
            reducer: persistedReducer,
            middleware: customizedMiddleware,
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



