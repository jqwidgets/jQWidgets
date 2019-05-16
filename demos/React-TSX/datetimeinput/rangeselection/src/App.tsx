import * as React from 'react';
 


import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

class App extends React.PureComponent<{}> {

    private myDateTimeInput = React.createRef<JqxDateTimeInput>();
    private log = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.dateOnChange = this.dateOnChange.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxDateTimeInput theme={'material-purple'} ref={this.myDateTimeInput} onChange={this.dateOnChange}
                    width={250} height={30} selectionMode={'range'} />

                <div ref={this.log} style={{ marginTop: '10px', fontSize: '13px', fontFamily: 'Verdana' }} />
            </div>
        );
    }

    public componentDidMount() {
        const date1 = new Date();
        date1.setFullYear(2013, 7, 7);
        const date2 = new Date();
        date2.setFullYear(2013, 7, 15);

        this.myDateTimeInput.current!.setRange(date1, date2);

        this.dateOnChange();
    }

    private dateOnChange(): void {
        const selection = this.myDateTimeInput.current!.getRange();

        if (selection.from != null) {
            this.log.current!.innerHTML = '<div>From: ' + selection.from.toLocaleDateString() + ' <br/>To: ' + selection.to.toLocaleDateString() + '</div>';
        }
    }
}

export default App;