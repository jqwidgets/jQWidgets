import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'title', type: 'string' },
                { name: 'link', type: 'string' },
                { name: 'pubDate', type: 'date' },
                { name: 'creator', map: 'dc\\:creator', type: 'string' }
            ],
            datatype: 'xml',
            record: 'item',
            root: 'channel',
            url: 'feed.xml'
        };

        const linkrenderer = (row: number, column: any, value: any): any => {
            if (value.indexOf('#') !== -1) {
                value = value.substring(0, value.indexOf('#'));
            }
            const format = { target: '"_blank"' };
            const html = jqx.dataFormat.formatlink(value, format);
            return html;
        }

        this.state = {
            columns: [
                { text: 'Link', datafield: 'link', width: 550, cellsrenderer: linkrenderer },
                { text: 'Title', datafield: 'title', width: 200 },
                { text: 'Publish Date', datafield: 'pubDate', width: 250, cellsformat: 'D' },
                { text: 'Creator', datafield: 'creator', width: 200 }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                pageable={true} autorowheight={true} />
        );
    }
}

export default App;