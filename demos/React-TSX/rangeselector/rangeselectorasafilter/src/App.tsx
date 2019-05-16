import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myRangeSelector = React.createRef<JqxRangeSelector>();

    constructor(props: {}) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.applyFilter = this.applyFilter.bind(this);

        const source = {
            datafields: [
                { name: 'discovery', type: 'string' },
                { name: 'scientist', type: 'string' },
                { name: 'year', type: 'date' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'discoveries.txt'
        };

        this.state = {
            columngroups: [
                { text: 'Major scientific discoveries in the 19th century', align: 'center', name: 'header' }
            ],
            columns: [
                { text: 'Discovery', columngroup: 'header', datafield: 'discovery', width: 250 },
                { text: 'Scientist', columngroup: 'header', datafield: 'scientist', width: 210 },
                { text: 'Year', columngroup: 'header', datafield: 'year', cellsformat: 'yyyy' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <label style={{ fontSize: '13px', fontFamily: 'Verdana' }}>
                    Major scientific discoveries in selected period:
                </label>
                <JqxGrid theme={'material-purple'} ref={this.myGrid} style={{ marginTop: '10px' }}
                    // @ts-ignore
                    width={'100%'} height={300} columns={this.state.columns}
                    source={this.state.source} filterable={true} columngroups={this.state.columngroups} />
                <br />
                <label style={{ fontSize: '13px', marginTop: '10px', fontFamily: 'Verdana' }}>
                    Select period:
                </label>
                <br />
                <JqxRangeSelector theme={'material-purple'} ref={this.myRangeSelector} onChange={this.onChange}
                    // @ts-ignore
                    width={'100%'} height={80} min={'January 01, 1800'}
                    max={'January 01, 1900'} labelsFormat={'yyyy'} markersFormat={'yyyy'}
                    majorTicksInterval={{ years: 10 }} minorTicksInterval={'year'} />

            </div>
        );
    }

    private onChange(event: any): void {
        const range = event.args;
        let min = this.myRangeSelector.current!.getOptions('min');
        let max = this.myRangeSelector.current!.getOptions('max');

        min = new Date(min);
        max = new Date(max);

        if (range.from.getTime() === min.getTime() && range.to.getTime() === max.getTime()) {
            this.myGrid.current!.clearfilters();
        } else {
            this.applyFilter(range.from, range.to);
        };
    };

    private applyFilter(from: any, to: any): void {
        this.myGrid.current!.clearfilters();
        const filtertype = 'datefilter';
        const filtergroup = new jqx.filter();
        const filteOrOperator = 0;
        const filtervalueFrom = from;
        const filterconditionFrom = 'GREATER_THAN_OR_EQUAL';
        const filterFrom = filtergroup.createfilter(filtertype, filtervalueFrom, filterconditionFrom);
        filtergroup.addfilter(filteOrOperator, filterFrom);
        const filtervalueTo = to;
        const filterconditionTo = 'LESS_THAN_OR_EQUAL';
        const filterTo = filtergroup.createfilter(filtertype, filtervalueTo, filterconditionTo);
        filtergroup.addfilter(filteOrOperator, filterTo);
        this.myGrid.current!.addfilter('year', filtergroup);
        this.myGrid.current!.applyfilters();
    }
}

export default App;
