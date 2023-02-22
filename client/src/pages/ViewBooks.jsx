// import { Container } from "@mui/material";
import Axios from "axios";
import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/SearchOutlined';
// import { response } from "express";

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
    /* display: flex; */
`;

const Search = styled.div`
    display: flex;
    height: 30px;
`;

// const SearchIcon = styled.image`
    
// `

const Input = styled.input`
    width: 300px;
    border-radius: 20px;
    height: 30px;
    border-color: transparent;
    &:focus {
        border-color: transparent !important;
        /* border-color: #b6aca5; */
    }
`;

const Back = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
`;

const Filter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Table = styled.table`
    
`;

const Tr = styled.tr`
    text-align: center;
`;

const Td = styled.td`
    width: 200px;
`;

const Th = styled.th`
    width: 200px;
    background-color: #b6aca5;
`;

function ViewBooks() {

    const [postData, setPostData] = useState('');

    const [authorName, setAuthorName] = useState('');
    const [foundAuthorName, setFoundAuthorName]  = useState('');

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = showData.filter((author) => {
                return showData.author.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundAuthorName(results);
        }
        else {
            setFoundAuthorName(showData);
        }
        setAuthorName(keyword);
    };

    React.useEffect(() => {
        Axios.get('http://localhost:3001/viewBooks').then((response) => {
            setPostData(response.data);
            console.log(response.data);

        });
    }, []);

    // var Book1 = showData[1].author;

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
                <Filter>
                    <Search>
                        <Input 
                            type="text" 
                            value={showData.author}
                            onChange={filter}
                            placeholder="Enter keyword" />
                        <SearchIcon style={{height: "35px", cursor: "pointer"}}/>
                    </Search>
                    {/* <AuthorName>
                        {foundAuthorName && foundAuthorName.length > 0 ? (foundAuthorName.map((postData) => (
                            <Li key={postData.id}>

                            </Li>
                        )))}
                    </AuthorName> */}
                </Filter>
            </ContainerInner>
            <br/>
            <br/>
            <TableContainer>
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
                <br/>
                {/* <p>hellooooooo</p> */}
                {/* {postData.id} */}
                {/* {Book1} */}
            </Table>
            </TableContainer>
            <br />
            {/* {postData} */}
            {/* <p>postData[0].author :</p>
            {postData[0].author} */}
            {/* <br/>/ */}
            {/* {postData[0].title} */}
            <br/>
            
            {/* <button onClick={viewBooks}>Register</button> */}
        </Container>
    )
}

export default ViewBooks;