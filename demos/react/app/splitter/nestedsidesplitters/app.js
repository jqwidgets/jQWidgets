import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';

class App extends React.Component {
    render() {
        return (
            <JqxSplitter ref='splitContainer'
                width={850} height={850}
                orientation={'vertical'}
                panels={[{ size: '50%' }, { size: '50%' }]}
            >
                <div>
                    <JqxSplitter ref='leftSplitter'
                        width={'100%'} height={'100%'}
                        orientation={'horizontal'}
                        panels={[{ size: '50%' }, { size: '50%' }]}
                    >
                        <div>
                            West - North
                        </div>
                        <div>
                            West - South
                        </div>
                    </JqxSplitter>
                </div>

                <div>
                    <JqxSplitter ref='rightSplitter'
                        width={'100%'} height={'100%'}
                        orientation={'horizontal'}
                        panels={[{ size: '50%' }, { size: '50%' }]}
                    >
                        <div>
                            East - North
                        </div>
                        <div>
                            East - South
                        </div>
                    </JqxSplitter>
                </div>

            </JqxSplitter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
