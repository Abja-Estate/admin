// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './authSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
import adminReducer from './adminSlice';

import { configureStore } from '@reduxjs/toolkit'
import { appApi } from './endpoints';
import { setupListeners } from '@reduxjs/toolkit/query';

export const makeStore = () => {
	return configureStore({
		reducer: {
			admin: adminReducer,
			[appApi.reducerPath]: appApi.reducer,
		},

		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(appApi.middleware),
	})


}

// setupListeners(makeStore().dispatch);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']