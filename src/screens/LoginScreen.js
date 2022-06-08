import React, { useState } from 'react'
import styled from 'styled-components'; 
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

import Input from '../Components/Login/Input';
import Button from '../Components/Login/Button';
import Image from '../Components/Login/Image';
import logo from '../Components/Login/icon.png'
import LoginCSS from './LoginScreen.module.css';
import {userLoginAction} from '../actions/userActions'

export default function LoginScreen() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {error, userInfo, loading} = userLogin

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userLoginAction(username, password))
    if (userInfo){
      navigate('/Home')
    }
  }

  return <MainContainer onSubmit={submitHandler}>
      <WelcomeText>Welcome</WelcomeText>
      <ImageContainer>
          <Image src={logo} alt={'logo'} className={'img-fluid'}/>
      </ImageContainer>
      <InputContainer>
          <Input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
          <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </InputContainer>
      <ButtonContainer>
          <Button content='Sign Up'/>
      </ButtonContainer>
      <ForgetPassword>Forget Password?</ForgetPassword>
  </MainContainer>
}

const MainContainer = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    @media only screen and (max-width: 320px) {
        width: 80vw;
        height: 90vh;
        hr {
            margin-bottom: 0.3rem;
        }
        h4{
            font-size: small;
        }
    }
    @media only screen and (min-width: 360px) {
        width: 80vw;
        height: 90vh;
        h4 {
          font-size: small;
        }
      }
      @media only screen and (min-width: 411px) {
        width: 80vw;
        height: 90vh;
      }
      @media only screen and (min-width: 768px) {
        width: 80vw;
        height: 80vh;
      }
      @media only screen and (min-width: 1024px) {
        width: 70vw;
        height: 50vh;
      }
      @media only screen and (min-width: 1280px) {
        width: 30vw;
        height: 80vh;
      }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 30%;
    width: 80%;
`; 

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 20%;
    width: 100%;
`;

const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ForgetPassword = styled.h4`
  cursor: pointer;
`;
