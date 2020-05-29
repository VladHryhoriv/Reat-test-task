import React, { memo } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-left: none;
`;

const WrapperPerson = styled.div`
    width: 100%;
    text-align: start;
`;

const WrapperData = styled.div`
    display: flex;
    margin: 20px auto;
    background-color: white;
    max-width: 600px;
    width: 100%;
    padding: 1.5%;
    border: 2px solid;
    justify-content: space-around;
    border-radius: 50px; 
`;

const BoldText = styled.span`
    font-weight:bold;
`;

const People = ({ people, ...props }) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            {people.map((peopleItem, index) => {
                return <WrapperPerson key={index}>
                    <WrapperData>
                        <div><BoldText>{t('Name')} </BoldText> {peopleItem.name}</div>
                        <div><BoldText>{t('HairColor')} </BoldText> {peopleItem.hair_color}</div>
                        <div><BoldText>{t('Height')}</BoldText> {peopleItem.height}</div>
                        <div><BoldText>{t('Gender')}</BoldText>{peopleItem.gender}</div>
                    </WrapperData>
                </WrapperPerson>
            })}
        </Wrapper>
    )
}

export default memo(People)