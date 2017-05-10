import React from 'react';
import ReactDOM from 'react-dom';

import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        //Create event
        this.refs.myTabs.on('created', (event) => {
            displayEvent(event);
        });
        //Selected event
        this.refs.myTabs.on('selected', (event) => {
            displayEvent(event);
        });
        //Selected event
        this.refs.myTabs.on('tabclick', (event) => {
            displayEvent(event);
        });
        //Unselected event
        this.refs.myTabs.on('unselected', (event) => {
            displayEvent(event);
        });
        //DragStart event
        this.refs.myTabs.on('dragStart', (event) => {
            displayEvent(event);
        });
        //DragEnd event
        this.refs.myTabs.on('dragEnd', (event) => {
            displayEvent(event);
        });

        let capitaliseFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        let displayEvent = (event) => {
            let eventData = capitaliseFirstLetter(event.type);
            if (event.type !== 'removed') {
                if (event.args !== undefined) {
                    eventData += ': ' + this.refs.myTabs.getTitleAt(event.args.item);
                    if (this.refs.myTabs.getTitleAt(event.args.item) == null) {
                        let v = 23;
                    }
                }
                if (event.type === 'dragEnd') {
                    eventData += ', Drop index: ' + this.refs.myTabs.getTitleAt(event.args.dropIndex);
                }
            } else {
                eventData += ': ' + event.args.title;
                title = null;
            }

            this.refs.events.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        }

        this.refs.events.prepend('<div style="margin-top: 5px;">Created</div>');
    }
    render() {
        return (
            <div>

                <JqxTabs ref='myTabs'
                    height={200} width={500} reorder={true} enableDropAnimation={false}
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
                <div style={{ fontFamily: 'Arial, Verdana', fontSize: 13 }}>Events:</div>
                <JqxPanel ref='events' style={{ borderWidth: 0 }}
                    height={250} width={450}
                />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
