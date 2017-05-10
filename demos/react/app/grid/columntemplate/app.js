import React from 'react';
import ReactDOM from 'react-dom';

import JqxGrid from '../../../jqwidgets-react/react_jqxgrid.js';

class App extends React.Component {
    render() {
        let source =
            {
                datatype: 'xml',
                datafields: [
                    { name: 'title', type: 'string' },
                    { name: 'link', type: 'string' },
                    { name: 'pubDate', type: 'date' },
                    { name: 'creator', map: 'dc\\:creator', type: 'string' },
                ],
                root: 'channel',
                record: 'item',
                url: '../sampledata/feed.xml'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let linkrenderer = (row, column, value) => {
            if (value.indexOf('#') != -1) {
                value = value.substring(0, value.indexOf('#'));
            }
            let format = { target: '"_blank"' };
            let html = $.jqx.dataFormat.formatlink(value, format);
            return html;
        }

        let columns =
            [
                { text: 'Link', datafield: 'link', width: 550, cellsrenderer: linkrenderer },
                { text: 'Title', datafield: 'title', width: 200 },
                { text: 'Publish Date', datafield: 'pubDate', width: 250, cellsformat: 'D' },
                { text: 'Creator', datafield: 'creator', width: 200 }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid
                    width={850} source={dataAdapter} pageable={true}
                    autoheight={true} columns={columns}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
