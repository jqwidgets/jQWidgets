import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
  render () {
    let data_source_mobile =
    {
        datatype: "csv",
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        url: '../sampledata/mobile_browsers_share_dec2011.txt'
    };
    let dataAdapter_mobile = new $.jqx.dataAdapter(data_source_mobile, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });
    let data_source_desktop =
    {
        datatype: "csv",
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        url: '../sampledata/desktop_browsers_share_dec2011.txt'
    };
    let dataAdapter_desktop = new $.jqx.dataAdapter(data_source_desktop, { async: false, autoBind: true, loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); } });

    let legendLayout = { left: 520, top: 170, width: 300, height: 200, flow: 'vertical' };

    let padding = { left: 5, top: 5, right: 5, bottom: 5 };

    let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

    let seriesGroups =
    [
        {
            type: 'donut',
            offsetX: 250,
            source: dataAdapter_mobile,
            xAxis:
            {
                formatSettings: { prefix: 'Mobile ' }
            },
            series:
                [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        labelRadius: 120,
                        initialAngle: 10,
                        radius: 130,
                        innerRadius: 90,
                        centerOffset: 0,
                        formatSettings: { sufix: '%', decimalPlaces: 1 }
                    }
                ]
        },
        {
            type: 'donut',
            offsetX: 250,
            source: dataAdapter_desktop,
            colorScheme: 'scheme02',
            xAxis:
            {
                formatSettings: { prefix: 'Desktop ' }
            },
            series:
                [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        labelRadius: 120,
                        initialAngle: 10,
                        radius: 70,
                        innerRadius: 30,
                        centerOffset: 0,
                        formatSettings: { sufix: '%', decimalPlaces: 1 }
                    }
                ]
        }
    ];
    return (
      <JqxChart style={{ width:850, height:500 }}
        title={"Mobile & Desktop browsers share"} description={"(source: wikipedia.org)"}
        showLegend={true} enableAnimations={true} padding={padding}
        titlePadding={titlePadding} source={data_source_desktop} showBorderLine={true}
        legendLayout={legendLayout} columnSeriesOverlap={false} seriesGroups={seriesGroups}
      />
    )
  }
}

//Render our App Component to the desirable element
ReactDOM.render(<App />, document.getElementById('app'));
