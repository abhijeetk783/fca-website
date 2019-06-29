//module import
import React, {Component} from 'react';
import ReactDOM from 'react-dom';



//file import
import Home from './Home'
import style from './styles/global.less'



class App extends Component { 

	render() {
        return(
        	<React.Fragment>
        		<Home/>
        	</React.Fragment>
        	)
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))