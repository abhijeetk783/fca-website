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
        this.handleScroll = this.handleScroll.bind(this)
    }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

    handleScroll (e) {
       if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
        console.log(e)
      }
    }
    render() { 
        return ( 
            <div className='home-wrapper page-wrapper'>
                  <Header />
                  <Banner />
                  <Carousel />
                  <Footer bgColor='black' onScroll={this.handleScroll}>
                      <small className='subtitle'>Interested in more?</small>
                      <div className='title'>View Work</div>
                  </Footer>
            </div>
         );
    }
}
 
export default Home;