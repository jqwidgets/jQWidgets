import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    componentDidMount() {
       this.refs.myGrid.on('filter', () => {
           let rows = this.refs.myGrid.getrows();
           this.refs.myChart.source(rows);
           this.refs.myChart.refresh();
        });
    }
    render() {
        let sampleData = [
            { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
            { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
            { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
            { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
            { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
            { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
            { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
        ];

        let adapter = new $.jqx.dataAdapter({
            datafields: [
                { name: "Day", type: "string" },
                { name: "Keith", type: "number" },
                { name: "Erica", type: "number" },
                { name: "George", type: "number" }
            ],
            localdata: sampleData,
            datatype: 'array'
        });

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Day',
                gridLines: { visible: true }
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    columnsGapPercent: 50,
                    seriesGapPercent: 0,
                    valueAxis:
                    {
                        visible: true,
                        unitInterval: 10,
                        minValue: 0,
                        maxValue: 100,
                        title: { text: 'Time in minutes' }
                    },
                    series: [
                        { dataField: 'Keith', displayText: 'Keith' },
                        { dataField: 'Erica', displayText: 'Erica' },
                        { dataField: 'George', displayText: 'George' }
                    ]
                }
            ];

        let columns =
            [
                { text: "Day", width: '40%', datafield: "Day", filteritems: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], filtertype: "checkedlist" },
                { text: "Keith", width: '20%', datafield: "Keith" },
                { text: "Erica", width: '20%', datafield: "Erica" },
                { text: "George", width: '20%', datafield: "George" }
            ];
        return (
            <div>
                <JqxGrid ref='myGrid'
                    width={850} height={230} filterable={true} 
                    source={adapter} columns={columns} showfilterrow={true}
                />
                <JqxChart ref='myChart' style={{ width: 850, height: 500, marginTop: 50 }}
                    title={'Fitness & exercise weekly scorecard'} description={'Time spent in vigorous exercise'}
                    showLegend={true} enableAnimations={true} padding={padding}
                    titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                    colorScheme={'scheme01'} seriesGroups={seriesGroups}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
