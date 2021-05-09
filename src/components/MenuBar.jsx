import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../imgs/sale.png'
import {ReactComponent as CartIcon} from '../imgs/shopping-cart.svg'


const MenuDiv = styled.div`
    display:flex;
    justify-content:space-between;
    width:100vw;
    height:10vh;
    background-color:black;
`

const ImgLogo = styled.img`
    display:flex;
    max-height:100%;
    align-self:center;
`

const RouterDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    height:100%;
    width:33%;
`

const RouterButton = styled(NavLink)`
    display:flex;
    justify-content:center;
    align-items:center;
    height:50%;
    width:30%;
    color:white;
    cursor: pointer;
    transition: all 0.3s ease 0s; 
    text-decoration:none;
    &:hover{
        background-color:red;
        width:35%;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    }
`

const CartIconPic=styled(CartIcon)`
max-height:70%;
align-self:center;
margin-right:10%;
`

const MenuBar = () => {
    return (
        <MenuDiv>
            <RouterDiv>
                <RouterButton to="/">Home</RouterButton>           
                <RouterButton to="/products">Products</RouterButton>
                <RouterButton to="/about">About</RouterButton>
            </RouterDiv>
           <ImgLogo src={logo}/>
           <CartIconPic fill="white"></CartIconPic>

        </MenuDiv>
    );
}

export default MenuBar;
