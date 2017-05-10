import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        let chart = this.refs.myChart.getInstance();
        this.refs.myDropDownList.on('select', (event) => {
            let args = event.args;
            if (args) {
                let value = args.item.value;
                chart.seriesGroups[0].series[0].emptyPointsDisplay = value;
                chart.update();
            }
        });
    }
    render() {
        let sampleData = [29, undefined, 10, 15, 10, undefined, NaN, 30, 25, undefined, 33, 19, 11];

        let padding = { left: 5, top: 5, right: 15, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10  };

        let xAxis =
            {
                text: 'x',
                valuesOnTicks: false
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    source: sampleData,
                    toolTipFormatFunction: (value, itemIndex, serie, group, categoryValue, categoryAxis) => {
                        let dataItem = sampleData[itemIndex];
                        return '<DIV style="text-align:left"><b>Index:</b> ' +
                            itemIndex + '<br /><b>Value:</b> ' +
                            value + '<br /></DIV>';
                    },
                    valueAxis:
                    {
                        title: { text: 'Value<br>' }
                    },
                    series:
                    [
                        { emptyPointsDisplay: 'skip', displayText: 'Value', lineWidth: 2, symbolSize: 8, symbolType: 'circle' }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Line serie with missing points'} description={'Sample line serie with missing and invalid values'}
                    showLegend={true} padding={padding} titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                    colorScheme={'scheme05'} seriesGroups={seriesGroups}
                />
                <p style={{ fontFamily: 'Verdana', fontSize: 12 }}>Select missing points display mode:</p>
                <JqxDropDownList ref='myDropDownList'
                    width={220} height={25} selectedIndex={0}
                    dropDownHeight={77} source={['skip', 'zero', 'connect']}
                />     
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
