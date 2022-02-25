import React, { useState, useEffect, useCallback } from 'react';
import { Button, Col, Container, Form, Row, InputGroup } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import login from "../../assets/img/login.png";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { pink } from '@mui/material/colors';
import { useDispatch, useSelector } from "react-redux";

import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';

import { clearMessage } from "../../../features/login/slices/massege";
import { logins } from "../../../features/login/slices/auth";
import Preloader from '../preloader.jsx';
function Login1() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 

  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const [vailidUsername, setVailidUsername] = useState('')
  const [vailidPassword, setVailidPassword] = useState('')
  const [reCaptcha, setReCaptcha] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    username: "",
    password: "",
  };
  const userNameValidation = (e) => {
    setUsername(e.target.value);
    username.length ? setVailidUsername("") : null
  }
  const passwordValidation = (e) => {
    setPassword(e.target.value);
    password.length ? setVailidPassword("") : null
  }

  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    (async () => {
      try {
        const token = await executeRecaptcha('signup');
        setReCaptcha(token);
        console.log(token)
      } catch (error) {
        console.log(error.response);
      }
    })();
    // Do whatever you want with the token

  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);


  const btnLoginHandle = function (e) {
    e.preventDefault();
     handleReCaptchaVerify();

    console.log(reCaptcha);
    console.log(username);
    console.log(password);
    username.length ? null : setVailidUsername('Email Is Required')
    password.length ? null : setVailidPassword('Password Is Required')
    if (username.length && password.length && reCaptcha) {
      setLoading(true)
      dispatch(logins({ username, password }))
        .unwrap()
        .then(() => {
          props.history.push("/dashboard");
          window.location.reload();
        })
        .catch((e) => {
          console.log("erroooor",e)
          setLoading(false);
        });
    }



    // console.log(loading);

  }
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.value);
  }
  if (isLoggedIn) {
    return(<>
      <Preloader/>
      <Navigate to="/dashboard" />
    </>);
  }
  if(loading){
    return <Preloader/>
  }

  return <>
    <div className="auth-wrapper">
      <Container>
        <div className="login-form">
          <Row className="row min-vh-100 align-items-center">
            <Col xs={6} className="image-holder">
              <img src={login} className="App-logo" alt="login image" />
            </Col>
            <Col xs={6} className="login-form-wrapper form">
              <div className="logo-wrapper">
                <img src={logo} width="100" className="App-logo" alt="login image" />
              </div>
              <h1>Welcome to <span className="text-blue">QMS </span></h1>

              <Form autoComplete="off" className="has-label-on-border" onSubmit={handleSubmit}>
                <InputGroup hasValidation>
                  <Form.Group className="col-12 mb-3 form-group" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Address&nbsp;<span className="asterisk">*</span></Form.Label>
                    <Form.Control type="email" placeholder="Email" name="uname" isInvalid={vailidUsername.length} value={username} onChange={userNameValidation} required />
                    <Form.Control.Feedback type='invalid'>{vailidUsername}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="col-12 mb-3 form-group " controlId="exampleForm.ControlInput1">
                    <Form.Label>Password&nbsp;<span className="asterisk">*</span></Form.Label>
                    <div className="password-wrapper">
                      <Form.Control type={passwordShow ? "text" : "password"} isInvalid={vailidPassword.length} placeholder="" name="pass" value={password} onChange={passwordValidation} required />
                      <Form.Control.Feedback type='invalid'>{vailidPassword}</Form.Control.Feedback>
                      <a className="togglePassword" onClick={togglePassword}>{passwordShow ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}</a>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3 col-12" >
                    <Row>
                      <Col xs={6}>
                      <Button variant="primary" type="submit" disabled={loading} className="btn btn-primary mt-3" onClick={btnLoginHandle} >

Submit&nbsp; 
  <ArrowForwardIcon />

</Button>
                      </Col>
                      <Col xs={6} className="d-flex flex-row-reverse">
                        <Link to="/forgot-password" className="forgot-pass-link btn-link">Forgot Password?</Link>
                      </Col>
                    </Row>
                  </Form.Group>
                </InputGroup>
                
                {/* <button onClick={handleReCaptchaVerify}>Verify recaptcha</button> */}
              </Form>

            </Col>
          </Row>
        </div>
      </Container>

    </div>
  </>;
}


const Login = () => {
  return (
    <GoogleReCaptchaProvider
      scriptProps={{ async: true }}
      reCaptchaKey="6LdbKWIeAAAAAEEIK7Ng6nK3TYzNIrPCCf0KMlP_">
      <Login1 />
    </GoogleReCaptchaProvider>
  )
}
export default Login;
