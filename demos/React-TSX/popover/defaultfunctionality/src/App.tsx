import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPopover from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpopover';

class App extends React.PureComponent<{}> {

    private employees = React.createRef<HTMLDivElement>();
    private top: number = 10;
    private left: number = - 50;

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
            <div style={{ height: '33px', border: '1px solid lightgray', padding: '10px' }} className="jqx-widget-header">
                <div style={{ float: 'right' }}>
                    <JqxButton theme={'material-purple'} className="button"
                        width={150} height={20} template={'inverse'}>
                        View Employees
                    </JqxButton>
                    <JqxPopover theme={'material-purple'} showCloseButton={true} selector={'.button'} title={'Employees'}
                        arrowOffsetValue={50} offset={{ left: this.left, top: this.top }} >
                        <div ref={this.employees} />
                    </JqxPopover>
                </div>
            </div>
        );
    }
}

export default App;