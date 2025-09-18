import * as React from 'react';
import JqxCalendar, { ICalendarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const source = [
    'Czech (Czech Republic)', 'German (Germany)', 'English (Canada)', 'English (United States)', 'French (France)',
    'Italian (Italy)', 'Japanese (Japan)', 'Hebrew (Israel)', 'Russian (Russia)', 'Croatian (Croatia)', 'Sanskrit (India)'
];

const cultureMap: Record<number, ICalendarProps["culture"]> = {
    0: 'cs-CZ',
    1: 'de-DE',
    2: 'en-CA',
    3: 'en-US',
    4: 'en-US',
    5: 'it-IT',
    6: 'ja-JP',
    7: 'he-IL',
    8: 'ru-RU',
    9: 'hr',
    10: 'sa-IN'
};

const App = () => {
    const [culture, setCulture] = React.useState<ICalendarProps["culture"]>('default');
    const [selectedIndex, setSelectedIndex] = React.useState(3);

    const myCalendar = React.useRef<JqxCalendar>(null);

    const dropDownListOnSelect = React.useCallback((event: any) => {
        const index = event.args.index;
        if (cultureMap.hasOwnProperty(index)) {
            setCulture(cultureMap[index]);
            setSelectedIndex(index);
        }
    }, []);

    return (
        <div>
            <JqxCalendar
                theme="material-purple"
                ref={myCalendar}
                style={{ float: 'left', marginRight: '20px' }}
                width={220}
                height={220}
                enableTooltips={false}
                culture={culture}
            />
            <div style={{ float: 'left' }}>
                <div style={{ float: 'left', fontFamily: 'Verdana', fontSize: '13px' }}>
                    Choose Culture
                </div>
                <br /><br />
                <JqxDropDownList
                    theme="material-purple"
                    style={{ float: 'left' }}
                    onSelect={dropDownListOnSelect}
                    width={220}
                    height={25}
                    selectedIndex={selectedIndex}
                    source={source}
                />
            </div>
        </div>
    );
};

export default App;