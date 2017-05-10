import React from 'react';
import ReactDOM from 'react-dom';

import JqxKnob from '../../../jqwidgets-react/react_jqxknob.js';

class App extends React.Component {
    componentDidMount() {
        let progressBar2 = {
            style: { fill: '#ef6100', stroke: '#ef6100' },
            size: '18%',
            offset: '78%',
            background: { fill: '#cfd0d4', stroke: '#cfd0d4' }
        };

        let pointer2 = {
            type: 'line', visible: false, style: { fill: '#33AADD' }, size: '18%', offset: '78%', thickness: 0
        };

        let progressBar3 = {
            style: { fill: '#18a25e', stroke: '#18a25e' },
            size: '18%',
            offset: '78%',
            background: { fill: '#cfd0d4', stroke: '#cfd0d4' }
        };

        let pointer3 = {
            type: 'line', visible: false, style: { fill: '#00a4e1' }, size: '18%', offset: '78%', thickness: 0
        };

        let knobTwoContainer = document.createElement('div');
        let knobThreeContainer = document.createElement('div');

        document.getElementsByClassName('knobContainer')[0].appendChild(knobTwoContainer);

        let knobTwo = ReactDOM.render(
            <JqxKnob className='knob2' width={300} height={300}
                min={0} max={100} value={60} snapToStep={true} rotation={'clockwise'}
                startAngle={190} endAngle={350} style={{ fill: 'transparent' }}
                pointer={pointer2} progressBar={progressBar2} pointerGrabAction={'progressBar'}
            />, knobTwoContainer);

        knobTwoContainer.children[0].appendChild(knobThreeContainer);

        let knobThree = ReactDOM.render(
            <JqxKnob className='knob3' width={300} height={300}
                min={0} max={100} value={60} snapToStep={true} rotation={'clockwise'}
                startAngle={10} endAngle={170} style={{ fill: 'transparent' }}
                pointer={pointer3} progressBar={progressBar3} pointerGrabAction={'progressBar'}
            />, knobThreeContainer);

        this.refs.mainKnob.on('change', (event) => {
            if (event.target !== event.currentTarget) {
                return;
            }
            document.getElementById('mainKnobValue').innerHTML = event.args.value;
        });
        knobTwo.on('change', (event) => {
            if (event.target !== event.currentTarget) {
                return;
            }
            document.getElementById('knobTwoValue').innerHTML = event.args.value;
        });
        knobThree.on('change', (event) => {
            if (event.target !== event.currentTarget) {
                return;
            }
            document.getElementById('knobThreeValue').innerHTML = event.args.value;
        });

    }
    render() {
        let marks = {
            drawAboveProgressBar: true,
            colorRemaining: 'white',
            colorProgress: 'white',
            style: 'line',
            offset: '78%',
            thickness: 3,
            size: '18%',
            minorInterval: 5
        };

        let progressBar1 = {
            style: { fill: '#407ec3', stroke: '#407ec3' },
            size: '18%',
            offset: '78%',
            background: { fill: '#cfd0d4', stroke: '#cfd0d4' }
        };

        let pointer1 = {
            type: 'line', visible: false, style: { fill: '#407ec3' }, size: '18%', offset: '78%', thickness: 0
        };

        return (
            <div>
                <JqxKnob ref='mainKnob' className='knobContainer' style={{ position: 'relative' }}
                    min={0} max={100} value={60} snapToStep={true} rotation={'clockwise'}
                    startAngle={180} endAngle={540} style={{ fill: '#FFFFFF' }} marks={marks}
                    pointer={pointer1} progressBar={progressBar1} pointerGrabAction={'progressBar'}
                />
                <div className='divs' style={{ top: 230, left: 118 }}>
                    <span style={{ width: 60, fontSize: 15, display: 'inline-block', color: '#407ec3' }}>All</span>
                    <span style={{ width: 60, fontSize: 30, display: 'inline-block' }} id='mainKnobValue'>60</span>
                    <span style={{ width: 60, fontSize: 15, display: 'inline-block', color: '#00a4e1' }}>Calls</span>
                </div>
                <div className='divs' style={{ top: 150, left: 153 }}>
                    <div style={{ fontSize: 15, color: '#ef6100' }}>Resolved Issues</div>
                    <div style={{ fontSize: 20 }} id='knobTwoValue'>60</div>
                </div>
                <div className='divs' style={{ top: 290, left: 157 }}>
                    <div style={{ fontSize: 20 }} id='knobThreeValue'>60</div>
                    <div style={{ fontSize: 15, color: '#18a25e' }}>Pending Issues</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
