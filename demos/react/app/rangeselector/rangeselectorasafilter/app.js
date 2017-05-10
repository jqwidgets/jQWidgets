import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';
import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
        // update filter on 'change' event.
        this.refs.myRangeSelector.on('change', (event) => {

            let range = event.args;
            let min = this.refs.myRangeSelector.min();
            let max = this.refs.myRangeSelector.max();

            min = new Date(min);
            max = new Date(max);

            if (range.from.getTime() == min.getTime() && range.to.getTime() == max.getTime()) {
                this.refs.myGrid.clearfilters();
            } else {
                applyFilter(range.from, range.to);
            };
        });

        let applyFilter = (from, to) => {
            this.refs.myGrid.clearfilters();
            let filtertype = 'datefilter';
            let filtergroup = new $.jqx.filter();
            let filter_or_operator = 0;
            let filtervalueFrom = from;
            let filterconditionFrom = 'GREATER_THAN_OR_EQUAL';
            let filterFrom = filtergroup.createfilter(filtertype, filtervalueFrom, filterconditionFrom);
            filtergroup.addfilter(filter_or_operator, filterFrom);
            let filtervalueTo = to;
            let filterconditionTo = 'LESS_THAN_OR_EQUAL';
            let filterTo = filtergroup.createfilter(filtertype, filtervalueTo, filterconditionTo);
            filtergroup.addfilter(filter_or_operator, filterTo);
            this.refs.myGrid.addfilter('year', filtergroup);
            this.refs.myGrid.applyfilters();
        };

    }
    render() {
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'discovery', type: 'string' },
                    { name: 'scientist', type: 'string' },
                    { name: 'year', type: 'date' }
                ],
                id: 'id',
                url: '../sampledata/discoveries.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns = [
            { text: 'Discovery', columngroup: 'header', datafield: 'discovery', width: 250 },
            { text: 'Scientist', columngroup: 'header', datafield: 'scientist', width: 210 },
            { text: 'Year', columngroup: 'header', datafield: 'year', cellsformat: 'yyyy' }
        ]
        let columngroups = [
            { text: 'Major scientific discoveries in the 19th century', align: 'center', name: 'header' }
        ];

        return (
            <div>

                <label style={{ fontSize: 13, fontFamily: 'Verdana' }}>Major scientific discoveries in selected period:</label>

                <JqxGrid ref='myGrid' style={{ marginTop: 10 }}
                    width={850} height={300}
                    source={dataAdapter}
                    filterable={true}
                    columns={columns}
                    columngroups={columngroups}
                />
                <br />
                <label style={{ fontSize: 13, marginTop: 10, fontFamily: 'Verdana' }}>Select period:</label>
                <br />
                <JqxRangeSelector ref='myRangeSelector'
                    width={750} height={80}
                    min={'January 01, 1800'}
                    max={'January 01, 1900'}
                    range={{ from: 10, to: 50 }}
                    majorTicksInterval={{ years: 10 }}
                    minorTicksInterval={'year'}
                    labelsFormat={'yyyy'}
                    markersFormat={'yyyy'}
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
