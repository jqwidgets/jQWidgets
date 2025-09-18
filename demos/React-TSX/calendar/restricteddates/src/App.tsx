import * as React from 'react';
import { useState, useEffect } from 'react';
import JqxCalendar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';

const App = () => {
    const [restrictedDates, setRestrictedDates] = useState<Date[]>([]);

    useEffect(() => {
        const date = new Date();
        date.setHours(0, 0, 0);
        date.setDate(2);
        const date2 = new Date();
        date2.setHours(0, 0, 0);
        date2.setDate(3);
        setRestrictedDates([date, date2]);
    }, []);

    return (
        <JqxCalendar theme="material-purple" width={220} height={220} restrictedDates={restrictedDates} />
    );
};

export default App;