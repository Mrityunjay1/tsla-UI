import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

const Wrap=styled.div`

    width:100vw;
    height: 100vh;
    background-image:url('/images/model-x.jpg');
    background-size:cover;
    background-position: center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props=>`url("/images/${props.bgImage}")`};

`
const ItemText =styled.div`
    padding-top:15vh;
    text-align:center;

`
const ButtonGroup =styled.div`
    display:flex;
    margin-bottom:30px;
    cursor:pointer;
    @media (max-width:768px){
        flex-direction:column;
    }


`

const LeftButton =styled.div`
    background-color: gray;
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:14px;
    margin:8px;
`

const RightButton =styled(LeftButton)`
background-color:white;opacity:0.65;
color:black;
`
const Downarrow =styled.img`
margin-top:20px;
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;

`
const Buttons =styled.div``

export default function Section({title,description,rightBtnText, leftBtnText,backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>
                {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
                
            </ButtonGroup>
            </Fade>
            <Downarrow src="/images/down-arrow.svg" />
            </Buttons>

        </Wrap>
    )
}
