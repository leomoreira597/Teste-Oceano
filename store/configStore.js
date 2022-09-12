import { createStore, combineReducers,applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import promise from "redux-promise"
import thunk from "redux-thunk";
import multi from "redux-multi";
//import HomeReducer from "./reducers/homeReducer/homeReducer";
import listReducer from "./reducers/listReducer";

const reducers = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    list: listReducer
})

const devtoos = composeWithDevTools(applyMiddleware(promise, thunk, multi))

function storeConfig() {
    return createStore(reducers, devtoos)
}

export const storeWrapper = createWrapper(storeConfig)