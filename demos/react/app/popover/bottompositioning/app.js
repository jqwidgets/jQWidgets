import React from 'react';
import ReactDOM from 'react-dom';

import JqxPopover from '../../../jqwidgets-react/react_jqxpopover.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        let data = new Array();
        let firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
        let lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
        let titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];

        let employeesDiv = document.getElementById('employees');

        for (let i = 0; i < firstNames.length; i++) {
            let row = {};
            row['firstname'] = firstNames[i];
            row['lastname'] = lastNames[i];
            row['title'] = titles[i];
            let imgurl = '../images/' + firstNames[i].toLowerCase() + '.png';
            let img = '<img height="50" width="45" src="' + imgurl + '"/>';
            let table = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
            employeesDiv.innerHTML += table;
        }
    }
    render() {
        return (
            <div>
                <JqxPopover
                    offset={{ left: 0, top: 0 }}
                    showCloseButton={true}
                    arrowOffsetValue={0}
                    position={'top'}
                    title={'Employees'}
                    selector={'#container'}
                >
                    <div id="employees" />
                </JqxPopover>
                <div style={{ height: 60, borderWidth: 0, position: 'absolute', width: '100%', bottom: 0, borderStyle: 'solid', paddingTop: 10, paddingBottom: 10, boxSizing: 'border-box' }} className='jqx-widget-header'>
                    <div id="container">
                        <JqxButton value='View Employees' style={{ marginLeft: '50%', float: 'left', left: -75, top: 0, position: 'relative', padding: '8px 12px', borderRadius: 6 }}
                            width={140} height={40} template={'primary'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
