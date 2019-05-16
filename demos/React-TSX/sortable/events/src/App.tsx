import * as React from 'react';
 


import './App.css';

import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxSortable from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxsortable';

class App extends React.PureComponent<{}, {}> {
    private mySortable = React.createRef<JqxSortable>();
    private eventsContainer = React.createRef<JqxPanel>();
    private firstItem = React.createRef<HTMLDivElement>();
    private isFirstLoad = true;

    constructor(props: {}) {
        super(props);

        this.activate = this.activate.bind(this);
        this.beforeStop = this.beforeStop.bind(this);
        this.change = this.change.bind(this);
        this.deactivate = this.deactivate.bind(this);
        this.out = this.out.bind(this);
        this.over = this.over.bind(this);
        this.receive = this.receive.bind(this);
        this.remove = this.remove.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.update = this.update.bind(this);
    }

    public componentDidMount() {
        this.loadInfo();
        this.eventLog({ type: "create" });
    }

    public render() {
        return (
            <div>
                <JqxSortable ref={this.mySortable}
                    onActivate={this.activate}
                    onBeforeStop={this.beforeStop}
                    onChange={this.change}
                    onDeactivate={this.deactivate}
                    onOut={this.out}
                    onOver={this.over}
                    onReceive={this.receive}
                    onRemove={this.remove}
                    onStart={this.start}
                    onStop={this.stop}
                    onUpdate={this.update}
                    opacity={0.5}
                >
                    <div ref={this.firstItem} />
                </JqxSortable>

                <div className={"events"}>
                    <span>
                        Events:
                    </span>
                    <JqxPanel theme={'material-purple'} ref={this.eventsContainer} width={200} height={250} />
                </div>
            </div>
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
            const img = '<img height="50" width="40" src="' + imgurl + '" />';
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

    private eventLog(event: any): void {
        this.eventsContainer.current!.prepend('<div style="margin-top: 5px;">' + event.type + '</div>');
    };

    // Event handling
    private activate(event: any): void {
        this.eventLog(event);
    }

    private beforeStop(event: any): void {
        this.eventLog(event);
    }

    private change(event: any): void {
        this.eventLog(event);
    }

    private deactivate(event: any): void {
        this.eventLog(event);
    }

    private out(event: any): void {
        this.eventLog(event);
    }

    private over(event: any): void {
        this.eventLog(event);
    }

    private receive(event: any): void {
        this.eventLog(event);
    }

    private remove(event: any): void {
        this.eventLog(event);
    }

    private start(event: any): void {
        this.eventLog(event);
    }

    private stop(event: any): void {
        this.eventLog(event);
    }

    private update(event: any): void {
        this.eventLog(event);
    }
}

export default App;
