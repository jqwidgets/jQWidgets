import * as React from 'react';
 


import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

class App extends React.PureComponent<{}, IChartProps> {

    private myChart = React.createRef<JqxChart>();

    constructor(props: {}) {
        super(props);
        this.jpegButtonOnClick = this.jpegButtonOnClick.bind(this);
        this.pngButtonOnClick = this.pngButtonOnClick.bind(this);
        this.pdfButtonOnClick = this.pdfButtonOnClick.bind(this);

        const source: any = {
            datafields: [
                { name: 'Country' },
                { name: 'GDP' },
                { name: 'DebtPercent' },
                { name: 'Debt' }
            ],
            datatype: 'csv',
            url: 'gdp_dept_2010.txt'
        };

        this.state = {
            description: 'GDP and Debt in 2010',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    columnsGapPercent: 50,
                    series: [
                        { dataField: 'GDP', displayText: 'GDP per Capita' },
                        { dataField: 'Debt', displayText: 'Debt per Capita' }
                    ],
                    type: 'column',
                    valueAxis:
                    {                       
                        title: { text: 'GDP & Debt per Capita($)<br>' },
                        unitInterval: 5000
                    }
                },
                {
                    series: [
                        { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                    ],
                    type: 'line',
                    valueAxis:
                    {
                        gridLines: { visible: false },
                        position: 'right',
                        title: { text: 'Debt (% of GDP)<br>' },
                        unitInterval: 10
                    }
                }
            ],
            source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error) } }),
            title: 'Economic comparison',
            titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
            xAxis: {
                dataField: 'Country'
            }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} description={this.state.description}
                    showLegend={true} enableAnimations={true} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    seriesGroups={this.state.seriesGroups} colorScheme={'scheme01'} />

                <div style={{ marginTop: '10px' }}>
                    <JqxButton theme={'material-purple'} onClick={this.jpegButtonOnClick}>Save As JPEG</JqxButton>
                    <JqxButton theme={'material-purple'} onClick={this.pngButtonOnClick}>Save As PNG</JqxButton>
                    <JqxButton theme={'material-purple'} onClick={this.pdfButtonOnClick}>Save As PDF</JqxButton>
                </div>
            </div>
        );
    }

    private jpegButtonOnClick() {
        this.myChart.current!.saveAsJPEG('myChart.jpeg', 'https://www.jqwidgets.com/export_server/export.php');
    }

    private pngButtonOnClick() {
        this.myChart.current!.saveAsPNG('myChart.png', 'https://www.jqwidgets.com/export_server/export.php');
    }

    private pdfButtonOnClick() {
        this.myChart.current!.saveAsPDF('myChart.pdf', 'https://www.jqwidgets.com/export_server/export.php');
    }
}

export default App; 