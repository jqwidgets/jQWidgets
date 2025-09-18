import * as React from 'react';
import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const App = () => {
    const [firstDayOfWeek, setFirstDayOfWeek] = React.useState(0);
    const [selectedIndex, setSelectedIndex] = React.useState(6);
    const source = React.useMemo(() => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], []);

    const myCalendar = React.useRef<JqxCalendar>(null);

    const dropDownListOnSelect = React.useCallback((event: any) => {
        let index = event.args.index;
        if (index === 6) {
            index = -1;
        }
        setFirstDayOfWeek(index + 1);
        setSelectedIndex(index);
    }, []);

    return (
        <div>
            <JqxCalendar
                theme="material-purple"
                ref={myCalendar}
                width={220}
                height={220}
                firstDayOfWeek={firstDayOfWeek}
                enableTooltips={false}
            />
            <br /><br />
            <div>Choose the first day of the week</div>
            <br /><br />
            <JqxDropDownList
                theme="material-purple"
                onSelect={dropDownListOnSelect}
                width={220}
                height={25}
                source={source}
                selectedIndex={selectedIndex}
                autoDropDownHeight={true}
            />
        </div>
    );
};

export default App;