import React, { Component } from 'react';


import Header from '../Header'
import Footer from '../Footer'
import PortfolioContainer from './PortfolioContainer'
class Work extends Component { 
	render() {
		return(
			<React.Fragment>
			<Header/>
			<PortfolioContainer/>
			<Footer bgColor='black'>
				<small className='subtitle'>Got a project?</small>
                <div className='title'>let's talk</div>
			</Footer>
			</React.Fragment>
			)
	}
}

export default Work