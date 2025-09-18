import * as React from 'react';
import JqxBulletChart, { IBulletChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbulletchart';

const App = () => {
    const [title] = React.useState('Revenue 2019 YTD');
    const [description] = React.useState('(U.S. $ in thousands)');
    const [pointer] = React.useState({
        color: 'Black',
        label: 'Revenue 2019 YTD',
        size: '25%',
        value: 270
    });
    const [ranges] = React.useState([
        { color: '#000000', endValue: 200, opacity: 0.5, startValue: 0 },
        { color: '#000000', endValue: 250, opacity: 0.3, startValue: 200 },
        { color: '#000000', endValue: 300, opacity: 0.1, startValue: 250 }
    ]);
    const [target] = React.useState({
        color: 'Black',
        label: 'Revenue 2018 YTD',
        size: 4,
        value: 260
    });
    const [ticks] = React.useState({
        interval: 50,
        position: 'both',
        size: 10
    });

    return (
        <JqxBulletChart
            width={'80%'}
            height={80}
            barSize={'40%'}
            labelsFormat={'c'}
            showTooltip={true}
            title={title}
            description={description}
            ranges={ranges}
            pointer={pointer}
            target={target}
            ticks={ticks}
        />
    );
};

export default App;