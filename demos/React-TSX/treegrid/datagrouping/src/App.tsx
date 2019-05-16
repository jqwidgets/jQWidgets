import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            dataFields: [
                { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
                { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
                { name: 'City', map: 'm\\:properties>d\\:City' },
                { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
                { name: 'Country', map: 'm\\:properties>d\\:Country' }
            ],
            dataType: 'xml',
            hierarchy:
            {
                groupingDataFields:
                    [
                        {
                            name: 'Country'
                        }
                    ]
            },
            id: { name: 'CustomerID', map: 'm\\:properties>d\\:CustomerID' },
            record: 'content',
            root: 'entry',
            url: 'customers.xml'
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { dataField: 'City', text: 'City', width: 250 },
                { dataField: 'CompanyName', minWidth: 100, text: 'Company Name', width: 200, },
                { dataField: 'ContactName', text: 'Contact Name', width: 150 },
                { dataField: 'ContactTitle', text: 'Contact Title', width: 300 },
                { dataField: 'PostalCode', text: 'Postal Code', width: 120 }
            ],
            icons: (rowKey: number | string, rowData: any): string | boolean => {
                const level = rowData.level;
                if (level === 0) {
                    // each group row has a label member that contains the information displayed on the group row.
                    const country = rowData.label;
                    return 'https://www.jqwidgets.com/react/images/' + (country.toLowerCase()).trim() + '.png';
                }
                return false;
            },
            ready: (): void => {
                this.myTreeGrid.current!.expandRow(0);
            },
            source: dataAdapter
        }
    }

    public render() {
        return (
            <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                // @ts-ignore
                width={'100%'}
                source={this.state.source}
                pageable={true}
                columnsResize={true}
                altRows={true}
                icons={this.state.icons}
                columns={this.state.columns}
                ready={this.state.ready}
            />
        );
    }
}

export default App;
