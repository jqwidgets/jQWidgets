import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

function App() {
    const myMenu = useRef<JqxMenu>(null);

    const animationOnChange = useCallback((event: any) => {
        const value = event.args.checked;
        if (!value) {
            myMenu.current!.setOptions({
                animationHideDuration: 0,
                animationShowDelay: 0,
                animationShowDuration: 0
            });
        } else {
            myMenu.current!.setOptions({
                animationHideDuration: 200,
                animationShowDelay: 200,
                animationShowDuration: 300
            });
        }
    }, []);

    const disabledOnChange = useCallback((event: any) => {
        const value = event.args.checked;
        if (!value) {
            myMenu.current!.setOptions({ disabled: false });
        } else {
            myMenu.current!.setOptions({ disabled: true });
        }
    }, []);

    const hoverOnChange = useCallback((event: any) => {
        const value = event.args.checked;
        if (!value) {
            myMenu.current!.setOptions({ enableHover: false });
        } else {
            myMenu.current!.setOptions({ enableHover: true });
        }
    }, []);

    const openOnChange = useCallback((event: any) => {
        const value = event.args.checked;
        if (!value) {
            myMenu.current!.setOptions({ autoOpen: false });
        } else {
            myMenu.current!.setOptions({ autoOpen: true });
        }
    }, []);

    const topLevelArrowsOnChange = useCallback((event: any) => {
        const value = event.args.checked;
        if (!value) {
            myMenu.current!.setOptions({ showTopLevelArrows: false });
        } else {
            myMenu.current!.setOptions({ showTopLevelArrows: true });
        }
    }, []);

    return (
        <div style={{ height: '300px' }}>
            <JqxMenu theme={'material-purple'} ref={myMenu} width={600} height={30}>
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
            <br />
            <div style={{ marginLeft: '60px', marginTop: '120px' }}>
                <div style={{ fontSize: '16px', fontFamily: 'Verdana Arial' }}>
                    Settings
                </div>
                <div style={{ marginTop: '20px', fontSize: '14px', fontFamily: 'Verdana Arial', float: 'left' }}>
                    <JqxCheckBox
                        theme={'material-purple'}
                        onChange={animationOnChange}
                        width={150}
                        height={20}
                        checked={true}
                    >
                        Enable Animation
                    </JqxCheckBox>
                    <div style={{ marginTop: '20px' }}>
                        <JqxCheckBox
                            theme={'material-purple'}
                            style={{ marginTop: '20px' }}
                            onChange={disabledOnChange}
                            width={150}
                            height={20}
                            checked={false}
                        >
                            Disabled
                        </JqxCheckBox>
                    </div>
                </div>
                <div style={{ marginTop: '20px', marginLeft: '60px', fontSize: '14px', fontFamily: 'Verdana Arial', float: 'left' }}>
                    <JqxCheckBox
                        theme={'material-purple'}
                        onChange={hoverOnChange}
                        width={150}
                        height={20}
                        checked={true}
                    >
                        Enable Hover
                    </JqxCheckBox>
                    <div style={{ marginTop: '20px' }}>
                        <JqxCheckBox
                            theme={'material-purple'}
                            onChange={openOnChange}
                            width={150}
                            height={20}
                            checked={true}
                        >
                            Auto Open
                        </JqxCheckBox>
                    </div>
                </div>
                <div style={{ marginTop: '20px', marginLeft: '60px', fontSize: '14px', fontFamily: 'Verdana Arial', float: 'left' }}>
                    <JqxCheckBox
                        theme={'material-purple'}
                        onChange={topLevelArrowsOnChange}
                        width={200}
                        height={20}
                    >
                        Show Top-Level Arrows
                    </JqxCheckBox>
                </div>
            </div>
        </div>
    );
}

export default App;