/** Import modules*/
import React, { Component } from 'react'

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
//const plugins = [ CSSPlugin, AttrPlugin ];
/** Import files*/
import Banner from './Banner'
import Carousel from './Carousel'
import Header from '../Header'
import Footer from '../Footer'
import style from './home.less'

class Home extends Component {
    constructor(props) {
        super(props)
       
    }
    render() { 
        return ( 
            <div className='home-wrapper page-wrapper'>
                  <Header />
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