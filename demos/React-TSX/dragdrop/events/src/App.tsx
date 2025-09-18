import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import JqxDragDrop, { IDragDropProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdragdrop';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

function App() {
    const [restricter] = useState({ left: 8, top: 8, width: 247, height: 247 });
    const myPanel = useRef<JqxPanel>(null);

    const centerLabels = useCallback(() => {
        const labels = document.getElementsByClassName('label');
        Array.prototype.forEach.call(labels, (label: HTMLDivElement) => {
            const parentHeight = label.parentElement!.offsetHeight;
            const elementHeight = label.clientHeight;
            const top = (parentHeight - elementHeight) / 2;
            label.style.top = top + 'px';
        });
    }, []);

    useEffect(() => {
        centerLabels();
    }, [centerLabels]);

    const addEvent = useCallback((type: string, position: any) => {
        const left = position.left.toString().substring(0, 2).replace(/\./g, '').replace(/\-/g, '');
        const top = position.top.toString().substring(0, 2).replace(/\./g, '').replace(/\-/g, '');
        myPanel.current?.prepend(`<div class="row">Event: ${type}, (${left}, ${top})</div>`);
    }, []);

    const onDragStart = useCallback((event: any) => {
        if (event.args) {
            addEvent(event.type, event.args.position);
        }
    }, [addEvent]);

    const onDragEnd = useCallback((event: any) => {
        if (event && event.args) {
            addEvent(event.type, event.args.position);
        }
    }, [addEvent]);

    const onDropTargetEnter = useCallback((event: any) => {
        if (event.args) {
            addEvent(event.type, event.args.position);
        }
    }, [addEvent]);

    const onDropTargetLeave = useCallback((event: any) => {
        if (event.args) {
            addEvent(event.type, event.args.position);
        }
    }, [addEvent]);

    return (
        <div className="main-container">
            <div id="draggable-parent">
                <JqxDragDrop
                    className="draggable"
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    onDropTargetEnter={onDropTargetEnter}
                    onDropTargetLeave={onDropTargetLeave}
                    restricter={restricter}
                    dropTarget={'.drop-target'}
                >
                    <div className="label">I can be dragged only inside my parent</div>
                </JqxDragDrop>
                <div className="drop-target">
                    <div className="label">I am a drop target</div>
                </div>
            </div>
            <JqxPanel theme={'material-purple'} ref={myPanel} className="events" width={260} height={330} />
        </div>
    );
}

export default App;