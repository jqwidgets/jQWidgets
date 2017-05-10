import React from 'react';
import ReactDOM from 'react-dom';

import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myTree.selectItem(document.getElementById('home'));
        this.refs.myTree.expandItem(document.getElementById('solutions'));

        // Add 
        this.refs.Add.on('click', () => {
            let selectedItem = this.refs.myTree.getSelectedItem();
            if (selectedItem != null) {
                // adds an item with label: 'item' as a child of the selected item. The last parameter determines whether to refresh the Tree or not.
                // If you want to use the 'addTo' method in a loop, set the last parameter to false and call the 'render' method after the loop.
                this.refs.myTree.addTo({ label: 'Item' }, selectedItem.element, false);
                // update the tree.
                this.refs.myTree.performRender();
            }
            else {
                this.refs.myTree.addTo({ label: 'Item' }, null, false);
                // update the tree.
                this.refs.myTree.performRender();
            }
        });

        // Add Before
        this.refs.AddBefore.on('click', () => {
            let selectedItem = this.refs.myTree.getSelectedItem();
            if (selectedItem != null) {
                this.refs.myTree.addBefore({ label: 'Item' }, selectedItem.element, false);
                // update the tree.
                this.refs.myTree.performRender();
            }
        });

        // Update
        this.refs.Update.on('click', () => {
            let selectedItem = this.refs.myTree.getSelectedItem();
            if (selectedItem != null) {
                this.refs.myTree.updateItem({ label: 'Item' }, selectedItem.element);
                // update the tree.
                this.refs.myTree.performRender();
            }
        });

        // Add After
        this.refs.AddAfter.on('click', () => {
            let selectedItem = this.refs.myTree.getSelectedItem();
            if (selectedItem != null) {
                this.refs.myTree.addAfter({ label: 'Item' }, selectedItem.element, false);
                // update the tree.
                this.refs.myTree.performRender();
            }
        });

        // Remove 
        this.refs.Remove.on('click', () => {
            let selectedItem = this.refs.myTree.getSelectedItem();
            if (selectedItem != null) {
                // removes the selected item. The last parameter determines whether to refresh the Tree or not.
                // If you want to use the 'removeItem' method in a loop, set the last parameter to false and call the 'render' method after the loop.
                this.refs.myTree.removeItem(selectedItem.element, false);
                // update the tree.
                this.refs.myTree.performRender();
            }
        });

        // Disable
        this.refs.Disable.on('click', () => {
            let selectedItem = this.refs.myTree.getSelectedItem();
            if (selectedItem != null) {
                this.refs.myTree.disableItem(selectedItem.element);
            }
        });

        // Expand
        this.refs.Expand.on('click', () => {
            let selectedItem = this.refs.myTree.getSelectedItem();
            if (selectedItem != null) {
                this.refs.myTree.expandItem(selectedItem.element);
            }
        });

        // Expand
        this.refs.Collapse.on('click', () => {
            let selectedItem = this.refs.myTree.getSelectedItem();
            if (selectedItem != null) {
                this.refs.myTree.collapseItem(selectedItem.element);
            }
        });

        // Expand All
        this.refs.ExpandAll.on('click', () => {
            this.refs.myTree.expandAll();
        });

        // Collapse All
        this.refs.CollapseAll.on('click', () => {
            this.refs.myTree.collapseAll();
        });

        // Enable All
        this.refs.EnableAll.on('click', () => {
            this.refs.myTree.enableAll();
        });

        // Select Next Item
        this.refs.Next.on('click', () => {
            let selectedItem = this.refs.myTree.selectedItem();
            let nextItem = selectedItem.element.nextSibling;
            if (nextItem != null) {
                this.refs.myTree.selectItem(nextItem);
                this.refs.myTree.ensureVisible(nextItem);
            }
        });

        // Select Previous Item
        this.refs.Previous.on('click', () => {
            let selectedItem = this.refs.myTree.selectedItem();
            let prevItem = selectedItem.element.previousSibling;
            if (prevItem != null) {
                this.refs.myTree.selectItem(prevItem);
                this.refs.myTree.ensureVisible(prevItem);
            }
        });
    }
    render () {
        return (
            <div style={{ float: 'left' }}>
                <JqxTree ref='myTree' style={{ marginLeft: 20, float: 'left' }}
                    width={300} height={450}
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
            <div style={{ marginLeft: 60, float: 'left' }}>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='Add' value="Add" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='AddAfter' value="Add After" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='AddBefore' value="Add Before" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='Update' value="Update" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='Remove' value="Remove" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='Disable' value="Disable" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='Expand' value="Expand" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='Collapse' value="Collapse" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='ExpandAll' value="Expand All" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='CollapseAll' value="Collapse All" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='EnableAll' value="Enable All" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='Next' value="Next Item" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <JqxButton width={100} height={25} ref='Previous' value="Previous Item" />
                </div>
            </div>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
