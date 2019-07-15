import * as React from 'react';

import JqxHeatMap, { IHeatMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxheatmap';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';

class App extends React.PureComponent<{}, IHeatMapProps> {
    private myHeatMap = React.createRef<JqxHeatMap>();

    constructor(props: {}) {
        super(props);

        this.state = {
            xAxis: {
                labels: ['John', 'Marry', 'Alba', 'Steven', 'Josh', 'Alica', 'Robert', 'Kim', 'Ann', 'Paul', 'Regina', 'Dorothy'],
                isInversed: true
            },
            yAxis: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                isInversed: true
            },
            source: [
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
            ]
        };

        this.changeXAxisOrigin = this.changeXAxisOrigin.bind(this);
        this.changeYAxisOrigin = this.changeYAxisOrigin.bind(this);
    }

    public render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ width: '100%', maxWidth: '1000px' }}>
                    <JqxHeatMap
                        ref={this.myHeatMap}
                        xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}
                        source={this.state.source}
                        title={'Car sales revenue per employee(in 1000&euro;)'}
                    />
                </div>

                <div style={{ margin: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <JqxCheckBox
                        style={{ marginBottom: '20px' }}
                        onChange={this.changeXAxisOrigin}
                        checked={this.state.xAxis.isInversed}
                    >
                        Reverse X-Axis Origin
                    </JqxCheckBox>
                    <JqxCheckBox
                        onChange={this.changeYAxisOrigin}
                        checked={this.state.yAxis.isInversed}
                    >
                        Reverse Y-Axis Origin
                    </JqxCheckBox>
                </div>
            </div>
        );
    }

    private changeXAxisOrigin(e: Event): void {
        const isInversed = this.state.xAxis.isInversed;

        this.myHeatMap.current!.reverseXAxisPosition(!isInversed);
    }


    private changeYAxisOrigin(e: Event): void {
        const isInversed = this.state.yAxis.isInversed;

        this.myHeatMap.current!.reverseYAxisPosition(!isInversed);
    }
}

export default App;