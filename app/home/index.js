/** Import modules*/
import React, { Component } from 'react'

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
//const plugins = [ CSSPlugin, AttrPlugin ];
/** Import files*/
import Banner from './Banner'
import Carousel from './Carousel'
import Header from '../Header'
import Footer from '../Footer'
//import Icon from '../Common/Utill/Icon'
//import twitterLogo from '../Public/svg/arrow-down.svg';
import style from './home.less'

//const rendered = '<svg viewBox="${twitterLogo.viewBox}"><use xlink:href="#${twitterLogo.id}" /></svg>';
class Home extends Component {
    constructor(props) {
        super(props)
        //this.handleScroll = this.handleScroll.bind(this)
        this.wheel = this.wheel.bind(this);
        this.bannerMethod = this.bannerMethod.bind(this);
        this.footerMethod = this.footerMethod.bind(this);
        
        let isAnimating = false;
        let homeContainer;
        let pageHeight;
    }

  componentDidMount() {
    //window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('mousewheel', this.wheel);
    this.pageHeight = window.innerHeight;
    this.homeContainer = document.getElementsByClassName("home-wrapper")[0];
  }

  componentWillUnmount() {
    window.scrollTo(0,0);
    //window.removeEventListener('scroll', this.handleScroll);
  }

    handleScroll (e) {
       if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
        console.log(e)
      }
    }

    wheel(e){
        var delta = event.wheelDelta / 30 || -event.detail;
        if(delta < -0.5 && e.target.nextElementSibling)
        {
          this.goToCarousel();
        }
        else if(delta > 0.5 && !e.target.nextElementSibling)
        {
          //this.refs.child.goToLastSlide();
          this.goToCarousel();
        }
    }

    goToCarousel(){
      if(!this.isAnimating)
      {
        this.isAnimating = true;
        
        TweenLite.to(
            window, 1, {scrollTo: {y: this.pageHeight}, 
            onComplete: this.onSlideChangeEnd,
            onCompleteScope: this}
            );
      }
    }

    onSlideChangeEnd()
    {
      this.isAnimating = false;
    }

    render() { 
        return ( 
            <div className='home-wrapper page-wrapper'>
              {/* <Icon type="arrow-down" className="f4 blue" /> */}
                
                  <Header />
                  <Banner />
                  <Carousel ref="child" 
                    scrollToBanner={this.bannerMethod} 
                    scrollToFooter={this.footerMethod}
                  />
                  <Footer bgColor='black' onScroll={this.handleScroll}>
                      <small className='subtitle'>Interested in more?</small>
                      <div className='title'>View Work</div>
                  </Footer>
            </div>
         );
    }

    bannerMethod(){
      if(!this.isAnimating)
      {
        this.isAnimating = true;
  
        TweenLite.to(
            window, 1, {scrollTo: {y: 0 }, 
            onComplete: this.onSlideChangeEnd,
            onCompleteScope: this}
            );
      }
    }

    footerMethod(){  
      if(!this.isAnimating)
      {
        this.isAnimating = true;
  
        TweenLite.to(
            window, 1, {scrollTo: {y: window.pageYOffset+this.pageHeight }, 
            onComplete: this.onSlideChangeEnd,
            onCompleteScope: this}
            );
      }    
    }
}
 
export default Home;