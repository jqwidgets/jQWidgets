import * as React from 'react';

import JqxHeatMap, { IHeatMapProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxheatmap';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

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
            ],
            legendSettings: {
                position: 'Bottom'
            },
            paletteSettings: {
                palette: [
                    { value: 10, color: '#6bbd49' },
                    { value: 30, color: '#22aaaa' },
                    { value: 60, color: '#53b9e6' },
                ]
            }
        };

        this.setGradientPaletteType = this.setGradientPaletteType.bind(this);
        this.setFixedPaletteType = this.setFixedPaletteType.bind(this);
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
                        legendSettings={this.state.legendSettings}
                        paletteSettings={this.state.paletteSettings}
                        title={'Car sales revenue per employee(in 1000&euro;)'}
                    />
                </div>

                <div style={{ margin: '50px 100px', display: 'flex', alignItems: 'center' }}>
                    <label>Palette Type:</label>

                    <div style={{ marginLeft: '50px' }}>
                        <JqxRadioButton
                            style={{ marginBottom: '10px' }}
                            onChange={this.setGradientPaletteType}
                            checked={true}
                        >Gradient</JqxRadioButton>
                        <JqxRadioButton
                            onChange={this.setFixedPaletteType}
                        >Fixed</JqxRadioButton>
                    </div>
                </div>
            </div>
        );
    }

    private setGradientPaletteType(e: Event): void {
        this.myHeatMap.current!.setPaletteType('Gradient');
    }


    private setFixedPaletteType(e: Event): void {
        this.myHeatMap.current!.setPaletteType('Fixed');
    }
}

export default App;