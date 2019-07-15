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
                opposedPosition: true
            },
            yAxis: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                opposedPosition: true
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

        this.changeXAxisPosition = this.changeXAxisPosition.bind(this);
        this.changeYAxisPosition = this.changeYAxisPosition.bind(this);
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
                        onChange={this.changeXAxisPosition}
                        checked={this.state.xAxis.opposedPosition}
                    >
                        Change X-Axis Position
                    </JqxCheckBox>
                    <JqxCheckBox
                        onChange={this.changeYAxisPosition}
                        checked={this.state.yAxis.opposedPosition}
                    >
                        Change Y-Axis Position
                    </JqxCheckBox>
                </div>
            </div>
        );
    }

    private changeXAxisPosition(e: Event): void {
        const isOpposed = this.state.xAxis.opposedPosition;

        this.myHeatMap.current!.setOpposedXAxisPosition(!isOpposed);
    }


    private changeYAxisPosition(e: Event): void {
        const isOpposed = this.state.yAxis.opposedPosition;

        this.myHeatMap.current!.setOpposedYAxisPosition(!isOpposed);
    }
}

export default App;