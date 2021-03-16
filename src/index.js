import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';

import './index.css';

import store from './redux/store'
import QuestionList from './components/questionList';

//If react-redux is 

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <QuestionList />
  </Provider>,
  rootElement
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
