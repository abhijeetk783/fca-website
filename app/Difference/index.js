import React, { Component } from 'react';

import PageHeader from './Header'
import SectionOne from './SectionOne'
import WhatWeDo from './WhatWeDo'
import OurPartners from './OurPartners'
import Header from '../Header'
import Footer from '../Footer'
import Partners from './Partners'
import style from './about.less' 

class Difference extends Component {

    //state = {  }
    render() { 
        return (
            <React.Fragment>
                <Header/>
               {/*
                    <div className='about-wrapper page-wrapper'>
                <div className='about-header'>
                    <PageHeader />
                </div>
                <div className='about-section_one'>
                    <SectionOne />
                </div>
                <div className='about-what-we-do'>
                    <WhatWeDo />
                </div>
                <div className='about-our-partners'>
                    <OurPartners />
                </div>
            </div>
            <Footer>
                <small className='subtitle'>Interested in more?</small>
                <div className='title'>View Work</div>
            </Footer>
                */
               } 
               <div className='page-wrapper about-page'>
                    <section className='full-page-wrapper'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 col-offset-md-2 align-right'>
                                    <div className='col-md-9 col-offset-md-3'>
                                    <h2 className='title'>We keep it simple</h2>
                                    <p className='para'>The first step to solving a problem is to simplify the brief.
Which is why, each project is headed by a Creative lead, who
helps decode the brief and identify the right direction. Once
the direction is set, a domain expert helps to understand and
manage the project. All along the way, our process is a
dialogue, so you too are part of it.</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </section>
               </div>


                <div className='page-wrapper about-page'>
                    <section className='full-page-wrapper bg-color-yellow'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 col-offset-md-2'>
                                    <div className='col-md-9'>
                                    <h2 className='title'>Design First</h2>
                                    <p className='para' style={{'padding-left': '15px' }}>Design is the face of every object and is the first point of
interaction. Whether it’s traditional advertising, app interface,
branding, packaging or product. So, our approach is always
design-first. When you voice a business problem to us,
our minds race to find the best design-led solutions.</p>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </section>
               </div>

               

               <div className='page-wrapper about-page'>
                    <section className='full-page-wrapper'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-9 col-offset-md-2'>
                                    <div className='col-md-11'>
                                    <h2 className='title'>What we do</h2>
                                        <div className='our-services'>
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <div className='list-wrapper'>
                                                        <h3 className='title'>Design</h3>
                                                        <ul>
                                                            <li>Branding & Strategy</li>
                                                            <li>Packaging Design</li>
                                                            <li>Product Design</li>
                                                            <li>UX/UI</li>
                                                        </ul>
                                                    </div>    
                                                </div>
                                                
                                                <div className='col-md-4'>
                                                    <div className='list-wrapper'>
                                                        <h3 className='title'>Digital</h3>
                                                        <ul>
                                                            <li>Content Creation</li>
                                                            <li>Social Media Strategy</li>
                                                            <li>Digital Planning</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div className='col-md-4'>
                                                    <div className='list-wrapper'>
                                                        <h3 className='title'>Studio</h3>
                                                        <ul>
                                                            <li>CGI & Retouching</li>
                                                            <li>2D & 3D Modeling</li>
                                                            <li>Artworks</li>
                                                            <li>Adaptation</li>
                                                            <li>Language Translation <span>(All Indian & foreign)</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
               </div>

                {/* <div>
                    <Partners/>
                </div> */}

            </React.Fragment>
          );
    }
}
 
export default Difference;