//비동기 통신 연결 
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import quiz from "./modules/quiz";
import rank from "./modules/rank";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ quiz, rank });
const store = createStore(rootReducer, enhancer);

export default store;
// import { createStore, combineReducers} from "redux";
// import quiz from "./modules/quiz";
// import rank from "./modules/rank";
// import { createBrowserHistory } from "history";

// export const history = createBrowserHistory();

// const rootReducer = combineReducers({ quiz, rank });
// const store = createStore(rootReducer);

// export default store;
