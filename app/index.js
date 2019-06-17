import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './Components/index'
import Home from './Home'

import style from './styles/global.less'

class App extends Component {
    render() {
        return(
            <div>
                <Home/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))