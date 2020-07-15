import React from 'react';

class FeedPage extends React.Component {
    state = {
        feeds: [],
    };


    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/news/api/feed/');
            const feeds = await res.json();
            this.setState({
                feeds
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return ( <
            div > {

                this.state.feeds.map(item => ( <
                    div key = { item.title } >
                    <
                    h3 > Title - > { item.title } < /h3> <
                    a href = "{item.url}" > Source URL: { item.url } < /a> <
                    br / >
                    <
                    span > Status: { item.is_active } < /span> <
                    br / > < br / > < br / >
                    <
                    /div>
                ))
            } <
            /div>
        );
    }
}

export default FeedPage;