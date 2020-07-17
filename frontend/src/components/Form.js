import React from "react";
import { connect } from "react-redux";
import axios from "axios";

class NewFeedForm extends React.Component {

    handleFormSubmit = async(feed, requestType) => {
        feed.preventDefault();

        const postObj = {
            url: feed.target.elements.url.value,
        }

        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";

        if (requestType === "post") {
            await axios.post("http://127.0.0.1:8000/news/api/feed/new", postObj)
                .then(res => {
                    if (res.status === 201) {
                        this.props.history.push('/');
                    }
                })
        }
    };

    render() {
        return ( <
            div >

            <
            form onSubmit = {
                (feed) =>
                this.handleFormSubmit(
                    feed,
                    this.props.requestType
                )
            }
            imput type = 'url' /
            >
            <
            input type = 'submit' /
            >
            <
            /
            div >
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
};

export default connect(mapStateToProps)(NewFeedForm);