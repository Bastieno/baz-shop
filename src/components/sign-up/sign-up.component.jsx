import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

 class SignUp extends Component {
  state = {
    email: '',
    displayName: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, displayName, password, confirmPassword } = this.state;
    console.log('this.state', this.state);

    if (password !== confirmPassword) {
      alert("Passwords don't match"); 
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        email: '',
        displayName: '',
        password: '',
        confirmPassword: ''
      })

    } catch (error) {
      console.log('Error occured during signup', error.message);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={this.state.displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            label="Confirm password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>     
      </div>
    )
  }
}

export default SignUp;
