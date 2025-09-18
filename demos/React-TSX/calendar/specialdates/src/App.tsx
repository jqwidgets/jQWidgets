import * as React from 'react';
import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

function App() {
    const myCalendar = React.useRef<JqxCalendar>(null);

    React.useEffect(() => {
        const date1 = new Date();
        const date2 = new Date();
        const date3 = new Date();
        date1.setDate(5);
        date2.setDate(15);
        date3.setDate(16);
        myCalendar.current?.addSpecialDate(date1, '', 'Special Date1');
        myCalendar.current?.addSpecialDate(date2, '', 'Special Date2');
        myCalendar.current?.addSpecialDate(date3, '', 'Special Date3');
    }, []);

    return (
        <JqxCalendar
            theme="material-purple"
            ref={myCalendar}
            width={220}
            height={220}
            enableTooltips={true}
        />
    );
}

export default App;