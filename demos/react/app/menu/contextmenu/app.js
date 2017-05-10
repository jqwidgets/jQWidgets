import React from 'react';
import ReactDOM from 'react-dom';

import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';

class App extends React.Component {
    componentDidMount() {
        document.getElementById('container').addEventListener('mousedown', (event) => {
            let rightClick = this.isRightClick(event) || $.jqx.mobile.isTouchDevice();
            if (rightClick) {
                let scrollTop = $(window).scrollTop();
                let scrollLeft = $(window).scrollLeft();
                this.refs.myMenu.open(parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                return false;
            }
        });
        document.addEventListener('contextmenu', e => e.preventDefault());
    }
    isRightClick(event) {
        let rightclick;
        if (!event) event = window.event;
        if (event.which) rightclick = (event.which == 3);
        else if (event.button) rightclick = (event.button == 2);
        return rightclick;
    }
    render() {
        let menuInnerHtml =
            `
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li>About Us
                        <ul>
                            <li><a href='#'>History</a></li>
                            <li><a href='#'>Our Vision</a></li>
                            <li><a href='#'>The Team</a>
                                <ul>
                                    <li><a href='#'>Brigita</a></li>
                                    <li><a href='#'>John</a></li>
                                    <li><a href='#'>Michael</a></li>
                                    <li><a href='#'>Peter</a></li>
                                    <li><a href='#'>Sarah</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Clients</a></li>
                            <li><a href='#'>Testimonials</a></li>
                            <li><a href='#'>Press</a></li>
                            <li><a href='#'>FAQs</a></li>
                        </ul>
                    </li>
                    <li>Services
                        <ul>
                            <li><a href='#'>Product Development</a></li>
                            <li><a href='#'>Delivery</a></li>
                            <li><a href='#'>Shop Online</a></li>
                            <li><a href='#'>Support</a></li>
                            <li><a href='#'>Training &amp; Consulting</a></li>
                        </ul>
                    </li>
                    <li>Products
                        <ul>
                            <li><a href='#'>New</a>
                                <ul>
                                    <li><a href='#'>Corporate Use</a></li>
                                    <li><a href='#'>Private Use</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Used</a>
                                <ul>
                                    <li><a href='#'>Corporate Use</a></li>
                                    <li><a href='#'>Private Use</a></li>
                                </ul>
                            </li>
                            <li><a href='#'>Featured</a></li>
                            <li><a href='#'>Top Rated</a></li>
                            <li><a href='#'>Prices</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>Contact Us</a>
                        <ul>
                            <li><a href='#'>Enquiry Form</a></li>
                            <li><a href='#'>Map &amp; Driving Directions</a></li>
                            <li><a href='#'>Your Feedback</a></li>
                        </ul>
                    </li>
                </ul>
            `;
        return (
            <div id='container' style={{ verticalAlign: 'middle', textAlign: 'center', background: '#eee', height: 400, width: 400 }}>
                <JqxMenu ref='myMenu'
                    width={120} height={140} template={menuInnerHtml}
                    autoOpenPopup={false} mode={'popup'}
                />
                <span style={{ fontSize: 14, position: 'relative', top: 180, fontFamily: 'Verdana' }}>
                    Right-Click here to Open the Menu
                </span>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
