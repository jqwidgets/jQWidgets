import * as React from 'react';
import JqxSplitter from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsplitter';

function App() {
    return (
        <JqxSplitter
            theme="material-purple"
            width={850}
            height={850}
            panels={[{ size: '20%' }, { size: '80%' }]}
            orientation="horizontal"
        >
            <div>
                North
            </div>
            <div>
                <JqxSplitter
                    theme="material-purple"
                    style={{ border: 'none' }}
                    width="100%"
                    height="100%"
                    panels={[{ size: '30%' }, { size: '60%' }]}
                >
                    <div>
                        West
                    </div>
                    <div>
                        East
                    </div>
                </JqxSplitter>
            </div>
        </JqxSplitter>
    );
}

export default App;