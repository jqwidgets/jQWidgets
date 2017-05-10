import React from 'react';
import ReactDOM from 'react-dom';

import JqxDataTable from '../../../jqwidgets-react/react_jqxdatatable.js';

class App extends React.Component {
    render() {
        let source =
            {
                dataType: 'json',
                dataFields: [
                    { name: 'ShipCountry', type: 'string' },
                    { name: 'ShipCity', type: 'string' },
                    { name: 'ShipAddress', type: 'string' },
                    { name: 'ShipName', type: 'string' },
                    { name: 'Freight', type: 'number' },
                    { name: 'ShippedDate', type: 'date' }
                ],
                root: 'value',
                url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json&$callback=?'
            };

        let dataAdapter = new $.jqx.dataAdapter(source,
            {
                formatData: (data) => {
                    if (data.sortdatafield && data.sortorder) {
                        // update the $orderby param of the OData service.
                        // data.sortdatafield - the column's datafield value(ShipCountry, ShipCity, etc.).
                        // data.sortorder - the sort order(asc or desc).
                        data.$orderby = data.sortdatafield + ' ' + data.sortorder;
                    }
                    if (data.filterslength) {
                        filterChanged = true;
                        let filterParam = '';
                        for (let i = 0; i < data.filterslength; i++) {
                            // filter's value.
                            let filterValue = data['filtervalue' + i];
                            // filter's condition. For the filterMode='simple' it is 'CONTAINS'.
                            let filterCondition = data['filtercondition' + i];
                            // filter's data field - the filter column's datafield value.
                            let filterDataField = data['filterdatafield' + i];
                            // 'and' or 'or' depending on the filter expressions. When the filterMode='simple', the value is 'or'.
                            let filterOperator = data[filterDataField + 'operator'];
                            let startIndex = 0;
                            if (filterValue.indexOf('-') == -1) {
                                if (filterCondition == 'CONTAINS') {
                                    filterParam += 'substringof("' + filterValue + '", ' + filterDataField + ') eq true';
                                    filterParam += ' ' + filterOperator + ' ';
                                }s
                            }
                            else {
                                if (filterDataField == 'ShippedDate') {
                                    let dateGroups = new Array();
                                    let startIndex = 0;
                                    let item = filterValue.substring(startIndex).indexOf('-');
                                    while (item > -1) {
                                        dateGroups.push(filterValue.substring(startIndex, item + startIndex));
                                        startIndex += item + 1;
                                        item = filterValue.substring(startIndex).indexOf('-');
                                        if (item == -1) {
                                            dateGroups.push(filterValue.substring(startIndex));
                                        }
                                    }
                                    if (dateGroups.length == 3) {
                                        filterParam += 'year(ShippedDate) eq ' + parseInt(dateGroups[0]) + ' and month(ShippedDate) eq ' + parseInt(dateGroups[1]) + ' and day(ShippedDate) eq ' + parseInt(dateGroups[2]);
                                    }
                                    filterParam += ' ' + filterOperator + ' ';
                                }
                            }
                        }
                        // remove last filter operator.
                        filterParam = filterParam.substring(0, filterParam.length - filterOperator.length - 2);
                        data.$filter = filterParam;
                        source.totalRecords = 0;
                    }
                    else {
                        if (filterChanged) {
                            source.totalRecords = 0;
                            filterChanged = false;
                        }
                    }
                    if (source.totalRecords) {
                        // update the $skip and $top params of the OData service.
                        // data.pagenum - page number starting from 0.
                        // data.pagesize - page size
                        data.$skip = data.pagenum * data.pagesize;
                        data.$top = data.pagesize;
                    }
                    return data;
                },
                downloadComplete: (data, status, xhr) => {
                    if (!source.totalRecords) {
                        source.totalRecords = data.value.length;
                    }
                },
                loadError: (xhr, status, error) => {
                    throw new Error('http://services.odata.org: ' + error.toString());
                }
            }
        );

        let filterChanged = false;

        let columns =
            [
                { text: 'Ship Name', dataField: 'ShipName', width: 250 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                { text: 'Ship Address', dataField: 'ShipAddress', width: 150 },
                { text: 'Ship Date', dataField: 'ShippedDate', width: 150, cellsFormat: 'yyyy-MM-dd' }
            ];

        return (
            <div>
                <h3 style={{ fontSize: 16, fontFmily: 'Verdana' }}>Data Source: 'http://services.odata.org'</h3>
                <JqxDataTable
                    width={850} source={dataAdapter} altRows={true}
                    pageable={true} sortable={true} filterable={true}
                    serverProcessing={true} pagerButtonsCount={10}
                    filterMode={'simple'} columnsResize={true}
                    columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
