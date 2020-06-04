import React from 'react';
import ReactDOM from 'react-dom'
import Rubric from './Rubric'

class App extends React.Component {

    render() {
        return <Rubric/>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);