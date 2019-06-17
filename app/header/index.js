import React, { Component } from 'react';
class Header extends Component {
    //state = {  }
    constructor(props) {
        super(props) 
        this.state = {
            menuOpen : false
        }
    }

    handleMenuClick() {

    }

    render() { 
        return ( 
            <div className='page-header'>
                <header>
                    <div className='logo'></div>
                    <div className='hamburger'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </header>
            </div>
         );
    }
}
 
export default Header;