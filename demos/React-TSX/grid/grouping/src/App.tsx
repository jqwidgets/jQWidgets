import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private groupNum = React.createRef<HTMLInputElement>();
    private expandedGroup = React.createRef<HTMLSpanElement>();
    private collapsedGroup = React.createRef<HTMLSpanElement>();

    constructor(props: {}) {
        super(props);
        this.onExpandGroup = this.onExpandGroup.bind(this);
        this.onCollapseGroup = this.onCollapseGroup.bind(this);
        this.onExpandAllGroup = this.onExpandAllGroup.bind(this);
        this.onCollapseAllGroup = this.onCollapseAllGroup.bind(this);
        this.onGroupExpand = this.onGroupExpand.bind(this);
        this.onGroupCollapse = this.onGroupCollapse.bind(this);

        const source: any = {
            datafields: [
                { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
                { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
                { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
                { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
                { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
                { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:CustomerID',
            record: 'content',
            root: 'entry',
            url: 'customers.xml'
        };

        this.state = {
            columns: [
                { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                { text: 'City', datafield: 'City', width: 120 },
                { text: 'Country', datafield: 'Country' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    onGroupexpand={this.onGroupExpand} onGroupcollapse={this.onGroupCollapse}
                    // @ts-ignore
                    width={'100%'} groupable={true} columns={this.state.columns}
                    source={this.state.source} groups={['City']} />

                <div style={{ marginTop: '20px' }}>
                    <div style={{ float: 'left', marginLeft: '20px' }}>

                        <JqxButton theme={'material-purple'} onClick={this.onExpandGroup} width={150}>Expand Group</JqxButton>
                        <br />

                        <JqxButton theme={'material-purple'} onClick={this.onCollapseGroup} width={150}>Collapse Group</JqxButton>
                        <br />

                        <span style={{ marginTop: '10px' }}>Group:</span>
                        <input ref={this.groupNum} defaultValue={'1'} style={{ marginTop: '10px', width: '20px' }} type={'text'} />
                    </div>
                    <div style={{ float: 'left', marginLeft: '20px' }}>

                        <JqxButton theme={'material-purple'} onClick={this.onExpandAllGroup} width={150}>Expand All Group</JqxButton>
                        <br />

                        <JqxButton theme={'material-purple'} onClick={this.onCollapseAllGroup} width={150}> Collapse All Groups</JqxButton>
                        <br />

                    </div>
                    <div style={{ float: 'left', marginLeft: '20px' }}>
                        <div style={{ fontWeight: 'bold' }}>
                            <span>Event Log:</span>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <span>Expanded Group:</span>
                            <span ref={this.expandedGroup} />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <span>Collapsed Group:</span>
                            <span ref={this.collapsedGroup} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private onExpandGroup(): void {
        const groupNum = this.groupNum.current!.value;
        this.myGrid.current!.expandgroup(groupNum);
    }

    private onCollapseGroup(): void {
        const groupNum = this.groupNum.current!.value;
        this.myGrid.current!.collapsegroup(groupNum);
    }

    private onExpandAllGroup(): void {
        this.myGrid.current!.expandallgroups();
    }

    private onCollapseAllGroup(): void {
        this.myGrid.current!.collapseallgroups();
    }

    private onGroupExpand(event: any): void {
        const args = event.args;
        this.expandedGroup.current!.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
    }

    private onGroupCollapse(event: any): void {
        const args = event.args;
        this.collapsedGroup.current!.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
    }
}

export default App;