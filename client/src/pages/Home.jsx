import React, { Component } from 'react';
import styled from 'styled-components';
import Header1 from '../components/Header1';
import Header2 from '../components/Header2';

const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

class Home extends Component {
    render() {
        return (
            <Container>
                <Header1 />
                <Header2 />
            </Container>
        )
    }
}

export default Home;