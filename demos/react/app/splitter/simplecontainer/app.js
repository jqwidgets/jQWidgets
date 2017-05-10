import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';

class App extends React.Component {
    render() {
        return (
            <JqxSplitter ref='splitContainer'
                width={850} height={850}
                orientation={'horizontal'}
                panels={[{ size: '20%' }, { size: '80%' }]}
            >
                <div>
                    North
                </div>

                <div>
                    <JqxSplitter ref='nestedSplitter'
                        width={'100%'} height={'100%'}
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
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
