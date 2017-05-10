import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'csv',
                datafields: [
                    { name: 'Browser' },
                    { name: 'Share' }
                ],
                url: '../sampledata/desktop_browsers_share_dec2011.txt'
            };
        let dataAdapter = new $.jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

        let legendPosition = { left: 520, top: 140, width: 100, height: 100 };

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10  };

        let seriesGroups =
            [
                {
                    type: 'pie',
                    showLabels: true,
                    series:
                    [
                        {
                            dataField: 'Share',
                            displayText: 'Browser',
                            labelRadius: 120,
                            initialAngle: 15,
                            radius: 170,
                            centerOffset: 0,
                            formatSettings: { sufix: '%', decimalPlaces: 1 }
                        }
                    ]
                }
            ];
        return (
            <JqxChart style={{ width: 850, height: 500 }}
                title={'Desktop browsers share'} description={'(source: wikipedia.org)'}
                showLegend={false} enableAnimations={true} padding={padding} showBorderLine={true}
                titlePadding={titlePadding} source={dataAdapter} legendPosition={legendPosition}
                colorScheme={'scheme02'} seriesGroups={seriesGroups}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
