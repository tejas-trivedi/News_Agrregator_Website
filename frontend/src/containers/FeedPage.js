import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';



class FeedPage extends React.Component {
    state = {
        feeds: [],
    };


    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/news/api/feeds/');
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
                div >
                <
                h1 > Template
                for Feed List < /h1> {

                this.state.feeds.map(item => ( <
                    div key = { item.id } >
                    <
                    br / >

                    <
                    h3 > Title - > { item.title }(ID: { item.id }) < /h3> <
                    Link to = { `/articles/${item.id}` } > Articles from { item.title } < /Link>   <
                    br / >

                    <
                    Link to = { `{item.url}` } > Source URL: { item.url } < /Link> <
                    br / >
                    <
                    span > Status: { item.is_active } < /span>  <
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