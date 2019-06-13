/** Import modules*/
import React, { Component } from 'react';

/** Import files*/
import Banner from './Banner'
import Carousel from './Carousel'
import Header from '../header'
import style from './home.less'
class Home extends Component {
  //  state = {  }
    render() { 
        return ( 
            <div className='home-wrapper page-wrapper'>
                    <Header/>
                   <Banner />
                   <Carousel />
               
            </div>
         );
    }
}
 
export default Home;