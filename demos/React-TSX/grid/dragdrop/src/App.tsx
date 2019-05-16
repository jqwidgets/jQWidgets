import * as React from 'react';
 

import * as ReactDOM from 'react-dom';
import { generatedata } from './generatedata';
import JqxDragDrop from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdragdrop'
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';


export interface IState extends IGridProps {
    source2: IGridProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private dragDropArray: JqxDragDrop[] = [];
    private myGrid1 = React.createRef<JqxGrid>();
    private myGrid2 = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' }
            ],
            datatype: 'array',
            localdata: generatedata(100, false)
        };

        const rendered = (type: any): void => {
            // Initialize the DragDrop plug-in. Set it's drop target to the second Grid.        

            if (type === 'rows') {
                return;
            }

            const cells = document.getElementsByClassName('jqx-grid-cell-left-align');
            const initFeedback = (feedback: any): void => {
                feedback.height(25);
            };
           
            Array.prototype.forEach.call(cells, (currentCell: HTMLDivElement, index: number) => {

                const cellText = currentCell.innerText;

                const onDropTargetEnter = (): void => {
                    this.dragDropArray[index].setOptions({ revert: false });
                };
                const onDropTargetLeave = (): void => {
                    this.dragDropArray[index].setOptions({ revert: true });
                };
                const onDragStart = (event: any): void => {
                    if (event.target) {
                        const value = event.target.innerHTML;
                        this.dragDropArray[index].setOptions({ data: { value } });
                    }
                };
                const onDragEnd = (event: any): void => {
                    if (event.target) {
                        let value = event.target.innerHTML;
                        value = value.slice(0, 37) + value.slice(62);
                        const position = jqx.position(event.args);
                        const cell = this.myGrid2.current!.getcellatposition(position.left, position.top);
                        if (typeof cell !== 'boolean') {
                            this.myGrid2.current!.setcellvalue(cell.row!, (cell.column!).toString(), value);
                        }
                    }
                };

                ReactDOM.render(
                    <JqxDragDrop  ref={(dragDrop) => { this.dragDropArray.push(dragDrop!) }}
                        onDragStart={onDragStart} onDragEnd={onDragEnd}
                        onDropTargetEnter={onDropTargetEnter} onDropTargetLeave={onDropTargetLeave}
                        revert={false} dragZIndex={99999} appendTo={'body'} dropAction={'none'} initFeedback={initFeedback}>{cellText}</JqxDragDrop>,
                    currentCell
                );
            });
        };   

        this.state = {
            columns: [
                { text: 'First Name', datafield: 'firstname', width: 300 },
                { text: 'Last Name', datafield: 'lastname', width: 300 },
                { text: 'Product', datafield: 'productname' }
            ],
            rendered,
            source: new jqx.dataAdapter(source),
            source2: {
                datafields: [
                    { name: 'firstname' },
                    { name: 'lastname' },
                    { name: 'productname' }
                ],
                totalrecords: 10,
                unboundmode: true
            }
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid1}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    pageable={true} autoheight={true} sortable={true} rendered={this.state.rendered}
                    selectionmode={'singlecell'} />

                <div style={{ marginTop: '20px' }} />

                <JqxGrid theme={'material-purple'} ref={this.myGrid2}
                    // @ts-ignore
                    width={'100%'} source={this.state.source2} columns={this.state.columns}
                    autoheight={true} selectionmode={'singlecell'} />
            </div>
        );
    }
}

export default App;