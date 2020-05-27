import React, { memo } from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import PeopleContainer from '../FirstPage/PeopleContainer';
import SecondPage from '../SecondPage/SecondPage';
import Third from '../ThirdPage/Third';

const MainContain = styled.div`
    flex: 1 0 auto;
`;

const Contain = props => {
    return (
        <MainContain>
            <Route path='/people' render={() => <PeopleContainer {...props} />} />
            <Route path='/second' render={() => <SecondPage />} />
            <Route path='/third' render={() => <Third />} />
            <Route path='*' redact={() => <div>404 NOT FOUND</div>} />
            <Redirect from='/' to='/people' />
        </MainContain>
    );
};


export default memo(Contain);