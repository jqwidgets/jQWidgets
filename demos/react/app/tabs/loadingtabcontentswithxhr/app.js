import React from 'react';
import ReactDOM from 'react-dom';

import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';

class App extends React.Component {
    componentDidMount() {
        let loadPage = (url, tabIndex) => {
            let request = new XMLHttpRequest();
            request.open('GET', url, false);
            request.setRequestHeader('Content-Type', 'text/json');
            request.send(null);

            // Add "setTimeout" to slow down the request otherwise cannot see "ajax-loader.gif"
            setTimeout(() => {
                document.getElementById('content' + tabIndex).innerText = request.response;
            }, 500);
            //document.getElementById('content' + tabIndex).innerText = request.response;
        }
        
        loadPage('../app/tabs/loadingtabcontentswithxhr/pages/content1.htm', 1);
        this.refs.myTabs.on('selected', (event) => {
            let pageIndex = event.args.item + 1;
            loadPage('../app/tabs/loadingtabcontentswithxhr/pages/content' + pageIndex + '.htm', pageIndex);
        });
    }
    render () {
        return (
            <JqxTabs ref='myTabs'
                width={580} height={200}
            >
            <ul style={{ marginLeft: 30 }}>
                <li>Node.js</li>
                <li>JavaServer Pages</li>
                <li>Active Server Pages</li>
            </ul>
            <div id="content1">
                <img src='../../images/ajax-loader.gif' />
            </div>
            <div id="content2">
                <img src='../../images/ajax-loader.gif' />
            </div>
            <div id="content3">
                <img src='../../images/ajax-loader.gif' />
            </div>
          </JqxTabs>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
