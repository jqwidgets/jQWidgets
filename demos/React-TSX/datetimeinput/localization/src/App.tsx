import * as React from 'react';
import { useState, useCallback } from 'react';
import JqxDateTimeInput, { IDateTimeInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const source: IDropDownListProps['source'] = [
    'Czech (Czech Republic)', 'German (Germany)', 'English (Canada)', 'English (United States)', 'French (France)',
    'Italian (Italy)', 'Japanese (Japan)', 'Hebrew (Israel)', 'Russian (Russia)', 'Croatian (Croatia)', 'Sanskrit (India)'
];

const cultures: IDateTimeInputProps['culture'][] = [
    'cs-CZ', 'de-DE', 'en-CA', 'en-US', 'fr-FR', 'it-IT', 'ja-JP', 'he-IL', 'ru-RU', 'hr', 'sa-IN'
];

const App = () => {
    const [culture, setCulture] = useState<IDateTimeInputProps['culture']>('en-US');
    const [selectedIndex, setSelectedIndex] = useState<IDropDownListProps['selectedIndex']>(3);

    const listOnSelect = useCallback((event: any) => {
        const index: number = event.args.index;
        setCulture(cultures[index]);
        setSelectedIndex(index);
    }, []);

    return (
        <div>
            <JqxDateTimeInput theme={'material-purple'} width={300} height={30} culture={culture} />
            <br />
            <div>
                <div style={{ fontFamily: 'Verdana', fontSize: '13px' }}>
                    Choose Culture:
                </div>
                <br />
                <JqxDropDownList
                    theme={'material-purple'}
                    onSelect={listOnSelect}
                    width={200}
                    height={30}
                    source={source}
                    selectedIndex={selectedIndex}
                />
            </div>
        </div>
    );
};

export default App;