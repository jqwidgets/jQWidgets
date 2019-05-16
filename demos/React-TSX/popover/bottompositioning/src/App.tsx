import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPopover from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpopover';

class App extends React.PureComponent<{}> {

    private employees = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
        const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
        const titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];

        for (let i = 0; i < firstNames.length; i++) {
            const imgurl = 'https://www.jqwidgets.com/react/images/' + firstNames[i].toLowerCase() + '.png';
            const img = '<img height="50" width="45" src="' + imgurl + '"/>';
            const table = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
            this.employees.current!.innerHTML += table;
        }
    }

    public render() {
        return (
            <div>
                <JqxPopover theme={'material-purple'} offset={{ left: 0, top: 0 }} arrowOffsetValue={0}
                    position={'top'} title={'Employees'} showCloseButton={true}
                    selector={'#container'} >
                    <div ref={this.employees} />
                </JqxPopover>
                <div style={{ height: '60px', borderWidth: '0px', position: 'absolute', width: '99%', bottom: '0px', borderStyle: 'solid', paddingTop: '10px', paddingBottom: '10px', boxSizing: 'border-box' }}
                    id="header">
                    <div className="jqx-widget-header" id="container">
                        <JqxButton theme={'material-purple'} style={{ float: 'left', marginLeft: '50%', left: '-75px', top: '0px', position: 'relative', padding: '5px 22px', borderRadius: '6px' }}
                            width={150} height={20}>View Employees</JqxButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;