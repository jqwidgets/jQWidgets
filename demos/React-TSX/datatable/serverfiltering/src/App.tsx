import * as React from 'react';
import { useRef, useMemo } from 'react';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';

const App = () => {
    const filterChanged = useRef<boolean>(false);

    const { columns, source } = useMemo(() => {
        const source: any = {
            dataFields: [
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'Freight', type: 'number' },
                { name: 'ShippedDate', type: 'date' }
            ],
            dataType: 'json',
            root: 'value',
            url: 'http://services.odata.org/V3/Northwind/Northwind.svc/Orders?$format=json&$callback=?'
        };

        const dataAdapter: any = new jqx.dataAdapter(source,
            {
                downloadComplete: (data: any, status: any, xhr: any) => {
                    if (!source.totalRecords) {
                        source.totalRecords = data.value.length;
                    }
                },
                formatData: (data: any): void => {
                    if (data.sortdatafield && data.sortorder) {
                        data.$orderby = data.sortdatafield + ' ' + data.sortorder;
                    }
                    let filterOperator;
                    if (data.filterslength) {
                        filterChanged.current = true;
                        let filterParam = '';
                        for (let i = 0; i < data.filterslength; i++) {
                            const filterValue = data['filtervalue' + i];
                            const filterCondition = data['filtercondition' + i];
                            const filterDataField = data['filterdatafield' + i];
                            filterOperator = data[filterDataField + 'operator'];
                            let startIndex = 0;
                            if (filterValue.indexOf('-') === -1) {
                                if (filterCondition === 'CONTAINS') {
                                    filterParam += 'substringof("' + filterValue + '", ' + filterDataField + ') eq true';
                                    filterParam += ' ' + filterOperator + ' ';
                                }
                            }
                            else {
                                if (filterDataField === 'ShippedDate') {
                                    const dateGroups: string[] = [];
                                    let item = filterValue.substring(startIndex).indexOf('-');
                                    while (item > -1) {
                                        dateGroups.push(filterValue.substring(startIndex, item + startIndex));
                                        startIndex += item + 1;
                                        item = filterValue.substring(startIndex).indexOf('-');
                                        if (item === -1) {
                                            dateGroups.push(filterValue.substring(startIndex));
                                        }
                                    }
                                    if (dateGroups.length === 3) {
                                        filterParam += 'year(ShippedDate) eq ' + parseInt(dateGroups[0], 10) + ' and month(ShippedDate) eq ' + parseInt(dateGroups[1], 10) + ' and day(ShippedDate) eq ' + parseInt(dateGroups[2], 10);
                                    }
                                    filterParam += ' ' + filterOperator + ' ';
                                }
                            }
                        }
                        filterParam = filterParam.substring(0, filterParam.length - filterOperator.length - 2);
                        data.$filter = filterParam;
                        source.totalRecords = 0;
                    }
                    else {
                        if (filterChanged.current) {
                            source.totalRecords = 0;
                            filterChanged.current = false;
                        }
                    }
                    if (source.totalRecords) {
                        data.$skip = data.pagenum * data.pagesize;
                        data.$top = data.pagesize;
                    }
                    return data;
                },
                loadError: (xhr: any, status: any, error: any) => {
                    throw new Error('http://services.odata.org: ' + error.toString());
                }
            }
        );

        return {
            columns: [
                { text: 'Ship Name', dataField: 'ShipName', width: 250 },
                { text: 'Ship Country', dataField: 'ShipCountry', width: 150 },
                { text: 'Ship City', dataField: 'ShipCity', width: 150 },
                { text: 'Ship Address', dataField: 'ShipAddress', width: 150 },
                { text: 'Ship Date', dataField: 'ShippedDate', width: 150, cellsFormat: 'yyyy-MM-dd' }
            ],
            source: dataAdapter
        };
    }, []);

    return (
        <div>
            <h3 style={{ fontSize: '16px', fontFamily: 'Verdana' }}>Data Source: 'http://services.odata.org'</h3>
            <JqxDataTable
                theme={'material-purple'}
                width={'100%'}
                // @ts-ignore
                source={source}
                columns={columns}
                altRows={true}
                pageable={true}
                sortable={true}
                filterable={true}
                serverProcessing={true}
                columnsResize={true}
                filterMode={'simple'}
                pagerButtonsCount={10}
            />
        </div>
    );
};

export default App;