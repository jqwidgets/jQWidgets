import * as React from 'react';
import JqxMenu from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxmenu';

const App = () => {
    const myMenu = React.useRef<JqxMenu>(null);

    React.useEffect(() => {
        myMenu.current?.setItemOpenDirection('Services', 'left', 'up');
        myMenu.current?.setItemOpenDirection('ContactUs', 'left', 'down');
    }, []);

    return (
        <JqxMenu
            theme="material-purple"
            ref={myMenu}
            style={{ marginTop: '100px', width: '310px' }}
            width={310}
            height={30}
            mode="horizontal"
            showTopLevelArrows={true}
        >
            <ul>
                <li style={{ width: '80px' }}>
                    <a href="#">About Us</a>
                    <ul>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Our Vision</a></li>
                        <li>
                            <a href="#">The Team</a>
                            <ul>
                                <li><a href="#">Brigita</a></li>
                                <li><a href="#">John</a></li>
                                <li><a href="#">Michael</a></li>
                                <li><a href="#">Peter</a></li>
                                <li><a href="#">Sarah</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Clients</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </li>
                <li id="Services">
                    <a href="#">Services</a>
                    <ul>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Shop Online</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </li>
                <li id="ContactUs">
                    <a href="#">Contact Us</a>
                    <ul>
                        <li><a href="#">Enquiry Form</a></li>
                        <li><a href="#">Map &amp; Driving Directions</a></li>
                        <li><a href="#">Your Feedback</a></li>
                    </ul>
                </li>
            </ul>
        </JqxMenu>
    );
};

export default App;