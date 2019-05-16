import * as React from 'react';
 


import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, IBarGaugeProps> {

    private myBarGauge = React.createRef<JqxBarGauge>();
    private redSlider = React.createRef<JqxSlider>();
    private greenSlider = React.createRef<JqxSlider>();
    private blueSlider = React.createRef<JqxSlider>();

    constructor(props: {}) {
        super(props);
        this.updateValues = this.updateValues.bind(this);

        this.state = {    
            customColorScheme: {
                colors: ['#307DD7', '#89A54E', '#AA4643'],
                name: 'rbg'              
            },
            labels: {
                indent: 10,
                precision: 0           
            },
            title: {
                font: {
                    size: 40
                },
                margin: { top: 0, left: 0, right: 0, bottom: 0 },
                subtitle: {
                    font: {
                        size: 20
                    },
                    text: '( visualization of "RGB" color proportions )'                   
                },
                text: 'JqxBarGauge',                
                verticalAlignment: 'top'                            
            },
            values: [187, 255, 170]
        };
    }

    public render() {
        return (
            <div>
                <JqxBarGauge ref={this.myBarGauge} style={{ float: 'left' }}
                    // @ts-ignore
                    width={'100%'} relativeInnerRadius={0.5}
                    max={255} values={this.state.values} startAngle={0} endAngle={90}
                    colorScheme={'rgb'} customColorScheme={this.state.customColorScheme}
                    title={this.state.title} labels={this.state.labels} 
                />
                <div style={{ float: 'left' }}>
                    <span style={{ fontStyle: 'italic' }}>Red</span>
                    <JqxSlider theme={'material-purple'} ref={this.redSlider} onChange={this.updateValues}
                        theme={'arctic'} mode={'fixed'} min={0} max={255}
                        ticksFrequency={25.5} value={170} step={25.5} 
                    />
                    <span style={{ fontStyle: 'italic' }}>Green</span>
                    <JqxSlider theme={'material-purple'} ref={this.greenSlider} onChange={this.updateValues}
                        theme={'arctic'} mode={'fixed'} min={0} max={255}
                        ticksFrequency={25.5} value={255} step={25.5}
                    />
                    <span style={{ fontStyle: 'italic' }}>Blue</span>
                    <JqxSlider theme={'material-purple'} ref={this.blueSlider} onChange={this.updateValues}
                        theme={'arctic'} mode={'fixed'} min={0} max={255}
                        ticksFrequency={25.5} value={187} step={25.5}
                    />
                </div>
            </div>
        );
    }

    private updateValues(): void {
        const red = this.redSlider.current!.getValue();
        const green = this.greenSlider.current!.getValue();
        const blue = this.blueSlider.current!.getValue();

        this.myBarGauge.current!.val([blue, green, red]);
    }
}

export default App;
