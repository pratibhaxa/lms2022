import React, { Component, useState } from "react";
import Axios from 'axios';
import styled from "styled-components";
import Header1 from "../../src/components/Header1";
import Header2 from "../../src/components/Header2";
// import Header1 from "..Header1";
// import Header2 from "../../../src/components/Header2";

const Container = styled.div`
`;

const InnerContainer = styled.div`
`;

const Heading = styled.h1`
`;

const Label = styled.label`
`;

const Input = styled.div`
`;

const Button = styled.button`
`;

function SignupDraft() {

    // to capture the value from input fields
    const [usernameReg, setusernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');

    const [usernameLog, setusernameLog] = useState('');
    const [passwordLog, setpasswordLog] = useState('');

    const [loginStatus, setloginStatus] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            usernameReg: usernameReg, 
            passwordReg: passwordReg
        }).then((response) => {
            console.log(response.data);
        });
    };

    const login = () => {
        Axios.post('http://localhost:3001/login', {
            usernameLog: usernameLog, 
            passwordLog: passwordLog
        }).then((response) => {
            if(response.data.message) {
                // if entered details dont exist in db then print terror message
                setloginStatus(response.data.message)
            } 
            else {
                // otherwise print the username
                setloginStatus('username is ' + response.data[0].username)
            }
        });
    };

    return(
            <Container>
                <Header1 />
                <Header2 />
                <InnerContainer>
                    <Heading>Registration</Heading>
                    <Label>Username</Label>
                    <Input>
                        <input 
                            type="text" 
                            onChange={(e) => {
                                setusernameReg(e.target.value)
                                }
                            }
                        />
                    </Input>
                    <Label><label>Password</label></Label>
                    <Input>
                        <input 
                            type="text" 
                            onChange={(e) => {
                                setpasswordReg(e.target.value)
                                }
                            }
                        />
                    </Input>
                    <Button><button onClick={register}> Register </button></Button>
                </InnerContainer>
                <InnerContainer>
                    <Heading>Login</Heading>
                    <Input>
                        <input 
                            type="text" 
                            placeholder="Username"
                            onChange={(e) => {
                                setusernameLog(e.target.value)
                            }}
                        />
                    </Input>
                    <Input>
                        <input 
                            type="password" 
                            placeholder="Password"
                            onChange={(e) => {
                                setpasswordLog(e.target.value)
                            }}
                        />
                    </Input>
                    <Button><button onClick={login}> Login </button></Button>
                    <Heading>{loginStatus}</Heading>
                </InnerContainer>
            </Container>
        )
}

export default SignupDraft;
