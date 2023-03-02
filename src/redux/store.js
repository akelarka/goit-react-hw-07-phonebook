import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './itemsSlice';
import { searchReducer } from './searchSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    searchValue: searchReducer,
  },
});

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { itemsReducer } from './itemsSlice';
// import { searchReducer } from './searchSlice';

// const rootReducer = combineReducers({
//   items: itemsReducer,
//   searchValue: searchReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['searchValue']
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// export default store;
