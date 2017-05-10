import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';

class App extends React.Component {
    componentDidMount() {
        let loadPage = (url, tabIndex) => {
            let request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.setRequestHeader('Content-Type', 'text/json');
            request.send(null);
            
            // Add 'setTimeout' to slow down the request otherwise cannot see 'ajax-loader.gif'
            setTimeout(() => {
                document.getElementById('content' + tabIndex).innerHTML = '<div style="overflow: auto; width: 100%; height: 100%;">' + request.response + '</div>';
            }, (tabIndex * 400));
            //document.getElementById('content' + tabIndex).innerHTML = '<div style="overflow: auto; width: 100%; height: 100%;">' + request.response + '</div>';
        }

        loadPage('../app/splitter/loadingsplitpanelswithxhr/pages/ajax1.htm', 1);
        loadPage('../app/splitter/loadingsplitpanelswithxhr/pages/ajax2.htm', 2);
    }
    render() {
        return (
            <JqxSplitter ref='mainSplitter'
                width={850} height={300}
                panels={[{ size: '50%' }, { size: '50%' }]}
            >
                <div id='content1'>
                    <img src='../../images/ajax-loader.gif' />
                </div>
                <div id='content2'>
                    <img src='../../images/ajax-loader.gif' />
                </div>
            </JqxSplitter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
