import * as React from 'react';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

function App() {
    return (
        <JqxTabs
            theme={'material-purple'}
            // @ts-ignore
            width={'100%'}
            position={"top"}
            collapsible={true}
        >
            <ul>
                <li style={{ marginLeft: 30 }}>Node.js</li>
                <li>JavaServer Pages</li>
                <li>Active Server Pages</li>
                <li>Python</li>
                <li>Perl</li>
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
            <div>
                Python is a general-purpose, high-level programming language[5] whose design philosophy
                emphasizes code readability. Python claims to "[combine] remarkable power with very
                clear syntax",[7] and its standard library is large and comprehensive. Its use of
                indentation for block delimiters is unique among popular programming languages.
                Python supports multiple programming paradigms, primarily but not limited to object-oriented,
                imperative and, to a lesser extent, functional programming styles. It features a
                fully dynamic type system and automatic memory management, similar to that of Scheme,
                Ruby, Perl, and Tcl. Like other dynamic languages, Python is often used as a scripting
                language, but is also used in a wide range of non-scripting contexts. Using third-party
                tools, Python code can be packaged into standalone executable programs. Python interpreters
                are available for many operating systems.
            </div>
            <div>
                Perl is a high-level, general-purpose, interpreted, dynamic programming language.
                Perl was originally developed by Larry Wall in 1987 as a general-purpose Unix scripting
                language to make report processing easier. Since then, it has undergone many changes
                and revisions and become widely popular amongst programmers. Larry Wall continues
                to oversee development of the core language, and its upcoming version, Perl 6. Perl
                borrows features from other programming languages including C, shell scripting (sh),
                AWK, and sed.[5] The language provides powerful text processing facilities without
                the arbitrary data length limits of many contemporary Unix tools, facilitating easy
                manipulation of text files. Perl gained widespread popularity in the late 1990s
                as a CGI scripting language, in part due to its parsing abilities.
            </div>
        </JqxTabs>
    );
}

export default App;