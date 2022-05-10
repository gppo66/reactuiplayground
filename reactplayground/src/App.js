import React from "react";
import styled from "styled-components";
import { SlideBtnList } from "./slideBtnList/SlideBtnList";

const Main = styled.div`
    height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const App = () => {
    return (
        <Main>
            <SlideBtnList />
        </Main>
    );
};
