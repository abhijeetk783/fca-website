import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkCta from '../Common/Utill/LinkCta'
import logo from '../Public/images/logo.png'
import MenuContainer from '../Common/Menu/MenuContainer'
class Header extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            changeColor: 'white'
        }
    }

    render() { 
        return ( 
            <React.Fragment>
            <div className='page-header' >
                <header>
                 <Link to='/' className='logo-wrapper'><div className='logo'><img src={logo}/></div></Link>
                 <MenuContainer />
                </header>
            </div>
            <LinkCta router='/' position='_fixed _left' linkText='Say Hello' linkClass='say-hello' />
            <LinkCta router='/' position='_fixed _right' linkText='Scroll Down' linkClass='scroll-down' />
            </React.Fragment>
         );
    }
}
 
export default Header;