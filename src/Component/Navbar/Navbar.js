import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
    border: none;
    border-radius: 20px;
    background: white;
    font-size: 18px;
    padding: 5%;
    cursor: pointer;
`;
const Wrapper = styled.div`
    width:100%;
`;

const WrapperButton = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-around;
`;

const Navbar = (props) => {
    return (
        <Wrapper>
            <WrapperButton>
                <NavLink to='/people' ><Button>People</Button></NavLink>
                <NavLink to='/second' ><Button>SecondPage</Button></NavLink>
                <NavLink to='/third' ><Button>ThirdPage</Button></NavLink>
            </WrapperButton>
        </Wrapper>
    )
}

export default memo(Navbar)