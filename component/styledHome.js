import { Button, Checkbox, IconButton } from "@mui/material";
import styled from "styled-components";


export const HomeDiv = styled.div`
  background-color: #f5f5f5;
  padding: 0 0.5rem 0 1rem;
  width: ${(props) => `${100 - (props.width)}vw`};
  height: 90vh;
  position: relative;
  top: 10vh;
  left: ${(props) => `${props.width}%`};
  /* border: 1px solid black; */
`;
export const Small = styled.h6`
  font-weight: 700;
  font-size: 12px;
  color: #383838;
  text-transform: capitalize;
  margin: 0;
  text-align: center;
  font-family: 'SF Pro Display';
  white-space: nowrap;
`;
export const Para = styled.p`
  margin: 0;
  text-transform: capitalize;
  text-align: start;
  font-size: ${(param) => param.fontSize ? `${param.fontSize}px` : "16px"};
  font-weight: ${(param) => param.fw ? param.fw : "400"};
  color: ${(param) => param.color};
  white-space: nowrap;
  font-family: 'SF Pro Display';
`;

export const Nowrap = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  width: inherit;
`;
export const Indicator = styled.p`
  margin: 0 15px;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.color};
  white-space: nowrap;
  font-family: 'SF Pro Display';
`
export const Visible = styled(Button)`
  color: #fff;
  padding: 0 1rem;
  background-color: #8085E9;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  white-space: nowrap;
  text-transform: capitalize;
  box-shadow: 0px 20px 40px rgba(153, 153, 153, 0.1);
  font-family: 'SF Pro Display';
  &:focus, &:hover{
    box-shadow: 0px 20px 40px rgba(153, 153, 153, 0.1);
    background-color: #8085E9;
  }
`;
export const SideBtn = styled(Button)`
  width: 62px;
  color: #fff;
  height: 61px;
  border-radius: 10px;
  background: #76C3FF;
  box-shadow: 0px 20px 40px rgba(153, 153, 153, 0.1);
  font-family: 'SF Pro Display';
  &:focus, &:hover{
    box-shadow: 0px 20px 40px rgba(153, 153, 153, 0.1);
    background-color: #76C3FF;
  }
`;
export const H6 = styled(Small)`
  font-size: 20px;
  color : #474747;
`;

export const MesrInpt = styled.input`
  width: 110px;
  background: #ffffff;
  border: 2px solid #DEDEDE;
  border-radius: 12px;
  box-shadow: 0px 15px 30px rgba(206, 206, 206, 0.13);
  margin: 0 1rem;
`;

export const TextArea = styled.textarea`
  resize: none;
  background: #FFFFFF;
  border: 1px solid #DEDEDE;
  box-shadow: 0px 15px 30px rgba(151, 151, 151, 0.1);
  border-radius: 10px;
  height: 74px;
  width:85%;
  padding: 10px;
  font-size: 16px;
  &:focus, &:hover{
    outline: 1px solid #DEDEDE;
  }
`;

export const MediaBtn = styled(IconButton)`
  width: 40px;
  height: 40px;
  background: ${(prop) => prop.selected ? "#76C3FF" : "#DFE2E9"};
  color: #fff;
  border-radius: 50%;
  font-size: 18px;
  margin: 0 10px 0 0;
  &:hover, &::selection, &:focus{
    background-color: #76C3FF;
  }
`;

export const Strip = styled(Button)`
  min-width: 156px;
  height: 34px;
  background-color: ${(props) => props.bcl};
  box-shadow: 0px 20px 40px rgba(115, 187, 191, 0.1);
  border-radius: 10px;
  text-transform: capitalize;
  color: #fff;
  padding: 0 10px;
  margin: 0 0 0 10px;
  &:hover, &:focus{
    background-color: ${(props) => props.bcl};
    color: #fff;
  }
`;
export const CheckBox = styled(Checkbox)`
  color: #fff;
  margin: 0;
  padding: 0;
  
`;