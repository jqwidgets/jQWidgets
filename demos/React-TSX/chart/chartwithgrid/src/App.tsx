import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxGrid, { IGridProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myChart = useRef<JqxChart>(null);
    const myGrid = useRef<JqxGrid>(null);

    const sampleData: any[] = [
        { Day: 'Monday', Keith: 30, Erica: 15, George: 25 },
        { Day: 'Tuesday', Keith: 25, Erica: 25, George: 30 },
        { Day: 'Wednesday', Keith: 30, Erica: 20, George: 25 },
        { Day: 'Thursday', Keith: 35, Erica: 25, George: 45 },
        { Day: 'Friday', Keith: 20, Erica: 20, George: 25 },
        { Day: 'Saturday', Keith: 30, Erica: 20, George: 30 },
        { Day: 'Sunday', Keith: 60, Erica: 45, George: 90 }
    ];

    const columns = [
        { text: "Day", width: '40%', datafield: "Day", filteritems: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], filtertype: "checkedlist" },
        { text: "Keith", width: '20%', datafield: "Keith" },
        { text: "Erica", width: '20%', datafield: "Erica" },
        { text: "George", width: '20%', datafield: "George" }
    ];

    const dataAdapter = React.useMemo(() =>
        new jqx.dataAdapter({
            datafields: [
                { name: "Day", type: "string" },
                { name: "Keith", type: "number" },
                { name: "Erica", type: "number" },
                { name: "George", type: "number" }
            ],
            datatype: 'array',
            localdata: sampleData
        }), []
    );

    const [chartSource, setChartSource] = useState(sampleData);

    const description: IChartProps['description'] = 'Time spent in vigorous exercise';
    const padding: IChartProps['padding'] = { left: 5, top: 5, right: 5, bottom: 5 };
    const seriesGroups: IChartProps['seriesGroups'] = [
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
    ];
    const title: IChartProps['title'] = 'Fitness & exercise weekly scorecard';
    const titlePadding: IChartProps['titlePadding'] = { left: 90, top: 0, right: 0, bottom: 10 };
    const xAxis: IChartProps['xAxis'] = {
        dataField: 'Day',
        gridLines: { visible: true }
    };

    const gridOnFilter = useCallback(() => {
        const rows = myGrid.current!.getrows();
        setChartSource(rows);
        myChart.current!.refresh();
    }, []);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid}
                onFilter={gridOnFilter}
                // @ts-ignore
                width={'100%'}
                height={230}
                filterable={true}
                source={dataAdapter}
                columns={columns}
                showfilterrow={true}
            />
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px', marginTop: '50px' }}
                title={title}
                description={description}
                showLegend={true}
                enableAnimations={true}
                padding={padding}
                titlePadding={titlePadding}
                source={chartSource}
                xAxis={xAxis}
                seriesGroups={seriesGroups}
                colorScheme={'scheme01'}
            />
        </div>
    );
};

export default App;