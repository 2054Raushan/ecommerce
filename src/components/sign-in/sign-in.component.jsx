import React from 'react';
import './sign-in.styles.scss';





class SignIn extends React.Component {
    constructor(props){
        super(props)


        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password:''})
    }


    handleChange = event => {
        const { value , name } = event.target;
    }


    render(){
        return(
            <div className='sign-in'>
                <h1>I have already an acount...</h1>
                <span>Login with your email and password....</span>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} required />
                    <input type="password" name="password" value={this.state.password} required />
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}


export default SignIn;