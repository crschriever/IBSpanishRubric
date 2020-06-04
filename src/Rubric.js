import React from 'react';
import ReactDOM from 'react-dom'
import RubricRow from './RubricRow'

export default class Rubric extends React.Component {

    render() {
        return (
        <table>
            <RubricRow row="1"/>
            <RubricRow row="2"/>
            <RubricRow row="3"/>
        </table>
        )
    }
}