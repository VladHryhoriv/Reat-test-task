import React, { memo } from 'react';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';
import PeopleContainer from '../FirstPage/PeopleContainer';
import SecondPage from '../SecondPage/SecondPage';
import Third from '../ThirdPage/Third';
import i18next from 'i18next';

const MainContain = styled.div`
    flex: 1 0 auto;
`;

const Language = styled.select`
    font-size: 26px;
    font-weight: 700;
    font-family: 'Lato-Regular','Lato-Medium';
    border:none;
    background: rgba(0, 0, 0, 0);
`;

const Contain = (props) => {
    const handleClick = (lang) => {
        i18next.changeLanguage(lang)
      }
    return (
        <MainContain>
            <div>
                <Language onChange={(e)=>{
                    handleClick(e.target.value)
                }} defaultValue="en">
                    <option value='ru' onClick={handleClick('ru')}>RU</option>
                    <option value='uk' onClick={handleClick('uk')}>UK</option>
                    <option value='en' onClick={handleClick('en')}>EN</option>
                </Language>
            </div>
            <Route path='/people' render={() => <PeopleContainer {...props} />} />
            <Route path='/second' render={() => <SecondPage />} />
            <Route path='/third' render={() => <Third />} />
            <Route path='*' redact={() => <div>404 NOT FOUND</div>} />
            <Redirect from='/' to='/people' />
        </MainContain>
    );
};


export default memo(Contain);