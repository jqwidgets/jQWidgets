import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useMemo, useCallback } from 'react';
import { generatedata } from './generatedata';
import JqxDragDrop from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdragdrop';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

function App() {
    const dragDropArray = useRef<JqxDragDrop[]>([]);
    const myGrid1 = useRef<JqxGrid>(null);
    const myGrid2 = useRef<JqxGrid>(null);

    const columns = useMemo(() => [
        { text: 'First Name', datafield: 'firstname', width: 300 },
        { text: 'Last Name', datafield: 'lastname', width: 300 },
        { text: 'Product', datafield: 'productname' }
    ], []);

    const source = useMemo(() => {
        return new jqx.dataAdapter({
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' }
            ],
            datatype: 'array',
            localdata: generatedata(100, false)
        });
    }, []);

    const source2 = useMemo(() => ({
        datafields: [
            { name: 'firstname' },
            { name: 'lastname' },
            { name: 'productname' }
        ],
        totalrecords: 10,
        unboundmode: true
    }), []);

    const rendered = useCallback((type: any) => {
        if (type === 'rows') {
            return;
        }

        const cells = document.getElementsByClassName('jqx-grid-cell-left-align');
        const initFeedback = (feedback: any): void => {
            feedback.height(25);
        };

        dragDropArray.current = [];

        Array.prototype.forEach.call(cells, (currentCell: HTMLDivElement, index: number) => {
            const cellText = currentCell.innerText;

            const onDropTargetEnter = (): void => {
                dragDropArray.current[index].setOptions({ revert: false });
            };
            const onDropTargetLeave = (): void => {
                dragDropArray.current[index].setOptions({ revert: true });
            };
            const onDragStart = (event: any): void => {
                if (event.target) {
                    const value = event.target.innerHTML;
                    dragDropArray.current[index].setOptions({ data: { value } });
                }
            };
            const onDragEnd = (event: any): void => {
                if (event.target) {
                    let value = event.target.innerHTML;
                    value = value.slice(0, 37) + value.slice(62);
                    const position = jqx.position(event.args);
                    const cell = myGrid2.current!.getcellatposition(position.left, position.top);
                    if (typeof cell !== 'boolean') {
                        myGrid2.current!.setcellvalue(cell.row!, (cell.column!).toString(), value);
                    }
                }
            };

            ReactDOM.render(
                <JqxDragDrop
                    ref={(dragDrop) => { if (dragDrop) dragDropArray.current.push(dragDrop); }}
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    onDropTargetEnter={onDropTargetEnter}
                    onDropTargetLeave={onDropTargetLeave}
                    revert={false}
                    dragZIndex={99999}
                    appendTo={'body'}
                    dropAction={'none'}
                    initFeedback={initFeedback}
                >
                    {cellText}
                </JqxDragDrop>,
                currentCell
            );
        });
    }, []);

    return (
        <div>
            <JqxGrid
                theme={'material-purple'}
                ref={myGrid1}
                // @ts-ignore
                width={'100%'}
                source={source}
                columns={columns}
                pageable={true}
                autoheight={true}
                sortable={true}
                rendered={rendered}
                selectionmode={'singlecell'}
            />

            <div style={{ marginTop: '20px' }} />

            <JqxGrid
                theme={'material-purple'}
                ref={myGrid2}
                // @ts-ignore
                width={'100%'}
                source={source2}
                columns={columns}
                autoheight={true}
                selectionmode={'singlecell'}
            />
        </div>
    );
}

export default App;