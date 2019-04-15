import * as React from 'react';
 


import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

class App extends React.PureComponent<{}, {}> {
    private myTabs = React.createRef<JqxTabs>();
    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);

        this.state = {
            height: 25,
            width: 100
        }

        this.myTabsOnSelected = this.myTabsOnSelected.bind(this);
        this.myTabsOnTabClick = this.myTabsOnTabClick.bind(this);
        this.myTabsOnUnselected = this.myTabsOnUnselected.bind(this);
        this.myTabsOnDragStart = this.myTabsOnDragStart.bind(this);
        this.myTabsOnDragEnd = this.myTabsOnDragEnd.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxTabs theme={'material-purple'} ref={this.myTabs}
                    onSelected={this.myTabsOnSelected}
                    onTabclick={this.myTabsOnTabClick}
                    onUnselected={this.myTabsOnUnselected}
                    onDragStart={this.myTabsOnDragStart}
                    onDragEnd={this.myTabsOnDragEnd}
                    // @ts-ignore
                    width={'100%'}
                    height={200}
                    reorder={true}
                    enableDropAnimation={false}
                >
                    <ul style={{ marginLeft: 30 }}>
                        <li>Node.js</li>
                        <li>JavaServer Pages</li>
                        <li>Active Server Pages</li>
                    </ul>
                    <div>
                        Node.js is an event-driven I/O server-side JavaScript environment based on V8. It
                        is intended for writing scalable network programs such as web servers. It was created
                        by Ryan Dahl in 2009, and its growth is sponsored by Joyent, which employs Dahl.
                        Similar environments written in other programming languages include Twisted for
                        Python, Perl Object Environment for Perl, libevent for C and EventMachine for Ruby.
                        Unlike most JavaScript, it is not executed in a web browser, but is instead a form
                        of server-side JavaScript. Node.js implements some CommonJS specifications. Node.js
                        includes a REPL environment for interactive testing.
                    </div>
                    <div>
                        JavaServer Pages (JSP) is a Java technology that helps software developers serve
                        dynamically generated web pages based on HTML, XML, or other document types. Released
                        in 1999 as Sun's answer to ASP and PHP,[citation needed] JSP was designed to address
                        the perception that the Java programming environment didn't provide developers with
                        enough support for the Web. To deploy and run, a compatible web server with servlet
                        container is required. The Java Servlet and the JavaServer Pages (JSP) specifications
                        from Sun Microsystems and the JCP (Java Community Process) must both be met by the
                        container.
                    </div>
                    <div>
                        ASP.NET is a web application framework developed and marketed by Microsoft to allow
                        programmers to build dynamic web sites, web applications and web services. It was
                        first released in January 2002 with version 1.0 of the .NET Framework, and is the
                        successor to Microsoft's Active Server Pages (ASP) technology. ASP.NET is built
                        on the Common Language Runtime (CLR), allowing programmers to write ASP.NET code
                        using any supported .NET language. The ASP.NET SOAP extension framework allows ASP.NET
                        components to process SOAP messages.
                    </div>
                </JqxTabs>
                <br />
                <div style={{ fontFamily: 'Verdana', fontSize: 13 }}>Events:</div>
                <JqxPanel theme={'material-purple'} ref={this.myPanel} width={450} height={250} />
            </div>
        );
    }

    public componentDidMount() {
        this.displayEvent({ type: "Created" });
    }

    private capitaliseFirstLetter(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    // Event handling
    private displayEvent(event: any) { 
        let eventData = this.capitaliseFirstLetter(event.type);
        if (event.type !== 'removed') {
            if (event.args !== undefined) {
                eventData += ': ' + this.myTabs.current!.getTitleAt(event.args.item);
                if (this.myTabs.current!.getTitleAt(event.args.item) == null) {
                    // let v = 23;
                    alert('No Titile');
                }
            }
            if (event.type === 'dragEnd') {
                eventData += ', Drop index: ' + this.myTabs.current!.getTitleAt(event.args.dropIndex);
            }
        } else {
            eventData += ': ' + event.args.title;
        }

        this.myPanel.current!.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    };

    // Selected event
    private myTabsOnSelected(event: any): void {
        this.displayEvent(event);
    };
    // Tabclick event
    private myTabsOnTabClick(event: any): void {
        this.displayEvent(event);
    };
    // Unselected event
    private myTabsOnUnselected(event: any): void {
        this.displayEvent(event);
    };
    // DragStart event
    private myTabsOnDragStart(event: any): void {
        this.displayEvent(event);
    };
    // DragEnd event
    private myTabsOnDragEnd(event: any): void {
        this.displayEvent(event);
    };
}

export default App;
