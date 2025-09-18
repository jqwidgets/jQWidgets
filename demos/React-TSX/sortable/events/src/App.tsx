import * as React from 'react';
import { useRef, useEffect } from 'react';

import './App.css';

import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxSortable from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsortable';

const App = () => {
    const mySortable = useRef<JqxSortable>(null);
    const eventsContainer = useRef<JqxPanel>(null);
    const firstItem = useRef<HTMLDivElement>(null);
    const isFirstLoad = useRef(true);

    const eventLog = (event: any) => {
        eventsContainer.current?.prepend('<div style="margin-top: 5px;">' + event.type + '</div>');
    };

    const loadInfo = () => {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven'];
        const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan'];
        const titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager'];
        const parentElement = firstItem.current?.parentElement;
        if (!parentElement) return;
        for (let i = 0; i < firstNames.length; i++) {
            const element = document.createElement('div');
            const imgurl = 'https://www.jqwidgets.com/react/images/' + firstNames[i].toLowerCase() + '.png';
            const img = '<img height="50" width="40" src="' + imgurl + '" />';
            element.innerHTML = '<table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + ' ' + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
            if (isFirstLoad.current) {
                isFirstLoad.current = false;
                parentElement.appendChild(element);
                parentElement.removeChild(firstItem.current!);
                continue;
            }
            parentElement.appendChild(element);
        }
    };

    const activate = (event: any) => eventLog(event);
    const beforeStop = (event: any) => eventLog(event);
    const change = (event: any) => eventLog(event);
    const deactivate = (event: any) => eventLog(event);
    const out = (event: any) => eventLog(event);
    const over = (event: any) => eventLog(event);
    const receive = (event: any) => eventLog(event);
    const remove = (event: any) => eventLog(event);
    const start = (event: any) => eventLog(event);
    const stop = (event: any) => eventLog(event);
    const update = (event: any) => eventLog(event);

    useEffect(() => {
        loadInfo();
        eventLog({ type: 'create' });
    }, []);

    return (
        <div>
            <JqxSortable
                ref={mySortable}
                onActivate={activate}
                onBeforeStop={beforeStop}
                onChange={change}
                onDeactivate={deactivate}
                onOut={out}
                onOver={over}
                onReceive={receive}
                onRemove={remove}
                onStart={start}
                onStop={stop}
                onUpdate={update}
                opacity={0.5}
            >
                <div ref={firstItem} />
            </JqxSortable>
            <div className="events">
                <span>
                    Events:
                </span>
                <JqxPanel theme="material-purple" ref={eventsContainer} width={200} height={250} />
            </div>
        </div>
    );
};

export default App;