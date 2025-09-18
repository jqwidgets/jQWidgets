import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

const App = () => {
    const myTree = useRef<any>(null);
    const [state] = useState({ height: 20, width: 100 });
    const marginTop = { marginTop: '10px' };

    useEffect(() => {
        const home = document.querySelector('#home');
        const solutions = document.querySelector('#solutions');
        if (myTree.current) {
            myTree.current.selectItem(home);
            myTree.current.expandItem(solutions);
        }
    }, []);

    const AddOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            myTree.current.addTo({ label: 'Item' }, selectedItem.element);
            myTree.current.render();
        }
    };

    const AddAfterOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            myTree.current.addAfter({ label: 'Item' }, selectedItem.element);
            myTree.current.render();
        }
    };

    const AddBeforeOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            myTree.current.addBefore({ label: 'Item' }, selectedItem.element);
            myTree.current.render();
        }
    };

    const UpdateOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            myTree.current.updateItem({ label: 'Item' }, selectedItem.element);
            myTree.current.render();
        }
    };

    const RemoveOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            myTree.current.removeItem(selectedItem.element);
            myTree.current.render();
        }
    };

    const DisableOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            myTree.current.disableItem(selectedItem.element);
        }
    };

    const ExpandOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            myTree.current.expandItem(selectedItem.element);
        }
    };

    const CollapseOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            myTree.current.collapseItem(selectedItem.element);
        }
    };

    const ExpandAllOnClick = () => {
        myTree.current?.expandAll();
    };

    const CollapseAllOnClick = () => {
        myTree.current?.collapseAll();
    };

    const EnableAllOnClick = () => {
        myTree.current?.enableAll();
    };

    const NextOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            const nextItem = selectedItem.element.nextElementSibling;
            if (nextItem != null) {
                myTree.current.selectItem(nextItem);
                myTree.current.ensureVisible(nextItem);
            }
        }
    };

    const PreviousOnClick = () => {
        const selectedItem = myTree.current?.getSelectedItem();
        if (selectedItem) {
            const previousItem = selectedItem.element.previousElementSibling;
            if (previousItem != null) {
                myTree.current.selectItem(previousItem);
                myTree.current.ensureVisible(previousItem);
            }
        }
    };

    return (
        <div>
            <JqxTree theme="material-purple" ref={myTree} style={{ marginLeft: '20px', float: 'left' }} width={300} height={450}>
                <ul>
                    <li id="home">Home</li>
                    <li id="solutions">
                        Solutions
                        <ul>
                            <li>Education</li>
                            <li>Financial services</li>
                            <li>Government</li>
                            <li>Manufacturing</li>
                            <li>
                                Solutions
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
                    <li>
                        Products
                        <ul>
                            <li>PC products</li>
                            <li>Mobile products</li>
                            <li>All products</li>
                        </ul>
                    </li>
                    <li>
                        Support
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
                    <li>
                        Communities
                        <ul>
                            <li>Designers</li>
                            <li>Developers</li>
                            <li>Educators and students</li>
                            <li>Partners</li>
                            <li>
                                By resource
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
                    <li>
                        Company
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
            <div style={{ marginLeft: '60px', float: 'left' }}>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={AddOnClick} width={state.width} height={state.height}>
                        Add
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={AddAfterOnClick} width={state.width} height={state.height}>
                        Add After
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={AddBeforeOnClick} width={state.width} height={state.height}>
                        Add Before
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={UpdateOnClick} width={state.width} height={state.height}>
                        Update
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={RemoveOnClick} width={state.width} height={state.height}>
                        Remove
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={DisableOnClick} width={state.width} height={state.height}>
                        Disable
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={ExpandOnClick} width={state.width} height={state.height}>
                        Expand
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={CollapseOnClick} width={state.width} height={state.height}>
                        Collapse
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={ExpandAllOnClick} width={state.width} height={state.height}>
                        Expand All
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={CollapseAllOnClick} width={state.width} height={state.height}>
                        Collapse All
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={EnableAllOnClick} width={state.width} height={state.height}>
                        Enable All
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={NextOnClick} width={state.width} height={state.height}>
                        Next Item
                    </JqxButton>
                </div>
                <div style={marginTop}>
                    <JqxButton theme="material-purple" onClick={PreviousOnClick} width={state