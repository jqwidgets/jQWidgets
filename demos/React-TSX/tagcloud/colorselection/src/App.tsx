import * as React from 'react';
 


import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcolorpicker';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

class App extends React.PureComponent<{}, ITagCloudProps> {
    private myTagCloud = React.createRef<JqxTagCloud>();
    private myDropDownButton1 = React.createRef<JqxDropDownButton>();
    private myDropDownButton2 = React.createRef<JqxDropDownButton>();

    constructor(props: {}) {
        super(props);

        this.myColorPickerOnColorChange = this.myColorPickerOnColorChange.bind(this);
        this.myColorPicker2OnColorChange = this.myColorPicker2OnColorChange.bind(this);

        const unemploymentRate: any[] =
            [
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
        const source: any = {
            dataFields: [
                { name: 'country' },
                { name: 'rate' }
            ],
            dataType: 'array',
            localData: unemploymentRate
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            source: dataAdapter
        }
    }

    public componentDidMount() {
        this.myDropDownButton1.current!.setContent(this.getTextElementByColor(new jqx.color({ hex: '00AA99' })));
        this.myDropDownButton2.current!.setContent(this.getTextElementByColor(new jqx.color({ hex: 'FF0000' })));
    }

    public render() {
        return (
            <div>
                <JqxTagCloud ref={this.myTagCloud}
					// @ts-ignore
                    width={"100%"}
                    source={this.state.source}
                    displayMember={"country"}
                    valueMember={"rate"}
                    fontSizeUnit={"px"}
                    minFontSize={12}
                    maxFontSize={20}
                    urlBase={"http://localhost/"}
                    minColor={"#00AA99"}
                    maxColor={"#FF0000"}
                />

                <div>
                    <div style={{ float: "left" }}>
                        <label style={{ marginLeft: 5, fontSize: 12, fontFamily: "Verdana" }}>Select Min Color</label>

                        <JqxDropDownButton theme={'material-purple'} ref={this.myDropDownButton1} width={150} height={22}>
                            <JqxColorPicker
                                onColorchange={this.myColorPickerOnColorChange}
                                width={220}
                                height={220}
                                color={"00AA99"}
                                colorMode={"hue"}
                            />
                        </JqxDropDownButton>
                    </div>
                    <div style={{ float: "left" }}>
                        <label style={{ marginLeft: 5, fontSize: 12, fontFamily: "Verdana" }}>Select Max Color</label>

                        <JqxDropDownButton theme={'material-purple'} ref={this.myDropDownButton2} width={150} height={22}>
                            <JqxColorPicker
                                onColorchange={this.myColorPicker2OnColorChange}
                                width={220}
                                height={220}
                                color={"FF0000"}
                                colorMode={"hue"}
                            />
                        </JqxDropDownButton>
                    </div>
                </div>
            </div>
        );
    }

    private getTextElementByColor(color: any): any {
        const colorContainer = document.createElement('div');
        colorContainer.setAttribute('style', 'text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;');
        if (color === 'transparent' || color.hex === '') {
            return colorContainer.innerText = 'transparent';
        }

        colorContainer.innerText = '#' + color.hex;
        const nThreshold = 105;
        const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';

        colorContainer.style.color = foreColor;
        colorContainer.style.backgroundColor = '#' + color.hex;
        colorContainer.className += ' jqx-rc-all';
        return colorContainer;        
    };

    // Event handling
    private myColorPickerOnColorChange(event: any): void {
        this.myDropDownButton1.current!.setContent(this.getTextElementByColor(event.args.color));
        this.myTagCloud.current!.setOptions({ minColor: '#' + event.args.color.hex });
    }

    private myColorPicker2OnColorChange(event: any): void {
        this.myDropDownButton2.current!.setContent(this.getTextElementByColor(event.args.color));
        this.myTagCloud.current!.setOptions({ maxColor: '#' + event.args.color.hex });
    }}

export default App;
