import React from 'react';
import ReactDOM from 'react-dom'

export default class RubricItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        }

        this.toggleHover = this.toggleHover.bind(this)
        this.toggleSelected = this.toggleSelected.bind(this)
    }

    render() {
        let styles = {
            textAlign: "left",
            cursor: "pointer"
        };

        if (this.props.selected) {
            styles.backgroundColor = "rgb(198, 223, 253)"
        } else {
            styles.backgroundColor = this.state.hover ? "lightgray" : ""
        }

        return <li onClick={this.toggleSelected} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={styles}>{this.props.children}</li>
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    toggleSelected() {
        this.props.toggleSelected(this.props.index)
    }
}