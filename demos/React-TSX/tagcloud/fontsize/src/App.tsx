import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

class App extends React.PureComponent<{}, ITagCloudProps> {
    private myTagCloud = React.createRef<JqxTagCloud>();
    private minFontSize = React.createRef<JqxInput>();
    private maxFontSize = React.createRef<JqxInput>();
    private fontSizeUnit = React.createRef<JqxInput>();

    constructor(props: {}) {
        super(props);

        this.setFont = this.setFont.bind(this);

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
                    minFontSize:
                    <JqxInput theme={'material-purple'} ref={this.minFontSize}
                        height={25}
                        width={200}
                        placeHolder={"MinFontSize"}
                        value={12}
                    />
                    maxFontSize:
                    <JqxInput theme={'material-purple'} ref={this.maxFontSize}
                        height={25}
                        width={200}
                        placeHolder={"maxFontSize"}
                        value={20}
                    />
                    fontSizeUnit:
                    <JqxInput theme={'material-purple'} ref={this.fontSizeUnit}
                        height={25}
                        width={200}
                        value={"px"}
                        source={['em', 'px', '%']}
                        placeHolder={"em/px/%"}
                    />
                    <JqxButton theme={'material-purple'} style={{ display: "inline-block", marginLeft: 10 }} width={70} onClick={this.setFont}>Set Font</JqxButton>
                </div>
            </div>
        );
    }

    // Event handling
    private setFont(event: any): void {
        let fontSize: any = 0;
        fontSize = this.fontSizeUnit.current!.getOptions("value");
        let minSize: any = 0;
        minSize = this.minFontSize.current!.getOptions("value");
        let maxSize: any = 0;
        maxSize = this.maxFontSize.current!.getOptions("value");

        this.myTagCloud.current!.setOptions({
            fontSizeUnit: fontSize,
            maxFontSize: maxSize,
            minFontSize: minSize
        });
    }
}

export default App;
