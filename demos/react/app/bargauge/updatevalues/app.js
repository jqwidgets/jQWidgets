import React from 'react';
import ReactDOM from 'react-dom';

import JqxBarGauge from '../../../jqwidgets-react/react_jqxbargauge.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.redLevel.on('change', () => {
            this.setColor();
        });
        this.refs.greenLevel.on('change', () => {
            this.setColor();
        });
        this.refs.blueLevel.on('change', () => {
            this.setColor();
        });
    }
    setColor() {
        let red = this.refs.redLevel.val();
        let green = this.refs.greenLevel.val();
        let blue = this.refs.blueLevel.val();
        this.refs.myBarGauge.val(new Array(blue, green, red));
    }
    render() {
        let customColorScheme =
            {
                name: 'rgb',
                colors: ['#307DD7', '#89A54E', '#AA4643']
            }
        let title =
            {
                text: 'jqxBarGauge',
                font:
                {
                    size: 40
                },
                verticalAlignment: 'top',
                margin: 0,
                subtitle:
                {
                    text: '( visualization of "RGB" color proportions )',
                    font:
                    {
                        size: 20
                    }
                }
            }
        return (
            <div>
                <JqxBarGauge ref='myBarGauge' style={{ float: 'left' }}
                    width={570} height={570} max={255} relativeInnerRadius={0.5}
                    colorScheme={'rgb'} customColorScheme={customColorScheme}
                    values={[187, 255, 170]} startAngle={0} title={title}
                    endAngle={90} labels={{ precision: 0, indent: 10 }}
                />
                <div style={{ float: 'left' }}>
                    <span style={{ fontStyle: 'italic' }}>Red</span>
                    <JqxSlider ref='redLevel'
                        mode={'fixed'} min={0} max={255} value={170}
                        step={25.5} ticksFrequency={25.5}
                    />
                    <span style={{ fontStyle: 'italic' }}>Green</span>
                    <JqxSlider ref='greenLevel'
                        mode={'fixed'} min={0} max={255} value={255}
                        step={25.5} ticksFrequency={25.5}
                    />
                    <span style={{ fontStyle: 'italic' }}>Blue</span>
                    <JqxSlider ref='blueLevel'
                        mode={'fixed'} min={0} max={255} value={187}
                        step={25.5} ticksFrequency={25.5}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
