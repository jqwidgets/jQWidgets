import * as React from 'react';
import { useMemo } from 'react';
import JqxChart, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const months = useMemo(() => [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ], []);

    const sourceObj = useMemo(() => ({
        datafields: [
            { name: 'Date' },
            { name: 'Referral' },
            { name: 'SearchPaid' },
            { name: 'SearchNonPaid' }
        ],
        datatype: 'tab',
        url: 'website_analytics.txt'
    }), []);

    const source = useMemo(() =>
        new jqx.dataAdapter(sourceObj, {
            async: false,
            autoBind: true,
            loadError: (xhr: any, status: any, error: any) => {
                alert('Error loading "' + sourceObj.url + '" : ' + error);
            }
        }),
        [sourceObj]
    );

    const xAxis = useMemo(() => ({
        baseUnit: 'day',
        dataField: 'Date',
        gridLines: { visible: false },
        labels: {
            formatFunction: (value: any) => value.getDate()
        },
        toolTipFormatFunction: (value: any) =>
            value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear(),
        type: 'date',
        valuesOnTicks: true
    }), [months]);

    const seriesGroups = useMemo(() => [
        {
            series: [
                { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' },
                { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                { dataField: 'Referral', displayText: 'Referral Traffic' }
            ],
            type: 'stackedarea100'
        }
    ], []);

    const valueAxis = useMemo(() => ({
        labels: { horizontalAlignment: 'right' },
        title: { text: 'Daily visitors' }
    }), []);

    const titlePadding = useMemo(() => ({
        left: 90, top: 0, right: 0, bottom: 10
    }), []);

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title="Web Traffic Analysis"
            description="Unique monthly site visitors (percentage stacked)"
            titlePadding={titlePadding}
            source={source}
            xAxis={xAxis}
            valueAxis={valueAxis}
            colorScheme="scheme06"
            seriesGroups={seriesGroups}
        />
    );
};

export default App;