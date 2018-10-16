import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }


ReactDOM.render(
<h1>{Welcome(props)}</h1>,
document.getElementById('root')
);


 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
