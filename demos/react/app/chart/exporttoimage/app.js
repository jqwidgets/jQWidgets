import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.jpegButton.on('click', () => {
           this.refs.myChart.saveAsJPEG('myChart.jpeg', 'http://www.jqwidgets.com/export_server/export.php');
        });
        this.refs.pngButton.on('click', () => {
            this.refs.myChart.saveAsPNG('myChart.png', 'http://www.jqwidgets.com/export_server/export.php');
            });
        this.refs.pdfButton.on('click', () => {
            this.refs.myChart.saveAsPDF('myChart.pdf', 'http://www.jqwidgets.com/export_server/export.php');
        });
    }
    render() {
        let source =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Country' },
                    { name: 'GDP' },
                    { name: 'DebtPercent' },
                    { name: 'Debt' }
                ],
                url: '../sampledata/gdp_dept_2010.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10  };

        let xAxis =
            {
                dataField: 'Country'
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    columnsGapPercent: 50,
                    valueAxis:
                    {
                        unitInterval: 5000,
                        title: { text: 'GDP & Debt per Capita($)<br>' }
                    },
                    series: [
                        { dataField: 'GDP', displayText: 'GDP per Capita' },
                        { dataField: 'Debt', displayText: 'Debt per Capita' }
                    ]
                },
                {
                    type: 'line',
                    valueAxis:
                    {
                        unitInterval: 10,
                        title: { text: 'Debt (% of GDP)<br>' },
                        position: 'right',
                        gridLines: { visible: false }
                    },
                    series: [
                        { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Economic comparison'} description={'GDP and Debt in 2010'}
                    showLegend={true} enableAnimations={true} padding={padding}
                    titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                    colorScheme={'scheme01'} seriesGroups={seriesGroups}
                />
                <div style={{ marginTop: 10 }}>
                    <JqxButton style={{ float: 'left' }} ref='jpegButton' value='Save As JPEG' />
                    <JqxButton style={{ float: 'left', marginLeft: 5 }} ref='pngButton' value='Save As PNG' />
                    <JqxButton style={{ float: 'left', marginLeft: 5 }} ref='pdfButton' value='Save As PDF' />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
