import React from 'react';
import ReactDOM from 'react-dom'

export default class RubricHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return [
            <th scope="col" style={{textAlign: "center"}}>{this.props.children}</th>,
            <th scope="col" style={{textAlign: "center"}}>{this.props.score}</th>
        ]
    }
}