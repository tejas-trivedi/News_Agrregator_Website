import React from 'react';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class HomePage extends React.Component {
    state = {
        articles: [],
    };


    async componentDidMount() {

        const feedID = this.props.match.params.feedID;
        let url = 'http://127.0.0.1:8000/news/api/article/' + feedID;
        console.log(feedID)

        try {
            const res = await fetch(url); // + feedID); // fetching the data from api, before the page loaded
            //const res = await fetch('http://127.0.0.1:8000/news/api/article/' + '${feedID}/');
            const articles = await res.json();
            this.setState({
                articles
            });
        } catch (e) {
            console.log(e);
        }
    }



    render() {
        return (

            <
            div > {

                this.state.articles.map(item => ( <
                    div key = { item.id } >


                    <
                    h1 > Title - > { item.title } < /h1>  <
                    a href = "{item.url}" > Source URL: { item.url } < /a>  <
                    br / >

                    <
                    div dangerouslySetInnerHTML = {
                        {
                            __html: item.description
                        }
                    }
                    />  <
                    br / > < br / > < br / >
                    <
                    /div> 

                ))
            } < /div>
        );
    }
}
export default HomePage;


/*
    //componentDidMount()
    fetchArticles = () => {
        axios.get('http://localhost:8000/news/api/article/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data)
            });

    }   

    componentDidMount() {
        this.fetchArticles();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            this.fetchArticles();
        }
    }


    render() {
        return ( 
            <div>

<h3>
            <Articles data = {
                this.state.articles
            }/> 

</h3>

            <h1>Article List</h1>

            <
            /div>
        );
    }
}
*/

/*
const mapStateToProps = state => {
    return {
        userdata: state.userdata
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //  logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
*/

//export default HomePage;