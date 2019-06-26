import React, {Component} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.renderData = this.renderData.bind(this)
        this.state = {
            data : [
                    {
                      "_id": "5d028e26e2818d216e74f5c0",
                      "color": "green",
                      "title": "Kramer Dixon",
                      "subtitle": "male"
                    },
                    {
                      "_id": "5d028e26122cf11b4a5d3394",
                      "color": "yellow",
                      "title": "Gould Heath",
                      "subtitle": "male"
                    },
                    {
                      "_id": "5d028e2634c9c788e3c65b1f",
                      "color": "blue",
                      "title": "Galloway Gilliam",
                      "subtitle": "male"
                    },
                    {
                      "_id": "5d028e26ac8e0a463a9b43ee",
                      "color": "brown",
                      "title": "Elizabeth Giles",
                      "subtitle": "female"
                    },
                    {
                      "_id": "5d028e2617383507ab3dc123",
                      "color": "red",
                      "title": "Jackson Cooke",
                      "subtitle": "male"
                    },
                    {
                      "_id": "5d028e26e12dcaecfb1d6b58",
                      "color": "black",
                      "title": "Allen Garner",
                      "subtitle": "male"
                    },
                    {
                      "_id": "5d028e26849b74776f86d9b2",
                      "color": "pink",
                      "title": "Leonor Oneill",
                      "subtitle": "female"
                    }
              ]
        }
    }

    componentDidMount() {
      
    }

    renderData() {
         return (
             this.state.data.map((item,i)=> {
              const active = i === 0 ? '_is-active' : '';
                return (
                    <div className={`slide-wrapper ${active}`} key={i}>
                        <div className='slide'>
                            
                            <a className='slide-link' href="">
                            <Controller> <Scene
        triggerElement="#scrollStarts"
        duration={300}
      >{(progress) => (
          <Tween            
            to={{
              left: '0px',
              rotation: -360,
              width: '200px',
              height: '200px',
            }}       
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <div className="tween">Pin Test</div>
          </Tween>    
        )}</Scene></Controller>
                                <div className='content __right'>
                                    <h5 className='title'>{item.title}</h5>
                                    <div className='subtitle'>{item.subtitle}</div>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                    )
                }
             )
         )
      }
    
    render() { 
        const renderData = this.renderData()
        return ( 
            <section id="scrollStarts" className='portfolio carousel-wrapper'>
                {this.renderData}

                <Controller>
      <Scene
        triggerElement="#scrollStarts"
        duration={300}
      >
        {(progress) => (
          <Tween            
            to={{
              left: '0px',
              rotation: -360,
              width: '200px',
              height: '200px',
            }}       
            ease="Strong.easeOut"
            totalProgress={progress}
            paused
          >
            <div className="tween">Pin Test</div>
          </Tween>    
        )}
      </Scene>
      <Scene
        triggerElement="#trigger"
        duration={600}
        pin={false}
      >
      {(progress) => (
        <Tween
          from={{
            css: {
              left: '0px',
              rotation: -360,
              width: '200px',
              height: '200px',
            },
            ease: 'Strong.easeInOut',
          }}
          to={{
            css: {
              left: '100px',
              rotation: -180,
              width: '50px',
              height: '50px',
            },
            ease: 'Strong.easeInOut',
          }}
          totalProgress={progress}
          paused
        >
          <div className="tween">Pin Test</div>
        </Tween>
      )}        
      </Scene>
      <Scene
        duration={500}
      >
        {(progress) => (
          <div>
            <Tween        
              staggerFrom={{
                left: 700,
              }}
              staggerTo={{
                left: 0,
                ease: 'Back.easeOut',
              }}
              stagger={0.15}
              totalProgress={progress}
              paused
            >
              <div className="stagger" />
              <div className="stagger" />
              <div className="stagger" />
              <div className="stagger" />
              <div className="stagger" />
            </Tween>
          </div>
        )}
      </Scene>
    </Controller>

                
            </section>
         );
    }
}
 
export default Carousel;