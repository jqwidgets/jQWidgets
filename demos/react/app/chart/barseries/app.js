import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let sampleData = [
            { Country: 'China', Population: 1347350000, Percent: 19.18 },
            { Country: 'India', Population: 1210193422, Percent: 17.22 },
            { Country: 'USA', Population: 313912000, Percent: 4.47 },
            { Country: 'Indonesia', Population: 237641326, Percent: 3.38 },
            { Country: 'Brazil', Population: 192376496, Percent: 2.74 }
        ];

        let padding = { left: 20, top: 5, right: 20, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'Country',
                gridLines: { visible: true },
                flip: false
            };

        let valueAxis =
            {
                flip: true,
                labels: {
                    visible: true,
                    formatFunction: (value) => {
                        return parseInt(value / 1000000);
                    }
                }
            };

        let seriesGroups =
            [
                {
                    type: 'column',
                    orientation: 'horizontal',
                    columnsGapPercent: 50,
                    toolTipFormatSettings: { thousandsSeparator: ',' },
                    series: [
                        { dataField: 'Population', displayText: 'Population (millions)' }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Top 5 most populated countries'} description={'Statistics for 2011'}
                showLegend={true} enableAnimations={true} padding={padding}
                titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                valueAxis={valueAxis} colorScheme={'scheme01'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
