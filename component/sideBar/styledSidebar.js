import styled from "@emotion/styled";

export const SideBarCon = styled.div`
    width: ${(props) => `${props.width}%`};
    position: fixed;
    top: 12vh;
    height: 88vh;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; 
    background-color: #fff;
    z-index: 10;
    /* border-right: 1px solid red; */
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

