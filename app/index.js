import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import style from './styles/global.less'
// import { basePath as basename } from './static.json'
class App extends Component {
    render() {
        return(
            <div>
                 {/* <Router>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                </Router> */}
                <Home />
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))