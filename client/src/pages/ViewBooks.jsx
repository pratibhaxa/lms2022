// import { Container } from "@mui/material";
import Axios from "axios";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const ContainerInner = styled.div`

`;

const Back = styled.div`
    
`;

const Table = styled.table`
    
`;

const Tr = styled.tr`
    
`;

const Td = styled.td`
    
`;

const Th = styled.th`
    
`;

function ViewBooks() {

    const [postData, setPostData] = useState('');

    React.useEffect(() => {
        Axios.get('http://localhost:3001/viewBooks').then((response) => {
            setPostData(response.data);
            console.log(response.data);

        });
    }, []);

    var Book1 = postData[1];

    if (!postData) return null;

    let showData=postData.map((book)=>
            <Tr>
                <Td>{book.id}</Td>
                <Td>{book.title}</Td>
                <Td>{book.author}</Td>
                <Td>{book.description}</Td>
                <Td>{book.dopublish}</Td>
                <Td>{book.price}</Td>
                {/* <Td>{book.isbestseller}</Td> */}
            </Tr>)

    return(
        <Container>
            <Header>Library Management System</Header>
            <ContainerInner>
                <Back><Link to='/after-login-page'>Back</Link></Back>
            </ContainerInner>
            <Table>
                <Tr>
                    <Th>Book ID</Th>
                    <Th>Book Title</Th>
                    <Th>Author Name</Th>
                    <Th>Description</Th>
                    <Th>Date of Publish</Th>
                    <Th>Price</Th>
                    {/* <Th>is Bestseller ?</Th> */}
                </Tr>
                {showData}
            </Table>
            {/* {postData[0].author}
            {/* <br/>/ */}
            {/* {postData[0].title} */}
            <br/>
            
            {/* <button onClick={viewBooks}>Register</button> */}
        </Container>
    )
}

export default ViewBooks;