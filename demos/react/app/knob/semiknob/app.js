import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';

class App extends React.Component {
    render() {
        let marks = {
            colorRemaining: "#333",
            colorProgress: "#17a25d",
            offset: '75%',
            thickness: 2,
            size: '1%',
            majorSize: '1%',
            majorInterval: 10,
            minorInterval: 5
        };  

        let labels = {
            offset: '88%',
            step: 20,
            visible: true,
            formatFunction: (label) => {
                if (label == 0)
                    return "Off";
                if (label == -100)
                    return "Min";
                if (label == 100)
                    return "Max";
                return label;
            }
        };

        let progressBar = {
            size: '70%',
            offset: '0%'
        };

        let pointer = {
            type: 'line', thickness: 4, style: { fill: "#ff6126", stroke: "#333" },
            size: '70%', offset: '0%'
        };

        let spinner = {
            style: { fill: '#17a25d', stroke: '#17a25d' },
            innerRadius: '35%', // specifies the inner Radius of the dial
            outerRadius: '70%' // specifies the outer Radius of the dial
        };


        return (
            <JqxKnob
                min={-100} max={100} value={-100} startAngle={200} endAngle={340}
                dragStartAngle={200} dragEndAngle={340}
                step={'0.5'} snapToStep={true} rotation={'clockwise'}
                spinner={spinner} marks={marks} labels={labels}
                progressBar={progressBar} pointer={pointer}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
