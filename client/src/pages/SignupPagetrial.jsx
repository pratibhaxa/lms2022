import React, { Component } from "react";
import styled from "styled-components";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";

const Container = styled.div`
  /* display: flex; */
`;

const Heading = styled.h2`
    display: flex;
`;

const Form = styled.form`
    /* display: flex; */
    /* flex-direction: column; */
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

const Button = styled.div`

`;

class SignupPagetrial extends Component {
    render() {

        // const MultipleInputs = () => {
        //     const [userRegistration, setUserRegistration] = useState({

        //     })
        //     const handleInput =() => {

        //     }
        // }

        return(
            <Container>
                <Header1 />
                <Header2 />
                <Heading>Enter Book Details : </Heading>
                <Form action="">
                    <Table>
                    <Tr>
                        <Td><label htmlFor="username">Full Name : </label></Td>
                        <Td><input type="text" autoComplete="off" value="testing" name="username" placeholder="Enter Full Name" id="username" /></Td>   {/*onChange={handleInput} */}
                    </Tr>
                    <br />
                    <Tr>
                        <Td><label htmlFor="email">Email : </label></Td>
                        <Td><input type="text" autoComplete="off" value="testing" name="email" placeholder="Enter Email ID" id="email" /></Td>{/*onChange={handleInput} */}
                    </Tr>
                    <br />
                    <Tr>
                        <Td><label htmlFor="phone">Phone : </label></Td>
                        <Td><input type="text" autoComplete="off" value="testing" name="phone" placeholder="Enter Phone number" id="phone" /></Td>{/*onChange={handleInput} */}
                    </Tr>
                    <br />
                    <Tr>
                        <Td><label htmlFor="password">Password : </label></Td>
                        <Td><input type="text" autoComplete="off" value="testing" name="password" placeholder="Enter Password" id="password" /></Td>{/*onChange={handleInput} */}
                    </Tr>
                    </Table>
                    <br />
                    {/* <Button><button type="submit">Registration</button></Button> */}
                </Form>
            </Container>
        )
    }
}

export default SignupPagetrial;