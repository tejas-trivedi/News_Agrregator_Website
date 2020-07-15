import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import HomePage from "./containers/HomePage"
import { connect } from 'react-redux'


class BaseRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: true
        }
    }
    componentDidMount() {
        if (this.props.token) {
            this.setState({ auth: false });
        }
    }

    render() {
        return ( <
            BrowserRouter >
            <
            Switch >
            <
            Route exact path = "/"
            component = { HomePage }
            />            < /
            Switch > <
            /BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(BaseRouter);