import * as React from 'react';
 


import './App.css';

import JqxDragDrop, { IDragDropProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdragdrop';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';


class App extends React.PureComponent<{}, IDragDropProps> {

    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.addEvent = this.addEvent.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDropTargetEnter = this.onDropTargetEnter.bind(this);
        this.onDropTargetLeave = this.onDropTargetLeave.bind(this);

        this.state = {
            restricter: { left: 8, top: 8, width: 247, height: 247 }
        }
    }

    public componentDidMount() {
        this.centerLabels();
    }

    public render() {

        return (
            <div className="main-container">
                <div id="draggable-parent">
                    <JqxDragDrop  className="draggable"
                        onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}
                        onDropTargetEnter={this.onDropTargetEnter} onDropTargetLeave={this.onDropTargetLeave}
                        restricter={this.state.restricter} dropTarget={'.drop-target'}>
                        <div className="label">I can be dragged only inside my parent</div>
                    </JqxDragDrop>
                    <div className="drop-target">
                        <div className="label">I am a drop target</div>
                    </div>
                </div>
                <JqxPanel theme={'material-purple'} ref={this.myPanel} className="events" width={260} height={330} />
            </div>
        );
    }

    private centerLabels(): void {
        const labels = document.getElementsByClassName('label');
        Array.prototype.forEach.call(labels, (label: HTMLDivElement) => {
            const parentHeight = label.parentElement!.offsetHeight;
            const elementHeight = label.clientHeight;
            const top = (parentHeight - elementHeight) / 2;
            label.style.top = top + 'px';
        });
    }

    private addEvent(type: string, position: any): void {
        const left = position.left.toString().substring(0, 2).replace(/\./g, '').replace(/\-/g, '');
        const top = position.top.toString().substring(0, 2).replace(/\./g, '').replace(/\-/g, '');
        this.myPanel.current!.prepend(`<div class="row">Event: ${type}, (${left}, ${top})</div>`);
    }

    private onDragStart(event: any): void {
        if (event.args) {
            this.addEvent(event.type, event.args.position);
        }
    }

    private onDragEnd(event: any): void {
        if (event && event.args) {
            this.addEvent(event.type, event.args.position);
        }
    }

    private onDropTargetEnter(event: any): void {
        if (event.args) {
            this.addEvent(event.type, event.args.position);
        }
    }

    private onDropTargetLeave(event: any): void {
        if (event.args) {
            this.addEvent(event.type, event.args.position);
        }
    }
}

export default App;