import React, { Component } from 'react';

import PageHeader from './Header'
import SectionOne from './SectionOne'
import WhatWeDo from './WhatWeDo'
import OurPartners from './OurPartners'
import Header from '../Header'
import Footer from '../Footer'
import style from './about.less' 

class About extends Component {
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
            <Footer bgColor='black'/>
            </React.Fragment>
          );
    }
}
 
export default About;