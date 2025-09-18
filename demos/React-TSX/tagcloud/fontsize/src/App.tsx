import * as React from 'react';
import { useRef, useCallback, useMemo } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

const App = () => {
    const myTagCloud = useRef<JqxTagCloud>(null);
    const minFontSize = useRef<JqxInput>(null);
    const maxFontSize = useRef<JqxInput>(null);
    const fontSizeUnit = useRef<JqxInput>(null);

    const source = useMemo(() => {
        const unemploymentRate: any[] = [
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
        const src: any = {
            dataFields: [
                { name: 'country' },
                { name: 'rate' }
            ],
            dataType: 'array',
            localData: unemploymentRate
        };
        return new jqx.dataAdapter(src);
    }, []);

    const setFont = useCallback(() => {
        const fontSize = fontSizeUnit.current?.getOptions('value');
        const minSize = minFontSize.current?.getOptions('value');
        const maxSize = maxFontSize.current?.getOptions('value');
        myTagCloud.current?.setOptions({
            fontSizeUnit: fontSize,
            maxFontSize: maxSize,
            minFontSize: minSize
        });
    }, []);

    return (
        <div>
            <JqxTagCloud
                ref={myTagCloud}
                width={'100%'}
                source={source}
                displayMember={'country'}
                valueMember={'rate'}
                fontSizeUnit={'px'}
                minFontSize={12}
                maxFontSize={20}
                urlBase={'http://localhost/'}
                minColor={'#00AA99'}
                maxColor={'#FF0000'}
            />
            <div>
                minFontSize:
                <JqxInput
                    theme="material-purple"
                    ref={minFontSize}
                    height={25}
                    width={200}
                    placeHolder="MinFontSize"
                    value={12}
                />
                maxFontSize:
                <JqxInput
                    theme="material-purple"
                    ref={maxFontSize}
                    height={25}
                    width={200}
                    placeHolder="maxFontSize"
                    value={20}
                />
                fontSizeUnit:
                <JqxInput
                    theme="material-purple"
                    ref={fontSizeUnit}
                    height={25}
                    width={200}
                    value="px"
                    source={['em', 'px', '%']}
                    placeHolder="em/px/%"
                />
                <JqxButton
                    theme="material-purple"
                    style={{ display: 'inline-block', marginLeft: 10 }}
                    width={70}
                    onClick={setFont}
                >
                    Set Font
                </JqxButton>
            </div>
        </div>
    );
};

export default App;