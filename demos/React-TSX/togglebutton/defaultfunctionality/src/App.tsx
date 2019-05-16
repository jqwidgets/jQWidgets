import * as React from 'react';
 


import JqxToggleButton, { IToggleButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtogglebutton';

class App extends React.PureComponent<{}, IToggleButtonProps> {
    private myToggleButton = React.createRef<JqxToggleButton>();

    constructor(props: {}) {
        super(props);

        this.click = this.click.bind(this);

        this.state = {
            height: 30,
            toggled: true,
            value: "Toggled On",
            width: 200,
        }
    }

    public render() {
        return (
            <div id="jqxWidget">
                <JqxToggleButton theme={'material-purple'} ref={this.myToggleButton} className="togglebutton"
                    onClick={this.click}
                    height={this.state.height}
                    value={this.state.value}
                    width={this.state.width}
                    toggled={this.state.toggled}
                />
                <JqxToggleButton theme={'material-purple'} className="togglebutton" height={this.state.height} width={this.state.width} disabled={true} value={"Disabled"} />
            </div>
        );
    }

    // Event handling
    private click(event: any): void {
        const toggled = this.myToggleButton.current!.getOptions("toggled");
        if (toggled) {
            this.setState({
                toggled: true,
                value: "Toggled On",
            });
        } else {
            this.setState({
                toggled: false,
                value: "Toggled Off",
            });
        }
    }
}

export default App;
