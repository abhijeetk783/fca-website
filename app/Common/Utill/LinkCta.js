import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const LinkCta = props => {
	const {router, linkText, position, linkClass} = props
	return (
		<Router>
			<div className={`cta-wrapper ${position}`}>
				<Link to={router} className={linkClass}>{linkText}</Link>
			</div>
		</Router>
		)
}

export default LinkCta