import * as React from 'react';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const events = React.useRef<HTMLDivElement>(null);
    const countRef = React.useRef<number>(0);

    const clearLog = React.useCallback(() => {
        countRef.current++;
        const log = events.current!;
        if (countRef.current >= 2) {
            log.innerHTML = '';
            countRef.current = 0;
        }
    }, []);

    const firstBtnOnChange = React.useCallback((event: any) => {
        clearLog();
        const log = events.current!;
        const checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
        } else {
            log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
        }
    }, [clearLog]);

    const secondBtnOnChange = React.useCallback((event: any) => {
        clearLog();
        const log = events.current!;
        const checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
        } else {
            log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
        }
    }, [clearLog]);

    const thirdBtnOnChange = React.useCallback((event: any) => {
        clearLog();
        const log = events.current!;
        const checked = event.args.checked;
        if (checked) {
            log.innerHTML += '<div><span>Checked: 3 Months Contract</span></div>';
        } else {
            log.innerHTML += '<div><span>Unchecked: 3 Months Contract</span></div>';
        }
    }, [clearLog]);

    return (
        <div>
            <h3>House Contract</h3>
            <JqxRadioButton theme={'material-purple'} onChange={firstBtnOnChange} width={250} height={25} checked={true}>
                <span>12 Months Contract</span>
            </JqxRadioButton>
            <JqxRadioButton theme={'material-purple'} onChange={secondBtnOnChange} width={250} height={25}>
                <span>6 Months Contract</span>
            </JqxRadioButton>
            <JqxRadioButton theme={'material-purple'} onChange={thirdBtnOnChange} width={250} height={25}>
                <span>3 Months Contract</span>
            </JqxRadioButton>
            <JqxRadioButton theme={'material-purple'} width={250} height={25} disabled={true}>
                <span>1 Month Contract</span>
            </JqxRadioButton>
            <div style={{ marginTop: '10px' }}>
                <div>Events:</div>
                <div ref={events} />
            </div>
        </div>
    );
};

export default App;