import React, { memo } from 'react'
import People from './People'
import styled from 'styled-components';

const Preloader = styled.div`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const WrapperPreload = styled.div`
    display:flex;
`;

const PeopleContainer = (props) => {
    return (
        !!props.isFetching 
        ? <WrapperPreload><Preloader/>Loading</WrapperPreload>
        : <People {...props} />
    )
}

export default memo(PeopleContainer)