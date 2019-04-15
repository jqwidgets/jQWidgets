import * as React from 'react';
 


import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <br /><br />
                <JqxSlider theme={'material-purple'}
                    tooltip={true}
                    mode={"fixed"}
                />
            </div>
        );
    }
}

export default App;
