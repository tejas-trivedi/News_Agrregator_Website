import React from 'react';
import axios from 'axios';
import Articles from '../components/Article'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
    state = {
        articles: [],
    }
    componentDidMount() {
            axios.get('http://localhost:8000/news/api/article', )
                .then(res => {
                    this.setState({
                        articles: res.data
                    });
                    console.log(res.data)
                })

        }
        /* Article data = { this.state }*/
    render() {
        return ( <
            div >


            <
            h1 > Articles < /h1> 


            <
            /div>
        )
    }
}

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