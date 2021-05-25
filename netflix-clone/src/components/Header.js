import React, {Component} from 'react'
import logo from '../svg/logo.svg';
import { NavLink} from 'react-router-dom';
import { Button } from './Button';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import { generateMedia } from "styled-media-query";

class Header extends Component{
    render()
    {
        return(
            <HeaderComponent className="header-container">
                <div className="header-top">
                    <Logo src={logo} />
                  <NavLink to= "/login" className="signIn-btn">Sign In</NavLink>
                </div>
                
                <div className="header-content">
                <Title>See What's Next.</Title>
                <Subtitle>WATCH ANYWHERE. CANCEL ANYTIME.</Subtitle>
                <Button className="main-offer-btn" primary >Try It Now
                <Icon className="Icon1" icon={ic_keyboard_arrow_right} size={37} />
                </Button>
                </div>
            </HeaderComponent>

        );
    }
}

export default Header;

const customMedia = generateMedia({
    lgdesktop: '1350px',
    meddesktop: '1150px',
    tablet: '960px',
    smltablet: '740px',
    phone: '500px',
    mdphone: '430px',
    smlphone: '360px',
    sml2phone: '340px'
})
//logo
const Logo= styled.img`
width: 10rem;
height: 3rem;
position: absolute;
top: 15%;
left:45%;
transition: translate(-50%,-50%);
z-index:1;
${customMedia.lessThan('tablet')`
left: 20%;
`}
`;

const HeaderComponent = styled.div`
.signIn-btn {
    right : 0;
    margin : 1.125rem 3% 0;
    padding : 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height : normal;
    border-radius : 0.1875rem;
    font-size : 1rem;
    background : var(--main-red);
    position : absolute;
    translate : transform(-50%, -50%);
    cursor : pointer;
    z-index:1;
    transition : background 0.2s ease-in;
    &:hover{
      background:var(--main-red-hover); 
    }
    ${customMedia.lessThan('smltablet')`
    margin-top: 1.25rem;
    right:5%;
    `}
  }

//Header
.header-top{
    position:relative;
    height: 6rem;
}

.header-content{
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display:flex;
    justify-content:center;
    align-content: center;
    text-align:center;
    flex-direction: column;
    z-index:1;  
    ${customMedia.lessThan('smltablet')`
    display: grid;
    grid-template-rows: repeat(3, 60px);
    margin-top:8rem;
    `}
}

.main-offer-btn
{
   ${customMedia.lessThan('lgdesktop')`
   margin: 0 33%;
   font-size: 1.5rem;
   `}
   ${customMedia.lessThan('mddesktop')`
   margin: 0 25%;
   font-size: 1.5rem;
   `}
   ${customMedia.lessThan('tablet')`
   margin: 0 20%;
   font-size: 2rem;
   padding: 0.8rem 1.3rem;
   `}
}

.Icon1 svg
{
    vertical-align: bottom !important;
    margin-left: 1.5rem;
    ${customMedia.lessThan('smltablet')`
    display: none !important;
    `}
    ${customMedia.lessThan('phone')`
    display: none !important;
    font-size: 1rem;
    `}
    ${customMedia.lessThan('smlphone')`
    display: none !important;
    font-size: 1rem;
    `}
    ${customMedia.lessThan('sml2phone')`
    display: none !important;
    font-size: 0.7rem;
    `}
}`;

//content
const Title = styled.h1`
margin: 0 0 1rem;
font-size: 5rem;
font-weight: 700;
line height: 1.1em;
${customMedia.lessThan('tablet')`
    font-size: 2.6rem;
    `}
`;
const Subtitle= styled.h2`
font-weight 400;
font-size: 1.875rem;
line-height: 1.15em;
margin: 0 0 1.875;
text-transform: uppercase;
${customMedia.lessThan('smltablet')`
    font-size: 1.4rem;
    margin:0;
    `}
`;