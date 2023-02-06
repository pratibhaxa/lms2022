import Axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import signupimage from '../images/signupimage.png';

const Container = styled.div`
    background-color: #fff7f2;
    /* background-color: aqua; */
    /* height: 100%; */
`;

const Header = styled.div`
    /* height: 50%; */
    background: rgb(168,159,151);
    background: linear-gradient(158deg, rgba(168,159,151,1) 0%, rgba(120,108,98,1) 51%);
`;

const Top = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 50px; */
    color: white;
    /* background-color: green; */
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    text-align: center;
    align-items: center;
    margin: 20px;
    margin-left: 200px;
    /* margin-top: 80px; */
    /* cursor: pointer; */
`;

const LeftText = styled.div`
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    /* text-align: center;
    align-items: center; */
    justify-content: flex-end;
    /* margin-top: 80px; */
    
`;

const Text = styled.div`
    margin: 20px;
    margin-left: 60px;
    /* margin-right: 30px; */
    /* background-color: aliceblue; */
    cursor: pointer;
    // when hovered over
    &:hover {
        text-decoration: underline;
        text-decoration-color: black;
    }
`;

const Bottom = styled.div`
    flex: 1;
    display: flex;
    /* padding-top: 50px; */
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
`;

const Image = styled.img`
    width: 100%;
    height: 913px;
`;

const Form = styled.div`
    flex: 1;
    display: flex;
    /* background-color: gray; */
`;

const Wrapper = styled.div`
    margin: auto;
`;

const Label = styled.label`
    font-size: large;
`;

const Input = styled.input`
    width: 250px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #dfdfdf;
    margin: 20px;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
`;

// const Inp = styled.input`
//     width: 250px;
//     height: 30px;
//     border: 1px solid #dfdfdf;
//     margin: 20px;
//     border-radius: 5px;
//     &:focus {
//         outline: none;
//     }
// `;

const Button = styled.button`
    
`;

function SignUpPage () {

    const [fullnameR, setFullnameR] = useState('');
    const [usernameR, setUsernameR] = useState('');
    const [passwordR, setPasswordR] = useState('');
    const [confirmpasswordR, setConfirmpasswordR] = useState('');
    const [emailR, setEmailR] = useState('');

    const signup = () => {
        Axios.post('http://localhost:3001/signup', {
            fullname: fullnameR,
            username: usernameR,
            password: passwordR,
            confirmpassword: confirmpasswordR,
            email: emailR,
        }).then((response) => {
            console.log(response.data);
        });
    };



    return (
        <Container>
            <Header>
                <Top>
                    <Left>
                        <LeftText>Library Management System</LeftText></Left>
                    <Right>
                        <Text><Link to='/home-page' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>HOME</Link></Text>
                        <Text><Link to='/about-page' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>ABOUT</Link></Text>
                        <Text><Link to='/sign-up-page' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>SIGN UP</Link></Text>
                        <Text style={{marginRight: "200px"}}><Link to='/sign-in-page' style={{textDecoration: "none", textDecorationColor: "black", color: "white"}}>SIGN IN</Link></Text>
                    </Right>
                </Top>
            </Header>
            <Bottom>
                <ImageContainer>
                    <Image src={signupimage}/>
                </ImageContainer>
                <Form>
                    <Wrapper>
                        <Label>Full Name : </Label>
                        <br/>
                        <Input 
                            type="text" 
                            placeholder="Full Name"
                            onChange={(e) => {
                                setFullnameR(e.target.value);
                            }}
                        />
                        <br/>
                        <Label>Email ID : </Label>
                        <br/>
                        <Input
                            type="text" 
                            placeholder="Email ID"
                            onChange={(e) => {
                                setEmailR(e.target.value);
                            }}
                        />
                        <br/>
                        <Label>Username : </Label>
                        <br/>
                        <Input 
                            type="text" 
                            placeholder="Username"
                            onChange={(e) => {
                                setUsernameR(e.target.value);
                            }}
                        />
                        <br/>
                        <Label>Password : </Label>
                        <br/>
                        <Input
                            type="text" 
                            placeholder="Password"
                            onChange={(e) => {
                                setPasswordR(e.target.value);
                            }}
                        />
                        <br/>
                        <Label>Confirm Password : </Label>
                        <br/>
                        <Input
                            type="text" 
                            placeholder="Password"
                            onChange={(e) => {
                                setConfirmpasswordR(e.target.value);
                            }}
                        />
                        <br/>
                        <Button onClick={signup}>SignUp</Button>
                        <br/>
                        {}
                    </Wrapper>
                    
                </Form>
            </Bottom>
            
        </Container>
    )
}

export default SignUpPage;