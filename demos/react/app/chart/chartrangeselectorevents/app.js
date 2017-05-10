import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myChart.on('click mouseover mouseout toggle rangeSelectionChanging rangeSelectionChanged refreshBegin refreshEnd', (event) => {
            if (event.args) {
                this.dumpEventInfo(event);
            }
        });
    }
    dumpEventInfo(event) {
        let args = event.args;
        if (event.type.indexOf('refresh') != -1) {
            if (this.refs.myChart.getInstance() != args.instance)
                return;
        }      
        let date = new Date();
        let line = 'Time: ' + (date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()) + ', event: ' + event.type;
        if (args.elementIndex)
            line += ', element index: ' + args.elementIndex;
        if (args.elementValue) {
            line += ', value: ' + args.elementValue;
        }
        if (event.type == 'toggle') {
            line += ', series group index: ' + this.refs.myChart.seriesGroups().indexOf(args.seriesGroup);
            line += ', visible: ' + args.state;
        }
        if (event.type.indexOf('rangeSelection') != -1) {
            line += ', minValue: ' + args.minValue.getFullYear() + '-' + (args.minValue.getMonth() + 1) + '-' + args.minValue.getDate();
            line += ', maxValue: ' + args.maxValue.getFullYear() + '-' + (args.maxValue.getMonth() + 1) + '-' + args.maxValue.getDate();
        }

        let textArea = document.getElementById('eventsTextArea')

        textArea.innerHTML = line + '<br />' + textArea.innerHTML ;
    }
    render() {
        let source =
            {
                datatype: 'tsv',
                datafields: [
                    { name: 'Date' },
                    { name: 'SPOpen' },
                    { name: 'SPHigh' },
                    { name: 'SPLow' },
                    { name: 'SPClose' },
                    { name: 'SPVolume' },
                    { name: 'SPAdjClose' }
                ],
                url: '../sampledata/nasdaq_vs_sp500_detailed.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let toolTipCustomFormatFn = (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
            let dataItem = dataAdapter.records[itemIndex];
            let volume = dataItem.SPVolume;
            return '<DIV style="text-align:left"><b>Date: ' +
                categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
                '</b><br />Index value: ' + value +
                '</b><br />Daily volume: ' + volume +
            '</DIV>';
        };

        let padding = { left: 20, top: 5, right: 20, bottom: 5 };


        let xAxis =
            {
                dataField: 'Date',
                type: 'date',
                valuesOnTicks: true,
                minValue: new Date(2014, 1, 1),
                maxValue: new Date(2014, 10, 1),
                labels:
                {
                    formatFunction: (value) => {
                        return value.getDate() + '-' + months[value.getMonth()] + '<br>' + value.getFullYear().toString();
                    }
                },
                gridLines: { visible: false },
                rangeSelector: {
                    size: 100,
                    padding: { top: 10, bottom: 0 },
                    backgroundColor: 'white',
                    dataField: 'SPClose',
                    baseUnit: 'month',
                    showGridLines: false,
                    formatFunction: (value) => {
                        return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                    }
                }
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    linesUnselectMode: 'click',
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    valueAxis:
                    {
                        title: { text: 'S&P 500<br>' },
                        gridLines: { visible: false },
                    },
                    series: [
                        {
                            dataField: 'SPClose',
                            displayText: 'S&P Index Value',
                            lineWidth: 1
                        }
                    ]
                },
                {
                    type: 'area',
                    toolTipFormatFunction: toolTipCustomFormatFn,
                    linesUnselectMode: 'click',
                    valueAxis:
                    {
                        position: 'right',
                        title: { text: '<br>Daily Volume' },
                        gridLines: { visible: false },
                        labels:
                        {
                            formatFunction: (value) => {
                                return value / 1000000 + 'M';
                            }
                        }
                    },
                    series: [
                        {
                            dataField: 'SPVolume',
                            displayText: 'S&P Index Volume',
                            lineWidth: 1,
                            opacity: 0.2
                        }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'S&P 500 Index value and daily volume'} description={'(June 2010 - November 2014)'}
                    enableCrosshairs={true} enableAnimations={true} padding={padding}
                    source={dataAdapter} xAxis={xAxis} animationDuration={1500}
                    colorScheme={'scheme17'} seriesGroups={seriesGroups}
                />
                <div id='eventsTextArea' style={{ width: 847, height: 200, overflow: 'scroll', border: '1px solid lightgrey' }} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
