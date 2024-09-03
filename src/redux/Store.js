import { combineReducers, configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './CalReducer';
import buttonReducer from './Reducer';


const rootReducer = combineReducers({
    buttons: buttonReducer,
    calculator: calculatorReducer,
  });
  

const Store = configureStore({
    reducer: rootReducer,
});

export default Store;


