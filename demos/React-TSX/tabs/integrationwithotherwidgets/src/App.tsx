import * as React from 'react';
 

import * as ReactDOM from "react-dom";

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

class App extends React.PureComponent<{}, IChartProps> {
    private myTabs = React.createRef<JqxTabs>();
    private gridElement = React.createRef<HTMLDivElement>();
    private chartElement = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        this.state = {
            colorScheme: 'scheme04',
            description: 'NASDAQ Composite compared to S&P 500',
            enableAnimations: true,
            padding: { left: 10, top: 5, right: 10, bottom: 5 },
            seriesGroups:
                [
                    {
                        series: [
                            { dataField: 'S&P 500', displayText: 'S&P 500' },
                            { dataField: 'NASDAQ', displayText: 'NASDAQ' }
                        ],
                        type: 'line',
                        valueAxis:
                        {
                            axisSize: 'auto',
                            tickMarks: {
                                color: '#888888',
                                visible: true
                            },
                            title: {
                                text: 'Daily Closing Price'
                            },
                            visible: true
                        }
                    }
                ],
            showLegend: true,
            title: 'U.S. Stock Market Index Performance (2011)',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis:
            {
                baseUnit: 'month',
                dataField: 'Date',
                formatFunction: (value: any) => {
                    return (months[value.getMonth()]).toString();
                },
                gridLines: {
                    color: '#888888',
                    interval: 3,
                    visible: true
                },
                tickMarks: {
                    color: '#888888',
                    interval: 1,
                    visible: true
                },
                toolTipFormatFunction: (value: any) => {
                    return (value.getDate() + '-' + months[value.getMonth()]).toString();
                },
                type: 'date',
                unitInterval: 1,
                valuesOnTicks: false
            }
        }
    }

    public render() {
        return (
            <JqxTabs theme={'material-purple'} ref={this.myTabs}
                // @ts-ignore
                width={'100%'}
                height={560}
                initTabContent={this.initWidgets}>
                <ul>
                    <li style={{ marginLeft: 30 }}>
                        <div style={{ height: 20, marginTop: 5 }}>
                            <div style={{ float: "left" }}>
                                <img width="16" height="16" src="https://www.jqwidgets.com/react/images/catalogicon.png" />
                            </div>
                            <div style={{ marginLeft: 4, verticalAlign: 'middle', textAlign: "center", float: "left" }}>
                                US Indexes
                            </div>
                        </div>
                    </li>
                    <li>
                        <div style={{ height: 20, marginTop: 5 }}>
                            <div style={{ float: "left" }}>
                                <img width="16" height="16" src="https://www.jqwidgets.com/react/images/pieicon.png" />
                            </div>
                            <div style={{ marginLeft: 4, verticalAlign: 'middle', textAlign: "center", float: "left" }}>
                                NASDAQ compared to S&P 500
                            </div>
                        </div>
                    </li>
                </ul>
                <div style={{ overflow: "hidden" }}>
                    <div id="jqxGrid" ref={this.gridElement} />
                    <div style={{ marginTop: 10, height: '15%' }}>
                        The S&P 500 index finished 2011 less than a point away from where it ended 2010
                        -- 0.04 points down to be exact. That's the smallest annual change in history. At
                        its peak in April, the S&P had climbed more than 8%. But by October, at the lowest
                        levels of the year, it was down more than 12%. The Nasdaq, meanwhile, lost 1.8%
                        for the year.
                </div>
                </div>
                <div style={{ overflow: "hidden" }}>
                    <div id='jqxChart' ref={this.chartElement} style={{ width: "100%", height: "100%" }} />
                </div>
            </JqxTabs>
        );
    }

    private initGrid = () => {
        const source =
        {
            datafields: [
                { name: 'Date' },
                { name: 'S&P 500' },
                { name: 'NASDAQ' }
            ],
            datatype: 'csv',
            url: 'nasdaq_vs_sp500.txt'
        };
        const dataAdapter = new jqx.dataAdapter(source, { async: false, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } });

        const columns: IGridProps["columns"] = [
            { cellsformat: 'd', datafield: 'Date', text: 'Date', width: 250 },
            { datafield: 'S&P 500', text: 'S&P 500', width: 150 },
            { datafield: 'NASDAQ', text: 'NASDAQ' }
        ];

        const grid = <JqxGrid theme={'material-purple'}
            width={'100%'}
            height={'84%'}
            source={dataAdapter}
            columns={columns}
        />;

        ReactDOM.render(
            grid,
            this.gridElement.current!
        );
    };

    private initChart = () => {
        // prepare the data
        const sourceChart =
        {
            datafields: [
                { name: 'Date' },
                { name: 'S&P 500' },
                { name: 'NASDAQ' }
            ],
            datatype: 'csv',
            url: './../sampledata/nasdaq_vs_sp500.txt'
        };
        const dataAdapterChart = new jqx.dataAdapter(sourceChart);

        // setup the chart
        const chart = <JqxChart theme={'material-purple'} style={{ width: '100%', height: '100%' }}
            colorScheme={this.state.colorScheme}
            description={this.state.description}
            enableAnimations={this.state.enableAnimations}
            padding={this.state.padding}
            seriesGroups={this.state.seriesGroups}
            showLegend={this.state.showLegend}
            source={dataAdapterChart}
            title={this.state.title}
            titlePadding={this.state.titlePadding}
            xAxis={this.state.xAxis}
        />;

        ReactDOM.render(
            chart,
            this.chartElement.current!
        );
    };

    private initWidgets = (tab: any) => {
        switch (tab) {
            case 0:
                this.initGrid();
                break;
            case 1:
                this.initChart();
                break;
        }
    };
}

export default App;
