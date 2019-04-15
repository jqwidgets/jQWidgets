import * as React from 'react';
 


import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class App extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div id="position">
                <JqxSlider theme={'material-purple'}
                    showTickLabels={true}
                    tooltip={true}
                    showButtons={true}
                    value={5}
                    height={70}
                    width={"80%"}
                    mode={"fixed"}
                />
            </div>
        );
    }
}

export default App;
