import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import './sign-in.styles.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const userData = { email, password };
    const { emailSignInStart } = this.props;
    emailSignInStart(userData);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >
              Sign in with Google 
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (userData) => dispatch(emailSignInStart(userData))
})

export default connect(null, mapDispatchToProps)(SignIn);
