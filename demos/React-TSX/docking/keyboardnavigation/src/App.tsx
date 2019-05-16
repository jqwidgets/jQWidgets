import * as React from 'react';
 


import JqxDocking from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdocking';

class App extends React.PureComponent<{}> {

    private myDocking = React.createRef<JqxDocking>();

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        this.myDocking.current!.showAllCollapseButtons();
        this.myDocking.current!.focus();
    }

    public render() {
        return (
            <div>
                <JqxDocking theme={'material-purple'} ref={this.myDocking} 
                    // @ts-ignore
                    width={'100%'} orientation={'horizontal'} mode={'default'} keyboardNavigation={true}>
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

                <ul>
                    <li><b>Tab</b> - Once the focus is received, users will be able to use the keyboard to change the focused Docking Panel.</li>
                    <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous Docking Panel.</li>
                    <li><b>Esc</b> - closes the focused Docking Panel.</li>
                    <li><b>Enter</b> - collapses/expands the focused Docking Panel.</li>
                </ul>
            </div>
        );
    }
}

export default App;