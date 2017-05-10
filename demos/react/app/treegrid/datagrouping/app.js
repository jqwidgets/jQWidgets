import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';

class App extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.refs.myTreeGrid.expandRow(0);
        })
    }
    render () {
        // prepare the data
        let source = {
            datatype: 'xml',
            datafields: [
                { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
                { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
                { name: 'City', map: 'm\\:properties>d\\:City' },
                { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
                { name: 'Country', map: 'm\\:properties>d\\:Country' }
            ],
            hierarchy:
                {
                    groupingDataFields:
                        [
                            {
                                name: 'Country'
                            }
                        ]
                },
            root: 'entry',
            record: 'content',
            id: { name: 'CustomerID', map: 'm\\:properties>d\\:CustomerID' },
            url: '../sampledata/customers.xml'
        };
        let dataAdapter = new $.jqx.dataAdapter(source);
        // create Tree Grid
        let icons = (rowKey, rowData) => {
            let level = rowData.level;
            if (level == 0) {
                // each group row has a label member that contains the information displayed on the group row.
                var country = rowData.label;
                return '../../images/' + $.trim(country.toLowerCase()) + '.png';
            }
            return false;
        }
        let columns = [
            { text: 'City', dataField: 'City', width: 250 },
            { text: 'Company Name', dataField: 'CompanyName', minWidth: 100, width: 200 },
            { text: 'Contact Name', dataField: 'ContactName', width: 150 },
            { text: 'Contact Title', dataField: 'ContactTitle', width: 300 },
            { text: 'Postal Code', dataField: 'PostalCode', width: 120 }
        ];
        return (
            <JqxTreeGrid ref='myTreeGrid'
                width={850}
                source={dataAdapter}
                pageable={true}
                columnsResize={true}
                altRows={true}
                icons={icons}
                columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
