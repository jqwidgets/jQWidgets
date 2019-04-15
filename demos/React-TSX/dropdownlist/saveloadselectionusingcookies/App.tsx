import * as React from 'react';
 


import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

class App extends React.PureComponent<{}, IDropDownListProps> {

    private index: any = jqx.cookie.cookie('jqxDropDownList_jqxWidget');

    constructor(props: {}) {
        super(props);

        if (this.index === undefined) {
            this.index = 0;
        }

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
            selectedIndex: this.index,
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxDropDownList theme={'material-purple'} onSelect={this.listOnSelect}
                width={200} height={30} source={this.state.source} selectedIndex={this.state.selectedIndex}
                displayMember={'ContactName'} valueMember={'CompanyName'} />
        );
    }

    private listOnSelect(event: any): void {
        jqx.cookie.cookie('jqxDropDownList_jqxWidget', event.args.index);
    }
}

export default App;