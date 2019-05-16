import * as React from 'react';
 


import './App.css';

import JqxSortable from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsortable';

class App extends React.PureComponent<{}, {}> {
    private mySortable = React.createRef<JqxSortable>();

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxSortable ref={this.mySortable}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
            </JqxSortable>
        );
    }
}

export default App;
