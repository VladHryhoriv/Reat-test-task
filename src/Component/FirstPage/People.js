import React, { memo } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 2px solid;
    border-left: none;
`;

const WrapperPerson = styled.div`
    width: 100%;
    text-align: start;
`;

const WrapperData = styled.div`
    display: flex;
    margin: 20px auto;
    padding: 30px 10px;
    background-color: white;
    max-width: 500px;
    width: 100%;
    justify-content: space-around;
    border: 2px solid #808000;
    border-radius: 50px;
`;

const People = ({people,...props})=>{
    return(
        <Wrapper>
            {people.map((peopleItem,index)=>{
                return <WrapperPerson key={index}>
                    <WrapperData>
                        <div>Name: {peopleItem.name}</div>
                        <div>Hair's color: {peopleItem.hair_color}</div>
                        <div>Height: {peopleItem.height}</div>
                    </WrapperData>
                </WrapperPerson>
            })}
        </Wrapper>
    )
}

export default memo(People)