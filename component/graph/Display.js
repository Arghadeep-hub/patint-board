import React from 'react'


import styled from 'styled-components'

const DisPlay = styled.div`
    /* border: 2px solid #777777; */
    width: 100%;
    height: 270px;
    margin: 10px 0;
    overflow: hidden;
`;

const GraphDisplay = styled.div`
    border: 2px solid #777777;
    height: 200px;
    width: 100%;
    /* overflow: auto; */
   
`;
const FullDisplay = styled.div`
    border: 2px solid #777777;
    margin: 10px 0 0 0;
    height: 55px;
    width: 100%;
    background-image: url('/bottomGraph.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: fill;
`;

const Indicator = styled.div`
    width: 224px;
    height: 100%;
    background: #ffdedd6b;
    margin: 0 auto;
`;


function Display() {

    return (
        <DisPlay>
            <GraphDisplay>
               
            </GraphDisplay>

            <FullDisplay>
                <Indicator />
            </FullDisplay>
        </DisPlay>
    )
}

export default Display