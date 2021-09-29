import React, { Component } from 'react'
import SearchContainer from './search-container';

const tabs = ['Entity Search', 'AML Search List', 'Onboarding List']

export class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: ''
        };
    };

    render() {
        return (
            <div className="main-container">
               <h4 className="heading">CUSTOMER ONBOARDING</h4> 
               <div className="tabs">
                   {tabs.map(tab => (
                        <div 
                            className="tab" 
                            onClick={() => this.setState({
                                selectedTab: tab
                            })}
                        >
                           {tab}
                        </div>
                   ))}
               </div>
               <h5>
                   Perform Search
               </h5>
               <div className='search-wrapper'>
                   <SearchContainer/>
               </div>
            </div>
        )
    }
}

export default Index
