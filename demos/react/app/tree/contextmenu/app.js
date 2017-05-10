import React from 'react';
import ReactDOM from 'react-dom';

import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';
import JqxMenu from '../../../jqwidgets-react/react_jqxmenu.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTree.selectItem(document.getElementById('home'));
        this.refs.myTree.expandItem(document.getElementById('solutions'));

        this.refs.myTree.on('mousedown', (event) => {
            let target = $(event.target).parents('li:first')[0];
            let rightClick = isRightClick(event);
            if (rightClick && target != null) {
                this.refs.myTree.selectItem(target);
                let scrollTop = window.scrollX; 
                let scrollLeft = window.scrollY;
                this.refs.myMenu.open(parseInt(event.clientX) + 5 + scrollLeft, parseInt(event.clientY) + 5 + scrollTop);
                return false;
            }
        });

        this.refs.myMenu.on('itemclick', (event) => {
            let item = $.trim($(event.args).text());
            let selectedItem = null;
            switch (item) {
                case "Add Item":
                    selectedItem = this.refs.myTree.getSelectedItem();
                    if (selectedItem != null) {
                        this.refs.myTree.addTo({ label: 'Item' }, selectedItem.element);
                    }
                    break;
                case "Remove Item":
                    selectedItem = this.refs.myTree.getSelectedItem();
                    if (selectedItem != null) {
                        this.refs.myTree.removeItem(selectedItem.element);
                    }
                    break;
            }
        });

        // disable the default browser's context menu.
        this.refs.myTree.on('contextmenu', (event) => {
            let classesNames = event.target.className
            let classes = classesNames.split(' ');
            let isTreeItem = classes.indexOf('jqx-item') != -1;
            return !isTreeItem;
        });

        let isRightClick = (event) => {
            let rightclick;
            if (!event) {
                event = window.event;
            }

            if (event.which) {
                rightclick = (event.which == 3); 
            }
            else if (event.button) {
                rightclick = (event.button == 2); 
            }

            return rightclick;
        };
    }
    render () {
        return (
            <div>

                <JqxTree ref='myTree'
                    width={300} height={400}
                >
                <ul>
                    <li id='home'>Home</li>
                    <li id='solutions'>Solutions
                        <ul>
                            <li>Education</li>
                            <li>Financial services</li>
                            <li>Government</li>
                            <li>Manufacturing</li>
                            <li>Solutions
                                <ul>
                                    <li>Consumer photo and video</li>
                                    <li>Mobile</li>
                                    <li>Rich Internet applications</li>
                                    <li>Technical communication</li>
                                    <li>Training and eLearning</li>
                                    <li>Web conferencing</li>
                                </ul>
                            </li>
                            <li>All industries and solutions</li>
                        </ul>
                    </li>
                    <li>Products
                        <ul>
                            <li>PC products</li>
                            <li>Mobile products</li>
                            <li>All products</li>
                        </ul>
                    </li>
                    <li>Support
                        <ul>
                            <li>Support home</li>
                            <li>Customer Service</li>
                            <li>Knowledge base</li>
                            <li>Books</li>
                            <li>Training and certification</li>
                            <li>Support programs</li>
                            <li>Forums</li>
                            <li>Documentation</li>
                            <li>Updates</li>
                        </ul>
                    </li>
                    <li>Communities
                        <ul>
                            <li>Designers</li>
                            <li>Developers</li>
                            <li>Educators and students</li>
                            <li>Partners</li>
                            <li>By resource
                                <ul>
                                    <li>Labs</li>
                                    <li>TV</li>
                                    <li>Forums</li>
                                    <li>Exchange</li>
                                    <li>Blogs</li>
                                    <li>Experience Design</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Company
                        <ul>
                            <li>About Us</li>
                            <li>Press</li>
                            <li>Investor Relations</li>
                            <li>Corporate Affairs</li>
                            <li>Careers</li>
                            <li>Showcase</li>
                            <li>Events</li>
                            <li>Contact Us</li>
                            <li>Become an affiliate</li>
                        </ul>
                    </li>
                </ul>
            </JqxTree>

            <JqxMenu ref='myMenu' 
                width={120} height={56}
                autoOpenPopup={false} mode={'popup'}
            >
                <ul>
                    <li>Add Item</li>
                    <li>Remove Item</li>
                </ul>
            </JqxMenu>

        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
