import React, {Component} from 'react';
class Carousel extends Component {
    constructor(props) {
        super(props)
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

    renderData() {
         return (
             this.state.data.map((item,i)=> {
                return (
                    <div className='slide-wrapper'>
                        <div className='slide _is-active' key={i}>
                            <a className='slide-link' href="">
                                <div className={`image-container __left _${item.color}`}></div>
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
            <section className='portfolio carousel-wrapper'>
                {renderData}
            </section>
         );
    }
}
 
export default Carousel;