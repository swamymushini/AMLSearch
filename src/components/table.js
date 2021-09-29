import React, { Component } from 'react'
import { Table } from 'react-bootstrap';


const individualTableHeaders = [
    'Name', 'Category', 'Country', 'Source', 'Risk Status'
];
const legalEntityTableHeaders = [
    'Company Name', 'Company Type', 'Company ID', 'Incorportation Date', 'Country', 'Risk Status'
];

export class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return (
            <div className="results-table">
                <Table>
                   <thead>
                       <tr>
                           {this.props.selectedType === 'individual'
                              ? individualTableHeaders.map(heading => (
                                  <td> {heading} </td>
                                ))
                              :  legalEntityTableHeaders.map(heading => (
                                  <td> {heading} </td>
                              ))
                            }
                       </tr>
                   </thead>
                   <tbody>
                       {this.props.data.map(item => {
                           const tableData = item.details[0];
                           return (
                               <tr>
                                   <td className="name">
                                       {tableData.fullName}
                                   </td>
                                   <td className="category">
                                       {tableData.category.name}
                                   </td>
                                   <td className="country">
                                       {tableData.nationality}
                                   </td>
                                   <td className="source">
                                       {tableData.datasource.name}
                                   </td>
                                   <td className="risk-status">
                                       {tableData.riskLevel}
                                   </td>
                               </tr>
                           )
                       })}
                   </tbody>
                </Table>
            </div>
        )
    }
}

export default SearchResults;
