import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import Sum from './PropValidation';
import ClickyButtons from './ClickyButtons';
import ConditionalDisplay from './ConditionalDisplay';
import * as serviceWorker from './serviceWorker';


let model = {clicks: 0}

function logToConsole(val) {
    console.log(val);
}

const state = {showState : true};

function render() {
    // ReactDOM.render(<AuthorQuiz clicks={model.clicks} onClick={() => {model.clicks += 1; render();}}/>, document.getElementById('root'));
    //ReactDOM.render(<Sum a={1} b={2} c={5}/>, document.getElementById('root'));
    ReactDOM.render(<ClickyButtons numberOfButtons={100} onSelection={logToConsole} />, document.getElementById('root'))
    // ReactDOM.render(<ConditionalDisplay isVisible={state.showState}>
    //     <h1> Sum</h1>
    //     <p>4 + 2 = 6</p>
    // </ConditionalDisplay>, document.getElementById('root'));
}
render();

setInterval(() => {
    state.showState = !state.showState;
    render();
}, 2000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
