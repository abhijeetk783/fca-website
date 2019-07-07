import React,{Component} from 'react';
import marico from './marico.png';
import marico2 from './img/marico@2x.png';
import marico3 from './img/marico@3x.png'
import rr from './img/RR.png';
import rr2 from './img/RR@2x.png';
import rr3 from './img/RR@3x.png';
import tlc from './img/TLC.png';
import tlc2 from './img/TLC@2x.png';
import tlc3 from './img/TLC@3x.png';
import jsw from './img/jSW.png';
import jsw2 from './img/jSW@2x.png';
import jsw3 from './img/jSW@3x.png';
import hrx from './img/Hritik.png';
import hrx2 from './img/Hritik@2x.png';
import hrx3 from './img/Hritik@3x.png';
import tmb from './img/Thambbi.png';
import tmb2 from './img/Thambbi@2x.png';
import tmb3 from './img/Thambbi@3x.png';
import Kratos from './img/Kratos.png';
import Kratos2 from './img/Kratos@2x.png';
import Kratos3 from './img/Kratos@3x.png';
import Hero from './img/Hero.png';
import Hero2 from './img/Hero@2x.png';
import Hero3 from './img/Hero@3x.png';
import tbwa from './img/TBWA.png';
import tbwa2 from './img/TBWA@2x.png';
import tbwa3 from './img/TBWA@3x.png';
import adgLogo from './img/adgaonkar logo.png';
import adgLogo2 from './img/adgaonkar logo@2x.png';
import adgLo3go from './img/adgaonkar logo@3x.png';
import Humsafar from './img/Humsafar.png';
import Humsafar2 from './img/Humsafar@2x.png';
import Humsafar3 from './img/Humsafar@3x.png';



class Partners extends Component{
    render(){
        return(
    <section className='PartnersHome'>    
    <div className='OurPartners'>Our Partners</div>  
    <div className='Partners'>
        <div className='flex-container'>
            <div className='cellPartners borderRightBottom'>
            </div>
            <div className='cellPartners borderRightBottom'>
            <img src={marico}
            srcset={marico2 + ' 1x,' + marico3 + ' 2x'}
            class="Marico"/>
            </div>
            <div className='cellPartners borderRightBottom'>
            <img src={rr}     
            srcset={rr2 + ' 1x,' + rr3 + ' 2x'}
            class="RR"/>
            </div>
            <div className='cellPartners borderRightBottom'>
            <img src={tlc}
            srcset={tlc2 + ' 1x,' + tlc3 + ' 2x'}
            class="TLC"/>
            </div>
            <div className='cellPartners borderBottom'>
            
            </div>
        </div>


        <div className='flex-container'>
            <div className='cellPartners borderRightBottom'>
            <img src={jsw}
            srcset={jsw2 + ' 1x,' + jsw3 + ' 2x'}
            class="jSW"/>
            </div >
            <div className='cellPartners borderRightBottom'>
            <img src={hrx}     
            srcset={hrx2 + ' 1x,' + hrx3 + ' 2x'}
            class="Hritik"/>
            </div>
            <div className='cellPartners borderRightBottom'>
            <img src={tmb}
            srcset={tmb2 + ' 1x,' + tmb3 + ' 2x'}
            class="Thambbi"/>
            </div>
            <div className='cellPartners borderRightBottom'>
            <img src={Kratos}
            srcset={Kratos2 + ' 1x,' + Kratos3 + ' 2x'}
            class="Kratos"/>
            </div>
            <div className='cellPartners borderBottom'>
            <img src={Hero}
            srcset={Hero2 + ' 1x,' + Hero3 + ' 2x'}
            class="Hero"/>
            </div>
        </div>

        <div className='flex-container'>
            <div className='cellPartners borderRight'>
            
            </div>
            <div className='cellPartners borderRight'>
            <img src={tbwa}
            srcset={tbwa2 + ' 1x,' + tbwa3 + ' 2x'}
            class="TBWA"/>
            </div>
            <div className='cellPartners borderRight'>
            <img src={adgLogo}     
            srcset={adgLogo2 + ' 1x,' + adgLo3go + ' 2x'}
            class="adgaonkar-logo"/>
            </div>
            <div className='cellPartners borderRight'>
            <img src={Humsafar}
            srcset={Humsafar2 + ' 1x,' + Humsafar3 + ' 2x'}
            class="Humsafar"/>
            </div >
            <div className='cellPartners '>
            </div>
        </div>

        </div>
        </section>  
        );
    }
}
export default Partners;