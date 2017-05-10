import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';

class App extends React.Component {
    render() {
        return (
            <JqxSplitter ref='mainSplitter'
                width={850} height={850}
                orientation={'horizontal'}
                panels={[{ size: 300, collapsible: false }]}
            >

                <div>

                    <JqxSplitter ref='firstNested'
                        width={'100%'} height={'100%'}
                        orientation={'vertical'}
                        panels={[{ size: 300, collapsible: false }]}
                    >
                        <div>
                            <JqxSplitter ref='secondNested'
                                width={'100%'} height={'100%'}
                                orientation={'horizontal'} panels={[{ size: 150 }]}
                            >
                                <div>
                                    <span>Panel 1</span>
                                </div>
                                <div>
                                    <span>Panel 2</span>
                                </div>
                            </JqxSplitter>
                        </div>
                        <div>
                            <span>Panel 3</span>
                        </div>
                    </JqxSplitter>

                </div>
                <div>

                    <JqxSplitter ref='thirdNested'
                        width={'100%'} height={'100%'}
                        orientation={'horizontal'} panels={[{ size: 150, collapsible: false }]}
                    >
                        <div>
                            <span>Panel 4</span></div>
                        <div>
                            <span>Panel 5</span></div>
                    </JqxSplitter>

                </div>

           </JqxSplitter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
