import React from 'react';
import ReactDOM from 'react-dom';

import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTree.selectItem(document.getElementById('home'));
        this.refs.myTree.expandItem(document.getElementById('solutions'));
        
        this.refs.myTree.on('expand', (event) => {
            let label = this.refs.myTree.getItem(event.args.element).label;
            let element = event.args.element;
            let loader = false;
            let loaderItem = null;
            let children = element.getElementsByTagName('ul')[0].children;
            for (let i = 0; i < children.length; i++) {
                let item = this.refs.myTree.getItem(children[i]);
                if (item && item.label == 'Loading...') {
                    loaderItem = item;
                    loader = true;
                    break;
                }
            }

            if (loader) {
                let innerItemRequest = new XMLHttpRequest();
                innerItemRequest.open('GET', loaderItem.value, false);
                innerItemRequest.setRequestHeader('Content-Type', 'text/json');
                innerItemRequest.send(null);

                let items = JSON.parse(innerItemRequest.response);
                this.refs.myTree.addTo(items, element);
                this.refs.myTree.removeItem(loaderItem.element);
            }
        });
    }
    render () {
        let source = null;
        let treeRequest = new XMLHttpRequest();
        let url = 'fileroot.htm';
        let async = false;
        treeRequest.open('GET', url, async);
        treeRequest.setRequestHeader('Content-Type', 'text/json');
        treeRequest.send(null);
        let jsonDataText = treeRequest.response;
        if (jsonDataText != undefined) {
            source = JSON.parse(jsonDataText);
        }    
        
        return (
            <JqxTree ref='myTree'
                source={source} width={200} height={300}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
