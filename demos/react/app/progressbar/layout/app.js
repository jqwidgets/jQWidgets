import React from 'react';
import ReactDOM from 'react-dom';

import JqxProgressBar from '../../../jqwidgets-react/react_jqxprogressbar.js';

class App extends React.Component {
    render() {
        return (
            <div >

                <div style={{ fontFamily: 'Verdana', fontSize: 12, float: 'left' }}>
                    <b>Default Layout</b>
                    <JqxProgressBar ref='horizontalProgressBar'
                        width={300}
                        height={40}
                        value={50}
                    />
                    <JqxProgressBar ref='verticalProgressBar' style={{ marginTop: 10, overflow: 'hidden' }}
                        height={300}
                        width={40}
                        value={50}
                        orientation={'vertical'}
                    />
                </div>

                <div style={{ fontFamily: 'Verdana', fontSize: 12, float: 'right' }}>
                    <b>Reversed Layout</b>
                    <JqxProgressBar ref='mirrorHorizontalProgressBar'
                        width={300}
                        height={40}
                        value={50}
                        layout={'reverse'}
                    />
                    <JqxProgressBar ref='mirrorVerticalProgressBar' style={{ marginTop: 10, float: 'right', overflow: 'hidden' }}
                        height={300}
                        width={40}
                        value={50}
                        orientation={'vertical'}
                        layout={'reverse'}
                    />
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
