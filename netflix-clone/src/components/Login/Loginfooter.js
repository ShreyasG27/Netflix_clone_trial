import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {iosWorld} from 'react-icons-kit/ionicons/iosWorld/';
import {arrowSortedDown} from 'react-icons-kit/typicons/arrowSortedDown/';
import { generateMedia } from 'styled-media-query';

class Footer extends Component{
    state={
        langcontent: true
    }
    handleToggle = e=>{
        e.preventDefault();
        this.setState({
            langcontent: !this.state.langcontent
            
        })
    }
    render()
    {
        return(
        <FooterContainer>
           <span style={{ marginLeft: '12%' }}>Questions? <Link>Call at 000-800-040-1843</Link> </span>
           <div className="footer-columns">
               <ul>
                   <li>
                       <Link>Gift Card Terms</Link>
                   </li>          
               </ul>
               <ul>
                   <li>
                       <Link>Terms of Use</Link>
                   </li>
               </ul>
               <ul>
                   <li>
                       <Link>Privacy Statement</Link>
                   </li>
               </ul>
               <br />
               
               <div className="lang-btn" onClick={this.handleToggle}>
                   
                   <Icon icon={iosWorld} size={20}/>
                   &nbsp;&nbsp;English&nbsp;&nbsp;
                   <Icon icon={arrowSortedDown} />
               </div>
               </div>
               {this.state.langcontent &&(
               <div className="lang-toggle">
                   <ul style={{marginTop: '0rem'}}>
                       <li>English</li>
                   </ul>
                   <ul style={{marginTop: '-1rem'}}>
                        <li>Hindi</li>
                   </ul>
               </div>)}
           
           <span style={{marginLeft: '15%', fontSize: '0.9rem', marginTop: '1.5rem'}}>Netflix India</span>
        </FooterContainer>

        );
    }
}

export default Footer;

const customMedia= generateMedia({

tablet: '740px'
})

const FooterContainer= styled.footer`
justify-content:center;
background: rgba(0,0,0,0.8);
padding-top: 3rem;
padding-bottom: 6rem;
margin-top: 6rem;
postion: relative;
z-index: 5;

.footer-columns{
    width: 80%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    color: #999;
    ${customMedia.lessThan('tablet')`
    grid-template-columns: repeat(2, 1fr);
    `}
}

.footer-columns ul li{
    list-style:none;
    line-height: 2.5;
}

a {
    color: #999;
}

a:hover{
    text-decoration: underline;
    cursor:pointer;
}

.lang-btn{
    background: transparent;
    border: 0.9px solid;
    padding: 0.7rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 1.5rem;
    cursor: pointer;
}

.lang-toggle{
    margin-left: 14.8%;
    position: absolute;
    margin-top: -1.5rem;
}

.lang-toggle ul {
background: var(--main-deep-dark);
width: 8.125rem;
border: 1px solid #333;
text-align: center;
padding: 0.7rem;
list-style:none;
&:hover
{
    background: #0085ff;
    color: #fff;
}
}
`;