import React, { Component } from 'react';

import Header from './Header'
import SectionOne from './SectionOne'
import WhatWeDo from './WhatWeDo'
import OurPartners from './OurPartners'
import style from './about.less' 

class About extends Component {
    //state = {  }
    render() { 
        return (
            <div className='about-wrapper page-wrapper'>
                <div className='about-header'>
                    <Header />
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
          );
    }
}
 
export default About;