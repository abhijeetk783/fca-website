import React, {Component} from 'react';
import { TimelineMax, TweenMax, CSSPlugin, ScrollToPlugin, Draggable, AttrPlugin } from "gsap/all"; 
import ReactSplitText from "../lib";

const plugins = [ CSSPlugin, AttrPlugin ];
class Banner extends Component {
    constructor(props) {
        super();
        this.textTween = null;
        this.charItems = [];
        this.getTextChars = this.getTextChars.bind(this)
      }
    
      getTextChars = chars => {
        this.charItems = chars;
      };
    
      componentDidMount() {
        this.textTween = new TimelineMax().staggerFrom(
          this.charItems,
          0.3,
          { autoAlpha: 0 },
          0.1
        );
      }
    render() { 
        return ( 
            <section className='banner'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12'>
                  <div className='sub-title'>We are FINDCreative Ave.</div>
                    <div className='title'>
                        <ReactSplitText
                            text="to create is to unite"
                            getTextChars={this.getTextChars}
                        />
                    </div>
                    </div>
                </div>
              </div>
                
            </section>
         );
    }
}
 
export default Banner;