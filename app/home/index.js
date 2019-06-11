/** Import modules*/
import React, { Component } from 'react';

/** Import files*/
import Banner from './Banner'
import style from './home.less'
class Home extends Component {
  //  state = {  }
    render() { 
        return ( 
            <div className='home-wrapper page-wrapper'>
               <div className='container'>
                   <Banner />
               </div>
            </div>
         );
    }
}
 
export default Home;