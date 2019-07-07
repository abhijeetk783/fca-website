import React,{Component} from 'react';
import Career from './Career'
import CareerTitle from './CareerTitle'
import Contact from './Contact'
class CareerHome extends Component{
    render(){
        return(
        <div className='about-wrapper'>
        <div>
            <CareerTitle/>
        </div>
        <div className='career'>
            <Career/>
        </div>
        <div>
            <Contact/>
        </div>
        </div>);
    }
}
export default CareerHome;