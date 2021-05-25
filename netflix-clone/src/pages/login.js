import React, {Component} from 'react'
import logo from '../svg/logo.svg';
import styled from 'styled-components';
import Loginform from '../components/Login/Loginform';
import Loginfooter from '../components/Login/Loginfooter';

class Login extends Component{
    render()
    {
        return(
            <div className="main-login-container">
                <div className="header-top">
                    <Logo src={logo} alt="logo" className="logo" />
                </div>
                <Loginform/>
                <Loginfooter/>
            </div>

        )
    }
}

export default Login;

const Logo = styled.img`
width: 11rem;
position: absolute;
top: 25%;
left: 11%;
transform: translate(-50%, -50%);
margin-left: 0;
`;