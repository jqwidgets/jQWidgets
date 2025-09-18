import * as React from 'react';

import JqxDocking from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdocking';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myPanel = React.useRef<JqxPanel>(null);
    const myDocking = React.useRef<JqxDocking>(null);

    const capitalizeFirstLetter = (text: string): string => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const displayEvent = (event: any): void => {
        const windowID = event.args.window;
        const windowHeader = document.getElementById(windowID)?.children[0]?.firstChild?.textContent || '';
        let eventData = 'Event: <span style="font-style: italic;">' + capitalizeFirstLetter(event.type) + '</span>';
        eventData += ' <strong>' + windowHeader + '</strong>';
        myPanel.current?.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    };

    const myDockingOnDragEnd = React.useCallback((event: any) => {
        displayEvent(event);
    }, []);

    const myDockingOnDragStart = React.useCallback((event: any) => {
        myPanel.current?.clearcontent();
        displayEvent(event);
    }, []);

    return (
        <div>
            <JqxPanel
                theme="material-purple"
                ref={myPanel}
                style={{ borderWidth: 0, float: 'left', marginLeft: '30px' }}
                width={350}
                height={50}
            />

            <JqxDocking
                theme="material-purple"
                ref={myDocking}
                style={{ float: 'left' }}
                onDragStart={myDockingOnDragStart}
                onDragEnd={myDockingOnDragEnd}
                width="100%"
                orientation="horizontal"
                mode="default"
            >
                <div>
                    <div id="window0" style={{ height: '150px' }}>
                        <div>CISC</div>
                        <div>
                            Before the RISC philosophy became prominent; many computer architects tried to bridge
                            the so called semantic gap; i.e. to design instruction sets that directly supported
                            high-level programming constructs such as procedure calls; loop control; and complex...
                        </div>
                    </div>
                    <div id="window1" style={{ height: '150px' }}>
                        <div>Database management system</div>
                        <div>
                            A database management system (DBMS) is a software package with computer programs
                            that control the creation; maintenance; and the use of a database. It allows organizations
                            to conveniently develop databases...
                        </div>
                    </div>
                </div>
                <div>
                    <div id="window2" style={{ height: '150px' }}>
                        <div>RISC</div>
                        <div>
                            Some aspects attributed to the first RISC-labeled designs around 1975 include the
                            observations that the memory-restricted compilers of the time were often unable
                            to take advantage...
                        </div>
                    </div>
                </div>
            </JqxDocking>
        </div>
    );
};

export default App;