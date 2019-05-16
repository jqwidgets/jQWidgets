import * as React from 'react';
 


import JqxInput, { IInputProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

class App extends React.PureComponent<{}, IInputProps> {

    private myInput = React.createRef<JqxInput>();
    private selectionLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.myInputOnSelect = this.myInputOnSelect.bind(this);

        const source: any = {
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            url: 'customers.txt'
        };

        this.state = {
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxInput theme={'material-purple'} ref={this.myInput} onSelect={this.myInputOnSelect}
                    width={200} height={25} source={this.state.source} placeHolder={'Contact Name:'}
                    valueMember={'CompanyName'} displayMember={'ContactName'} />
                <br />

                <label style={{ fontFamily: 'Verdana', fontSize: '10px' }}>ex: Ana</label>

                <div ref={this.selectionLog} style={{ fontFamily: 'Verdana', fontSize: '13px' }} />
            </div>
        );
    }

    private myInputOnSelect(event: any): void {
        if (event.args) {
            const item = event.args.item;
            if (item) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;

                const labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;

                const selectionLog = this.selectionLog.current!;
                selectionLog.innerHTML = '';

                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);

                setTimeout(() => this.myInput.current!.val(item.label));
            }
        }
    }
}

export default App;