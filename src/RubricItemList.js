import React from 'react';
import ReactDOM from 'react-dom'

export default class RubricItemList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <ul>{this.props.children}</ul>
    }
}