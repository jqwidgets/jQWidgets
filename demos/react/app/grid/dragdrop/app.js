import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';
import JqxDragDrop from '../../../jqwidgets-react/react_jqxdragdrop.js';

class App extends React.Component {
    render() {
        var source =
            {
                localdata: generatedata(100),
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' }
                ],
                datatype: 'array'
            };

        var dataAdapter = new $.jqx.dataAdapter(source);

        var columns1 =
            [
                { text: 'First Name', dataField: 'firstname', width: 300 },
                { text: 'Last Name', dataField: 'lastname', width: 300 },
                { text: 'Product', dataField: 'productname' }
            ];

        var rendered1 = (type) => {
            // select all grid cells.
            // select all grid cells.
            var gridCells = $('.grid1').find('.jqx-grid-cell');
            // initialize the jqxDragDrop plug-in. Set its drop target to the second Grid.
            gridCells.jqxDragDrop({
                appendTo: 'body', dragZIndex: 99999,
                dropAction: 'none',
                initFeedback: (feedback) => {
                    feedback.height(25);
                },
                dropTarget: $('.grid2'), revert: true
            });
            gridCells.off('dragStart');
            gridCells.off('dragEnd');
            gridCells.off('dropTargetEnter');
            gridCells.off('dropTargetLeave');
            // disable revert when the dragged cell is over the second Grid.
            gridCells.on('dropTargetEnter', () => {
                gridCells.jqxDragDrop({ revert: false });
            });
            // enable revert when the dragged cell is outside the second Grid.
            gridCells.on('dropTargetLeave', () => {
                gridCells.jqxDragDrop({ revert: true });
            });
            // initialize the dragged object.
            gridCells.on('dragStart', (event) => {
                var value = event.target.innerHTML;
                var position = $.jqx.position(event.args);
                var cell = this.refs.myGrid1.getcellatposition(position.left, position.top);
                $(this).jqxDragDrop('data', {
                    value: value
                });
            });
            // set the new cell value when the dragged cell is dropped over the second Grid.      
            gridCells.on('dragEnd', (event) => {
                var value = event.target.innerHTML;
                var position = $.jqx.position(event.args);
                var cell = this.refs.myGrid2.getcellatposition(position.left, position.top);
                if (cell != null) {
                    this.refs.myGrid2.setcellvalue(cell.row, cell.column, value);
                }
            });
        };

        var columns2 =
            [
                { text: 'First Name', dataField: 'firstname', width: 300 },
                { text: 'Last Name', dataField: 'lastname', width: 300 },
                { text: 'Product', dataField: 'productname' }
            ];

        var source2 =
            {
                totalrecords: 10, unboundmode: true, datafields:
                [
                    { name: 'firstname' },
                    { name: 'lastname' },
                    { name: 'productname' }
                ]
            };

        return (
            <div>
                <JqxGrid ref='myGrid1' className='grid1'
                    width={850} source={dataAdapter} pageable={true}
                    autoheight={true} sortable={true} rendered={rendered1}
                    columns={columns1} selectionmode={'singlecell'}
                />
                <JqxGrid ref='myGrid2' className='grid2'
                    width={850} source={source2} columns={columns1}
                    autoheight={true} selectionmode={'singlecell'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
