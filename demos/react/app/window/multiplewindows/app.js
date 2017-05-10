import React from 'react';
import ReactDOM from 'react-dom';

import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.showWindowButton.on('click', () => {
            let window = $.data(document.body, 'jqxwindows-list'),
                count = window.length;
            while (count) {
                count -= 1;
                $(window[count]).jqxWindow('open');
            }
        });

        this.refs.addWindowButton.on('click', () => {
            let mainDemoContainer = document.getElementById('mainDemoContainer');
            let widgetContainer = document.createElement('div');

            mainDemoContainer.appendChild(widgetContainer);

            ReactDOM.render(
                <JqxWindow width={300} height={150}>
                    <div>Header</div>
                    <div>Content</div>
                </JqxWindow>, widgetContainer);
        });
    }
    render() {
        let offset = { left: 60, top: 95 };
        return (
            <div style={{ width: '100%', height: 650, border: '0px solid #ccc', marginTop: 15 }}>

                <JqxButton ref='showWindowButton' width={120} value='Show Windows' style={{ float: 'left' }} />
                <JqxButton ref='addWindowButton' width={100} value='Add Window' style={{ float: 'left', marginLeft: 5 }} />

                <div id='mainDemoContainer'>
                    <JqxWindow ref='window0'
                        width={300} height={200} position={{ x: 50, y: 120 }}
                    >
                        <div>RISC</div>
                        <div>
                            Some aspects attributed to the first RISC-labeled designs around 1975 include the
                            observations that the memory-restricted compilers of the time were often unable
                            to take advantage of features intended to facilitate manual assembly coding, and
                            that complex addressing modes take many cycles to perform due to the required additional
                            memory accesses...
                        </div>
                    </JqxWindow>

                    <JqxWindow ref='window1'
                        width={300} height={'auto'} position={{ x: 100, y: 170 }}
                    >
                        <div>CISC</div>
                        <div>
                            Before the RISC philosophy became prominent, many computer architects tried to bridge
                            the so called semantic gap, i.e. to design instruction sets that directly supported
                            high-level programming constructs such as procedure calls, loop control, and complex
                            addressing modes, allowing data structure and array accesses to be combined into
                            single instructions. Instructions are also typically highly encoded in order to
                            further enhance the code density...
                        </div>
                    </JqxWindow>

                    <JqxWindow ref='window2'
                        width={300} height={200} position={{ x: 150, y: 220 }}
                    >
                        <div>Database management system</div>
                        <div>
                            A database management system (DBMS) is a software package with computer programs
                            that control the creation, maintenance, and the use of a database. It allows organizations
                            to conveniently develop databases for various applications by database administrators
                            (DBAs) and other specialists. A database is an integrated collection of data records,
                            files, and other database objects...
                        </div>
                    </JqxWindow>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
