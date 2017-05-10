import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let data = [
            { year: 2002, male: 75.4, female: 58.1 },
            { year: 2003, male: 75.4, female: 58.7 },
            { year: 2004, male: 75.5, female: 59.4 },
            { year: 2005, male: 76.0, female: 60.0 },
            { year: 2006, male: 76.8, female: 61.1 },
            { year: 2007, male: 77.7, female: 62.1 },
            { year: 2008, male: 77.8, female: 62.8 },
            { year: 2009, male: 75.7, female: 62.3 },
            { year: 2010, male: 75.0, female: 62.0 },
            { year: 2011, male: 74.9, female: 62.2 },
            { year: 2012, male: 74.5, female: 62.4 },
            { year: 2013, male: 74.3, female: 62.6 },
            { year: 'Summary', male: 74.3, female: 62.6, summary: true }
        ];

        for (var i = data.length - 2; i > 0; i--) {
            data[i].male -= data[i - 1].male;
            data[i].female -= data[i - 1].female;
        }

        let padding = { left: 10, top: 5, right: 10, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                type: 'basic',
                dataField: 'year',
                displayText: 'Year',
                labels: { angle: 0 }
            };

        let valueAxis =
            {
                title: { text: 'Employment rate<br>' },
                labels:
                {
                    formatSettings:
                    {
                        decimalPlaces: 1,
                        sufix: '%'
                    }
                }
            };

        let seriesGroups =
            [
                {
                    type: 'waterfall',
                    toolTipFormatFunction: (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
                        var dataItem = data[itemIndex];
                        var val = Math.round(value * 100) / 100;
                        return '<DIV style="text-align:left"><b>' +
                            ((itemIndex == data.length - 1) ? 'Summary:' : 'Year: ' + dataItem.year) + '</b>' +
                            '<br />' + serie.displayText + ' ' + ((itemIndex != 0 && itemIndex != data.length - 1) ? 'change: ' : 'rate: ') + val + ' %' +
                            '</DIV>';
                    },
                    series: [
                        {
                            dataField: 'male',
                            summary: 'summary',
                            displayText: 'Male employment',
                            colorFunction: (value, itemIndex, serie, group) => {
                                if (itemIndex == data.length - 1)
                                    return '#3F3A3B'; // total
                                return (value < 0) ? '#C30E1F' /* red */ : '#117406' /*green*/;
                            }
                        },
                        {
                            dataField: 'female',
                            summary: 'summary',
                            displayText: 'Female employment',
                            colorFunction: (value, itemIndex, serie, group) => {
                                if (itemIndex == data.length - 1)
                                    return '#4F4A4B'; // total
                                return (value < 0) ? '#D30E2F' /* red */ : '#24A037' /*green*/;
                            }
                        }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'EU Employment rate trends by gender'} description={'data source: Eurostat'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={data} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme06'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
