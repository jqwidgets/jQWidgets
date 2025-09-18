import * as React from 'react';
import { useRef, useEffect, useCallback } from 'react';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

function App() {
    const myMenu = useRef<JqxMenu>(null);
    const eventLog = useRef<HTMLDivElement>(null);

    const onItemClick = useCallback((event: any) => {
        if (eventLog.current) {
            eventLog.current.innerHTML = 'Clicked: ' + event.args.innerText;
        }
    }, []);

    useEffect(() => {
        myMenu.current?.focus();
    }, []);

    return (
        <div>
            <JqxMenu
                theme="material-purple"
                ref={myMenu}
                onItemclick={onItemClick}
                width={600}
                height={30}
                showTopLevelArrows={true}
                keyboardNavigation={true}
            >
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li>
                        Solutions
                        <ul style={{ width: '250px' }}>
                            <li><a href="#Education">Education</a></li>
                            <li><a href="#Financial">Financial services</a></li>
                            <li><a href="#Government">Government</a></li>
                            <li><a href="#Manufacturing">Manufacturing</a></li>
                            {/* @ts-ignore */}
                            <li type="separator" />
                            <li>
                                Software Solutions
                                <ul style={{ width: '220px' }}>
                                    <li><a href="#ConsumerPhoto">Consumer photo and video</a></li>
                                    <li><a href="#Mobile">Mobile</a></li>
                                    <li><a href="#RIA">Rich Internet applications</a></li>
                                    <li><a href="#TechnicalCommunication">Technical communication</a></li>
                                    <li><a href="#Training">Training and eLearning</a></li>
                                    <li><a href="#WebConferencing">Web conferencing</a></li>
                                </ul>
                            </li>
                            <li><a href="#">All industries and solutions</a></li>
                        </ul>
                    </li>
                    <li>
                        Products
                        <ul>
                            <li><a href="#PCProducts">PC products</a></li>
                            <li><a href="#MobileProducts">Mobile products</a></li>
                            <li><a href="#AllProducts">All products</a></li>
                        </ul>
                    </li>
                    <li>
                        Support
                        <ul style={{ width: '200px' }}>
                            <li><a href="#SupportHome">Support home</a></li>
                            <li><a href="#CustomerService">Customer Service</a></li>
                            <li><a href="#KB">Knowledge base</a></li>
                            <li><a href="#Books">Books</a></li>
                            <li><a href="#Training">Training and certification</a></li>
                            <li><a href="#SupportPrograms">Support programs</a></li>
                            <li><a href="#Forums">Forums</a></li>
                            <li><a href="#Documentation">Documentation</a></li>
                            <li><a href="#Updates">Updates</a></li>
                        </ul>
                    </li>
                    <li>
                        Communities
                        <ul style={{ width: '200px' }}>
                            <li><a href="#Designers">Designers</a></li>
                            <li><a href="#Developers">Developers</a></li>
                            <li><a href="#Educators">Educators and students</a></li>
                            <li><a href="#Partners">Partners</a></li>
                            {/* @ts-ignore */}
                            <li type="separator" />
                            <li>
                                By resource
                                <ul>
                                    <li><a href="#Labs">Labs</a></li>
                                    <li><a href="#TV">TV</a></li>
                                    <li><a href="#Forums">Forums</a></li>
                                    <li><a href="#Exchange">Exchange</a></li>
                                    <li><a href="#Blogs">Blogs</a></li>
                                    <li><a href="#Experience Design">Experience Design</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Company
                        <ul style={{ width: '180px' }}>
                            <li><a href="#About">About Us</a></li>
                            <li><a href="#Press">Press</a></li>
                            <li><a href="#Investor">Investor Relations</a></li>
                            <li><a href="#CorporateAffairs">Corporate Affairs</a></li>
                            <li><a href="#Careers">Careers</a></li>
                            <li><a href="#Showcase">Showcase</a></li>
                            <li><a href="#Events">Events</a></li>
                            <li><a href="#ContactUs">Contact Us</a></li>
                            <li><a href="#Become an affiliate">Become an affiliate</a></li>
                        </ul>
                    </li>
                </ul>
            </JqxMenu>
            <div style={{ fontFamily: 'Verdana', fontSize: '12px', width: '370px', marginLeft: '20px', float: 'left' }}>
                <br /><br />
                <div ref={eventLog} />
                <br /><br />
                <ul>
                    <li><b>Tab</b> - Once the focus is received, users will be able to use the keyboard to change the focused menu item.</li>
                    <li><b>Shift+Tab</b> - reverses the direction of the tab order. Once in the widget, a Shift+Tab will take the user to the previous menu item.</li>
                    <li><b>Up/Down</b> arrow keys - select previous or next item in a vertical menu or sub menu.</li>
                    <li><b>Left/Right</b> arrow keys - select previous or next item in a horizontal menu.</li>
                    <li><b>Alt Up/Down</b> arrow keys - opens or closes the popup.</li>
                    <li><b>Alt Left/Right</b> arrow keys - opens or closes the popup in a sub menu item or vertical menu.</li>
                    <li><b>Esc</b> - closes all popups.</li>
                    <li><b>Enter</b> - Triggers the item's click.</li>
                </ul>
            </div>
        </div>
    );
}

export default App;