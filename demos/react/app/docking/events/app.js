import React from 'react';
import ReactDOM from 'react-dom';

import JqxDocking from '../../../jqwidgets-react/react_jqxdocking.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDocking.hideAllCloseButtons();

        this.refs.myDocking.on('dragEnd', (event) => {
            this.displayEvent(event);
        });

        this.refs.myDocking.on('dragStart', (event) => {
            this.refs.myPanel.clearcontent();
            this.displayEvent(event);
        });
    }
    capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    displayEvent(event) {
        let eventData = 'Event: <span style="font-style: italic;">' + this.capitaliseFirstLetter(event.type) + '</span>';
        eventData += ' <strong>' + $('#' + event.args.window).jqxWindow('title') + '</strong>';
        this.refs.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    }
    render() {
        return (
            <div>
                <JqxPanel ref='myPanel' style={{ borderWidth: 0, float: 'left', marginLeft: 30 }}
                    width={450} height={50}
                />
                <JqxDocking ref='myDocking'
                    width={650} orientation={'horizontal'} mode={'default'}
                >
                    <div>
                        <div id='window0' style={{ height: 150 }}>
                            <div>CISC</div>
                            <div>
                                Before the RISC philosophy became prominent, many computer architects tried to bridge
                                the so called semantic gap, i.e. to design instruction sets that directly supported
                                high-level programming constructs such as procedure calls, loop control, and complex...
                            </div>
                        </div>
                        <div id='window1' style={{ height: 150 }}>
                            <div>Database management system</div>
                            <div>
                                A database management system (DBMS) is a software package with computer programs
                                that control the creation, maintenance, and the use of a database. It allows organizations
                                to conveniently develop databases...
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id='window2' style={{ height: 150 }}>
                            <div>RISC</div>
                            <div>
                                Some aspects attributed to the first RISC-labeled designs around 1975 include the
                                observations that the memory-restricted compilers of the time were often unable
                                to take advantage...
                            </div>
                        </div>
                    </div>
                </JqxDocking>
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
