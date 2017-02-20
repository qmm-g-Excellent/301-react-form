import '../style/index.less';
import React from 'react';
import ReactDom from 'react-dom';
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import {Provider} from "react-redux";

//这里可以去掉ｉｎｄｅｘ吗　？？？
import rootReducer from "./reducers/index";
import Paper from "./containers/index";

const store = createStore(
    rootReducer,
    applyMiddleware(createLogger(), thunkMiddleware)
);



// ReactDom.render(
//     <h1>Hello,World!</h1>,
//     document.getElementById('app')
// );

render(
    <Provider store={store}>
      <Paper/>
    </Provider>,
    document.getElementById('app')
);