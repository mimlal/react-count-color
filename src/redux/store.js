import RootReducer from "./reducer/rootReducer";

import { createStore } from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const Store= createStore(RootReducer,
    applyMiddleware(thunk)
    );

export default Store;