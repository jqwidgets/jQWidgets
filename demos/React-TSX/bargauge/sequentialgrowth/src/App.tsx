import * as React from 'react';
 

import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

class App extends React.PureComponent<{}, IBarGaugeProps> {

    private myBarGauge = React.createRef<JqxBarGauge>();
    private loop: number = 0;

    constructor(props: {}) {
        super(props);
        this.onDrawEnd = this.onDrawEnd.bind(this);

        this.state = {
            labels: {  
                connectorWidth: 1,
                indent: 15,
                precision: 1                
            },
            values: [20, 0, 0, 0]
        };
    }

    public render() {
        return (
            <JqxBarGauge ref={this.myBarGauge} onDrawEnd={this.onDrawEnd}
                // @ts-ignore
                width={'100%'}
                barSpacing={14} labels={this.state.labels} animationDuration={300}
                startAngle={180} endAngle={-180} colorScheme={'scheme02'}
                relativeInnerRadius={0.2} values={this.state.values}                              
            />
        );
    }

    private onDrawEnd() {
        switch (this.loop) {
            case 0: 
                this.setState({
                    values: [20, 60, 0, 0]
                });
                break;
            case 1:
                this.setState({
                    values: [20, 60, 80, 0]
                });
                break;
            case 2:
                this.setState({
                    values: [20, 60, 80, 100]
                });
                break;
            default:
                /* tslint:disable:no-console */
                console.log('Render time is finished.');
                break;            
        }
        this.loop += 1;
    }
}

export default App;
