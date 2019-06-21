/** Import modules*/
import React, { Component } from 'react';
import { TimelineMax, TweenMax, CSSPlugin, ScrollToPlugin, Draggable, AttrPlugin, SplitText } from "gsap/all"; 


//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [ CSSPlugin, AttrPlugin ];
/** Import files*/
import Banner from './Banner'
import Carousel from './Carousel'
import Header from '../Header'
import Footer from '../Footer'
import style from './home.less'
class Home extends Component {
    constructor(props) {
        super(props)
        // reference to the DOM node
        this.myElement = null
        // reference to the animation
        this.myTween = null
        this.myTween2 = null
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.myTween = TweenLite.to(this.myElement, 2, {x: 100, y: 500});

         const mySplit = new SplitText("h1, p", {
                type: "words chars"
            });
        this.myTween2 = TweenMax.staggerFrom( mySplit.words, 1, {
                  yPercent: 125,
                  autoAlpha: 0
                },
                0.25
              );
      }
    

    render() { 
        return ( 
            <div className='home-wrapper page-wrapper'>
                <h1>title</h1>
                <p>djajdlsjd fhfiwe hdihdicksanck kdasdkasdkascads csjiocscn</p>
                <div ref={div => this.myElement = div}>dsds</div>
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