import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: ''});
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email, password };
    emailSignInStart(userData);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }
    
  return (
    <div className='sign-in'>
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email" 
          id="email" 
          name="email" 
          value={email}
          label="Email"
          handleChange={handleChange}
          required 
        />
        <FormInput 
          type="password" 
          id="password" 
          name="password" 
          value={password}
          label="Password"
          handleChange={handleChange}
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

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (userData) => dispatch(emailSignInStart(userData))
})

export default connect(null, mapDispatchToProps)(SignIn);
