import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPopover from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpopover';

class App extends React.PureComponent<{}> {

    private myButton = React.createRef<JqxButton>();
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
                <JqxPopover theme={'material-purple'}
                    showCloseButton={true} selector={'.button'} title={'Employees'}
                    arrowOffsetValue={50} offset={{ left: 0, top: 0 }} rtl={true}>
                    <div ref={this.employees} />
                </JqxPopover>
                <div className="jqx-widget-header" style={{ height: '33px', borderWidth: '1px', borderStyle: 'solid', padding: '10px' }}>
                    <JqxButton theme={'material-purple'} ref={this.myButton} className="button" style={{ float: 'right' }}
                        width={150} height={25} template={'inverse'}>
                        View Employees
                    </JqxButton>
                </div>
            </div>
        );
    }
}

export default App;