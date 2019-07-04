import React, { Component } from 'react';

import PageHeader from './Header'
import SectionOne from './SectionOne'
import WhatWeDo from './WhatWeDo'
import OurPartners from './OurPartners'
import Header from '../Header'
import Footer from '../Footer'
import style from './about.less' 

class Difference extends Component {
    //state = {  }
    render() { 
        return (
            <React.Fragment>
                <Header/>
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
            </React.Fragment>
          );
    }
}
 
export default Difference;