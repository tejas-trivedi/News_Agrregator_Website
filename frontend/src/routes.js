import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import HomePage from "./containers/HomePage"
import FeedPage from "./containers/FeedPage"
import NewFeedForm from "./components/Form"
import LoginSignup from "./containers/LoginPage"
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
            Route exact path = "/users/"
            component = { LoginSignup }
            /> <
            Route exact path = "/articles/:feedID/"
            component = { HomePage }
            />  <
            Route exact path = "/feeds/"
            component = { FeedPage }
            /> <
            Route exact path = "/feed/new/"
            component = { NewFeedForm }
            /> < /
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