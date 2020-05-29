import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    return (
        <Wrapper>
            <WrapperButton>
                <NavLink to='/people' ><Button>{t('Users')}</Button></NavLink>
                <NavLink to='/second' ><Button>{t('Second')}</Button></NavLink>
                <NavLink to='/third' ><Button>{t('Third')}</Button></NavLink>
            </WrapperButton>
        </Wrapper>
    )
}

export default memo(Navbar)