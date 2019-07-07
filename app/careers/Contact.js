import React,{Component} from 'react'
 class Contact extends Component{
    render(){
        return(
                <div className='contact'>
                    <div className='contactDescBg'>
                    <div className='contactDesc'>We’re always on the lookout</div>
                    <div  className='contactDesc'> for good talent. </div>
                    <div className='email'>drop in an email over at hello@findcreative.in</div>
                    </div>
                    <div className='flex-container copyright-logo'>
                        <div className='copyright-logo'>© 2019 FINDCreative Avenues LLP. </div>
                        </div>
                </div>
        );

    }
}

export default Contact;