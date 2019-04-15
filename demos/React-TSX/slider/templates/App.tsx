import * as React from 'react';
 


import JqxSlider, { ISliderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, ISliderProps> {
    constructor(props: {}) {
        super(props);

        this.state = {
            mode: "fixed",
            tooltip: true
        }
    }

    public render() {
        const styleSettings: React.CSSProperties = { margin: "10px 0px" };

        return (
            <div style={{ float: "left" }}>
                <div style={styleSettings}>Default</div>
                <JqxSlider theme={'material-purple'}
                    mode={this.state.mode}
                    tooltip={this.state.tooltip}
                />

                <div style={styleSettings}>Primary</div>
                <JqxSlider theme={'material-purple'}
                    template={"primary"}
                    mode={this.state.mode}
                    tooltip={this.state.tooltip}
                />

                <div style={styleSettings}>Success</div>
                <JqxSlider theme={'material-purple'}
                    template={"success"}
                    mode={this.state.mode}
                    tooltip={this.state.tooltip}
                />

                <div style={styleSettings}>Info</div>
                <JqxSlider theme={'material-purple'}
                    template={"info"}
                    mode={this.state.mode}
                    tooltip={this.state.tooltip}
                />

                <div style={styleSettings}>Warning</div>
                <JqxSlider theme={'material-purple'}
                    template={"warning"}
                    mode={this.state.mode}
                    tooltip={this.state.tooltip}
                />

                <div style={styleSettings}>Danger</div>
                <JqxSlider theme={'material-purple'}
                    template={"danger"}
                    mode={this.state.mode}
                    tooltip={this.state.tooltip}
                />
            </div>
        );
    }
}

export default App;
