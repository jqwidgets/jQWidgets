import * as React from 'react';
 


import JqxListBox, { IListBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

class App extends React.PureComponent<{}, IListBoxProps> {

    private selectionLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.onSelect = this.onSelect.bind(this);

        const source: any = {
            datafields: [
                { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
            ],
            datatype: 'xml',           
            id: 'm\\:properties>d\\:CustomerID',
            record: 'content',
            root: 'entry',
            url: 'customers.xml'
        }

        this.state = {
            source: new jqx.dataAdapter(source, { async: false })
        }
    }

    public render() {

        return (
            <div>
                <JqxListBox theme={'material-purple'} onSelect={this.onSelect}
                    width={250} height={200} source={this.state.source}
                    displayMember={'ContactName'} valueMember={'CompanyName'} />

                <div ref={this.selectionLog} style={{ fontSize: '13px', fontFamily: 'Verdana' }} />
            </div>
        );
    }

    private onSelect(event: any): void {
        if (event.args) {
            const item = event.args.item;
            if (item) {
                const valueElement = document.createElement('div');
                const labelElement = document.createElement('div');

                valueElement.innerHTML = 'Value: ' + item.value;
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