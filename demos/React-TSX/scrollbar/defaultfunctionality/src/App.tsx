import * as React from 'react';
 


import JqxScrollBar, { IScrollBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscrollbar';

export interface IState extends IScrollBarProps {
       longSize: number,
       shortSize: number
   }

class App extends React.PureComponent<{}, IState> {    
    constructor(props: {}) {
        super(props);

        // initial state setup
        this.state = {       
            longSize: 280,
            max: 1000,
            min: 0,
            shortSize: 18
        };
    }

    public render() {
        return (
            <div>
                <div id="vertical" style={{ marginBottom: 10 }}>Vertical</div>
                <JqxScrollBar theme={'material-purple'}
                    onValueChanged={this.onValueChangedVertical}
                    width={this.state.shortSize} height={this.state.longSize}
                    max={this.state.max} min={this.state.min}
                    vertical={true}
                />

                <div id="horizontal" style={{ marginTop: 10 }}>Horizontal</div>
                <JqxScrollBar theme={'material-purple'}
                    onValueChanged={this.onValueChangedHorizontal}
                    width={this.state.longSize} height={this.state.shortSize}
                    max={this.state.max} min={this.state.min}
                />
            </div>
        );
    }

    // Event handling
    private onValueChangedVertical(event: any): void {
        const verticalDiv = document.querySelector("#vertical");
        verticalDiv!.innerHTML = 'Vertical (' + parseInt(event.currentValue, 10) + ')';
    }

    private onValueChangedHorizontal(event: any): void {
        const horizontalDiv = document.querySelector("#horizontal");
        horizontalDiv!.innerHTML = 'Horizontal (' + parseInt(event.currentValue, 10) + ')';
    }
}

export default App;
