import React, { memo, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Contain from './Contain/Contain';
import Footer from './Footer/Footer';
import { PeopleAPI } from '../api/api';

const AppWrapper = styled.div`
    margin:0 auto;
    width:100%;
    max-width:1200px;
    height: 100%; 
    display: flex;
    flex-direction: column;
    flex:1 0 auto;
`;

const Main = (props) => {
    const [people, setPeople] = useState(null);
    const [isFetching, setFetching] = useState(true)
    useEffect(() => {
        let api = async () => {
            await PeopleAPI
            .then(response => {
                setPeople(response.data.results)
            })
            .catch(error => { })
            .finally(() => {
                setFetching(false)
            })
        }
        api();
    }, [people])
    return (
        <AppWrapper>
            <Header />
            <Contain people={people} isFetching={isFetching} />
            <Footer />
        </AppWrapper>
    );
};


export default memo(Main);