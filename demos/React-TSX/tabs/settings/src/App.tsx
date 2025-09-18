import * as React from 'react';
import './App.css';
import JqxButton, { IButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

const App = () => {
    const myTabs = React.useRef<JqxTabs>(null);
    const [width] = React.useState<IButtonProps['width']>(100);

    const clickAdd = React.useCallback((event: any) => {
        myTabs.current!.addLast("Sample title", "Sample content");
        myTabs.current!.ensureVisible(-1);
    }, []);

    const clickRemove = React.useCallback((event: any) => {
        const selectedItem = myTabs.current!.getOptions("selectedItem");
        const disabledItems = myTabs.current!.getDisabledTabsCount();
        const items = myTabs.current!.length();
        if (items > disabledItems + 1) {
            myTabs.current!.removeAt(selectedItem);
        }
    }, []);

    const clickDisable = React.useCallback((event: any) => {
        const selectedItem = myTabs.current!.getOptions("selectedItem");
        myTabs.current!.disableAt(selectedItem);
    }, []);

    const clickEnable = React.useCallback((event: any) => {
        const selectedItem = myTabs.current!.getOptions("selectedItem");
        myTabs.current!.enableAt(selectedItem);
    }, []);

    const clickEnableAll = React.useCallback((event: any) => {
        myTabs.current!.enable();
    }, []);

    const clickDisableAll = React.useCallback((event: any) => {
        myTabs.current!.disable();
    }, []);

    return (
        <div>
            <JqxTabs
                theme={'material-purple'}
                ref={myTabs}
                // @ts-ignore
                width={'100%'}
                height={220}
            >
                <ul style={{ marginLeft: 10 }}>
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
            <div style={{ float: "left", marginLeft: 60, marginTop: 5 }}>
                <JqxButton theme={'material-purple'} onClick={clickAdd} width={width}>
                    Add
                </JqxButton>
                <JqxButton theme={'material-purple'} onClick={clickRemove} width={width}>
                    Remove
                </JqxButton>
                <JqxButton theme={'material-purple'} onClick={clickDisable} width={width}>
                    Disable
                </JqxButton>
                <JqxButton theme={'material-purple'} onClick={clickEnable} width={width}>
                    Enable
                </JqxButton>
                <JqxButton theme={'material-purple'} onClick={clickEnableAll} width={width}>
                    Enable All
                </JqxButton>
                <JqxButton theme={'material-purple'} onClick={clickDisableAll} width={width}>
                    Disable All
                </JqxButton>
            </div>
        </div>
    );
};

export default App;