import React from 'react';
import ReactDOM from 'react-dom';

import JqxSortable from '../../../jqwidgets-react/react_jqxsortable.js';

class App extends React.Component {
    render() {
        return (
                <JqxSortable ref='sortable' className='sortable'>
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
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
