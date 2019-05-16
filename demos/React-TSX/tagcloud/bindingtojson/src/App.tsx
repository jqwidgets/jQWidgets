import * as React from 'react';
 

import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

class App extends React.PureComponent<{}, ITagCloudProps> {
    constructor(props: {}) {
        super(props);

        const url: string = 'beverages.txt';
        const source: any = {
            dataFields: [
                { name: 'calories' },
                { name: 'name' }
            ],
            dataType: 'json',
            url
        };
        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            source: dataAdapter
        }
    }

    public render() {
        return (
            <JqxTagCloud
                // @ts-ignore
                width={"100%"}
                source={this.state.source}
                displayMember={"name"}
                valueMember={"calories"}
            />
        );
    }
}

export default App;
