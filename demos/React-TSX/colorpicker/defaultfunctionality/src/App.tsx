import * as React from 'react';
import { useEffect, useRef } from 'react';
import './App.css';
import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcolorpicker';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxScrollView from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscrollview';

function getTextElementByColor(color: any): string {
    if (color === 'transparent' || color.hex === "") {
        return '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;">transparent</div>';
    }
    const nThreshold = 105;
    const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
    const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
    return `<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;color:${foreColor}; background: #${color.hex}">#${color.hex}</div>`;
}

const App = () => {
    const myDropDown = useRef<JqxDropDownButton>(null);

    useEffect(() => {
        if (myDropDown.current) {
            myDropDown.current.setContent(getTextElementByColor({ hex: "FFAABB" }));
        }
    }, []);

    const colorPickerEvent = (event: any) => {
        if (myDropDown.current) {
            myDropDown.current.setContent(getTextElementByColor(event.args.color));
        }
        const scrollView = document.getElementsByClassName('jqx-scrollview')[0] as HTMLElement;
        if (scrollView) {
            scrollView.style.borderColor = '#' + event.args.color.hex;
        }
    };

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

            <JqxDropDownButton
                theme={'material-purple'}
                ref={myDropDown}
                style={{ margin: '3px', float: 'left' }}
                width={150}
                height={22}
            >
                <div style={{ padding: '3px' }}>
                    <JqxColorPicker
                        onColorchange={colorPickerEvent}
                        width={220}
                        height={220}
                        colorMode={'hue'}
                    />
                </div>
            </JqxDropDownButton>
        </div>
    );
};

export default App;