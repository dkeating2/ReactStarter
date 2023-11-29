import type { PreloadedState } from "@reduxjs/toolkit";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./reducers/CounterReducer/CounterReducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];

export const store = setupStore();
