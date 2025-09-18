import React, { useEffect, useRef } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPopover from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpopover';

function App() {
    const employees = useRef<HTMLDivElement>(null);
    const top = 10;
    const left = -50;

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
        <div style={{ height: '33px', border: '1px solid lightgray', padding: '10px' }} className="jqx-widget-header">
            <div style={{ float: 'right' }}>
                <JqxButton theme={'material-purple'} className="button"
                    width={150} height={20} template={'inverse'}>
                    View Employees
                </JqxButton>
                <JqxPopover theme={'material-purple'} showCloseButton={true} selector={'.button'} title={'Employees'}
                    arrowOffsetValue={50} offset={{ left, top }}>
                    <div ref={employees} />
                </JqxPopover>
            </div>
        </div>
    );
}

export default App;