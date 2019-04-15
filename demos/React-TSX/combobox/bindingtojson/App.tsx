import * as React from 'react';
 


import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

class App extends React.PureComponent<{}, IComboBoxProps> {

    private selectionLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.myComboBoxOnSelect = this.myComboBoxOnSelect.bind(this);

        const source: any = {
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt'
        };

        this.state = {
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxComboBox theme={'material-purple'} onSelect={this.myComboBoxOnSelect}
                    width={150} height={30} source={this.state.source} selectedIndex={0} 
                    displayMember={'ContactName'} valueMember={'CompanyName'} />

                <div ref={this.selectionLog} style={{ fontSize: '12px', fontFamily: 'Verdana' }}/>
            </div>
        );
    }

    private myComboBoxOnSelect(event: any): void {
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
            }
        }
    };
}

export default App;