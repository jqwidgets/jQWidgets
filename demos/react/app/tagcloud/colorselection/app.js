import React from 'react';
import ReactDOM from 'react-dom';

import JqxTagCloud from '../../../jqwidgets-react/react_jqxtagcloud.js';
import JqxDropDownButton from '../../../jqwidgets-react/react_jqxdropdownbutton.js';
import JqxColorPicker from '../../../jqwidgets-react/react_jqxcolorpicker.js';

class App extends React.Component {
    componentDidMount() {
        let getTextElementByColor = (color) => {
            let colorContainer = document.createElement('div');
            colorContainer.setAttribute('style', 'text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;');
            if (color == 'transparent' || color.hex == '') {
                return colorContainer.innerText = 'transparent';
            }

            colorContainer.innerText = '#' + color.hex;
            let nThreshold = 105;
            let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
            let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';

            colorContainer.style.color = foreColor;
            colorContainer.style.backgroundColor = '#' + color.hex;
            colorContainer.className += ' jqx-rc-all';
            return colorContainer
        }

        this.refs.dropDownButton.setContent(getTextElementByColor(new $.jqx.color({ hex: '00AA99' })));
        this.refs.dropDownButton2.setContent(getTextElementByColor(new $.jqx.color({ hex: 'FF0000' })));

        this.refs.colorPicker.on('colorchange', (event) => {
            this.refs.dropDownButton.setContent(getTextElementByColor(event.args.color));
            this.refs.tagCloud.minColor('#' + event.args.color.hex);
        });
        this.refs.colorPicker2.on('colorchange', (event) => {
            this.refs.dropDownButton2.setContent(getTextElementByColor(event.args.color));
            this.refs.tagCloud.maxColor('#' + event.args.color.hex);
        });
    }
    render () {
        let unemploymentRate = [
                { 'country': 'Namibia', 'rate': 37.6 },
                { 'country': 'Macedonia, FYR', 'rate': 32.0 },
                { 'country': 'Latvia', 'rate': 18.7 },
                { 'country': 'Lithuania', 'rate': 17.8 },
                { 'country': 'Estonia', 'rate': 16.9 },
                { 'country': 'Serbia', 'rate': 16.6 },
                { 'country': 'Georgia', 'rate': 16.5 },
                { 'country': 'Yemen, Rep.', 'rate': 14.6 },
                { 'country': 'Slovak Republic', 'rate': 14.4 },
                { 'country': 'Dominican Republic', 'rate': 14.2 },
                { 'country': 'Tunisia', 'rate': 14.2 },
                { 'country': 'Armenia', 'rate': 28.6 },
                { 'country': 'Bosnia and Herzegovina', 'rate': 27.2 },
                { 'country': 'Lesotho', 'rate': 25.3 },
                { 'country': 'South Africa', 'rate': 24.7 },
                { 'country': 'Spain', 'rate': 20.1 },
                { 'country': 'Albania', 'rate': 13.8 },
                { 'country': 'Ireland', 'rate': 13.6 },
                { 'country': 'Jordan', 'rate': 12.9 },
                { 'country': 'Greece', 'rate': 12.5 }
        ];
        let source =
        {
            datatype: 'array',
            localdata: unemploymentRate,
            datafields: [
                { name: 'country' },
                { name: 'rate' }
            ]
        };
        let dataAdapter = new $.jqx.dataAdapter(source, {});
        
        return (
            <div>

                <JqxTagCloud ref='tagCloud'
                    width={600} height={200}
                    source={dataAdapter} fontSizeUnit={'px'} 
                    minFontSize={12} maxFontSize={20} 
                    displayMember={'country'} valueMember={'rate'}
                    urlBase={'http://localhost/'} minColor={'#00AA99'} maxColor={'#FF0000'}
                />
                
                <div>
                    <div style={{float: 'left'}}>
                        <label style={{marginLeft: 5, fontSize: 12, fontFamily: 'Verdana'}}>Select Min color</label>
                        <JqxDropDownButton ref='dropDownButton' style={{ margin: 3 }} 
                            width={150} height={22}>
                            <div style={{ padding: 3 }}>
                                <JqxColorPicker ref='colorPicker'
                                    width={220} height={220} color={'00AA99'} colorMode={'hue'}
                                />
                            </div>
                        </JqxDropDownButton>
                    </div>

                    <div style={{float: 'left'}}>
                        <label style={{marginLeft: 5, fontSize: 12, fontFamily: 'Verdana'}}>Select Max color</label>
                        <JqxDropDownButton ref='dropDownButton2' style={{ margin: 3 }} 
                            width={150} height={22}>
                            <div style={{ padding: 3 }}>
                                <JqxColorPicker ref='colorPicker2'
                                    width={220} height={220} color={'FF0000'} colorMode={'hue'}
                                />
                            </div>
                        </JqxDropDownButton>
                    </div>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
