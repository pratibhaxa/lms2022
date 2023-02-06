import React, { Component } from "react";
import styled from "styled-components";
import LocalLibraryOutlined from '@mui/icons-material/LocalLibraryOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import bookImage from '../images/bookimage.png';

const Container = styled.div`
    background-color: teal;
    /* height: 100%;
    width: 100%;
    align-content: center; */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Wrapper = styled.div`
    height: 65%;
    display: flex;
    width: 65%;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 30px;
    box-shadow: 0px 10px 8px darkslategray;
`;

const ContentBox= styled.div`
    background-color: whitesmoke;
    width: 50%;
    height: 100%;
    /* padding-left: 50px; */
    border-radius: 30px 0px 0px 30px;
    /* margin-left: 0;
    margin-right: auto;
    margin-top: 200px; */
    /* position: relative;
    top: 0;
    bottom: auto;
    left: 0;
    right: 0; */
`;

const Heading = styled.h2`
    padding-top: 50px;
    padding-left: 40px;
    /* padding-bottom: 50px; */
`;

const InputBox = styled.div`
    height: 100%;
    /* display: flex; */
    width: 100%;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
`;

const Label = styled.label`
`;

const Input = styled.div`
`;

const Form = styled.form`
    border-radius: 30px 30px 30px 30px;
    margin-top: 50px;
    padding-top: 20px;
    padding-bottom: 50px;
    /* padding-left: 20px; */
    /* background-color: red; */
    border-style: solid;
    align-items: center;
    justify-content: center;
    display: flex;
`;

const Table = styled.table`
    /* display: flex; */
    background-color: whitesmoke;
`;

const Tr = styled.tr`
    /* display: flex; */
`;

const Td = styled.td`
    /* display: flex; */
`;

// const ImgContainer = styled.div`
//     /* flex: 1;
//     height: 100%; */
//     background-color: #f5dbc4;
//     align-content: center;
//     /* position: relative;
//     top: 0;
//     bottom: auto;
//     left: 0;
//     right: 0; */
//     width: 50%;
//     /* height: 100%; */
//     padding-top: 150px;
//     border-radius: 0px 30px 30px 0px;
//     display: flex;
//     justify-content: center;

// `;

const ImgContainer = styled.div`
    height: 80%;
    /* display: flex; */
    width: 40%;
    /* margin-top: 150px; */
    margin-left: auto;
    margin-right: auto;
    /* background-color: black; */
`;

const Image = styled.img`
    /* height: 40%; */
    /* width: 200px;
    height: 150px; */
    /* position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    /* padding-top: 100px;
    padding-left: 50px; */
    /* margin-left: 400px; */
    /* margin-right: auto; */
    /* background-color: red; */
    height: 65%;
    /* display: flex; */
    width: 45%;
    margin-top: 150px;
    margin-left: 0;
    margin-right: 0;
`;

class StartPage extends Component {
    render() {
        return(
            <Container>
                <Wrapper>
                    <ContentBox>
                        {/* {LocalLibraryOutlinedIcon} */}
                        <Heading>LMS</Heading>
                        <InputBox>
                        <Label>Full Name</Label>
                        <Input>
                            <input
                                type="text"
                            />
                        </Input>
                        <Label>Email</Label>
                        <Input>
                            <input
                                type="text"
                            />
                        </Input>
                        <Label>Username</Label>
                        <Input>
                            <input
                                type="text"
                            />
                        </Input>
                        <Label>Password</Label>
                        <Input>
                            <input
                                type="text"
                            />
                        </Input>
                        <Label>Confirm Password</Label>
                        <Input>
                            <input
                                type="text"
                            />
                        </Input>
                        </InputBox>
                        
                        {/* {LocalLibraryOutlined} */}
                        {/* <Form action="">
                            <Table>
                            <Tr>
                                <Td><label htmlFor="username">Full Name : </label></Td>
                                
                                <Td><input type="text" autoComplete="off" value="testing" name="username" placeholder="Enter Full Name" id="username" /></Td>   
                            </Tr>
                            <br />
                            <Tr>
                                <Td><label htmlFor="email">Email : </label></Td>
                                <Td><input type="text" autoComplete="off" value="testing" name="email" placeholder="Enter Email ID" id="email" /></Td>
                            </Tr>
                            <br />
                            <Tr>
                                <Td><label htmlFor="phone">Phone : </label></Td>
                                <Td><input type="text" autoComplete="off" value="testing" name="phone" placeholder="Enter Phone number" id="phone" /></Td>
                            </Tr>
                            <br />
                            <Tr>
                                <Td><label htmlFor="password">Password : </label></Td>
                                <Td><input type="text" autoComplete="off" value="testing" name="password" placeholder="Enter Password" id="password" /></Td>
                            </Tr>
                            </Table>
                            <br />
                            
                        </Form> */}
                    </ContentBox>
                    <ImgContainer>
                        {/* <Image src = {bookImage} /> */}
                    </ImgContainer>
                </Wrapper>
            </Container>
        )
    }
}

export default StartPage;