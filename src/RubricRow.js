import React from 'react';
import ReactDOM from 'react-dom'

export default class RubricRow extends React.Component {

    render() {
        return <tr><td>Row: {this.props.row}</td><td>Col 2</td><td>Col 3</td></tr>
    }
}