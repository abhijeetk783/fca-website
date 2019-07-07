import React,{Component} from 'react';

class Career extends Component{
    render(){
        var data=['Designer / Art Director','Copy Writer','Front/Back End Developer','Project Manager','Business Development','Social Media Strategist'];
        var dataComponent=[];
        data.forEach(function(dataValue){
                dataComponent.push(<div className='careerList flex-container'><div className='value'>{dataValue}</div><div className='apply'>APPLY </div></div>);
        });
        return(dataComponent);
    }
}

export default Career;

