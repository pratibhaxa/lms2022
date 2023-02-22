import React, { Component, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    /* display: flex;
    justify-content: center;
    align-items: center; */
`;

const Heading = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Back = styled.div`
    
`;

const Table = styled.table`
    background-color: #f6e4e4;
`;

const TableContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Tr = styled.tr`
`;

const Td = styled.td`
`;

const Action = styled.div`
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

function AddNewBook() {

    const [idUI, setId] = useState('');
    const [titleUI, setTitle] = useState('');
    const [authorUI, setAuthor] = useState('');
    const [descriptionUI, setDescription] = useState('');
    const [dopublishUI, setDopublish] = useState('');
    const [priceUI, setPrice] = useState('');
    // const [doentry] = new Date();
    const [isbestsellerUI, setIsbestseller] = useState('');

    const addBook = () => {
        Axios.post('http://localhost:3001/add-new-book-draft', {
            idUI: idUI,
            titleUI: titleUI,
            authorUI: authorUI,
            descriptionUI: descriptionUI,
            dopublishUI: dopublishUI,
            priceUI: priceUI,
            isbestsellerUI: isbestsellerUI
        }).then((response) => {
            console.log(response.data);
        });
    };

    return(
        <Container>
            <Header>Library Management System</Header>
            
            <ContainerInner>
                <Back><Link to='/after-login-page'>Back</Link></Back>
                
                    <Heading>Enter Book Details : </Heading>
                    <br />
                    <TableContainer>
                    <Table>
                        <Tr>
                            <Td>Enter Book ID : </Td>
                            <Td>
                                <input 
                                    type="text" 
                                    placeholder="Book ID" 
                                    onChange={(e) => {
                                        setId(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Book Name : </Td>
                            <Td>
                                <input 
                                    type="text" 
                                    placeholder="Book Name" 
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Book Description : </Td>
                            <Td>
                                <input 
                                    type="text" 
                                    placeholder="Book Description" 
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Book Price : </Td>
                            <Td>
                                <input 
                                    type="number" 
                                    placeholder="Book Price" 
                                    onChange={(e) => {
                                        setPrice(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Author Name : </Td>
                            <Td>
                                <input 
                                    type="text" 
                                    placeholder="Author Name" 
                                    onChange={(e) => {
                                        setAuthor(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            <Td>Enter Published Date : </Td>
                            <Td>
                                <input 
                                    type="date" 
                                    placeholder="Published Date" 
                                    onChange={(e) => {
                                        setDopublish(e.target.value)
                                    }}
                                />
                            </Td>
                        </Tr>
                        <br />
                        <Tr>
                            {/* <Td>Is it a Bestseller : </Td>
                            <Td>
                                <input 
                                    type="checkbox" 
                                    onChange={(e) => {
                                        setIsbestseller(e.target.value)
                                    }}
                                />
                            </Td>
                            <Td></Td> */}
                        </Tr>
                        {/* <br /> */}
                        {/* <Tr>
                        {new Date().toLocaleString() + ""}
                        </Tr> */}
                    </Table>
                    </TableContainer>
                    <br />
                    <Action></Action>
                    <br />
                    <Button><button type="button" onClick={addBook}>Add Book to Library</button></Button>
                </ContainerInner>
        </Container>
    )

    /* book id uuid timestamp
    title 
    author 
    short description
    dop date of publish
    price
    date of entry into db
    book details - last mod date
    is bestseller

    */
}

export default AddNewBook;