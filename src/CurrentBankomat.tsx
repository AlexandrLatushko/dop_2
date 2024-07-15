import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";




export const CurrentBankomat = ({banknote,nominal,id}:MoneyType) => {
    // с деструктуризацией пожалуйста
    return (
        <div>
            {/* {banknote==='USD'
            ? <BanknoteGreen>
                <Name>{banknote}</Name>
                <Nominal>{nominal}</Nominal>
            </BanknoteGreen>
            : <BanknoteBlue>
              <Name>{banknote}</Name>
              <Nominal>{nominal}</Nominal>
            </BanknoteBlue>
            } */}

            <Banknote color={banknote==='USD' ? 'aquamarine' : 'lightskyblue'}>
                <Name>{banknote}</Name>
                <Nominal>{nominal}</Nominal>
            </Banknote>
        </div>
    );
};

type BanknotePropsType = {
  color: 'aquamarine' | 'lightskyblue'
}

const Banknote = styled.div<BanknotePropsType>`
  background-color: ${props=>props.color};
  width: 200px;
  height: 100px;
  margin: 5px;
`


const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 45px;
`
