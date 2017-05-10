import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';
import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';

class App extends React.Component {
    render() {
        let tabsHTML = `
          <ul>
            <li style='margin-left: 30px;'>Tab 1</li>
            <li>Tab 2</li>
        </ul>
        <div class='jqx-hidescrollbars'>
            <div class='jqx-hideborder' id='splitter'>
                <div>
                    Content 1.1
                </div>
                <div>
                    Content 1.2
                </div>
            </div>
        </div>
        <div class='jqx-hidescrollbars'>
            <div class='jqx-hideborder' id='splitter2'>
                <div>
                    Content 2.1
                </div>
                <div>
                    Content 2.2
                </div>
            </div>
        </div>
        `;
        let initTabContent = (tab) => {
            if (tab == 0) {
                let jqxSplitter1 = new jqxSplitter(
                    '#splitter',
                    {
                        height: '100%',
                        width: '100%',
                        panels: [{ size: '50%' }]
                    });
            }
            else {
                let jqxSplitter2 = new jqxSplitter(
                    '#splitter2',
                    {
                        orientation: 'horizontal',
                        height: '100%',
                        width: '100%',
                        panels: [{ size: '50%' }]
                    });
            }
        };
        return (
            <JqxTabs ref='myTabs'
                width={850} height={850}
                initTabContent={initTabContent}
            >
                <ul>
                    <li>Tab 1</li>
                    <li>Tab 2</li>
                </ul>

                <div className='jqx-hidescrollbars'>
                    <div className='jqx-hideborder' id='splitter'>
                        <div>Content 1.1</div>
                        <div>Content 1.2</div>
                    </div>
                </div>

                <div className='jqx-hidescrollbars'>
                    <div className='jqx-hideborder' id='splitter2'>
                        <div>Content 2.1</div>
                        <div>Content 2.2</div>
                    </div>
                </div>

            </JqxTabs>


        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
