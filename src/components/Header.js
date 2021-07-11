import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/car/carSlice"
import {useSelector} from "react-redux";


export default function Header() {
    const [burgerOpen,setBurgerOpen]= useState(false);
    const cars = useSelector(selectCars);
    return (
        <Container>
            <a href="/" >
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
            {cars && cars.map((car,index)=>(
                <a key={index} href="/">{car}</a>
            )
            
            
            )}
            </Menu>
            <RightMenu>
                <a href="/">SHop</a>
                <a href="/">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerOpen(true)}/>
            </RightMenu>
            <BurgerNav show={burgerOpen}>
            <CloseWrapper>
            <CustomClose onClick={()=>setBurgerOpen(false)} />
            </CloseWrapper>
            {cars && cars.map((car,index)=>(
                <li key={index}><a href="/">{car}</a></li> 
            ))}
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Trade-In</a></li>
                <li><a href="/">Cyber Truck</a></li>
                <li><a href="/">Roadster</a></li>
            
            </BurgerNav>
        
        </Container>
    )
}

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
    justify-content:space-between;
    z-index: 1;

`
const Menu = styled.div`
display:flex;
align-items: center;
flex: 1;
justify-content: center;
a{
    font-weight:bold;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:no-wrap;
}
@media (max-width: 768px){
    display:none;
}

`
const RightMenu= styled.div`
display:flex;
align-items: center;

a{
    font-weight:bold;
    text-transform:uppercase;
    padding:0 10px;
    margin-right:10px;
    flex-wrap:no-wrap;
}


`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;


`
const BurgerNav= styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background: white;
width:300px;
z-index:100;
list-style: none;
padding:20px;
display: flex;
flex-direction: column;
text-align: left;
transform: ${props=>props.show ? 'translateX(0)' : 'translateX(100%)'};
transition:transform 0.2s ease-in-out;

li{
    padding:10px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
}

a{
    font-weight: 600px;
}


`
const CustomClose = styled(CloseIcon)`
cursor: pointer;

`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`
