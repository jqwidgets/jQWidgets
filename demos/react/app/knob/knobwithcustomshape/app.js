import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';

class App extends React.Component {
    componentDidMount() {

    }
    render() {

        let marks = {
            colorRemaining: '#333',
            colorProgress: '#17a25d',
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
                    return 'Off';
                if (label == -100)
                    return 'Min';
                if (label == 100)
                    return 'Max';
                return label;
            }
        };

        let progressBar = {
            size: '70%',
            offset: '0%'
        };

        let pointer = {
            type: 'arrow', thickness: 25,
            style: { fill: '#ff6126', stroke: '#333' },
            size: '60%', offset: '50%'
        };

        let spinner = {
            style: { fill: '#17a25d', stroke: '#17a25d' },
            innerRadius: '65%', // specifies the inner Radius of the dial
            outerRadius: '70%' // specifies the outer Radius of the dial
            , marks: {
                colorRemaining: '#fff',
                colorProgress: '#fff',
                offset: '68%',
                thickness: 4,
                type: 'circle',
                size: '5%',
                majorSize: '5%',
                majorInterval: 20,
                minorInterval: 20
            }
        };

        let dial = {
            style: { fill: '#17a25d', stroke: '#17a25d' },
            innerRadius: '0%', // specifies the inner Radius of the dial
            outerRadius: '50%' // specifies the outer Radius of the dial
        };


        return (
            <JqxKnob className='myKnob' style={{ width: 400, height: 400 }}
                min={-100} max={100} value={-100} startAngle={120} endAngle={480}
                dragStartAngle={120} dragEndAngle={420} step={'0.5'}
                snapToStep={true} rotation={'clockwise'} dial={dial}
                marks={marks} labels={labels} spinner={spinner}
                progressBar={progressBar} pointer={pointer}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
