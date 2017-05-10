import React from 'react';
import ReactDOM from 'react-dom';

import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.treeA.selectItem(document.getElementById('home'));
        this.refs.treeA.expandItem(document.getElementById('solutions'));
        this.refs.treeB.expandItem(document.getElementById('supportTreeB'));

        let ondDragStart = (event) => {
            document.getElementById('dragStartLog').innerText = 'Drag Start: ' + event.args.label;
            document.getElementById('dragEndLog').innerText = '';
        };
        this.refs.treeA.on('dragStart', (event) => ondDragStart(event));
        this.refs.treeB.on('dragStart', (event) => ondDragStart(event));

        let ondDragEnd = (event) => {
            document.getElementById('dragEndLog').innerText = 'Drag End';
            if (event.args.label) {
                let ev = event.args.originalEvent;
                let x = ev.pageX;
                let y = ev.pageY;
                if (event.args.originalEvent && event.args.originalEvent.originalEvent && event.args.originalEvent.originalEvent.touches) {
                    let touch = event.args.originalEvent.originalEvent.changedTouches[0];
                    x = touch.pageX;
                    y = touch.pageY;
                }
                let textarea = document.getElementById('textarea');
                let width = textarea.clientWidth;
                let height = textarea.clientHeight;
                let right = parseInt(textarea.offsetLeft) + width;
                let bottom = parseInt(textarea.offsetTop) + height;
                if (x >= parseInt(textarea.offsetLeft) && x <= right) {
                    if (y >= parseInt(textarea.offsetTop) && y <= bottom) {
                        textarea.value = event.args.label;
                    }
                }
            }
        };
        this.refs.treeA.on('dragEnd', (event) => ondDragEnd(event));
        this.refs.treeB.on('dragEnd', (event) => ondDragEnd(event));
    }
    render () {
        let dragStart = (item) => {
            if (item.label == 'Community')
                return false;
        };
        let dragEnd = (item, dropItem, args, dropPosition, tree) => {
            if (item.label == 'Forum')
                return false;
        };
        return (
            <div style={{ float: 'left' }}>

                <JqxTree ref='treeA' style={{ marginLeft: 0, float: 'left' }}
                    allowDrag={true} allowDrop={true}
                    width={220} height={300}
                    dragStart={dragStart}
                >
                    <ul>
                        <li id='home'>Home</li>
                        <li id='solutions'>Solutions
                            <ul>
                                <li>Education</li>
                            </ul>
                        </li>
                        <li>Financial services</li>
                        <li>Community</li>
                    </ul>
                </JqxTree>
                <JqxTree ref='treeB' style={{ marginLeft: 20, float: 'left' }}
                    allowDrag={true} allowDrop={true}
                    width={220} height={300}
                    dragEnd={dragEnd}
                >
                    <ul>
                        <li>Products
                        </li>
                        <li id='supportTreeB'>Support
                            <ul>
                                <li>Support home</li>
                                <li>Customer Service</li>
                            </ul>
                        </li>
                        <li>Knowledge base</li>
                        <li>Forum</li>
                    </ul>
                </JqxTree>

                <div style={{ width: '200px', height: '200px', float: 'left', marginLeft: '20px' }}>
                    <textarea rows='5' id='textarea'></textarea>
                </div>

                <div style={{ fontSize: '13px', width: '200px', fontFamily: 'Verdana', paddingTop: '20px', clear: 'both' }}>
                    <b>Events Log:</b>
                    <div id='dragStartLog'></div>
                    <div id='dragEndLog'></div>
                    <br />
                    <b>Note:</b>
                    <br />
                    Dragging of 'Community' is disabled.
                    <br />
                    Dropping of 'Forum' is disabled.
                </div>

        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
