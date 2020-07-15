import React from 'react';
import axios from 'axios';
import Articles from '../components/Article'

class HomePage extends React.Component {
    state = {
        articles: [],
    };


    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/news/api/article/'); // fetching the data from api, before the page loaded
            const articles = await res.json();
            this.setState({
                articles
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return ( <
            div > {

                this.state.articles.map(item => ( <
                    div key = { item.id } >
                    <
                    h3 > Title - > { item.title } < /h3> <
                    a href = "{item.url}" > Source URL: { item.url } < /a> <
                    br / >
                    <
                    span > Description: { item.description } < /span> <
                    br / > < br / > < br / >
                    <
                    /div>
                ))
            } <
            /div>
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