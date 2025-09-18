import * as React from 'react';
import { useRef, useState } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

function App() {
    const myChart = useRef<JqxChart>(null);

    const dataset: any[] = [
        { City: 'London', SalesCountJan: 210, SalesRevenueJan: 123 },
        { City: 'Madrid', SalesCountJan: 190, SalesRevenueJan: 114 },
        { City: 'Munich', SalesCountJan: 201, SalesRevenueJan: 112 },
        { City: 'Amsterdam', SalesCountJan: 110, SalesRevenueJan: 98 },
        { City: 'Paris', SalesCountJan: 105, SalesRevenueJan: 93 },
        { City: 'Prague', SalesCountJan: 54, SalesRevenueJan: 100 }
    ];

    const [seriesGroups, setSeriesGroups] = useState([
        {
            endAngle: 270,
            polar: true,
            radius: 120,
            series: [
                { dataField: 'SalesCountJan', displayText: 'Sales count', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                { dataField: 'SalesRevenueJan', displayText: 'Revenue', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
            ],
            type: 'line'
        }
    ]);

    const [xAxis, setXAxis] = useState({
        dataField: 'City',
        labels: { autoRotate: true },
        valuesOnTicks: true
    });

    const [valueAxis, setValueAxis] = useState({
        labels: {
            autoRotate: true,
            formatSettings: { decimalPlaces: 0 }
        }
    });

    const [description] = useState('(revenue in thousands)');
    const [padding] = useState({ left: 5, top: 5, right: 5, bottom: 5 });
    const [source] = useState(dataset);
    const [title] = useState('Sales volume and revenue by city');
    const [titlePadding] = useState({ left: 0, top: 0, right: 0, bottom: 5 });

    function updateChart() {
        if (myChart.current) {
            myChart.current.update();
        }
    }

    function sliderStartAngle(event: any): void {
        const value = event.args.value;
        const updated = [...seriesGroups];
        updated[0] = { ...updated[0], startAngle: value };
        setSeriesGroups(updated);
        setTimeout(updateChart, 0);
    }

    function sliderEndAngle(event: any): void {
        const value = 360 - event.args.value;
        const updated = [...seriesGroups];
        updated[0] = { ...updated[0], endAngle: value };
        setSeriesGroups(updated);
        setTimeout(updateChart, 0);
    }

    function sliderRotate(event: any): void {
        const value = event.args.value;
        const prevGroup = seriesGroups[0];
        let endAngle = prevGroup.endAngle;
        if (isNaN(endAngle)) endAngle = 360;
        let startAngle = prevGroup.startAngle;
        if (isNaN(startAngle)) startAngle = 0;
        const diff = endAngle - startAngle;
        const updated = [...seriesGroups];
        updated[0] = { ...updated[0], startAngle: value, endAngle: value + diff };
        setSeriesGroups(updated);
        setTimeout(updateChart, 0);
    }

    function sliderRadius(event: any): void {
        const value = event.args.value;
        const updated = [...seriesGroups];
        updated[0] = { ...updated[0], radius: value };
        setSeriesGroups(updated);
        setTimeout(updateChart, 0);
    }

    function checkBoxTicksBetween(event: any): void {
        const updatedXAxis = { ...xAxis, valuesOnTicks: !event.args.checked };
        setXAxis(updatedXAxis);
        setTimeout(updateChart, 0);
    }

    function checkBoxAutoRotate(event: any): void {
        const checked = event.args.checked;
        const updatedXAxis = { ...xAxis, labels: { ...xAxis.labels, autoRotate: checked } };
        const updatedValueAxis = { ...valueAxis, labels: { ...valueAxis.labels, autoRotate: checked } };
        setXAxis(updatedXAxis);
        setValueAxis(updatedValueAxis);
        setTimeout(updateChart, 0);
    }

    return (
        <div>
            <JqxChart ref={myChart} style={{ width: '850px', height: '500px' }}
                title={title} description={description} showLegend={true}
                enableAnimations={false} padding={padding} titlePadding={titlePadding}
                source={source} xAxis={xAxis} valueAxis={valueAxis}
                seriesGroups={seriesGroups} colorScheme={'scheme01'} />
            <table style={{ width: '850px' }}>
                <tbody>
                    <tr>
                        <td style={{ paddingLeft: '50px' }}>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to change start angle:</p>
                            <JqxSlider theme={'material-purple'} onChange={sliderStartAngle}
                                width={240} min={0} max={360} step={1}
                                ticksFrequency={20} mode={'fixed'} />
                        </td>
                        <td>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to change end angle:</p>
                            <JqxSlider theme={'material-purple'} onChange={sliderEndAngle}
                                width={240} min={0} max={360} step={1}
                                ticksFrequency={20} mode={'fixed'} value={90} />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ paddingLeft: '50px' }}>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to rotate:</p>
                            <JqxSlider theme={'material-purple'} onChange={sliderRotate}
                                width={240} min={80} max={360} step={1}
                                ticksFrequency={20} mode={'fixed'} />
                        </td>
                        <td>
                            <p style={{ fontFamily: 'Verdana', fontSize: '12px' }}>Move the slider to change the radius:</p>
                            <JqxSlider theme={'material-purple'} onChange={sliderRadius}
                                width={240} min={80} max={140} step={1}
                                ticksFrequency={20} mode={'fixed'} value={120} />
                        </td>
                    </tr>
                    <tr style={{ height: '15px' }} />
                    <tr>
                        <td style={{ paddingLeft: '50px' }}>
                            <JqxCheckBox theme={'material-purple'} onChange={checkBoxTicksBetween}
                                width={220} height={25}>
                                Tick marks between values
                            </JqxCheckBox>
                        </td>
                        <td>
                            <JqxCheckBox theme={'material-purple'} onChange={checkBoxAutoRotate}
                                width={220} height={25} checked={true}>
                                Auto rotate axis text
                            </JqxCheckBox>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default App;