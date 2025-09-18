import * as React from 'react';

import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
    const myChart = React.useRef<JqxChart>(null);

    const data = [
        { year: 2004, price: 0.1437 },
        { year: 2005, price: 0.1470 },
        { year: 2006, price: 0.1510 },
        { year: 2007, price: 0.1605 },
        { year: 2008, price: 0.1647 },
        { year: 2009, price: 0.1736 },
        { year: 2010, price: 0.1766 },
        { year: 2011, price: 0.1902 },
        { year: 2012, price: 0.1978 },
        { year: 2013, price: 0.2113 },
        { year: 2014, price: 0.2178 }
    ];

    const [description] = React.useState('Source: Eurostat');
    const [padding, setPadding] = React.useState({ left: 5, top: 5, right: 15, bottom: 5 });
    const [title] = React.useState('Electricity prices in Europe between 2004 and 2019');
    const [titlePadding] = React.useState({ left: 90, top: 0, right: 0, bottom: 10 });
    const [source] = React.useState(data);
    const [seriesGroups] = React.useState([
        {
            series: [
                { formatSettings: { decimalPlaces: 4 }, dataField: 'price', displayText: 'Price per kWh', symbolType: 'circle' }
            ],
            showLabels: true,
            type: 'stepline'
        }
    ]);
    const [valueAxis, setValueAxis] = React.useState<any>({
        alternatingBackgroundColor: '#EFEFEF',
        alternatingBackgroundColor2: '#CECECE',
        alternatingBackgroundOpacity: 0.2,
        gridLines: {
            color: '#CDCDCD',
            visible: true,
        },
        labels: {
            angle: 0,
            formatSettings: {
                decimalPlaces: 4, sufix: ' �'
            },
            visible: true,
        },
        padding: { left: 0, right: 0 },
        position: 'right',
        tickMarks: {
            color: '#CDCDCD',
            size: 5,
            visible: true,
        },
        title: { text: '<br><br>Price EUR / kWh' }
    });
    const [xAxis, setXAxis] = React.useState<any>({
        dataField: 'year',
        displayText: 'Year',
        gridLines: { color: '#CDCDCD' },
        labels: { angle: 0 },
        padding: { top: 0, bottom: 0 },
        tickMarks: { color: '#CDCDCD' },
        valuesOnTicks: false,
        position: 'bottom'
    });

    const sliderValueAxisLeftPaddingOnChange = React.useCallback((event: any) => {
        setValueAxis((prev: any) => {
            const updated = { ...prev, padding: { ...prev.padding, left: event.args.value } };
            return updated;
        });
        setTimeout(() => myChart.current?.refresh(), 0);
    }, []);

    const sliderValueAxisRightPaddingOnChange = React.useCallback((event: any) => {
        setValueAxis((prev: any) => {
            const updated = { ...prev, padding: { ...prev.padding, right: event.args.value } };
            return updated;
        });
        setTimeout(() => myChart.current?.refresh(), 0);
    }, []);

    const sliderValueAxisAngleOnChange = React.useCallback((event: any) => {
        setValueAxis((prev: any) => {
            const updated = {
                ...prev,
                labels: { ...prev.labels, angle: event.args.value }
            };
            return updated;
        });
        setTimeout(() => myChart.current?.refresh(), 0);
    }, []);

    const sliderXAxisTopPaddingOnChange = React.useCallback((event: any) => {
        setXAxis((prev: any) => {
            const updated = { ...prev, padding: { ...prev.padding, top: event.args.value } };
            return updated;
        });
        setTimeout(() => myChart.current?.refresh(), 0);
    }, []);

    const sliderXAxisBottomPaddingOnChange = React.useCallback((event: any) => {
        setXAxis((prev: any) => {
            const updated = { ...prev, padding: { ...prev.padding, bottom: event.args.value } };
            return updated;
        });
        setTimeout(() => myChart.current?.refresh(), 0);
    }, []);

    const sliderXAxisAngleOnChange = React.useCallback((event: any) => {
        setXAxis((prev: any) => {
            const updated = {
                ...prev,
                labels: { ...prev.labels, angle: event.args.value }
            };
            return updated;
        });
        setTimeout(() => myChart.current?.refresh(), 0);
    }, []);

    const btnLeftOnChange = React.useCallback((event: any) => {
        if (event.args.checked) {
            setValueAxis((prev: any) => ({ ...prev, position: 'left' }));
            setTimeout(() => myChart.current?.refresh(), 0);
        }
    }, []);

    const btnRightOnChange = React.useCallback((event: any) => {
        if (event.args.checked) {
            setValueAxis((prev: any) => ({ ...prev, position: 'right' }));
            setTimeout(() => myChart.current?.refresh(), 0);
        }
    }, []);

    const btnTopOnChange = React.useCallback((event: any) => {
        if (event.args.checked) {
            setXAxis((prev: any) => ({ ...prev, position: 'top' }));
            setTimeout(() => myChart.current?.refresh(), 0);
        }
    }, []);

    const btnBottomOnChange = React.useCallback((event: any) => {
        if (event.args.checked) {
            setXAxis((prev: any) => ({ ...prev, position: 'bottom' }));
            setTimeout(() => myChart.current?.refresh(), 0);
        }
    }, []);

    const btnValueAxisFlipOnChange = React.useCallback((event: any) => {
        setValueAxis((prev: any) => ({
            ...prev,
            flip: event.args.checked
        }));
        setTimeout(() => myChart.current?.refresh(), 0);
    }, []);

    const btnXAxisFlipOnChange = React.useCallback((event: any) => {
        setXAxis((prev: any) => ({
            ...prev,
            flip: event.args.checked
        }));
        setTimeout(() => myChart.current?.refresh(), 0);
    }, []);

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={title}
                description={description}
                enableAnimations={true}
                showLegend={true}
                padding={padding}
                titlePadding={titlePadding}
                source={source}
                xAxis={xAxis}
                valueAxis={valueAxis}
                seriesGroups={seriesGroups}
                colorScheme={'scheme04'}
            />

            <table style={{ paddingLeft: '30px', paddingTop: '10px' }}>
                <tbody>
                    <tr style={{ height: '50px' }}>
                        <td style={{ width: '300px' }}><strong>[value] axis properties:</strong></td>
                        <td><strong>xAxis properties:</strong></td>
                    </tr>
                    <tr>
                        <td>
                            Left padding:
                            <JqxSlider theme={'material-purple'} onChange={sliderValueAxisLeftPaddingOnChange}
                                width={250} min={0} max={50} step={1}
                                value={valueAxis.padding?.left || 0} ticksFrequency={5} mode={'fixed'} />
                        </td>
                        <td>
                            Top padding:
                            <JqxSlider theme={'material-purple'} onChange={sliderXAxisTopPaddingOnChange}
                                width={250} min={0} max={50} step={1}
                                value={xAxis.padding?.top || 0} ticksFrequency={5} mode={'fixed'} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Right padding:
                            <JqxSlider theme={'material-purple'} onChange={sliderValueAxisRightPaddingOnChange}
                                width={250} min={0} max={50} step={1}
                                value={valueAxis.padding?.right || 0} ticksFrequency={5} mode={'fixed'} />
                        </td>
                        <td>
                            Bottom padding:
                            <JqxSlider theme={'