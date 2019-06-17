/** Import modules*/
import React, { Component } from 'react';

/** Import files*/
import Banner from './Banner'
import Carousel from './Carousel'
import Header from '../Header'
import Footer from '../Footer'
import style from './home.less'
class Home extends Component {
  //  state = {  }
    render() { 
        return ( 
            <div className='home-wrapper page-wrapper'>
                  <Header/>
                  <Banner />
                  <Carousel />
                  <Footer bgColor='black'>
                      <small className='subtitle'>Interested in more?</small>
                      <div className='title'>View Work</div>
                  </Footer>
            </div>
         );
    }
}
 
export default Home;