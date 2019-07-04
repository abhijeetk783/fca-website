import React, { Component } from 'react';
class Footer extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return ( 
            <div className={`page-footer ${this.props.bgColor}`}>
                <footer>
                   <div className='page-footer-wrapper'>
                        <div className='page-footer-content'>
                            {this.props.children}
                        </div>
                    </div> 

                    <div className='common-footer'>
                        <address style={{'visibility': 'hidden'}}>
                            <span>FINDCreative Avenues LLP.</span> <br />
                            A 904/905, Kanakia Wall Street, <br />
                            Chakala, Andheri (E), Mumbai 400093.
                        </address>
                        <span className='copy-writes'>© 2019 FINDCreative Avenues LLP. </span>
                        <div className='footer-social-icons'></div>
                    </div>
                </footer>
            </div>
         );
    }
}
 
export default Footer;