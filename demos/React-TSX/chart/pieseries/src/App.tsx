import * as React from 'react';
import JqxChart, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const sourceConfig: any = {
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        datatype: 'csv',
        url: 'desktop_browsers_share_dec2011.txt'
    };

    const source = React.useMemo(() => 
        new jqx.dataAdapter(sourceConfig, { 
            async: false, 
            autoBind: true, 
            loadError: (xhr: any, status: any, error: any) => { 
                alert('Error loading "' + sourceConfig.url + '" : ' + error); 
            } 
        }), 
        []
    );

    const [chartProps] = React.useState({
        title: 'Desktop browsers share',
        description: '(source: wikipedia.org)',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        source,
        seriesGroups: [
            {
                series: [
                    {
                        centerOffset: 0,
                        dataField: 'Share',
                        displayText: 'Browser',
                        formatSettings: { sufix: '%', decimalPlaces: 1 },
                        initialAngle: 15,
                        labelRadius: 120,
                        radius: 170
                    }
                ],
                showLabels: true,
                type: 'pie'
            }
        ]
    });

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={false}
            enableAnimations={false}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            showBorderLine={true}
            seriesGroups={chartProps.seriesGroups}
            colorScheme={'scheme02'}
        />
    );
};

export default App;