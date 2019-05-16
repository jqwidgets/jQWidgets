import * as React from 'react';
 


import JqxColorPicker, { IColorPickerProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcolorpicker';
import JqxRadioButton, { IRadioButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

export interface IState extends IColorPickerProps {
    hueChecked: IRadioButtonProps['checked'];
    saturationChecked: IRadioButtonProps['checked'];
}

class App extends React.PureComponent<{}, IState> {

    private colorLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.hueModeChanged = this.hueModeChanged.bind(this);
        this.colorChanged = this.colorChanged.bind(this);

        this.state = {
            colorMode: 'saturation',
            hueChecked: false,
            saturationChecked: true
        }
    }

    public render() {
        return (
            <div>
                <JqxColorPicker onColorchange={this.colorChanged}
                    width={250} height={250} colorMode={this.state.colorMode} />
       
                <div style={{ fontSize: '13px', fontFamily: 'Verdana', marginTop: '10px' }}>
                    <div style={{ marginBottom: '5px' }}>Color Modes</div>

                    <JqxRadioButton theme={'material-purple'}
                        width={180} height={25} checked={this.state.saturationChecked}>
                        Saturation Color Mode
                    </JqxRadioButton>

                    <JqxRadioButton theme={'material-purple'} onChange={this.hueModeChanged}
                        width={180} height={25} checked={this.state.hueChecked}>
                        Hue Color Mode
                    </JqxRadioButton>
                </div>

                <div ref={this.colorLog} style={{ fontSize: '13px', fontFamily: 'Verdana' }} />
            </div>
        );
    }

    private colorChanged(event: any): void {
        this.colorLog.current!.innerHTML = `<div>Color: #${event.args.color.hex}</div>`;
    }

    private hueModeChanged(event: any): void {
        if (event.args.checked) {
            this.setState({
                colorMode: 'hue',
                hueChecked: true,
                saturationChecked: false
            });
        }
        else {
            this.setState({
                colorMode: 'saturation',
                hueChecked: false,
                saturationChecked: true
            });
        }
    }
}

export default App;