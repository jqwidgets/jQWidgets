import * as React from 'react';
 


import JqxScrollBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscrollbar';

class App extends React.PureComponent<{}, {}> {
    public render() {
        return (
            <div>
                <div id="horizontal" style={{ margin: 20 }}>Horizontal (0)</div>
                <JqxScrollBar theme={'material-purple'}
                    onValueChanged={this.onValueChangedHorizontal}
                    rtl={true}
                    width={280} height={18}
                    min={0} max={1000}
                />
            </div>
        );
    }

    // Event handling
    private onValueChangedHorizontal(event: any): void {
        const horizontalDiv = document.querySelector("#horizontal");
        horizontalDiv!.innerHTML = 'Horizontal (' + parseInt(event.currentValue, 10) + ')';
    }
}

export default App;
