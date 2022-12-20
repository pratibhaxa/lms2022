import React, { Component, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";

const Container = styled.div`

`;

const ContainerInner = styled.div`
    /* display: flex; */
`;

const Heading = styled.h2`
    display: flex;
`;

const Table = styled.table`
    background-color: whitesmoke;
`;

const Tr = styled.tr`
`;

const Td = styled.td`
`;

const Action = styled.div`
`;

const Button = styled.div`
`;

function AddNewBookDraft() {

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
            <Header1 />
            <Header2 />
            <ContainerInner>
                    <Heading>Enter Book Details : </Heading>
                    <br />
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
                            <Td>Is it a Bestseller : </Td>
                            <Td>
                                <input 
                                    type="checkbox" 
                                    onChange={(e) => {
                                        setIsbestseller(e.target.value)
                                    }}
                                />
                            </Td>
                            <Td></Td>
                        </Tr>
                        <br />
                        <Tr>
                        {new Date().toLocaleString() + ""}
                        </Tr>
                    </Table>
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

export default AddNewBookDraft;