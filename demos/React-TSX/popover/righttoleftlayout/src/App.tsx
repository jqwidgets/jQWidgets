import * as React from 'react';
import { useEffect, useRef } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPopover from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpopover';

function App() {
    const myButton = useRef<JqxButton>(null);
    const employees = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
        const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
        const titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];
        if (employees.current) {
            employees.current.innerHTML = '';
            for (let i = 0; i < firstNames.length; i++) {
                const imgurl = 'https://www.jqwidgets.com/react/images/' + firstNames[i].toLowerCase() + '.png';
                const img = '<img height="50" width="45" src="' + imgurl + '"/>';
                const table = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
                employees.current.innerHTML += table;
            }
        }
    }, []);

    return (
        <div>
            <JqxPopover
                theme="material-purple"
                showCloseButton={true}
                selector=".button"
                title="Employees"
                arrowOffsetValue={50}
                offset={{ left: 0, top: 0 }}
                rtl={true}
            >
                <div ref={employees} />
            </JqxPopover>
            <div className="jqx-widget-header" style={{ height: '33px', borderWidth: '1px', borderStyle: 'solid', padding: '10px' }}>
                <JqxButton
                    theme="material-purple"
                    ref={myButton}
                    className="button"
                    style={{ float: 'right' }}
                    width={150}
                    height={25}
                    template="inverse"
                >
                    View Employees
                </JqxButton>
            </div>
        </div>
    );
}

export default App;