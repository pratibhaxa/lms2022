import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding-top: 30px;
    width: 300px;
    margin: auto;
`

const Input = styled.input`
    padding: 5px 15px;
    width: 300px;
`;

const  UserList = styled.div`
    margin-top: 30px;
`;

const Li = styled.li`
    list-style: none;
    margin: 10px 0;
    padding: 10px;
    background: #eee;
    display: flex;
    justify-content: space-between;
`;

const UserID = styled.span`
    color: red;
    margin-right: 20px;
`;

const UserName = styled.span`
    color: blue;
`;

const UserAge = styled.span`
    margin-left: auto;
`;

const H1 = styled.h1`
    
`;

function Filter () {

    const USERS = [
        { id: 1, name: 'Andy', age: 32 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Tom Hulk', age: 40 },
        { id: 4, name: 'Tom Hank', age: 50 },
        { id: 5, name: 'Audra', age: 30 },
        { id: 6, name: 'Anna', age: 68 },
        { id: 7, name: 'Tom', age: 34 },
        { id: 8, name: 'Tom Riddle', age: 28 },
        { id: 9, name: 'Bolo', age: 23 },
      ];

      // value of search field
      const [name, setName] = useState('');

      // search result
      const [foundUsers, setFoundUsers] = useState(USERS);

      const  filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundUsers(results);
        } 
        else {
            setFoundUsers(USERS);
        }
        setName(keyword);
      };

    return (
        <Container>
            <Input 
                type="search" 
                value={name} 
                onChange={filter}
                placeholder="Filter"
            />
            <UserList>
                {(foundUsers != null && foundUsers.length > 0) ? (foundUsers.map((user) => (
                    <Li key={user.id}>
                        <UserID>{user.id}</UserID>
                        <UserName>{user.name}</UserName>
                        <UserAge>{user.age}</UserAge>
                    </Li>
                ))
                ) : (
                    <H1>No results found!</H1>
                )}
            </UserList>
        </Container>
    )
}

export default Filter;