import * as React from 'react';
 


import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';

class App extends React.PureComponent<{}> {

    private myExpander = React.createRef<JqxExpander>();
  
    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        fetch('jqxexpanderxmldata.xml')
            .then(response => response.text())
                .then(data => this.populateExpander(data));
    }

    public render() {
        return (
            <JqxExpander theme={'material-purple'} ref={this.myExpander} width={350} height={350}>
                <div>
                    Loading Header...
                </div>
                <div>
                    Loading Content...
                </div>
            </JqxExpander>
        );
    }

    private populateExpander(data: any) {
        const content = document.createElement('div');
        content.innerHTML = data;

        const LIArray = content.getElementsByTagName('li');
        const container = document.createElement('div');
        const ul = document.createElement('ul');

        Array.prototype.forEach.call(LIArray, (liItem: HTMLLIElement) => {
            const li = document.createElement('li');
            li.innerText = liItem.innerHTML;
            ul.appendChild(li);
        });

        container.appendChild(ul);

        this.myExpander.current!.setContent(container.outerHTML);
        this.myExpander.current!.setHeaderContent(content.getElementsByTagName('header')[0].innerHTML);
    }
}

export default App;