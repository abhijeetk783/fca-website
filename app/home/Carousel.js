import React, {Component} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
class Carousel extends Component {
    constructor(props) {
        super(props)

        this.handleScroll = this.handleScroll.bind(this);
        this.goToLastSlide = this.goToLastSlide.bind(this);
        this.wheel = this.wheel.bind(this);
        this.state = {
          transform: '',
            data : [
                    {
                      "_id": "5d028e26e2818d216e74f5c0",
                      "color": "blue",
                      "title": "Nihar Gold",
                      "subtitle": "Package Design"
                    },
                    {
                      "_id": "5d028e26122cf11b4a5d3394",
                      "color": "green",
                      "title": "Rapid Rupee",
                      "subtitle": "Brand & Communication design"
                    },
                    {
                      "_id": "5d028e2634c9c788e3c65b1f",
                      "color": "yellow",
                      "title": "TLC India",
                      "subtitle": "Package Design"
                    },
                    {
                      "_id": "5d028e26ac8e0a463a9b43ee",
                      "color": "pink",
                      "title": "Coco Soul",
                      "subtitle": "Branded Content"
                    }
              ]
        }

        let slidesContainer;
        let slides;
        let currentSlide;
        let isAnimating = false;
        let pageHeight;
    }

    componentDidMount(){
      this.pageHeight = window.innerHeight;
      //this.navButtons = document.getElementsByClassName('blist');
      this.slidesContainer = document.getElementsByClassName("slide-container")[0];
      this.slides = document.getElementsByClassName("slide");
      this.currentSlide = this.slides[0];
      this.isAnimating = false;
    }

    handleScroll(event) {
      //console.log('fdfds')
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);

        this.setState({
          transform: itemTranslate
        });
    }
    
    goToLastSlide(){
      this.currentSlide = this.slides[this.slides.length-1];
      this.goToSlide(this.currentSlide);
    }

    
	goToSlide(slide)
	{
		if(!this.isAnimating)
		{
			this.isAnimating = true;
			this.currentSlide = slide;

      //Sliding to current slide
			TweenLite.to(
          this.slidesContainer, 1, {scrollTo: {y: this.pageHeight * this.currentSlide.getAttribute('data-slideindex') }, 
          onComplete: this.onSlideChangeEnd,
          onCompleteScope: this}
          );
		}
  }

  onSlideChangeEnd()
	{
		this.isAnimating = false;
  }
  
  goToPrevSlide()
	{
		if(this.currentSlide.previousElementSibling)
		{
			this.goToSlide(this.currentSlide.previousElementSibling);
    }
    else if(!this.isAnimating)
    {
      this.props.scrollToBanner();
    }
  }
  
	goToNextSlide()
	{
		if(this.currentSlide.nextElementSibling)
		{
			this.goToSlide(this.currentSlide.nextElementSibling);
    }
    else if(!this.isAnimating)
    {
      this.props.scrollToFooter();
    }
	}

    renderData() {
         return (
             this.state.data.map((item,i)=> {
                return (
                        <div className='slide' data-slideindex={i} key={i}>
                            <a className='slide-link' href="">
                                <div className={`image-container __left _${item.color}`}></div>
                                <div className='content __right'>
                                    <h5 className='title'>{item.title}</h5>
                                    <div className='subtitle'>{item.subtitle}</div>
                                </div>
                            </a>
                        </div>
                    )
                }
             )
         )
      }

    wheel(e) {
      var delta = event.wheelDelta / 30 || -event.detail;
      if(delta < -0.5)
      {
        this.goToNextSlide();
      }
      else if(delta > 0.5)
      {
        this.goToPrevSlide();
      }
    }
    
    render() { 
        const renderData = this.renderData();
        //const renderButtons = this.renderButtons();
        return ( 
            <section className='portfolio carousel-wrapper'>
              <div className='slide-container' onWheel = {(e) => this.wheel(e)}>
                {renderData}
              </div>
            </section>
         );
    }
}
 
export default Carousel;