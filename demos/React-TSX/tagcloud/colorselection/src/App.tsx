import * as React from 'react';
import { useEffect, useRef, useMemo } from 'react';
import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcolorpicker';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

const App = () => {
    const myTagCloud = useRef<JqxTagCloud>(null);
    const myDropDownButton1 = useRef<JqxDropDownButton>(null);
    const myDropDownButton2 = useRef<JqxDropDownButton>(null);

    const unemploymentRate = useMemo(
        () => [
            { country: 'Namibia', rate: 37.6 },
            { country: 'Macedonia, FYR', rate: 32.0 },
            { country: 'Latvia', rate: 18.7 },
            { country: 'Lithuania', rate: 17.8 },
            { country: 'Estonia', rate: 16.9 },
            { country: 'Serbia', rate: 16.6 },
            { country: 'Georgia', rate: 16.5 },
            { country: 'Yemen, Rep.', rate: 14.6 },
            { country: 'Slovak Republic', rate: 14.4 },
            { country: 'Dominican Republic', rate: 14.2 },
            { country: 'Tunisia', rate: 14.2 },
            { country: 'Armenia', rate: 28.6 },
            { country: 'Bosnia and Herzegovina', rate: 27.2 },
            { country: 'Lesotho', rate: 25.3 },
            { country: 'South Africa', rate: 24.7 },
            { country: 'Spain', rate: 20.1 },
            { country: 'Albania', rate: 13.8 },
            { country: 'Ireland', rate: 13.6 },
            { country: 'Jordan', rate: 12.9 },
            { country: 'Greece', rate: 12.5 }
        ],
        []
    );

    const tagCloudSource = useMemo(() => {
        const source = {
            dataFields: [
                { name: 'country' },
                { name: 'rate' }
            ],
            dataType: 'array',
            localData: unemploymentRate
        };
        return new jqx.dataAdapter(source);
    }, [unemploymentRate]);

    const getTextElementByColor = (color: any) => {
        const colorContainer = document.createElement('div');
        colorContainer.setAttribute('style', 'text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;');
        if (color === 'transparent' || color.hex === '') {
            colorContainer.innerText = 'transparent';
            return colorContainer;
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

    useEffect(() => {
        if (myDropDownButton1.current && myDropDownButton2.current) {
            myDropDownButton1.current.setContent(
                getTextElementByColor(new jqx.color({ hex: '00AA99' }))
            );
            myDropDownButton2.current.setContent(
                getTextElementByColor(new jqx.color({ hex: 'FF0000' }))
            );
        }
    }, [tagCloudSource]);

    const myColorPickerOnColorChange = (event: any) => {
        if (myDropDownButton1.current && myTagCloud.current) {
            myDropDownButton1.current.setContent(getTextElementByColor(event.args.color));
            myTagCloud.current.setOptions({ minColor: '#' + event.args.color.hex });
        }
    };

    const myColorPicker2OnColorChange = (event: any) => {
        if (myDropDownButton2.current && myTagCloud.current) {
            myDropDownButton2.current.setContent(getTextElementByColor(event.args.color));
            myTagCloud.current.setOptions({ maxColor: '#' + event.args.color.hex });
        }
    };

    return (
        <div>
            <JqxTagCloud
                ref={myTagCloud}
                // @ts-ignore
                width={"100%"}
                source={tagCloudSource}
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
                    <JqxDropDownButton theme={'material-purple'} ref={myDropDownButton1} width={150} height={22}>
                        <JqxColorPicker
                            onColorchange={myColorPickerOnColorChange}
                            width={220}
                            height={220}
                            color={"00AA99"}
                            colorMode={"hue"}
                        />
                    </JqxDropDownButton>
                </div>
                <div style={{ float: "left" }}>
                    <label style={{ marginLeft: 5, fontSize: 12, fontFamily: "Verdana" }}>Select Max Color</label>
                    <JqxDropDownButton theme={'material-purple'} ref={myDropDownButton2} width={150} height={22}>
                        <JqxColorPicker
                            onColorchange={myColorPicker2OnColorChange}
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
};

export default App;