import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { jqx, IGridProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

const App = () => {
    const myGrid = useRef<JqxGrid>(null);
    const groupNum = useRef<HTMLInputElement>(null);
    const expandedGroup = useRef<HTMLSpanElement>(null);
    const collapsedGroup = useRef<HTMLSpanElement>(null);

    const source: any = React.useMemo(() => ({
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
    }), []);

    const [gridProps] = useState<IGridProps>({
        columns: [
            { text: 'Company Name', datafield: 'CompanyName', width: 250 },
            { text: 'City', datafield: 'City', width: 120 },
            { text: 'Country', datafield: 'Country' }
        ],
        source: new jqx.dataAdapter(source)
    });

    const onExpandGroup = useCallback(() => {
        const groupIdx = groupNum.current!.value;
        myGrid.current!.expandgroup(groupIdx);
    }, []);

    const onCollapseGroup = useCallback(() => {
        const groupIdx = groupNum.current!.value;
        myGrid.current!.collapsegroup(groupIdx);
    }, []);

    const onExpandAllGroup = useCallback(() => {
        myGrid.current!.expandallgroups();
    }, []);

    const onCollapseAllGroup = useCallback(() => {
        myGrid.current!.collapseallgroups();
    }, []);

    const onGroupExpand = useCallback((event: any) => {
        const args = event.args;
        if (expandedGroup.current) {
            expandedGroup.current.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
        }
    }, []);

    const onGroupCollapse = useCallback((event: any) => {
        const args = event.args;
        if (collapsedGroup.current) {
            collapsedGroup.current.innerHTML = 'Group: ' + args.group + ', Level: ' + args.level;
        }
    }, []);

    return (
        <div>
            <JqxGrid
                theme="material-purple"
                ref={myGrid}
                onGroupexpand={onGroupExpand}
                onGroupcollapse={onGroupCollapse}
                width="100%"
                height={280}
                source={gridProps.source}
                columns={gridProps.columns}
                pageable={true}
                groupable={true}
                groups={['City']}
            />
            <div style={{ marginTop: '30px' }}>
                <div style={{ float: 'left', marginLeft: '20px' }}>
                    <JqxButton theme="material-purple" onClick={onExpandGroup} width={125}>Expand Group</JqxButton>
                    <br />
                    <JqxButton theme="material-purple" onClick={onCollapseGroup} width={125}>Collapse Group</JqxButton>
                    <br />
                    <span style={{ marginTop: '10px' }}>Group:</span>
                    <input ref={groupNum} defaultValue="1" style={{ marginTop: '10px', width: '20px' }} type="text" />
                </div>
                <div style={{ float: 'left', marginLeft: '20px' }}>
                    <JqxButton theme="material-purple" onClick={onExpandAllGroup} width={125}>Expand All</JqxButton>
                    <br />
                    <JqxButton theme="material-purple" onClick={onCollapseAllGroup} width={125}> Collapse All</JqxButton>
                    <br />
                </div>
                <div style={{ float: 'left', marginLeft: '20px' }}>
                    <div style={{ fontWeight: 'bold' }}>
                        <span>Event Log:</span>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <span>Expanded Group:</span>
                        <span ref={expandedGroup} />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <span>Collapsed Group:</span>
                        <span ref={collapsedGroup} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;