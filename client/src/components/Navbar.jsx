import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: teal;
    display: flex;
    height: 35px;
    /* text-align: center; */
    align-items: center;
    justify-content: center;
`;

class Navbar extends Component {
    render ()  {
        return(
            <Container>
                Library Management System
            </Container>
        )
    }
}

export default Navbar;