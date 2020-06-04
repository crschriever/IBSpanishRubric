import React from 'react';
import ReactDOM from 'react-dom'

export default class RubricCol extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.header) {
            return <th scope="col" style={{textAlign: "center"}}>{this.props.children}</th>
        }
        return <td style={{textAlign: "center"}}>{this.props.children}</td>
    }
}