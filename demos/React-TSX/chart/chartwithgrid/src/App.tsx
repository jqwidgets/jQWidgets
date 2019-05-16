import * as React from 'react';
 

import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxGrid, { IGridProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

export interface IState extends IChartProps {
    dataAdapter: IGridProps["source"];
    columns: IGridProps["columns"];
}

class App extends React.PureComponent<{}, IState> {

    private myChart = React.createRef<JqxChart>();
    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.gridOnFilter = this.gridOnFilter.bind(this);

        const sampleData: any[] = [
            { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
            { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
            { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
            { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
            { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
            { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
            { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
        ];

        this.state = {
            columns: [
                { text: "Day", width: '40%', datafield: "Day", filteritems: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], filtertype: "checkedlist" },
                { text: "Keith", width: '20%', datafield: "Keith" },
                { text: "Erica", width: '20%', datafield: "Erica" },
                { text: "George", width: '20%', datafield: "George" }
            ],
            dataAdapter: new jqx.dataAdapter({
                datafields: [
                    { name: "Day", type: "string" },
                    { name: "Keith", type: "number" },
                    { name: "Erica", type: "number" },
                    { name: "George", type: "number" }
                ],
                datatype: 'array',
                localdata: sampleData
            }),
            description: 'Time spent in vigorous exercise',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'Keith', displayText: 'Keith' },
                        { dataField: 'Erica', displayText: 'Erica' },
                        { dataField: 'George', displayText: 'George' }
                    ],
                    seriesGapPercent: 0,
                    type: 'column',
                    valueAxis:
                    {
                        maxValue: 100,
                        minValue: 0,
                        title: { text: 'Time in minutes' },
                        unitInterval: 10,
                        visible: true
                    }
                }
            ],
            source: sampleData,
            title: 'Fitness & exercise weekly scorecard',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Day',
                gridLines: { visible: true }
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid} onFilter={this.gridOnFilter}
                    // @ts-ignore
                    width={'100%'} height={230} filterable={true}
                    source={this.state.dataAdapter} columns={this.state.columns} showfilterrow={true} />

                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px', marginTop: '50px' }}
                    title={this.state.title} description={this.state.description}
                    showLegend={true} enableAnimations={true} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />
            </div>
        );
    }

    private gridOnFilter(event: any) {
        const rows = this.myGrid.current!.getrows();
        this.myChart.current!.setOptions({ source: rows });
        this.myChart.current!.refresh();
    }
}

export default App; 