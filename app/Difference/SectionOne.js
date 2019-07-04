import React, {Component} from 'react';
class SectionOne extends Component{
    render(){
        return(
            <section className='designBackground'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='titleDesign'>Design First</div>
                            <div className="designDescParent">
                            <div className='designDesc'>Design is the face of every object and is the first point of</div>
                            <div className='designDesc'>interaction. Whether it’s traditional advertising, app interface, </div>
                            <div className='designDesc'>branding, packaging or product. So, our approach is always </div>
                            <div className='designDesc'>design-first. When you voice a business problem to us,</div>
                            <div className='designDesc'>our minds race to find the best design-led solutions.</div>
                        </div>
                    </div>
                </div>
            </div>
           
            </section>
        );
    }
}

export default SectionOne;