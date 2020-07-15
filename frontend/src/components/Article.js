import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux'
import axios from 'axios';


class Articles extends React.Component {
        constructor(props) {
            super(props);
            this.logout = this.logout.bind(this)
        }

        logout() {
            axios.post('http://127.0.0.1:8000/auth/token/logout/', null, {
                headers: {
                    Authorization: 'Token ' + this.props.token
                }
            }).then(res => {
                console.log(res.data)
                this.props.logout()
            })
        }
        render() {
                console.log(this.props.token)
                if (this.props.data.articles[0]) {
                    return ( <
                        div >


                        <
                        h1 > Article js < /h1> 


                        <
                        /div>
                    );
                }

                const mapStateToProps = state => {
                    return {
                        userdata: state.userdata,
                        token: state.token
                    }
                }
                const mapDispatchToProps = dispatch => {
                    return {
                        logout: () => dispatch(logout())
                    }
                }
                export default connect(mapStateToProps, mapDispatchToProps)(Articles);