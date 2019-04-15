import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, ITreeProps> {
    private myTree = React.createRef<JqxTree>();

    constructor(props: {}) {
        super(props);

        const ButtonEvents: string[] = [
            'AddOnClick', 
            'AddAfterOnClick', 
            'AddBeforeOnClick', 
            'UpdateOnClick',
            'RemoveOnClick',
            'DisableOnClick',
            'ExpandOnClick',
            'CollapseOnClick',
            'ExpandAllOnClick',
            'CollapseAllOnClick',
            'EnableAllOnClick',
            'NextOnClick',
            'PreviousOnClick'
        ];

        ButtonEvents.forEach((item) => {
            (this as any)[item] = (this as any)[item].bind(this);            
        });

        this.state = {
            height: 20,
            width: 100
        }
    }

    public componentDidMount(): void {
        const home = document.querySelector("#home");
        const solutions = document.querySelector("#solutions");

        this.myTree.current!.selectItem(home);
        this.myTree.current!.expandItem(solutions);        
    }

    public render() {
        const marginTop = { marginTop: "10px" };
        return (
            <div>
                <JqxTree theme={'material-purple'} ref={this.myTree} style={{ marginLeft: '20px', float: 'left' }}
                    width={300} height={450}
                >
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
                        <JqxButton theme={'material-purple'} onClick={this.AddOnClick} width={this.state.width} height={this.state.height}>Add</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.AddAfterOnClick} width={this.state.width} height={this.state.height}>Add After</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.AddBeforeOnClick} width={this.state.width} height={this.state.height}>Add Before</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.UpdateOnClick} width={this.state.width} height={this.state.height}>Update</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.RemoveOnClick} width={this.state.width} height={this.state.height}>Remove</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.DisableOnClick} width={this.state.width} height={this.state.height}>Disable</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.ExpandOnClick} width={this.state.width} height={this.state.height}>Expand</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.CollapseOnClick} width={this.state.width} height={this.state.height}>Collapse</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.ExpandAllOnClick} width={this.state.width} height={this.state.height}>Expand All</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.CollapseAllOnClick} width={this.state.width} height={this.state.height}>Collapse All</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.EnableAllOnClick} width={this.state.width} height={this.state.height}>Enable All</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.NextOnClick} width={this.state.width} height={this.state.height}>Next Item</JqxButton>
                    </div>
                    <div style={marginTop}>
                        <JqxButton theme={'material-purple'} onClick={this.PreviousOnClick} width={this.state.width} height={this.state.height}>Previous Item</JqxButton>
                    </div>
                </div>
            </div>
        );
    }

    private AddOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            this.myTree.current!.addTo({ label: 'Item' }, selectedItem.element);
            this.myTree.current!.render();
        }
    }

    private AddAfterOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            this.myTree.current!.addAfter({ label: 'Item' }, selectedItem.element);
            this.myTree.current!.render();
        }
    }

    private AddBeforeOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            this.myTree.current!.addBefore({ label: 'Item' }, selectedItem.element);
            this.myTree.current!.render();
        }
    }

    private UpdateOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            this.myTree.current!.updateItem({ label: 'Item' }, selectedItem.element);
            this.myTree.current!.render();
        }
    }

    private RemoveOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            this.myTree.current!.removeItem(selectedItem.element);
            this.myTree.current!.render();
        }
    }

    private DisableOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            this.myTree.current!.disableItem(selectedItem.element);
        }
    }

    private ExpandOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            this.myTree.current!.expandItem(selectedItem.element);
        }
    }

    private CollapseOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            this.myTree.current!.collapseItem(selectedItem.element);
        }
    }

    private ExpandAllOnClick(): void {
        this.myTree.current!.expandAll();
    }

    private CollapseAllOnClick(): void {
        this.myTree.current!.collapseAll();
    }

    private EnableAllOnClick(): void {
        this.myTree.current!.enableAll();
    }

    private NextOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            const nextItem = selectedItem.element.nextElementSibling;
            if (nextItem != null) {
                this.myTree.current!.selectItem(nextItem);
                this.myTree.current!.ensureVisible(nextItem);
            }
        }
    }

    private PreviousOnClick(): void {
        const selectedItem = this.myTree.current!.getSelectedItem();
        if (selectedItem) {
            const previousItem = selectedItem.element.previousElementSibling;
            if (previousItem != null) {
                this.myTree.current!.selectItem(previousItem);
                this.myTree.current!.ensureVisible(previousItem);
            }
        }
    }
}

export default App;
