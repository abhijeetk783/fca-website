import React, { Component } from 'react';
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

    //state = {  }


    render() { 

     const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
     const menuItems = menu.map((val,index)=>{
      const delayValue = index
       return (
       <MenuItem key={index} delay={`${index * 0.1}s`} onClick={()=>{this.handleLinkClick()}}>{val}
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








