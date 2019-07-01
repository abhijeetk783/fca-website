import React, { Component } from 'react';

class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: 'black'
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  handleClick(){
    this.setState({
      open:!this.state.open,
      color: 'red'
    });
  }
  
  render(){
   // console.log(this.state.color, this.state.open)
    const styles = {
      
      line: {
        background: this.state.open ? 'white' :this.state.color
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)':'none',
        marginBottom: this.state.open ? '4px' : '3px'
        
      },
      lineMiddle: {
        opacity: this.state.open ? 0: 1,
        transform: this.state.open ? 'translateX(-16px)':'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-5px) rotate(-45deg)':'none',
      },       
    }
    return(
      <div className='hamburger' style={styles.container} 
        onClick={this.props.onClick ? this.props.onClick: 
          ()=> {this.handleClick();}}>
        <div className='line' style={{...styles.line,...styles.lineTop}}/>
        <div className='line' style={{...styles.line,...styles.lineMiddle}}/>
        <div className='line' style={{...styles.line,...styles.lineBottom}}/>
      </div>
    )
  }
}

export default MenuButton