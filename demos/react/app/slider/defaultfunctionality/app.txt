import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
   componentDidMount() {
        // Set Color by Default
        this.setColor();

        this.refs.myRedSlider.on('change', (event) => {
            this.setColor();
        });
        this.refs.myGreenSlider.on('change', (event) => {
            this.setColor();
        });
        this.refs.myBlueSlider.on('change', (event) => {
            this.setColor();
        });

        this.refs.myCheckBox.on('change', (event) => {
            let checked = event.args.checked;
            let value = 'default';
            if (!checked) {
                value = 'fixed';
            }
            this.refs.myRedSlider.mode(value);
            this.refs.myGreenSlider.mode(value);
            this.refs.myBlueSlider.mode(value);
        });
    }

   setColor() {
        let red = this.fixHex(Math.round(this.refs.myRedSlider.value()).toString(16)),
            green = this.fixHex(Math.round(this.refs.myGreenSlider.value()).toString(16)),
            blue = this.fixHex(Math.round(this.refs.myBlueSlider.value()).toString(16));
        document.getElementById('colorBlock').style.backgroundColor = '#' + red + green + blue;
        document.getElementById('colorLabel').innerHTML = ('#' + red + green + blue).toUpperCase();
        let color = this.getTextElement({ r: parseInt(red, 16), g: parseInt(green, 16), b: parseInt(blue, 16) });
        document.getElementById('colorLabel').style.color = color;
    }

   fixHex(hex) {
        return (hex.length < 2) ? '0' + hex : hex;
    }

   getTextElement(color) {
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        return foreColor;
    }

   render () {
       let tickLabelFormatFunction = (value) => {
           if (value == 0) return value;
           if (value == 255) return value;
           return "";
       };

       let tooltipFormatFunction = (value) => {
           if (this.refs.myRedSlider.mode() === 'default') {
               if (value < 10) return new Number(value.toPrecision(3));
               if (value > 10 && value < 100) return new Number(value.toPrecision(4));
               else return new Number(value.toPrecision(5));
           } else {
               if (value < 10) return new Number(value.toPrecision(3));
               if (value > 10 && value < 256) return new Number(value.toPrecision(4));
           }
       };
        return (
            <div style={{ width: 550 }}>
                <div style={{ height: 180 }}>
                    <div style={{ float: 'left' }}>

                        <span style={{ fontStyle: 'italic' }}>Red</span>

                        <JqxSlider ref='myRedSlider'
                          height={60} min={0} max={255} value={0} step={25.5}
                          ticksFrequency={25.5} tooltip={true}
                          showTickLabels={true} mode={'fixed'}
                          tooltipFormatFunction={tooltipFormatFunction}
                          tickLabelFormatFunction={tickLabelFormatFunction}
                        />

                        <span style={{ fontStyle: 'italic' }}>Green</span>

                        <JqxSlider ref='myGreenSlider'
                          height={60} min={0} max={255} value={0} step={25.5}
                          ticksFrequency={25.5} tooltip={true}
                          showTickLabels={true} mode={'fixed'}
                          tooltipFormatFunction={tooltipFormatFunction}
                          tickLabelFormatFunction={tickLabelFormatFunction}
                        />

                        <span style={{ fontStyle: 'italic' }}>Blue</span>

                        <JqxSlider ref='myBlueSlider'
                          height={60} min={0} max={255} value={255} step={25.5}
                          ticksFrequency={25.5} tooltip={true}
                          showTickLabels={true} mode={'fixed'}
                          tooltipFormatFunction={tooltipFormatFunction}
                          tickLabelFormatFunction={tickLabelFormatFunction}
                        />

                    </div>
                    <div className="colorBlock jqx-rc-all" id="colorBlock">
                        <div className="colorLabel" id="colorLabel"/>
                    </div>
                </div>
                <JqxCheckBox ref='myCheckBox' value='Smooth Thumb Drag' checked={false} width={200}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
