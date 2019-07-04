import React,{Component} from 'react';
class WhatWeDo extends Component{
    render(){
        return(
            <section className='whatWeDoSec'>

                <div className='container'>
                    <div className='row'>
                        <div className='whatWeDoTitle'>What we do</div>
                        <div className='col-md-4'>
                            <div className='box-wrapper'>

                            </div>
                        </div>
                    </div>
                </div>      


            

            <div className='whatWeDoDesc'>
            <div className="flex-container">
                <div className='cellHeader'>Design</div>
                <div className='cellHeader'>Digital</div>
                <div className='cellHeader'>Studio</div>  
            </div>
            <div className="flex-container">
                <div className='cell'>Branding &amp; Strategy</div>
                <div className='cell'>Content Creation</div>
                <div className='cell'>CGI &amp; Retouching</div>  
            </div>

            <div className="flex-container">
                <div className='cell'>Packaging Design</div>
                <div className='cell'>Social Media Strategy</div>
                <div className='cell'>2D &amp; 3D Modeling</div>  
            </div>

            <div className="flex-container">
                <div className='cell'>Product Design</div>
                <div className='cell'>Digital Planning</div>
                <div className='cell'>Artworks </div>  
            </div>
            <div className="flex-container">
                <div className='cell'>UX/UI</div>
                <div className='cell'> </div>
                <div className='cell'>Adaptation </div>  
            </div>
            <div className="flex-container">
                <div className='cell'></div>
                <div className='cell'> </div>
                <div className='cell'>Language Translation</div> 
            </div>
            <div className="flex-container">
                <div className='cellSmall'></div>
                <div className='cellSmall'> </div>
                <div className='cellSmall'>(All Indian & foreign)</div> 
            </div>
            </div>
            </section>

        );
    }
}

export default WhatWeDo;