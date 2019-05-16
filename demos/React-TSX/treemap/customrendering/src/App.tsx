import * as React from 'react';
 


import JqxTreeMap, { ITreeMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreemap';

class App extends React.PureComponent<{}, ITreeMapProps> {
    constructor(props: {}) {
        super(props);

        this.state = {
            colorRanges: [
                { "color": "#de290b", "max": 1454040000, "min": 1254040000 },
                { "color": "#de440c", "max": 1254039999, "min": 1054040000 },
                { "color": "#ea7707", "max": 1054040000, "min": 300000000 },
                { "color": "#ee8a06", "max": 460000000, "min": 210000000 },
                { "color": "#f19505", "max": 209999999, "min": 190000000 },
                { "color": "#f6a903", "max": 189999999, "min": 180000000 },
                { "color": "#f8b203", "max": 179999999, "min": 160000000 },
                { "color": "#fabb02", "max": 159999999, "min": 140000000 },
                { "color": "#fbbf01", "max": 139999999, "min": 100000000 },
                { "color": "#fbcd01", "max": 99999999, "min": 90000000 },
                { "color": "#fbde33", "max": 89999999, "min": 10000000 }
            ],
            renderCallbacks: {
                '*': (element: any, data: any) => {
                    element.css({
                        color: '#ffffff'
                    });
                    element.html('<span style="font-size: 11px;" class="jqx-treemap-label">' + data.label + ', ' + data.value + '%</span>');
                    return true;
                }
            },
            source: [{
                color: '#37c837',
                label: 'Chrome',
                value: 44.06
            },
            {
                color: '#0066ff',
                label: 'Internet Explorer',
                value: 22.08
            },
            {
                color: '#ed7b0f',
                label: 'Firefox',
                value: 18.17
            },
            {
                color: '#818181',
                label: 'Others',
                value: 9.07
            },
            {
                color: '#9a0900',
                label: 'Opera',
                value: 3.38
            },
            {
                color: '#4dbff1',
                label: 'Safari',
                value: 3.24
            }]
        }
    }

    public render() {
        return (
            <JqxTreeMap theme={'material-purple'}
                // @ts-ignore
                width={'100%'}
                height={300}
                source={this.state.source}
                colorRanges={this.state.colorRanges}
                renderCallbacks={this.state.renderCallbacks}
            />
        );
    }
}

export default App;
