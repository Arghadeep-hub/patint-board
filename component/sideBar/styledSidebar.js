import styled from "@emotion/styled";

export const SideBarCon = styled.div`
    width: ${(props) => `${props.width}%`};
    position: fixed;
    top: 10vh;
    height: 90vh;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    background-color: #fff;
    z-index: 10;
    /* border: 1px solid red; */
    `;
export const TopMenu = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: ${(props) => props.isCenter ? "flex-start" : "center"};
    flex-direction: column;
    
`;

export const BottomMenu = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: ${(props) => props.isCenter ? "flex-start" : "center"};
    flex-direction: column;
`;

export const FlexDisplay = styled.div`
  width: 100%;
  padding: ${(props) => props.isClicked ? "0 0 0 1%" : "auto"};
  cursor: pointer;
  display: flex;
  justify-content: ${(props) => props.isClicked ? "flex-start" : "center"};
  align-items: center;
  background-color: ${(props) => props.isMatch ? "#DAEFFF" : "transparent"};
  border-left:${(props) => props.isMatch ? "5px solid #76C3FF" : "1px solid transparent"};
`;

export const NavText = styled.h6`
  margin: 0;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.isMatch ? "#76C3FF" : "#616161"};
  cursor: inherit;
  font-family: 'SF Pro Display';
`;

