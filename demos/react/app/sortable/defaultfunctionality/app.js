import React from 'react';
import ReactDOM from 'react-dom';

import JqxSortable from '../../../jqwidgets-react/react_jqxsortable.js';

class App extends React.Component {
    render () {
        let firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven"];
        let lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan"];
        let titles = ["Sales Representative", "Vice President, Sales", "Sales Representative", "Sales Representative", "Sales Manager"];
        let sortableList = '';
        for (let i = 0; i < firstNames.length; i++) {
            let imgurl = '../images/' + firstNames[i].toLowerCase() + '.png';
            let img = '<img height="50" width="40" src="' + imgurl + '"/>';
            let element = '<div><table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table></div>';
            sortableList = sortableList + element;
        }
        return (
          <JqxSortable template={sortableList}/>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
