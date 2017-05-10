import React from 'react';
import ReactDOM from 'react-dom';

import JqxDocking from '../../../jqwidgets-react/react_jqxdocking.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDocking.importLayout('{"panel0": {"window0":{"collapsed":false}},"panel1": {"window1":{"collapsed":false}},"floating":{"window2":{"x":"200px","y":"400","width":"350px","height":"auto","collapsed":false}},"orientation": "horizontal"}');
    }
    render() {
        let source = [
            'JavaScript Certification - Welcome to our network',
            'Business Challenges via Web take a part',
            'jQWidgets better web, less time. Take a tour',
            'Facebook - you have 7 new notifications',
            'Twitter - John Doe is following you. Look at his profile',
            'New videos, take a look at YouTube.com'
        ];
        return (
            <JqxDocking ref='myDocking' style={{ float: 'left' }}
                width={550} orientation={'horizontal'} mode={'default'}
            >
                <div style={{ overflow: 'hidden' }}>
                    <div id='window0' style={{ height: 200 }}>
                        <div>CISC</div>
                        <div>
                            Before the RISC philosophy became prominent, many computer architects tried to bridge
                            the so called semantic gap, i.e. to design instruction sets that directly supported
                            high-level programming constructs such as procedure calls, loop control, and complex...
                        </div>
                    </div>
                    <div id='window1' style={{ height: 180 }}>
                        <div>Database management system</div>
                        <div>
                            A database management system (DBMS) is a software package with computer programs
                            that control the creation, maintenance, and the use of a database. It allows organizations
                            to conveniently develop databases...
                        </div>
                    </div>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <div id='window2' style={{ height: 180 }}>
                        <div>RISC</div>
                        <div>
                            Some aspects attributed to the first RISC-labeled designs around 1975 include the
                            observations that the memory-restricted compilers of the time were often unable
                            to take advantage...
                        </div>
                    </div>
                </div>
            </JqxDocking >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
