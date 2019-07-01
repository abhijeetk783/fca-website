//module import
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



//file import
import Home from './Home'
import About from './About'
import style from './styles/global.less'



class App extends Component { 

	render() {
        return(
        	<React.Fragment>
        		<Router>
	        		<Switch>
					  <Route exact path="/" component={Home} />
					  <Route path="/about" component={About} />
					</Switch>
				</Router>
        	</React.Fragment>
        	)
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))