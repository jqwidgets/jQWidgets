import * as React from 'react';
 


import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

class App extends React.PureComponent<{}, IComboBoxProps> {

    private myComboBox = React.createRef<JqxComboBox>();
    private selectionLog = React.createRef<HTMLDivElement>();
    private checkedItemsLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.myComboBoxOnCheckChange = this.myComboBoxOnCheckChange.bind(this);

        const source: any = {
            async: false,
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt',
        };

        this.state = {
            source: new jqx.dataAdapter(source)
        }
    }

    public componentDidMount() {
        this.myComboBox.current!.checkIndex(0);
    }

    public render() {
        return (
            <div>
                <JqxComboBox theme={'material-purple'} ref={this.myComboBox} style={{ float: 'left' }} onCheckChange={this.myComboBoxOnCheckChange}
                    width={200} height={30} source={this.state.source} checkboxes={true}
                    displayMember={'ContactName'} valueMember={'CompanyName'} />

                <div style={{ float: 'left', marginLeft: '20px', fontSize: '13px', fontFamily: 'Verdana' }}>
                    <div ref={this.selectionLog} />
                    <div ref={this.checkedItemsLog} style={{ maxWidth: '300px', marginTop: '20px' }} />
                </div>
            </div>
        );
    }

    private myComboBoxOnCheckChange(event: any): void {
        if (event.args) {
            const item = event.args.item;
            if (item) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                const labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;
                const checkedElement = document.createElement('div');
                checkedElement.innerHTML = 'Checked: ' + item.checked;
                const selectionLog = this.selectionLog.current!;
                selectionLog.innerHTML = '';
                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
                selectionLog.appendChild(checkedElement);

                const items = this.myComboBox.current!.getCheckedItems();
                let checkedItems = '';
                for (const obj of items) {
                    checkedItems += obj.label + ', ';
                }
                this.checkedItemsLog.current!.innerHTML = checkedItems;
            }
        }
    };
}

export default App;