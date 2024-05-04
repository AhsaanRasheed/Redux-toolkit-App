import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleWare from 'redux-saga'
import SagaData from "./reduxSaga";

const sagaMiddleware = createSagaMiddleWare()
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(SagaData)
export default store