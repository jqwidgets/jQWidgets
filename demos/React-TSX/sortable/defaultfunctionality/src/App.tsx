import * as React from 'react';
 


import './App.css';

import JqxSortable from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsortable';

class App extends React.PureComponent<{}, {}> {
    private mySortable = React.createRef<JqxSortable>();
    private firstItem = React.createRef<HTMLDivElement>();
    private isFirstLoad = true;

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        this.loadInfo();
    }

    public render() {
        return (
            <JqxSortable ref={this.mySortable}>
                <div ref={this.firstItem}/>
            </JqxSortable>
        );
    }

    private loadInfo(): void {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven'];
        const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan'];
        const titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager'];
        const parentElement = this.firstItem.current!.parentElement!;
        for (let i = 0; i < firstNames.length; i++) {
            const element = document.createElement('div');
            const imgurl = 'https://www.jqwidgets.com/react/images/' + firstNames[i].toLowerCase() + '.png';
            const img = '<img height="50" width="40" src="' + imgurl + '"/>';
            element.innerHTML = '<table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + ' ' + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
            if (this.isFirstLoad) {
                this.isFirstLoad = false;
                parentElement.appendChild(element);
                parentElement.removeChild(this.firstItem.current!);
                continue;
            }

            parentElement.appendChild(element);
        }
    };
}

export default App;
