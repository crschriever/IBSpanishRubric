import React from 'react';
import ReactDOM from 'react-dom'

export default class RubricRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <tr>{this.props.children}</tr>
    }
}