import React from 'react';
import ReactDOM from 'react-dom'

import RubricItem from './RubricItem'

export default class RubricItemList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let htmlItems = this.props.items.map((item, i) => {       
            return (<RubricItem toggleSelected={this.props.toggleSelected} selected={this.props.selectedMatrix[i]} index={i} key={i}> {item} </RubricItem>) 
        })

        return <ul>{htmlItems}</ul>
    }
}