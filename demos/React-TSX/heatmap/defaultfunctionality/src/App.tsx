import * as React from 'react';
import JqxHeatMap, { IHeatMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxheatmap';

const App = () => {
    const [xAxis] = React.useState<IHeatMapProps['xAxis']>({
        labels: ['John', 'Marry', 'Alba', 'Steven', 'Josh', 'Alica', 'Robert', 'Kim', 'Ann', 'Paul', 'Regina', 'Dorothy']
    });
    const [yAxis] = React.useState<IHeatMapProps['yAxis']>({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    });
    const [source] = React.useState<IHeatMapProps['source']>([
        [89, 39, 94, 55, 3],
        [53, 38, 26, 68, 33],
        [22, 0, 66, 90, 78],
        [97, 68, 68, 3, 99],
        [47, 47, 88, 6, 1],
        [73, 23, 3, 79, 100],
        [21, 86, 13, 33, 0],
        [53, 81, 95, 79, 66],
        [74, 68, 88, 51, 43],
        [10, 12, 78, 14, 21],
        [55, 58, 12, 82, 99],
        [88, 23, 86, 59, 53]
    ]);

    return (
        <JqxHeatMap
            xAxis={xAxis}
            yAxis={yAxis}
            source={source}
            title={'Car sales revenue per employee(in 1000&euro;)'}
        />
    );
};

export default App;