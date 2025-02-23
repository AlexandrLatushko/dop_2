import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";
import styled from "styled-components";

type CityPropsType = {
    data: MoneyType[]
}

export const City = ({data}:CityPropsType) => {
    
    const mappedMoney = data.map((el: MoneyType, index) => (
        <CurrentBankomat
            key={el.id}
            {...el}
        />
    ))

    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`