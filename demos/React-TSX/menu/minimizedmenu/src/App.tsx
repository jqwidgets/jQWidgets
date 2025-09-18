import * as React from 'react';
import { useRef, useEffect, useCallback } from 'react';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

const App = () => {
    const myMenu = useRef<JqxMenu>(null);
    const myCheckBox = useRef<JqxCheckBox>(null);

    useEffect(() => {
        myMenu.current && myMenu.current.minimize();
    }, []);

    const onChange = useCallback((event: any) => {
        if (myCheckBox.current && myCheckBox.current.getOptions('checked')) {
            myMenu.current && myMenu.current.minimize();
        } else {
            myMenu.current && myMenu.current.restore();
        }
    }, []);

    return (
        <div>
            <JqxMenu theme={'material-purple'} ref={myMenu}
                width={'100%'} height={32} autoSizeMainItems={true}>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li>
                        <a href="#Solutions">Solutions</a>
                        <ul style={{ width: '250px' }}>
                            <li><a href="#Education">Education</a></li>
                            <li><a href="#Financial">Financial services</a></li>
                            <li><a href="#Government">Government</a></li>
                            <li><a href="#Manufacturing">Manufacturing</a></li>
                            <li type='separator' />
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
                        <a href="#Products">Products</a>
                        <ul>
                            <li><a href="#PCProducts">PC products</a></li>
                            <li><a href="#MobileProducts">Mobile products</a></li>
                            <li><a href="#AllProducts">All products</a></li>
                        </ul>
                    </li>
                </ul>
            </JqxMenu>
            <br />
            <br />
            <JqxCheckBox
                theme={'material-purple'}
                ref={myCheckBox}
                onChange={onChange}
                checked={true}
                hasThreeStates={false}
            >Minimized</JqxCheckBox>
        </div>
    );
};

export default App;