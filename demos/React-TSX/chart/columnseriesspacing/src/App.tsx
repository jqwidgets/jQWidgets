import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxChart from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const sampleData = [
    { Position: 0, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 30, Serie5: 10, Serie6: 5 },
    { Position: 1, Serie1: 25, Serie2: 25, Serie3: 5, Serie4: 20, Serie5: 20, Serie6: 10 },
    { Position: 3, Serie1: 30, Serie2: 5, Serie3: 25, Serie4: 10, Serie5: 20, Serie6: 15 },
    { Position: 6, Serie1: 35, Serie2: 25, Serie3: 45, Serie4: 5, Serie5: 30, Serie6: 20 },
    { Position: 7, Serie1: 5, Serie2: 20, Serie3: 25, Serie4: 20, Serie5: 40, Serie6: 15 },
    { Position: 9, Serie1: 30, Serie2: 10, Serie3: 30, Serie4: 10, Serie5: 5, Serie6: 20 },
    { Position: 10, Serie1: 60, Serie2: 45, Serie3: 10, Serie4: 20, Serie5: 10, Serie6: 15 }
];

const defaultSeriesGroup1 = {
    columnsGapPercent: 25,
    columnsMaxWidth: 40,
    columnsMinWidth: 1,
    series: [
        { dataField: 'Serie1', displayText: 'Serie1' },
        { dataField: 'Serie2', displayText: 'Serie2' },
        { dataField: 'Serie3', displayText: 'Serie3' }
    ],
    seriesGapPercent: 10,
    type: 'column'
};

const defaultSeriesGroup2 = {
    columnsGapPercent: 25,
    columnsMaxWidth: 40,
    columnsMinWidth: 1,
    greyScale: true,
    series: [
        { dataField: 'Serie4', displayText: 'Serie4' },
        { dataField: 'Serie5', displayText: 'Serie5' },
        { dataField: 'Serie6', displayText: 'Serie6' }
    ],
    seriesGapPercent: 10,
    type: 'column'
};

