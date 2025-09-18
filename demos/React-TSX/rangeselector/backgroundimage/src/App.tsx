import * as React from 'react';
import { useRef, useState } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxRangeSelector, { IRangeSelectorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

const App = () => {
    const rangeSelector = useRef<JqxRangeSelector>(null);
    const result = useRef<HTMLDivElement>(null);

    const [rangeSelectorState] = useState<IRangeSelectorProps>({
        max: new Date(2014, 9, 1),
        min: new Date(2014, 5, 1),
        range: { from: new Date(2014, 5, 1), to: new Date(2014, 6, 29), min: { days: 7 } }
    });

    const onClickSubmit = () => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const range = rangeSelector.current!.getRange();
        const from = new Date(range.from!.toString());
        const to = new Date(range.to!.toString());
        const fromDate = from.getDate();
        const fromMonth = from.getMonth();
        const toDate = to.getDate();
        const toMonth = to.getMonth();
        result.current!.innerHTML = "Vacation period selected: from " + months[fromMonth] + " " + fromDate + " to " + months[toMonth] + " " + toDate;
    };

    return (
        <div>
            <JqxRangeSelector
                theme={'material-purple'}
                ref={rangeSelector}
                width={500}
                height={100}
                min={rangeSelectorState.min}
                max={rangeSelectorState.max}
                range={rangeSelectorState.range}
                majorTicksInterval={'week'}
                minorTicksInterval={'day'}
                labelsFormat={'dd'}
                markersFormat={'d'}
                showGroupLabels={true}
            >
                <div id="jqxRangeSelectorContent">
                    <img
                        id="backgroundImage"
                        style={{
                            display: 'block',
                            width: '500px',
                            height: '100px',
                            background: 'url(https://www.jqwidgets.com/react/images/imageNature5.jpg) -100px -100px'
                        }}
                    />
                </div>
            </JqxRangeSelector>
            <br />
            <JqxButton
                theme={'material-purple'}
                style={{ marginLeft: '80px' }}
                onClick={onClickSubmit}
                width={120}
            >
                Submit vacation
            </JqxButton>
            <div
                style={{ marginLeft: '80px', marginTop: '10px' }}
                ref={result}
            />
        </div>
    );
};

export default App;