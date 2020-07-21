import React from 'react';
import PropTypes from 'prop-types';
import '../css/signup.css';


class SignupForm extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handle_change = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(prevstate => {
            const newState = {...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return ( <
            form onSubmit = { e => this.props.handle_signup(e, this.state) } >

            <
            div >
            <
            meta charSet = "UTF-8" / >
            <
            link rel = "stylesheet"
            href = "signup.css" / >
            <
            link rel = "icon"
            href = "https://tse1.mm.bing.net/th?id=OIP.d6SRd1uxD99g1sc6zJ07SgHaHa&pid=Api&P=0&w=300&h=300" / >
            <
            link rel = "stylesheet"
            href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" / >
            <
            title > NewsAggregator - Sign in < /title> <
            header >
            <
            img src = "https://tse1.mm.bing.net/th?id=OIP.d6SRd1uxD99g1sc6zJ07SgHaHa&pid=Api&P=0&w=300&h=300"
            width = "30px"
            className = "logo" / >
            News Aggregator® <
            a href className = "this" > Home < /a> <
            /header> <
            div className = "form-container" >
            <
            ul className = "list" >
            <
            li > < img src = "https://www.shareicon.net/data/512x512/2015/10/02/649910_user_512x512.png"
            width = "100px/" / > < /li> <
            li > < h1 > Sign up < /h1></li >

            <
            li > < input type = "text"
            name = "username"
            value = { this.state.username }
            onChange = { this.handle_change }
            placeholder = "Username" / > < /li>

            <
            li > < input type = "text"
            name = "Email"
            placeholder = "Email Address" / > < /li>

            <
            li > < input type = "password"
            name = "password"
            value = { this.state.password }
            onChange = { this.handle_change }
            placeholder = "Enter Password" / > < /li>

            <
            li > < input type = "submit" / > < /li>

            <
            /ul> <
            /div> <
            /div>


            <
            /form>
        );
    }
}

export default SignupForm;

SignupForm.propTypes = {
    handle_signup: PropTypes.func.isRequired
};



/*

<
h4 > Sign Up < /h4> <
label htmlFor = "username" > Username < /label> <
input type = "text"
name = "username"
value = { this.state.username }
onChange = { this.handle_change }
/> <
label htmlFor = "password" > Password < /label> <
input type = "password"
name = "password"
value = { this.state.password }
onChange = { this.handle_change }
/> <
input type = "submit" / >

            <li><input type="button" name="Submit" defaultValue="Submit" /></li>


*/