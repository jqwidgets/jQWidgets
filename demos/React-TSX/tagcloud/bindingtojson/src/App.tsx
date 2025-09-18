import * as React from 'react';
import JqxTagCloud, { ITagCloudProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtagcloud';

const App = () => {
    const source = React.useMemo(() => {
        const url = 'beverages.txt';
        return new jqx.dataAdapter({
            dataFields: [
                { name: 'calories' },
                { name: 'name' }
            ],
            dataType: 'json',
            url
        });
    }, []);

    return (
        <JqxTagCloud
            width={"100%"}
            source={source}
            displayMember={"name"}
            valueMember={"calories"}
        />
    );
};

export default App;