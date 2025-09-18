import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const source: any = React.useMemo(() => ({
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        datatype: 'csv',
        url: 'desktop_browsers_share_dec2011.txt'
    }), []);

    const chartProps = React.useMemo<IChartProps>(() => ({
        description: '(source: wikipedia.org)',
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        seriesGroups: [
            {
                series: [
                    {
                        centerOffset: 0,
                        dataField: 'Share',
                        displayText: 'Browser',
                        formatSettings: { sufix: '%', decimalPlaces: 1 },
                        initialAngle: 15,
                        innerRadius: 70,
                        labelRadius: 120,
                        radius: 170
                    }
                ],
                showLabels: true,
                type: 'donut'
            }
        ],
        source: new jqx.dataAdapter(source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + source.url + '" : ' + error); } }),
        title: 'Desktop browsers share',
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 }
    }), [source]);

    return (
        <JqxChart
            style={{ width: '850px', height: '500px' }}
            title={chartProps.title}
            description={chartProps.description}
            showLegend={false}
            enableAnimations={true}
            padding={chartProps.padding}
            titlePadding={chartProps.titlePadding}
            source={chartProps.source}
            showBorderLine={true}
            seriesGroups={chartProps.seriesGroups}
            colorScheme="scheme02"
        />
    );
};

export default App;