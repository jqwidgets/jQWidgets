import * as React from 'react';
import { useRef, useState } from 'react';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

function App() {
    const myTabs = useRef<JqxTabs>(null);
    const [buttonProps] = useState({ height: 25, width: 100 });

    const checkedLeft = () => {
        myTabs.current?.setOptions({ scrollPosition: 'left' });
    };

    const checkedRight = () => {
        myTabs.current?.setOptions({ scrollPosition: 'right' });
    };

    const checkedBoth = () => {
        myTabs.current?.setOptions({ scrollPosition: 'both' });
    };

    return (
        <div>
            <JqxTabs theme={'material-purple'} ref={myTabs} width={350}>
                <ul style={{ marginLeft: 30 }}>
                    <li>Node.js</li>
                    <li>JavaServer Pages</li>
                    <li>Active Server Pages</li>
                    <li>Python</li>
                    <li>Perl</li>
                    <li>Ruby on Rails</li>
                    <li>Haskell</li>
                    <li>Scala</li>
                    <li>Clojure</li>
                    <li>Objective-C</li>
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
                <div>
                    Ruby on Rails was extracted by David Heinemeier Hansson from his work on Basecamp,
                    a project management tool by 37signals (now a web application company). Hansson
                    first released Ruby on Rails as open source in July 2004, but did not share commit
                    rights to the project until February 2005. In August 2006 the framework reached
                    a milestone when Apple announced that it would ship Ruby on Rails with Mac OS X
                    v10.5 "Leopard", which was released in October 2007. Ruby on Rails version 2.3 was
                    released on March 15, 2009. Major new developments in Ruby on Rails include templates,
                    engines, Rack and nested model forms.
                </div>
                <div>
                    Following the release of Miranda by Research Software Ltd, in 1985, interest in
                    lazy functional languages grew: by 1987, more than a dozen non-strict, purely functional
                    programming languages existed. Of these, Miranda was the most widely used, but was
                    not in the public domain. At the conference on Functional Programming Languages
                    and Computer Architecture (FPCA '87) in Portland, Oregon, a meeting was held during
                    which participants formed a strong consensus that a committee should be formed to
                    define an open standard for such languages. The committee's purpose was to consolidate
                    the existing functional languages into a common one that would serve as a basis
                    for future research in functional-language design.
                </div>
                <div>
                    The design of Scala started in 2001 at the École Polytechnique Fédérale de Lausanne
                    (EPFL) by Martin Odersky, following on from work on Funnel, a programming language
                    combining ideas from functional programming and Petri nets.[not in citation given]
                    Odersky had previously worked on Generic Java and javac, Sun's Java compiler. Scala
                    was released late 2003 / early 2004 on the Java platform, and on the .NET platform
                    in June 2004. A second version of the language, v2.0, was released in March 2006.
                    On 17 January 2011 Scala team won a 5 year research grant of over €2.3 million from
                    European Research Council. On 12 May 2011, Odersky and collaborators launched Typesafe,
                    a company to provide commercial support, training, and services for Scala. Typesafe
                    received $3 million investment from Greylock Partners.
                </div>
                <div>
                    Rich Hickey is the creator of the Clojure programming language. Before Clojure,
                    he developed dotLisp, a similar project based on the .NET platform. Hickey is an
                    independent software developer and a consultant with over 20 years of experience
                    in many facets of software development. He has worked on scheduling systems, broadcast
                    automation, audio analysis and fingerprinting, database design, yield management,
                    exit poll systems, and machine listening. He spent about 2½ years working on Clojure
                    before releasing it to the world, much of that time working exclusively on Clojure
                    without external funding. When he finally announced it, the announcement consisted
                    of one email to some friends in the Common Lisp community.
                </div>
                <div>
                    Objective-C was created primarily by Brad Cox and Tom Love in the early 1980s at
                    their company Stepstone. Both had been introduced to Smalltalk while at ITT Corporation's
                    Programming Technology Center in 1981. The earliest work on Objective C traces back
                    to around that time. Cox was intrigued by problems of true reusability in software
                    design and programming. He realized that a language like Smalltalk would be invaluable
                    in building development environments for system developers at ITT. However, he and
                    Tom Love also recognized that backward compatibility with C was critically important
                    in ITT's telecom engineering milieu. Cox began writing a pre-processor for C to
                    add some of the capabilities of Smalltalk. He soon had a working implementation
                    of an object-oriented extension to the C language, which he called "OOPC" for Object-Oriented
                    Pre-Compiler.
                </div>
            </Jqx