import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';

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
            <JqxTagCloud theme={'material-purple'}
                // @ts-ignore
                width={getWidth("tagcloud")}
                source={this.state.source}
                displayMember={"name"}
                valueMember={"calories"}
            />
        );
    }
}

export default App;
