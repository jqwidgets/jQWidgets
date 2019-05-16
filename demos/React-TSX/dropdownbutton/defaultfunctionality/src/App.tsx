import * as React from 'react';
 


import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownButton, { IDropDownButtonProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxTree from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, IDropDownButtonProps> {

    private myDropDownButton = React.createRef<JqxDropDownButton>();
    private myTree = React.createRef<JqxTree>();

    constructor(props: {}) {
        super(props);
        this.treeOnSelect = this.treeOnSelect.bind(this);
        this.checkBoxOnChange = this.checkBoxOnChange.bind(this);

        this.state = {
            autoOpen: false
        }
    }

    public componentDidMount() {
        this.myDropDownButton.current!.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');
    }

    public render() {

        return (
            <div>
                <JqxDropDownButton theme={'material-purple'} ref={this.myDropDownButton} style={{ float: 'left' }}
                    width={150} height={25} autoOpen={this.state.autoOpen}>
                    <JqxTree theme={'material-purple'} ref={this.myTree} onSelect={this.treeOnSelect} width={200}>
                        <ul>
                            <li item-selected='true'>Home</li>
                            <li item-expanded='true'>
                                Solutions
                                <ul>
                                    <li>Education</li>
                                    <li>Financial services</li>
                                    <li>Government</li>
                                    <li>Manufacturing</li>
                                    <li>
                                        Solutions
                                        <ul>
                                            <li>eLearning</li>
                                            <li>Mobile</li>
                                            <li>RIA</li>
                                            <li>Training</li>
                                        </ul>
                                    </li>
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
                        </ul>
                    </JqxTree>
                </JqxDropDownButton>

                <div style={{ float: 'left', marginTop: '5px', marginLeft: '30px' }}>
                    <JqxCheckBox theme={'material-purple'} onChange={this.checkBoxOnChange}>
                        Open On Mouse Over
                    </JqxCheckBox>
                </div>
            </div>
        );
    }

    private treeOnSelect(event: any): void {
        const item = this.myTree.current!.getItem(event.args.element);
        const dropDownContent = `<div style="position: relative; margin-left: 3px; margin-top: 4px;">${item.label}</div>`;
        this.myDropDownButton.current!.setContent(dropDownContent);
    }

    private checkBoxOnChange(event: any): void {
        this.setState({
            autoOpen: event.args.checked
        });
    }
}

export default App;