import * as React from 'react';
import { useEffect, useRef } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPopover from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpopover';

function App() {
    const employees = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
        const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
        const titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];
        let html = '';
        for (let i = 0; i < firstNames.length; i++) {
            const imgurl = 'https://www.jqwidgets.com/react/images/' + firstNames[i].toLowerCase() + '.png';
            const img = '<img height="50" width="45" src="' + imgurl + '"/>';
            html += '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
        }
        if (employees.current) {
            employees.current.innerHTML = html;
        }
    }, []);

    return (
        <div>
            <JqxPopover
                theme="material-purple"
                offset={{ left: 0, top: -125 }}
                arrowOffsetValue={-240}
                position="left"
                title="Employees"
                showCloseButton={true}
                selector="#container"
            >
                <div ref={employees} />
            </JqxPopover>
            <div
                id="container"
                className="jqx-widget-header"
                style={{
                    height: '800px',
                    width: '140px',
                    float: 'right',
                    marginTop: '30px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    padding: '10px'
                }}
            >
                <JqxButton
                    theme="material-purple"
                    style={{
                        float: 'right',
                        marginTop: '10px',
                        padding: '8px 12px',
                        borderRadius: '6px'
                    }}
                    width={120}
                    height={20}
                >
                    View Employees
                </JqxButton>
            </div>
        </div>
    );
}

export default App;