import * as React from 'react';
 


import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

class App extends React.PureComponent<{}, IDropDownListProps> {

    private myDropDownList = React.createRef<JqxDropDownList>();
    private log = React.createRef<HTMLDivElement>();
    private checkedItemsLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.listOnSelect = this.listOnSelect.bind(this);

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
                <JqxDropDownList theme={'material-purple'} ref={this.myDropDownList} onSelect={this.listOnSelect}
                    width={200} height={30} source={this.state.source} checkboxes={true}
                    displayMember={'ContactName'} valueMember={'CompanyName'} />

                <div style={{ float: 'left', marginLeft: '20px', fontSize: '13px', fontFamily: 'Verdana' }}>
                    <div ref={this.log} />
                    <div ref={this.checkedItemsLog} style={{ maxWidth: '300px', marginTop: '20px' }} />
                </div>
            </div>
        );
    }

    private listOnSelect(event: any): void {
        if (event.args) {
            const selectedItem = event.args.item;
            if (selectedItem) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = `Value: ${selectedItem.value}`;

                const labelElement = document.createElement('div');
                labelElement.innerHTML = `Label: ${selectedItem.label}`;

                const checkedElement = document.createElement('div');
                checkedElement.innerHTML = `Checked: ${selectedItem.checked}`;

                const selectionLog = this.log.current!;
                selectionLog.innerHTML = '';
                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
                selectionLog.appendChild(checkedElement);

                const items = this.myDropDownList.current!.getCheckedItems();
                let checkedItems = '';
                for (const item of items) {
                    checkedItems += item.label + ', ';
                }
                this.checkedItemsLog.current!.innerHTML = checkedItems;
            }
        }
    };
}

export default App;