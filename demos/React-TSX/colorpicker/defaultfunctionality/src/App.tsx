import * as React from 'react';
 


import './App.css';

import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcolorpicker';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxScrollView from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscrollview';

class App extends React.PureComponent<{}> {

    private myDropDown = React.createRef<JqxDropDownButton>();

    constructor(props: {}) {
        super(props);
        this.colorPickerEvent = this.colorPickerEvent.bind(this);
    }

    public componentDidMount() {
        this.myDropDown.current!.setContent(this.getTextElementByColor({ hex: "FFAABB" }));
    }

    public render() {
        return (
            <div>
                <JqxScrollView theme={'material-purple'} width={500} height={350} slideShow={true} showButtons={false}>
                    <div>
                        <div className="photo" style={{ backgroundImage: 'url(https://www.jqwidgets.com/react/images/imageNature1.jpg)' }} />
                    </div>
                    <div>
                        <div className="photo" style={{ backgroundImage: 'url(https://www.jqwidgets.com/react/images/imageNature2.jpg)' }} />
                    </div>
                    <div>
                        <div className="photo" style={{ backgroundImage: 'url(https://www.jqwidgets.com/react/images/imageNature3.jpg)' }} />
                    </div>
                    <div>
                        <div className="photo" style={{ backgroundImage: 'url(https://www.jqwidgets.com/react/images/imageNature4.jpg)' }} />
                    </div>
                    <div>
                        <div className="photo" style={{ backgroundImage: 'url(https://www.jqwidgets.com/react/images/imageNature5.jpg)' }} />
                    </div>
                </JqxScrollView>

                <br />
                <label style={{ marginLeft: '5px', fontSize: '12px', fontFamily: 'Verdana' }}>
                    Select Frame color
                </label>
                <br />

                <JqxDropDownButton theme={'material-purple'} ref={this.myDropDown} style={{ margin: '3px', float: 'left' }}
                    width={150} height={22} >
                    <div style={{ padding: '3px' }}>
                        <JqxColorPicker onColorchange={this.colorPickerEvent}
                            width={220} height={220} colorMode={'hue'} />
                    </div>
                </JqxDropDownButton>
            </div>

        );
    }

    private getTextElementByColor(color: any): string {
        if (color === 'transparent' || color.hex === "") {
            return '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;">transparent</div>';
        }
        const nThreshold = 105;
        const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        const element = '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
        return element;
    }

    private colorPickerEvent(event: any): void {
        this.myDropDown.current!.setContent(this.getTextElementByColor(event.args.color));
        const scrollView = document.getElementsByClassName('jqx-scrollview')[0] as HTMLElement;
        scrollView.style.borderColor = '#' + event.args.color.hex;
    }
}

export default App;