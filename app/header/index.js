import React, { Component } from 'react';
import LinkCta from '../Common/Utill/LinkCta'
import MenuContainer from '../Common/Menu/MenuContainer'
class Header extends Component {
    //state = {  }
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
                 <div className='logo'></div>
                 <MenuContainer />
                   
                   {/*
                     <div className='hamburger'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                   */}
                </header>
            </div>
            <LinkCta router='/' position='_fixed _left' linkText='Say Hello' linkClass='say-hello' />
            <LinkCta router='/' position='_fixed _right' linkText='Scroll Down' linkClass='scroll-down' />
            </React.Fragment>
         );
    }
}
 
export default Header;