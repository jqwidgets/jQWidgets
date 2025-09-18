import * as React from 'react';
import { useState } from 'react';
import JqxDateTimeInput, { IDateTimeInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const source = [
    'short date pattern', 'long date pattern', 'short time pattern', 'long time pattern', 'long date, short time pattern',
    'long date, long time pattern', 'month/day pattern', 'month/year pattern', 'custom'
];

const formatStrings: (IDateTimeInputProps['formatString'])[] = [
    'd', 'D', 't', 'T', 'f', 'F', 'M', 'Y', 'dddd-MMMM-yyyy'
];

const App = () => {
    const [formatString, setFormatString] = useState<IDateTimeInputProps['formatString']>('d');
    const [selectedIndex, setSelectedIndex] = useState<IDropDownListProps['selectedIndex']>(0);

    const listOnSelect = React.useCallback((event: any) => {
        const index: number = event.args.index;
        setFormatString(formatStrings[index]);
        setSelectedIndex(index);
    }, []);

    return (
        <div>
            <JqxDateTimeInput theme={'material-purple'} width={300} height={30} formatString={formatString} />
            <br />
            <div>
                <div style={{ fontFamily: 'Verdana', fontSize: '13px' }}>
                    Choose Format:
                </div>
                <br />
                <JqxDropDownList
                    theme={'material-purple'}
                    onSelect={listOnSelect}
                    width={230}
                    height={30}
                    source={source}
                    selectedIndex={selectedIndex}
                />
            </div>
        </div>
    );
};

export default App;