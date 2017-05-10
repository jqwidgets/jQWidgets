import React from 'react';
import ReactDOM from 'react-dom';

import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';

class App extends React.Component {
    componentDidMount() {
        $.ajax({
            url: '../sampledata/jqxexpanderxmldata.xml',
            type: 'GET',
            success: (data) => {
                let content = data.getElementById('items');
                let LIArray = content.getElementsByTagName('li');
                let container = document.createElement('div');
                let ul = document.createElement('ul');

                for (let i = 0; i < LIArray.length; i++) {
                    let li = document.createElement('li');
                    li.innerText = LIArray[i].innerHTML;
                    ul.appendChild(li)
                }

                container.appendChild(ul);

                this.refs.myExpander.setContent(container);
                this.refs.myExpander.setHeaderContent(data.children[0].children[0].innerHTML);
            }
        });
    }
    render() {
        return (
            <JqxExpander ref='myExpander' width={350} height={350}>
                <div id='expanderHeader'>
                    Loading Header...
                </div>
                <div id='expanderContent'>
                    Loading Content...
                </div>
            </JqxExpander>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
