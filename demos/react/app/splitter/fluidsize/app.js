import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';

class App extends React.Component {
    render() {
        return (
            <JqxSplitter ref='mainSplitter'
                width={'100%'} height={'95%'}
                orientation={'vertical'}
                panels={[
                    { size: '50%', min: '10%', collapsible: false },
                    { size: '50%', min: '5%' }]
                }
            >

                <div>
                    <JqxSplitter ref='nested2'
                        width={'100%'} height={'100%'}
                        panels={[{ size: 200 }]}
                    >
                        <div>
                            Nested 2.1</div>
                        <div>
                            Nested 2.2</div>
                    </JqxSplitter>
                </div>
                <div>
                    <JqxSplitter ref='nested1'
                        width={'100%'} height={'100%'}
                        orientation={'horizontal'}
                        panels={[{ size: '60%' }]}
                    >
                        <div>
                            Nested 1.1</div>
                        <div>
                            Nested 1.2</div>
                    </JqxSplitter>
                </div>

            </JqxSplitter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
