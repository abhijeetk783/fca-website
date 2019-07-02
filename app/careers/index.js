import React, { Component } from 'react';
import CareerHome from './CareerHome'
import style from './career.less'
class Career extends Component {
    //state = {  }
    render() { 
        return (
            <div className='about-wrapper'>
            <div >
                <CareerHome/>
            </div>
           </div>
          );
    }
}
 
export default Career;