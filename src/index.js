import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './containers/App';
// import Messages from './containers/Messages';
// import Blog from './containers/Blog';
import ToDoList from './containers/ToDoList';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Messages />, document.getElementById('root2'));
// ReactDOM.render(<Blog />, document.getElementById('root3'));
ReactDOM.render(<ToDoList />, document.getElementById('root4'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
