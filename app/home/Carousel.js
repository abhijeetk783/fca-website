import React, {Component} from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
class Carousel extends Component {
    constructor(props) {
        super(props)

        this.handleScroll = this.handleScroll.bind(this)
        this.state = {
          transform: '',
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
      console.log('hhh');
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        console.log('xxx');
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
      console.log('fdfds')
        let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);

        this.setState({
          transform: itemTranslate
        });
    }

    renderData() {
         return (
             this.state.data.map((item,i)=> {
               const active = i === 0 ? '_is-active' : ''
                return (
                    <div className={`slide-wrapper ${active}`} key={i}>
                        <div className='slide '>
                            <a className='slide-link' href="">
                                <Controller>
                                  <Scene
                                      triggerElement="#scrollStarts"
                                      duration={300}
                                    >
                                    {(progress) => (
                                      <Tween 
                                       staggerFrom={{
                                          opacity: 0,
                                          scaleY: 0,
                                          height: '0',
                                        }}
                                        staggerTo={{
                                          opacity: 1,
                                          scaleY: 1,
                                          height: '100vh',
                                          ease:'Circ.easeOut',
                                        }}
                                        stagger={0.15}           
                                        // to={{
                                        //   opacity: 1,
                                        //   scaleY: 1,
                                        //   height: '100vh'
                                        // }}       
                                       

                                       totalProgress={progress}
                                        
                                      >
                                    <div className={`image-container __left _${item.color}`}></div>
                                    </Tween>    
                                    )}
                                   </Scene>
                                </Controller>
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
            <section id="scrollStarts"  className='portfolio carousel-wrapper'>
                {renderData}
            </section>
         );
    }
}
 
export default Carousel;