import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//file import
import Home from './Home'
import Difference from './Difference'
import Work from './Work'
import style from './styles/global.less'
class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
       <Router>
   	
		  <Route exact path="/" component={Home} />
		  <Route path="/difference" component={Difference} />
		  <Route path="/work" component={Work} />
		</Router>
      </React.Fragment>
    );
  }
}

export default ReactRouter;