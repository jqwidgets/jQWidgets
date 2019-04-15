import * as React from 'react';
 


import JqxCheckBox, { ICheckBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

export interface IState extends ITreeProps {
    checked: ICheckBoxProps['checked'];
}

class App extends React.PureComponent<{}, IState> {
    private myTree = React.createRef<JqxTree>();
    private home = React.createRef<HTMLLIElement>();
    private solutions = React.createRef<HTMLLIElement>();

    constructor(props: {}) {
        super(props);

        this.myCheckBoxOnChange = this.myCheckBoxOnChange.bind(this);

        this.state = {
            checked: true,
            hasThreeStates: true
        }
    }

    public componentDidMount(): void {
        this.myTree.current!.selectItem(this.home.current);
        this.myTree.current!.expandItem(this.solutions.current);
        this.myTree.current!.checkItem(this.solutions.current, true);
        this.myTree.current!.uncheckItem(document.querySelector('#manufacturing'));
    }

    public render() {
        const marginTop = { marginTop: '10px' };
        return (
            <div>
                <JqxTree theme={'material-purple'} ref={this.myTree} style={{ marginLeft: '20px', float: 'left' }}
                    hasThreeStates={this.state.hasThreeStates} checkboxes={true}
                    width={300} height={450}
                >
                    <ul>
                        <li ref={this.home}>Home</li>
                        <li ref={this.solutions}>
                            Solutions
			  <ul>
                                <li>Education</li>
                                <li>Financial services</li>
                                <li>Government</li>
                                <li id='manufacturing'>Manufacturing</li>
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
                        <JqxCheckBox theme={'material-purple'} onChange={this.myCheckBoxOnChange} checked={this.state.checked}>Three Check States</JqxCheckBox>
                    </div>

                </div>
            </div>
        );
    }

    private myCheckBoxOnChange(event: any): void {
        this.setState({
            checked: event.args.checked,
            hasThreeStates: event.args.checked
        });
    }
}

export default App;
