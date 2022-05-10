import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
    height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const Group = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.5rem 1rem;
    border-radius: 3rem;
    overflow: hidden;
    position: relative;
    display: flex;
    width: 420px;
    justify-content: space-between;
    box-shadow: rgb(15 17 27) -1px -1px 2px;
`;
const TapOne = styled.div`
    border: none;
    background: none;
    padding: 1rem 2rem;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 700;
    outline: none;
    z-index: 2;

    &:hover {
        cursor: pointer;
    }
`;
const TapTwo = styled.div`
    border: none;
    background: none;
    padding: 1rem 2rem;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 700;
    outline: none;
    z-index: 2;

    &:hover {
        cursor: pointer;
    }
`;
const TapThree = styled.div`
    border: none;
    background: none;
    padding: 1rem 2rem;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 700;
    outline: none;
    z-index: 2;

    &:hover {
        cursor: pointer;
    }
`;
const Bg = styled.div`
    background-color: rgb(254, 84, 0);
    height: 100%;
    border-radius: 3rem;
    top: 0;
    z-index: -1;
    position: absolute;
    box-shadow: rgb(15 17 27) 2px 2px 4px, rgb(47 50 75) -2px -2px 4px;
    ${(props) => {
        switch (props.tapIndex) {
            case 1:
                return `
                width: 180px;
                left: 0;
                transition: 0.3s ease-in-out;
                `;
            case 2:
                return `
                width: 170px;
                left: 33%;
                transition: 0.3s ease-in-out;
                `;
            case 3:
                return `
                width: 170px;
                left: 63%;
                transition: 0.3s ease-in-out;
                `;
            default:
                return `
                width: 180px;
                left: 0;
                transition: 0.3s ease-in-out;
                `;
        }
    }}
`;

export const SlideBtnList = () => {
    const [toggle, setToggle] = useState(1);
    const handleChange = (idx) => (selected) => {
        setToggle(idx);
    };
    return (
        <Main>
            <Group>
                <TapTwo onClick={handleChange(1)}>DefiFolio</TapTwo>
                <TapOne onClick={handleChange(2)}>NFT</TapOne>
                <TapThree onClick={handleChange(3)}>History</TapThree>
                <Bg tapIndex={toggle} />
            </Group>
        </Main>
    );
};
