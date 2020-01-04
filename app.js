import React from 'react';
import ReactDom from 'react-dom';
import './styles.scss';

const App = () => {
    return (
        <div className="container">
            <h1>NEWS</h1>
        </div>
    )
}

ReactDom.render(<App/>, document.querySelector('#root'))
