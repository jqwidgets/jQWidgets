import * as React from 'react';
 


import JqxKanban, { IKanbanProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxkanban';

class App extends React.PureComponent<{}, IKanbanProps> {

    private myLog = React.createRef<HTMLDivElement>();
    private log: any[] = [];

    constructor(props: {}) {
        super(props);
        this.onItemMoved = this.onItemMoved.bind(this);
        this.onColumnExpanded = this.onColumnExpanded.bind(this);
        this.onColumnCollapsed = this.onColumnCollapsed.bind(this);
        this.onItemAttrClicked = this.onItemAttrClicked.bind(this);
        this.onColumnAttrClicked = this.onColumnAttrClicked.bind(this);
        this.updateLog = this.updateLog.bind(this);

        const fields: any[] = [
            { name: 'id', type: 'string' },
            { name: 'status', map: 'state', type: 'string' },
            { name: 'text', map: 'label', type: 'string' },
            { name: 'tags', type: 'string' },
            { name: 'color', map: 'hex', type: 'string' },
            { name: 'resourceId', type: 'number' }
        ];

        const source = {
            dataFields: fields,
            dataType: 'array',
            localData: [
                { id: '1161', state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
                { id: '1645', state: 'work', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
                { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
                { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
                { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
            ]
        };

        const resourcesAdapterFunc = (): any => {
            const resourcesSource = {
                dataFields: [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'image', type: 'string' },
                    { name: 'common', type: 'boolean' }
                ],
                dataType: 'array',
                localData: [
                    { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/react/images/andrew.png', common: true },
                    { id: 1, name: 'Andrew Fuller', image: 'https://www.jqwidgets.com/react/images/andrew.png' },
                    { id: 2, name: 'Janet Leverling', image: 'https://www.jqwidgets.com/react/images/janet.png' },
                    { id: 3, name: 'Steven Buchanan', image: 'https://www.jqwidgets.com/react/images/steven.png' },
                    { id: 4, name: 'Nancy Davolio', image: 'https://www.jqwidgets.com/react/images/nancy.png' },
                    { id: 5, name: 'Michael Buchanan', image: 'https://www.jqwidgets.com/react/images/Michael.png' },
                    { id: 6, name: 'Margaret Buchanan', image: 'https://www.jqwidgets.com/react/images/margaret.png' },
                    { id: 7, name: 'Robert Buchanan', image: 'https://www.jqwidgets.com/react/images/robert.png' },
                    { id: 8, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/react/images/Laura.png' },
                    { id: 9, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/react/images/Anne.png' }
                ]
            };
            const resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
            return resourcesDataAdapter;
        };
      
        this.state = {
            columns: [
                { text: 'Backlog', dataField: 'new' },
                { text: 'In Progress', dataField: 'work' },
                { text: 'Done', dataField: 'done' }
            ],
            resources: resourcesAdapterFunc(),
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxKanban theme={'material-purple'}
                    onItemMoved={this.onItemMoved} onColumnCollapsed={this.onColumnCollapsed} onColumnExpanded={this.onColumnExpanded}
                    onItemAttrClicked={this.onItemAttrClicked} onColumnAttrClicked={this.onColumnAttrClicked}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns} resources={this.state.resources} />
                <div ref={this.myLog} />
            </div>
        );
    }

    private updateLog(): void {
        let count = 0;
        let str = '';
        for (let i = this.log.length - 1; i >= 0; i--) {
            str += this.log[i] + '<br/>';
            count++;
            if (count > 10) {
                break;
            }
        }
        this.myLog.current!.innerHTML = str;
    }

    private onItemMoved(event: any): void {
        // let args = event.args;
        // let itemId = args.itemId;
        // let oldParentId = args.oldParentId;
        // let newParentId = args.newParentId;
        // let itemData = args.itemData;
        // let oldColumn = args.oldColumn;
        // let newColumn = args.newColumn;

        this.log.push('itemMoved is raised');
        this.updateLog();
    };

    private onColumnCollapsed(event: any): void {
        // let args = event.args;
        // let column = args.column;
        this.log.push('columnCollapsed is raised');
        this.updateLog();
    };

    private onColumnExpanded(event: any): void {
        // let args = event.args;
        // let column = args.column;
        this.log.push('columnExpanded is raised');
        this.updateLog();
    };

    private onItemAttrClicked(event: any): void {
        // let args = event.args;
        // let itemId = args.itemId;
        // let attribute = args.attribute; // template, colorStatus, content, keyword, text, avatar
        this.log.push('itemAttrClicked is raised');
        this.updateLog();
    };

    private onColumnAttrClicked(event: any): void {
        // let args = event.args;
        // let column = args.column;
        // let cancelToggle = args.cancelToggle; // false by default. Set to true to cancel toggling dynamically.
        // let attribute = args.attribute; // title, button
        this.log.push('columnAttrClicked is raised');
        this.updateLog();
    };
}

export default App;