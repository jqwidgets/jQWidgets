import * as React from 'react';
import { useRef, useMemo } from 'react';
import './App.css';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const myChart = useRef<JqxChart>(null);

    const { source, seriesGroups, padding, title, description, titlePadding, xAxis } = useMemo(() => {
        const src: any = {
            datafields: [
                { name: 'Country' },
                { name: 'GDP' },
                { name: 'DebtPercent' },
                { name: 'Debt' }
            ],
            datatype: 'csv',
            url: 'gdp_dept_2010.txt'
        };
        return {
            source: new jqx.dataAdapter(src, {
                async: false,
                autoBind: true,
                loadError: (xhr: any, status: any, error: any) => {
                    alert('Error loading "' + src.url + '" : ' + error)
                }
            }),
            title: 'Economic comparison',
            description: 'GDP and Debt in 2010',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Country'
            },
            seriesGroups: [
                {
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'GDP', displayText: 'GDP per Capita' },
                        { dataField: 'Debt', displayText: 'Debt per Capita' }
                    ],
                    type: 'column',
                    valueAxis: {
                        title: { text: 'GDP & Debt per Capita($)<br>' },
                        unitInterval: 5000
                    }
                },
                {
                    series: [
                        { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                    ],
                    type: 'line',
                    valueAxis: {
                        gridLines: { visible: false },
                        position: 'right',
                        title: { text: 'Debt (% of GDP)<br>' },
                        unitInterval: 10
                    }
                }
            ]
        };
    }, []);

    const jpegButtonOnClick = () => {
        myChart.current!.saveAsJPEG('myChart.jpeg', 'https://www.jqwidgets.com/export_server/export.php');
    };

    const pngButtonOnClick = () => {
        myChart.current!.saveAsPNG('myChart.png', 'https://www.jqwidgets.com/export_server/export.php');
    };

    const pdfButtonOnClick = () => {
        myChart.current!.saveAsPDF('myChart.pdf', 'https://www.jqwidgets.com/export_server/export.php');
    };

    return (
        <div>
            <JqxChart
                ref={myChart}
                style={{ width: '850px', height: '500px' }}
                title={title}
                description={description}
                showLegend={true}
                enableAnimations={true}
                padding={padding}
                titlePadding={titlePadding}
                source={source}
                xAxis={xAxis}
                seriesGroups={seriesGroups}
                colorScheme={'scheme01'}
            />
            <div style={{ marginTop: '10px' }}>
                <JqxButton theme={'material-purple'} onClick={jpegButtonOnClick}>Save As JPEG</JqxButton>
                <JqxButton theme={'material-purple'} onClick={pngButtonOnClick}>Save As PNG</JqxButton>
                <JqxButton theme={'material-purple'} onClick={pdfButtonOnClick}>Save As PDF</JqxButton>
            </div>
        </div>
    );
};

export default App;