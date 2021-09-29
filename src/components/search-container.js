import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import InputBox from './input-box';
import SearchResults from './table';

export class SearchContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchType: 'individual',
            firstName: '',
            lastName: '',
            country: '',
            dateOfBirth: '',
            companyName: '',
            companyId: '',
            jurisdiction: '',
            searchResult: []
        };
    };

    handleCheckbox = value => {
        this.setState({
            searchType: value,
            searchResult: []
        })
    };

    inputChange = (inputLabel, value) => {
        this.setState({
            [inputLabel]: value
        })
    };

    onSearchClick = () => {
        if(this.state.searchType === 'individual') {
            fetch(`https://api.dev.kychub.com/v2/aml/search`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer 33bfc416-73a2-40f2-90df-0b66455b47d4`,
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    "size": 10,
                    "page": 0,
                    "searchType": "FUZZY",
                    "name": [
                        `${this.state.firstName} ${this.state.lastName}`
                    ],
                    "country": [],
                    "source": [],
                    "guid": "",
                    "category": [],
                    "gender": [],
                    "type": [
                        "Individual"
                    ]
                })
            })
            .then(res => res.json())
            .then(res => {
                if(res.statusCode === 200) {
                    this.setState({
                        searchResult: res.data.content
                    })
                }
            })
        }
    }

    render() {
        return (
            <div className="container">

            <div className="search-container">
               <div className="checkbox-wrapper">
                   <div className="individual">
                    <input 
                        onChange={() => this.handleCheckbox('individual')} 
                        id='individual' 
                        type="radio" 
                        checked={this.state.searchType === 'individual'} 
                        className="radio-button" 
                    />
                     <label htmlFor="individual">
                        Individual
                    </label>
                   </div>
                   <div className="legal">
                    <input 
                        onChange={() => this.handleCheckbox('legal-entity')} 
                        id='legal-entity' 
                        type="radio" 
                        checked={this.state.searchType === 'legal-entity'} 
                        className="radio-button" 
                    />
                    <label htmlFor="legal-entity">
                        Legal Entity
                    </label>
                   </div>  
               </div>

               <div className="search-form">
                {this.state.searchType === 'individual'
                   ? <div className="inidividual-search">
                       <div className="row">
                            <InputBox
                                inputLabel="First Name"
                                placeholder="Type in your first name"
                                value={this.state.firstName}
                                inputOnChange={this.inputChange}
                                inputId={'firstName'}
                            />
                            <InputBox
                                inputLabel="Last Name"
                                placeholder="Type in your last name"
                                value={this.state.lastName}
                                inputOnChange={this.inputChange}
                                inputId={'lastName'}
                            />
                        </div>
                        <div className="row">
                            <InputBox
                                inputLabel="Country"
                                placeholder="Type in your country"
                                value={this.state.country}
                                inputOnChange={this.inputChange}
                                inputId={'country'}
                            />
                            <InputBox
                                inputLabel="Date of Birth"
                                placeholder="Type in your DOB"
                                value={this.state.dateOfBirth}
                                inputOnChange={this.inputChange}
                                inputId={'dateOfBirth'}
                            />
                        </div>
                      </div>
                   : <div>
                     </div>
                }
                
               </div>       
            </div>
            <div>
                <Button 
                    variant="primary" 
                    className="search-button"
                    onClick={() => this.onSearchClick()}
                >
                    Search
                </Button>
                
                <h5>Search Results</h5>

                <SearchResults 
                    selectedType={this.state.searchType}
                    data={this.state.searchResult}
                />
            </div>
           
            </div>

        )
    }
}

export default SearchContainer
