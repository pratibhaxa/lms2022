import Axios from 'axios';
// import { response } from 'express';
import React, { Component } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
// import StartPage from './pages';

const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

function Login () {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response.data);
        });
    };

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response) => {
            if(response.data.message) {
                setLoginStatus(response.data.message);
            } 
            else {
                setLoginStatus(response.data[0].username);
            }
        });
    };

    // const viewStartPage = () => {
    //     if(setLoginStatus.length > 0) {
    //         <StartPage/>
    //     }
    // }

        return (
            // <Container>
                <div>
                    <div>
                        <h1>Registration</h1>
                        <label>Username</label>
                        <input 
                            type="text" 
                            onChange={(e) => {
                                setUsernameReg(e.target.value);
                            }}
                        />
                        <br/>
                        <label>Password</label>
                        <input 
                            type="text" 
                            onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }}
                        />
                        <br/>
                        <button onClick={register}>Register</button>
                    </div>
                    <div>
                        <h1>Login</h1>
                        <input 
                            type="text" 
                            placeholder='Username' 
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                        <br/>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <br/>
                        <button onClick={login}>Login</button>
                    </div>
                    <h1>{loginStatus}</h1>
                </div>
            // </Container>
        )
        
}

export default Login;