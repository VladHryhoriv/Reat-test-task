import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    width: 100px;
    margin: 20px 0;
    border: none;
    border-radius: 20px;
    height: 30px;
    background: #B8C47F;
`;
const Wrapper = styled.div`
    background: #D7FFFE;
    border-radius: 30px;
`;

const WrapperButton = styled.div`
    display: flex;
    padding: 40px;
    flex-wrap: wrap;
    align-items: center;
    max-width: 150px;
`;

export const Navbar =React.memo((props)=>{
    return (
        <Wrapper>
            <WrapperButton>
                <NavLink to='/people' ><Button>People</Button></NavLink>
                <NavLink to='/second' ><Button>SecondPage</Button></NavLink>
                <NavLink to='/third' ><Button>ThirdPage</Button></NavLink>
            </WrapperButton>
        </Wrapper>
    )
}) 