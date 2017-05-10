import React from 'react';
import ReactDOM from 'react-dom';

import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';
import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let initGrid = () => {
            let source =
                {
                    datatype: 'csv',
                    datafields: [
                        { name: 'Date' },
                        { name: 'S&P 500' },
                        { name: 'NASDAQ' }
                    ],
                    url: '../sampledata/nasdaq_vs_sp500.txt'
                };
            let dataAdapter = new $.jqx.dataAdapter(source, { async: false, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });
            let Grid = new jqxGrid('#jqxGrid', {
                width: '100%',
                height: '84%',
                source: dataAdapter,
                columns: [
                    { text: 'Date', datafield: 'Date', cellsformat: 'd', width: 250 },
                    { text: 'S&P 500', datafield: 'S&P 500', width: 150 },
                    { text: 'NASDAQ', datafield: 'NASDAQ' }
                ]
            });
        }
        let initChart =  () => {
            // prepare the data
            let source =
                {
                    datatype: 'csv',
                    datafields: [
                        { name: 'Date' },
                        { name: 'S&P 500' },
                        { name: 'NASDAQ' }
                    ],
                    url: '../sampledata/nasdaq_vs_sp500.txt'
                };
            let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });
            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // prepare jqxChart settings
            let settings = {
                title: 'U.S. Stock Market Index Performance (2011)',
                description: 'NASDAQ Composite compared to S&P 500',
                enableAnimations: true,
                showLegend: true,
                padding: { left: 10, top: 5, right: 10, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: dataAdapter,
                categoryAxis:
                {
                    dataField: 'Date',
                    formatFunction: (value) => {
                        return months[value.getMonth()];
                    },
                    toolTipFormatFunction: (value) => {
                        return value.getDate() + '-' + months[value.getMonth()];
                    },
                    type: 'date',
                    baseUnit: 'month',
                    showTickMarks: true,
                    tickMarksInterval: 1,
                    tickMarksColor: '#888888',
                    unitInterval: 1,
                    showGridLines: true,
                    gridLinesInterval: 3,
                    gridLinesColor: '#888888',
                    valuesOnTicks: false
                },
                colorScheme: 'scheme04',
                seriesGroups:
                [
                    {
                        type: 'line',
                        valueAxis:
                        {
                            displayValueAxis: true,
                            description: 'Daily Closing Price',
                            axisSize: 'auto',
                            tickMarksColor: '#888888'
                        },
                        series: [
                            { dataField: 'S&P 500', displayText: 'S&P 500' },
                            { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                        ]
                    }
                ]
            };
            // setup the chart
            let Chart = new jqxChart('#jqxChart', settings);
        }
        // init widgets.
        let initWidgets = (tab) => {
            switch (tab) {
                case 0:
                    initGrid();
                    break;
                case 1:
                    initChart();
                    break;
            }
        };
        return (
            <div>

                <JqxTabs ref='myTabs'
                    width={600} height={560}
                    initTabContent={initWidgets}
                >
                    <ul>
                        <li style={{ marginLeft: '30px' }}>
                            <div style={{ height: '20px', marginTop: '5px' }}>
                                <div style={{ float: 'left' }}>
                                    <img width='16' height='16' src='../../images/catalogicon.png' />
                                </div>
                                <div style={{ marginLeft: '4px', verticalAlign: 'middle', textAlign: 'center', float: 'left' }}>
                                    US Indexes</div>
                            </div>
                        </li>
                        <li>
                            <div style={{ height: '20px', marginTop: '5px' }}>
                                <div style={{ float: 'left' }}>
                                    <img width='16' height='16' src='../../images/pieicon.png' />
                                </div>
                                <div style={{ marginLeft: '4px', verticalAlign: 'middle', textAlign: 'center', float: 'left' }}>
                                    NASDAQ compared to S&P 500</div>
                            </div>
                        </li>
                    </ul>
                    <div style={{ overflow: 'hidden' }}>
                        <div id='jqxGrid'>
                        </div>
                        <div style={{ marginTop: 10, height: '15%' }}>
                            The S&P 500 index finished 2011 less than a point away from where it ended 2010
                            -- 0.04 points down to be exact. That's the smallest annual change in history. At
                            its peak in April, the S&P had climbed more than 8%. But by October, at the lowest
                            levels of the year, it was down more than 12%. The Nasdaq, meanwhile, lost 1.8%
                            for the year.
                            </div>
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                        <div id='jqxChart' style={{ width: '100%', height: '100%' }}>
                        </div>

                    </div>
                </JqxTabs>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
