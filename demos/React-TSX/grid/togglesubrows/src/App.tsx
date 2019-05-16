import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();
    private myInput = React.createRef<JqxInput>();
    private expandedGroupLog = React.createRef<HTMLSpanElement>();
    private collapsedGroupLog = React.createRef<HTMLSpanElement>();

    constructor(props: {}) {
        super(props);
        this.expandBtnOnClick = this.expandBtnOnClick.bind(this);
        this.collapseBtnOnClick = this.collapseBtnOnClick.bind(this);
        this.expandAllBtnOnClick = this.expandAllBtnOnClick.bind(this);
        this.collapseAllBtnOnClick = this.collapseAllBtnOnClick.bind(this);
        this.myGridOnGroupExpand = this.myGridOnGroupExpand.bind(this);
        this.myGridOnGroupCollapse = this.myGridOnGroupCollapse.bind(this);

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
                <JqxGrid theme={'material-purple'} ref={this.myGrid} onGroupexpand={this.myGridOnGroupExpand} onGroupcollapse={this.myGridOnGroupCollapse}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    groupable={true} groups={['Country', 'City']} />

                <div style={{ marginTop: '30px' }}>
                    <div style={{ float: 'left', marginLeft: '20px' }}>
                        <JqxButton theme={'material-purple'} onClick={this.expandBtnOnClick} width={125} height={20}>Expand Group</JqxButton>
                        <br />
                        <div style={{ marginTop: '10px', marginBottom: '10px' }} />
                        <JqxButton theme={'material-purple'} onClick={this.collapseBtnOnClick} width={125} height={20}>Collapse Group</JqxButton>
                        <br />
                        <div style={{ marginTop: '10px' }}>
                            <span>Group:</span>
                            <JqxInput theme={'material-purple'} ref={this.myInput} style={{ marginLeft: '10px', marginTop: '10px' }} width={30} value={'0.0'} />
                        </div>
                    </div>
                    <div style={{ float: 'left', marginLeft: '20px' }}>
                        <JqxButton theme={'material-purple'} onClick={this.expandAllBtnOnClick} width={125} height={20}>Expand All</JqxButton>
                        <br />
                        <div style={{ marginTop: '10px', marginBottom: '10px' }} />
                        <JqxButton theme={'material-purple'} onClick={this.collapseAllBtnOnClick} width={125} height={20}>Collapse All</JqxButton>
                        <br />
                    </div>
                    <div style={{ float: 'left', marginLeft: '20px' }}>
                        <div style={{ fontWeight: 'bold' }}>
                            <span>Event Log:</span>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <span>Expanded Group:</span>
                            <span ref={this.expandedGroupLog} />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <span>Collapsed Group:</span>
                            <span ref={this.collapsedGroupLog} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private expandBtnOnClick(): void {
        const groupnum = this.myInput.current!.getOptions('value');
        if (!isNaN(groupnum)) {
            this.myGrid.current!.expandgroup(groupnum);
        }
    };

    private collapseBtnOnClick(): void {
        const groupnum = this.myInput.current!.getOptions('value');
        if (!isNaN(groupnum)) {
            this.myGrid.current!.collapsegroup(groupnum);
        }
    };

    private expandAllBtnOnClick(): void {
        this.myGrid.current!.expandallgroups();
    };

    private collapseAllBtnOnClick(): void {
        this.myGrid.current!.collapseallgroups();
    };

    private myGridOnGroupExpand(event: any): void {
        const args = event.args;
        this.expandedGroupLog.current!.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
    }

    private myGridOnGroupCollapse(event: any): void {
        const args = event.args;
        this.collapsedGroupLog.current!.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level
    }
}

export default App;