const App = () => {
    const myChart = useRef<any>(null);

    const [enableSeriesGroup1Checked, setEnableSeriesGroup1Checked] = useState(true);
    const [enableSeriesGroup2Checked, setEnableSeriesGroup2Checked] = useState(false);
    const [stackedSeriesGroup1Checked, setStackedSeriesGroup1Checked] = useState(false);
    const [stackedSeriesGroup2Checked, setStackedSeriesGroup2Checked] = useState(false);
    const [seriesGroups, setSeriesGroups] = useState<any[]>([JSON.parse(JSON.stringify(defaultSeriesGroup1))]);
    const [lastSeriesGroupsState, setLastSeriesGroupsState] = useState<any[]>(seriesGroups);

    const title = 'Columns spacing and padding';
    const description = 'Example with two series groups and three series in each group';
    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };
    const valueAxis = {
        gridLines: { color: '#BCBCBC' },
        labels: { horizontalAlignment: 'right' },
        tickMarks: { color: '#BCBCBC' },
        title: { text: 'Value' },
        unitInterval: 10
    };
    const xAxis = {
        dataField: 'Position',
        flip: false,
        gridLines: { color: '#BCBCBC', interval: 1, visible: true },
        tickMarks: { color: '#BCBCBC', interval: 1, visible: true },
        valuesOnTicks: false
    };

    const updateSeriesGroups = useCallback((sg1: boolean, sg2: boolean) => {
        const groups = [];
        if (sg1) groups.push({ ...JSON.parse(JSON.stringify(defaultSeriesGroup1)), type: stackedSeriesGroup1Checked ? 'stackedcolumn' : 'column' });
        if (sg2) groups.push({ ...JSON.parse(JSON.stringify(defaultSeriesGroup2)), type: stackedSeriesGroup2Checked ? 'stackedcolumn' : 'column' });
        setSeriesGroups(groups);
        setLastSeriesGroupsState(groups);
        if (myChart.current) myChart.current.refresh();
    // eslint-disable-next-line
    }, [stackedSeriesGroup1Checked, stackedSeriesGroup2Checked]);

    const updateSeriesGroupsStacking = useCallback((event?: any) => {
        let sg1 = enableSeriesGroup1Checked;
        let sg2 = enableSeriesGroup2Checked;
        let sg1Stacked = stackedSeriesGroup1Checked;
        let sg2Stacked = stackedSeriesGroup2Checked;
        let sg1StackedClicked = false, sg2StackedClicked = false;

        if (event && event.target) {
            if (event.target.classList.contains('stacked1')) {
                sg1StackedClicked = true;
                sg1Stacked = !stackedSeriesGroup1Checked;
            }
            if (event.target.classList.contains('stacked2')) {
                sg2StackedClicked = true;
                sg2Stacked = !stackedSeriesGroup2Checked;
            }
        }

        const groups = [];
        if (sg1) groups.push({ ...JSON.parse(JSON.stringify(defaultSeriesGroup1)), type: sg1Stacked ? 'stackedcolumn' : 'column' });
        if (sg2) groups.push({ ...JSON.parse(JSON.stringify(defaultSeriesGroup2)), type: sg2Stacked ? 'stackedcolumn' : 'column' });
        setSeriesGroups(groups);
        setLastSeriesGroupsState(groups);

        if (sg1StackedClicked) setStackedSeriesGroup1Checked(sg1Stacked);
        if (sg2StackedClicked) setStackedSeriesGroup2Checked(sg2Stacked);

        if (myChart.current) myChart.current.refresh();
    }, [enableSeriesGroup1Checked, enableSeriesGroup2Checked, stackedSeriesGroup1Checked, stackedSeriesGroup2Checked]);

    const updateSeriesGroupsVisibility = useCallback((event: any) => {
        let sg1 = enableSeriesGroup1Checked;
        let sg2 = enableSeriesGroup2Checked;
        if (event.target.classList.contains('visible1')) sg1 = !sg1;
        if (event.target.classList.contains('visible2')) sg2 = !sg2;

        setEnableSeriesGroup1Checked(sg1);
        setEnableSeriesGroup2Checked(sg2);

        updateSeriesGroups(sg1, sg2);
    }, [enableSeriesGroup1Checked, enableSeriesGroup2Checked, updateSeriesGroups]);

    const sliderColumnsGapPercent = useCallback((series: number, event: any) => {
        eventHandler(event, series, 'columnsGapPercent');
    }, [seriesGroups]);

    const sliderSeriesGap = useCallback((series: number, event: any) => {
        eventHandler(event, series, 'seriesGapPercent');
    }, [seriesGroups]);

    const sliderMinWidth = useCallback((series: number, event: any) => {
        eventHandler(event, series, 'columnsMinWidth');
    }, [seriesGroups]);

    const sliderMaxWidth = useCallback((series: number, event: any) => {
        eventHandler(event, series, 'columnsMaxWidth');
    }, [seriesGroups]);

    const eventHandler = (event: any, series: number, propName: string) => {
        if (seriesGroups.length !== 0) {
            const groups = JSON.parse(JSON.stringify(seriesGroups));
            if (groups.length < 2) {
                const serieDataField = groups[0].series[0].dataField;
                const serie = serieDataField === 'Serie1' ? 0 : 1;
                if (series !== serie) return;
                groups[0][propName] = event.args.value;
            } else {
                groups[series][propName] = event.args.value;
            }
            setSeriesGroups(groups);
            setLastSeriesGroupsState(groups);
            if (myChart.current) myChart.current.refresh();
        }
    };

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={title}
                description={description}
                showLegend={true}
                enableAnimations={false}
                padding={padding}
                titlePadding={titlePadding}
                source={sampleData}
                xAxis={xAxis}
                columnSeriesOverlap={true}
                seriesGroups={seriesGroups}
                colorScheme={'