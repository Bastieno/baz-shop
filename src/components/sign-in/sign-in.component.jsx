import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ 
        email: '',
        password: ''
      })  
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            id="email" 
            name="email" 
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required 
          />
          <FormInput 
            type="password" 
            id="password" 
            name="password" 
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required 
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
              {' '}
              Sign in with Google 
              {' '}
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn;
