import React, { memo } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Contain from './Contain/Contain';
import Footer from './Footer/Footer';

const AppWrapper = styled.div`
    margin:0 auto;
    width:100%;
    max-width:1200px;
    height: 100%; 
    display: flex;
    flex-direction: column;
`;

const Main = (props) => {
    return (
        <AppWrapper>
            <Header />
            <Contain {...props} />
            <Footer />
        </AppWrapper>
    );
};


export default memo(Main);