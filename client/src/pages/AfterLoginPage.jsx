// import { Container } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import book from '../images/bookimagedemo.png';

const Container = styled.div`
    background-color: #fff7f2;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
`;

const Header = styled.div`
    background: rgb(168,159,151);
    background: linear-gradient(158deg, rgba(168,159,151,1) 0%, rgba(120,108,98,1) 51%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    height: 60px;
    font-size: larger;
`;

const Body = styled.div`
    font-size: large;
    margin: 20px;
`;

const Wrapper = styled.div`
    
`;

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AddBook = styled.div`
    margin: 40px;
    width: 300px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        background-color: #b8b8b8;
        /* border-color: black; */
    }
`;

const ViewBook = styled.div`
    margin: 40px;
    width: 300px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        background-color: #b8b8b8;
        border-color: black;
    }
`;

const ModifyBook = styled.div`
    margin: 40px;
    width: 300px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        background-color: #b8b8b8;
        border-color: black;
    }
`;

const Wishlist = styled.div`
    
`;

const Profile = styled.div`
    margin: 40px;
    width: 300px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    cursor: pointer;
    /* border-style: solid; */
    &:hover {
        transform: scale(1.02);
        background-color: #b8b8b8;
        border-color: black;
        /* border-style: solid; */
    }
`;

const Footer = styled.footer`
    position: absolute;
    bottom: 0;
    background-color: lightgray;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
`;

function AfterLoginPage () {
    return(
        <Container>
            {/* <Header>
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
            </Header> */}
            <Header>Library Management System</Header>
            <Body>
                Select action you want to perform :
            </Body>
            <Wrapper>
                <Contents>
                    <AddBook>
                        <Link to='/add-new-book' style={{width: "300px", textDecoration: "none", textDecorationColor: "black", backgroundColor: "lightgray", color: "black", display: "flex", justifyContent: "center"}}>Add New Book</Link>
                    </AddBook>
                    <ViewBook>
                        <Link to='/view-books' style={{width: "300px", textDecoration: "none", textDecorationColor: "black", backgroundColor: "lightgray", color: "black", display: "flex", justifyContent: "center"}}>View Books</Link>
                    </ViewBook>
                </Contents>
                <Contents>
                    <ModifyBook>
                        <Link to='/home-page' style={{width: "300px", textDecoration: "none", textDecorationColor: "black", backgroundColor: "lightgray", color: "black", display: "flex", justifyContent: "center"}}>Modify Book Details</Link>
                    </ModifyBook>
                    <Profile>
                        <Link to='/home-page' style={{width: "300px", textDecoration: "none", textDecorationColor: "black", backgroundColor: "lightgray", color: "black", display: "flex", justifyContent: "center"}}>Profile</Link>
                    </Profile>
                </Contents>
            </Wrapper>
            <Footer>This is a footer</Footer>
        </Container>
    )
}

export default AfterLoginPage;