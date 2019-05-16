import * as React from 'react';
 


import './App.css';

import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxSlider, { ISliderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, ISliderProps> {
    private redSlider = React.createRef<JqxSlider>();
    private greenSlider = React.createRef<JqxSlider>();
    private blueSlider = React.createRef<JqxSlider>();

    constructor(props: {}) {
        super(props);

        this.redSliderOnChange = this.redSliderOnChange.bind(this);
        this.greenSliderOnChange = this.greenSliderOnChange.bind(this);
        this.blueSliderOnChange = this.blueSliderOnChange.bind(this);
        this.checkBoxOnChange = this.checkBoxOnChange.bind(this);

        this.state = {
            height: 60,
            max: 255,
            min: 0,
            mode: "fixed",
            showTickLabels: true,
            step: 25.5,
            tickLabelFormatFunction: this.tickLabelFormatFunction,
            ticksFrequency: 25.5,
            tooltip: true,
            tooltipFormatFunction: this.tooltipFormatFunction,
            value: 0
        }
    }

    public componentDidMount() {
        this.setColor();
    }

    public render() {
        return (
            <div style={{ width: 550 }}>
                <div style={{ height: 250 }}>
                    <div style={{ float: "left" }}>
                        <span style={{ fontStyle: "italic" }}>Red</span>
                        <JqxSlider theme={'material-purple'} ref={this.redSlider}
                            onChange={this.redSliderOnChange}
                            height={this.state.height}
                            max={this.state.max}
                            min={this.state.min}
                            mode={this.state.mode}
                            showTickLabels={this.state.showTickLabels}
                            step={this.state.step}
                            tickLabelFormatFunction={this.state.tickLabelFormatFunction}
                            ticksFrequency={this.state.ticksFrequency}
                            tooltip={this.state.tooltip}
                            tooltipFormatFunction={this.state.tooltipFormatFunction}
                            value={this.state.value}
                        />

                        <span style={{ fontStyle: "italic" }}>Green</span>
                        <JqxSlider theme={'material-purple'} ref={this.greenSlider}
                            onChange={this.greenSliderOnChange}
                            height={this.state.height}
                            max={this.state.max}
                            min={this.state.min}
                            mode={this.state.mode}
                            showTickLabels={this.state.showTickLabels}
                            step={this.state.step}
                            tickLabelFormatFunction={this.state.tickLabelFormatFunction}
                            ticksFrequency={this.state.ticksFrequency}
                            tooltip={this.state.tooltip}
                            tooltipFormatFunction={this.state.tooltipFormatFunction}
                            value={this.state.value}
                        />

                        <span style={{ fontStyle: "italic" }}>Blue</span>
                        <JqxSlider theme={'material-purple'} ref={this.blueSlider}
                            onChange={this.blueSliderOnChange}
                            height={this.state.height}
                            max={this.state.max}
                            min={this.state.min}
                            mode={this.state.mode}
                            showTickLabels={this.state.showTickLabels}
                            step={this.state.step}
                            tickLabelFormatFunction={this.state.tickLabelFormatFunction}
                            ticksFrequency={this.state.ticksFrequency}
                            tooltip={this.state.tooltip}
                            tooltipFormatFunction={this.state.tooltipFormatFunction}
                            value={this.state.value}
                        />

                    </div>

                    <div className={"jqx-rc-all colorBlock"} id={"colorBlock"}>
                        <div id={"colorLabel"} />
                    </div>
                </div>

                <JqxCheckBox theme={'material-purple'}
                    onChange={this.checkBoxOnChange}
                    width={200}
                    checked={false}
                >
                    Smooth Thumb Drag
                </JqxCheckBox>
            </div>
        );
    }

    private tooltipFormatFunction = (value: any) => {
        if (this.redSlider.current!.getOptions("mode") === 'default') {
            if (value < 10) { return value.toPrecision(3); }
            if (value > 10 && value < 100) { return value.toPrecision(4); }
            else { return value.toPrecision(5); }
        }
        else {
            if (value < 10) { return value.toPrecision(3); }
            if (value > 10 && value < 256) { return value.toPrecision(4); }
        }

        return value + ' X';
    };

    private tickLabelFormatFunction = (value: any) => {
        if (value === 0) { return value; }
        if (value === 255) { return value; }

        return "";
    };

    private setColor = (): void => {
        const red = this.fixHex(Math.round(this.redSlider.current!.getOptions("value")).toString(16));
        const green = this.fixHex(Math.round(this.greenSlider.current!.getOptions("value")).toString(16));
        const blue = this.fixHex(Math.round(this.blueSlider.current!.getOptions("value")).toString(16));
        document.getElementById('colorBlock')!.style.backgroundColor = '#' + red + green + blue;
        document.getElementById('colorLabel')!.innerHTML = ('#' + red + green + blue).toUpperCase();
        const color = this.getTextElement({ r: parseInt(red, 16), g: parseInt(green, 16), b: parseInt(blue, 16) });
        document.getElementById('colorLabel')!.style.color = color;
    };

    private fixHex = (hex: any): any => {
        return (hex.length < 2) ? '0' + hex : hex;
    };

    private getTextElement(color: any): any {
        const nThreshold = 105;
        const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        return foreColor;
    };

    // Event handling
    private redSliderOnChange(event: any): void {
        this.setColor();
    }

    private greenSliderOnChange(event: any): void {
        this.setColor();
    }

    private blueSliderOnChange(event: any): void {
        this.setColor();
    }


    private checkBoxOnChange(event: any): void {
        const checked = event.args.checked;
        let value: ISliderProps["mode"] = "default";
        if (!checked) {
            value = "fixed";
        }

        this.redSlider.current!.setOptions({ mode: value });
        this.greenSlider.current!.setOptions({ mode: value });
        this.blueSlider.current!.setOptions({ mode: value });
    }
}

export default App;
