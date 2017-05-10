import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';
import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';

class App extends React.Component {
    render() {
        return (
            <JqxSplitter ref='splitContainer'
                width={850} height={850}
                orientation={'horizontal'}
                panels={[{ collapsible: false, size: '50%' }, { size: '50%' }]}
            >

                <div>
                    <JqxTabs className='jqx-hideborder jqx-hidescrollbars' ref='tabs1'
                        width={'100%'} height={'100%'}
                    >
                        <ul>
                            <li style={{ marginLeft: 30 }}>Tab 1</li>
                            <li>Tab 2</li>
                        </ul>
                        <div>
                            Content 1</div>
                        <div>
                            Content 2</div>
                    </JqxTabs>
                </div>
                <div>
                    <JqxSplitter ref='splitter'
                        width={'100%'} height={'100%'}
                        panels={[{ size: '50%' }]}
                    >
                        <div>
                            <JqxTabs className='jqx-hideborder jqx-hidescrollbars' ref='tabs2'
                                width={'100%'} height={'100%'}
                            >
                                <ul>
                                    <li style={{ marginLeft: 30 }}>Tab 1</li>
                                    <li>Tab 2</li>
                                </ul>
                                <div>
                                    Content 1</div>
                                <div>
                                    Content 2</div>
                            </JqxTabs>
                        </div>
                        <div>
                            <JqxTabs className='jqx-hideborder jqx-hidescrollbars' ref='tabs3'
                                width={'100%'} height={'100%'}
                            >
                                <ul>
                                    <li style={{ marginLeft: 30 }}>Tab 1</li>
                                    <li>Tab 2</li>
                                </ul>
                                <div>
                                    Content 1</div>
                                <div>
                                    Content 2</div>
                            </JqxTabs>
                        </div>
                    </JqxSplitter>
                </div>

            </JqxSplitter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
