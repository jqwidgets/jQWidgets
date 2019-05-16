import * as React from 'react';
 

import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

class App extends React.PureComponent<{}, IBarGaugeProps> {

    private myBarGauge = React.createRef<JqxBarGauge>();

    constructor(props: {}) {
        super(props);
        this.onDrawEnd = this.onDrawEnd.bind(this);

        this.state = {
            tooltip: {                
                formatFunction: (value: number, index: number, color: string): string => {
                    const barGaugePalette: string[] = ['#307DD7', '#AA4643', '#89A54E', '#71588F', '#4198AF'];
                    if (value < 20) {
                        return barGaugePalette[0];
                    }
                    if (value < 40) {
                        return barGaugePalette[1];
                    }
                    if (value < 60) {
                        return barGaugePalette[2];
                    }
                    if (value < 80) {
                        return barGaugePalette[3];
                    }
                    if (value <= 100) {
                        return barGaugePalette[4];
                    }
                    return '';
                },
                visible: true  
            }
        };
    }

    public render() {
        return (
            <JqxBarGauge ref={this.myBarGauge} onDrawEnd={this.onDrawEnd}
                // @ts-ignore
                width={'100%'} relativeInnerRadius={0.6}
                values={[25]} formatFunction={this.state.formatFunction}
            />
        );
    }

    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private onDrawEnd(): void {
        const values = [this.getRandomInt(1, 99)];
        setTimeout(() => {
            this.myBarGauge.current!.val(values);
        }, 1000);
    }  
}

export default App;
