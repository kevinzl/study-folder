import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo/Todo';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';

const App = (
    <Provider store={store}>
        <Todo />
    </Provider>
);
ReactDOM.render(
    App,
    document.getElementById('appRoot')
);
