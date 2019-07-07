import React, {Component} from 'react';
class PageHeader extends Component {
    render(){
        return(
            <section className='header'>
                <div className='container'>
                <div className='row'>
                    <div className='col-md-8 col-offset-md-3'>
                        <div className='title'>We keep it simple</div>
                            <div className='details'>
                                <div>The first step to solving a problem is to simplify the brief.</div>
                                <div>Which is why, each project is headed by a Creative lead, who</div>
                                <div>helps decode the brief and identify the right direction. Once</div>
                                <div>the direction is set, a domain expert helps to understand and</div>
                                <div>manage the project. All along the way, our process is a</div>
                                <div>dialogue, so you too are part of it.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PageHeader;