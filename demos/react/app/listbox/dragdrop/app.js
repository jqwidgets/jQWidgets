import React from 'react';
import ReactDOM from 'react-dom';

import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';
import JqxTextArea from '../../../jqwidgets-react/react_jqxtextarea.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.listBoxA.on('dragStart', (event) => {
            this.onDragStart(event);
        });
        this.refs.listBoxB.on('dragStart', (event) => {
            this.onDragStart(event);
        });
        this.refs.listBoxA.on('dragEnd', (event) => {
            this.onDragEnd(event);
        });
        this.refs.listBoxB.on('dragEnd', (event) => {
            this.onDragEnd(event);
        });
    }
    onDragStart(event) {
        document.getElementById('dragStartLog').innerHTML = 'Drag Start: ' + event.args.label;
        document.getElementById('dragEndLog').innerHTML = '';
    }
    onDragEnd(event) {
        document.getElementById('dragEndLog').innerHTML = 'Drag End';

        if (event.args.label) {

            let ev = event.args.originalEvent;
            let x = ev.pageX;
            let y = ev.pageY;
            if (event.args.originalEvent && event.args.originalEvent.originalEvent && event.args.originalEvent.originalEvent.touches) {
                let touch = event.args.originalEvent.originalEvent.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            }

            let top = 80;
            let bottom = 260;
            let left = 515;
            let right = 670;

            if (x >= left && x <= right) {   
                if (y >= top && y <= bottom) {
                    this.refs.myTextArea.val(event.args.label);
                }
            }
        }
    }
    render() {
        let source1 =
            [
                'Affogato',
                'Americano',
                'Bicerin',
                'Breve',
                'Cafe Bombón',
                'Cafe au lait',
                'Caffe Corretto',
                'Cafe Crema',
                'Caffe Latte',
                'Caffe macchiato',
                'Cafe melange',
                'Coffee milk',
                'Cafe mocha'
            ];
        let source2 =
            [
                'Cappuccino',
                'Carajillo',
                'Cortado',
                'Cuban espresso',
                'Espresso',
                'Eiskaffee',
                'The Flat White',
                'Frappuccino',
                'Galao',
                'Greek frappe coffee',
                'Iced Coffee﻿',
                'Indian filter coffee',
                'Instant coffee',
                'Irish coffee',
                'Liqueur coffee'
            ];

        let dragStart = (item) => {
            if (item.label == 'Breve')
                return false;
        };
        let dragEnd = (dragItem, dropItem) => {
            if (dragItem.label == 'Frappuccino')
                return false;
        };
        let renderer1 = (index, label, value) => {
            if (label == 'Breve') {
                return '<span style="color: red;">' + label + '</span>';
            }
            return label;
        };
        let renderer2 = (index, label, value) => {
            if (label == 'Frappuccino') {
                return '<span style="color: red">' + label + '</span>';
            }
            return label;
        };
        return (
            <div>
                <JqxListBox ref='listBoxA' style={{ float: 'left' }}
                    width={200} height={250} source={source1}
                    allowDrop={true} allowDrag={true}
                    dragStart={dragStart} renderer={renderer1}
                />
                <JqxListBox ref='listBoxB' style={{ float: 'left', marginLeft: 20 }}
                    width={200} height={250} source={source2}
                    allowDrop={true} allowDrag={true}
                    dragEnd={dragEnd} renderer={renderer2}
                />
                <div>
                    <JqxTextArea ref='myTextArea' style={{ float: 'left', marginLeft: 20 }}
                        width={200} height={200}
                    />
                </div>
                <div style={{ fontSize: 13, fontFamily: 'Verdana', paddingTop: 20, clear: 'both' }}>
                    <b>Events Log:</b>
                    <div id='dragStartLog' />
                    <div id='dragEndLog' />
                    <br />
                    <b>Note:</b>
                    <br />
                    Dragging of 'Breve' is disabled.
                    <br />
                    Dropping of 'Frappuccino' is disabled.
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
