import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuButton from './MenuButton'
import style from './menu.less'



class MenuContainer extends Component {

	constructor(props){
		super(props);
	    this.state={
	      menuOpen:false
	    }
	    this.handleLinkClick = this.handleLinkClick.bind(this)
	    this.handleMenuClick = this.handleMenuClick.bind(this)
	  }
	  
	  handleMenuClick() {
	    this.setState({
        menuOpen:!this.state.menuOpen
      });
	  }
	  
	  handleLinkClick() {
	    this.setState({menuOpen: false});
	  }


    render() { 

     const menu = ['Difference','Work','Connect']
     const menuItems = menu.map((val,index)=>{
      const delayValue = index
      const links = val.toLowerCase()
       return (
       <MenuItem key={index} route={links} number={`0${index+1}.`} delay={`${index * 0.1}s`} onClick={()=>{this.handleLinkClick()}}>{val}
    	</MenuItem>
    	)
     });

    	return ( 
            <React.Fragment>
		        <div className='menu-container'>
		          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} />
		         
		        </div>
		        <Menu open={this.state.menuOpen}>
		          	{menuItems}
		        </Menu>
		        
		    </React.Fragment>
         );
    }
}

export default MenuContainer;








