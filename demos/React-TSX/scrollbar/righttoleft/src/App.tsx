import * as React from 'react';
import JqxScrollBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscrollbar';

function App() {
    const onValueChangedHorizontal = (event: any) => {
        const horizontalDiv = document.querySelector("#horizontal");
        if (horizontalDiv) {
            horizontalDiv.innerHTML = `Horizontal (${parseInt(event.currentValue, 10)})`;
        }
    };

    return (
        <div>
            <div id="horizontal" style={{ margin: 20 }}>Horizontal (0)</div>
            <JqxScrollBar
                theme="material-purple"
                onValueChanged={onValueChangedHorizontal}
                rtl={true}
                width={280}
                height={18}
                min={0}
                max={1000}
            />
        </div>
    );
}

export default App;