import { Button } from "@mui/material";
import styled from "styled-components";


export const TopbarDiv = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 10vh;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    gap: 2%;
    /* border: 1px solid red; */
    `;

export const LeftTopDiv = styled.div`
    flex: 0.2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    /* border: 1px solid red; */
    `;

export const RightTopDiv = styled.div`
    flex: 0.8;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    /* border: 1px solid red; */
`;

export const CtaButton = styled.button`
    border: 0;
    outline: 0;
    margin: 0;
    /* min-width: 182px; */
    color: #fff;
    /* width: 100px; */
    padding: 0 25px;
    font-size: 20px;
    font-weight: 600;
    height: 50px;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-family: 'SF Pro Display';
    background-color: ${(prop) => prop.bg};
    box-shadow: 0px 20px 40px rgba(153, 153, 153, 0.25);
    & p{
        padding: 0;
        margin: 0 0 0 10px;
        width: 37px;
        height: 37px;
        color: #424242;
        font-size: 20px;
        font-weight: 600;
        border-radius: 50%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ProileBtn = styled(Button)`
    color: #000;
    text-transform: capitalize;
    letter-spacing: 2px;
    font-family: 'SF Pro Display';
    background-color: transparent;
    &:hover, &:focus{
        color: #000;
        background-color: transparent;
    }
`;