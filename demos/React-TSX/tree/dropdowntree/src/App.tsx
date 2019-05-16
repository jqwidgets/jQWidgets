import * as React from 'react';
 


import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

class App extends React.PureComponent<{}, ITreeProps> {
  private myTree = React.createRef<JqxTree>();
  private myDropDownButton = React.createRef<JqxDropDownButton>();
  private home = React.createRef<HTMLLIElement>();
  private solutions = React.createRef<HTMLLIElement>();

  constructor(props: {}) {
    super(props);

    this.select = this.select.bind(this);
  }

  public componentDidMount(): void {
    this.myTree.current!.selectItem(this.home.current);
    this.myTree.current!.expandItem(this.solutions.current);
    this.myDropDownButton.current!.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');

  }

  public render() {
    return (
      <JqxDropDownButton theme={'material-purple'} ref={this.myDropDownButton}
        width={150}
        height={25}
      >
          <JqxTree theme={'material-purple'} ref={this.myTree} style={{ border: 'none' }}
            onSelect={this.select}
            width={200} height={220}
          >
          <ul>
            <li ref={this.home}>Home</li>
            <li ref={this.solutions}>
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
    );
  }

  // Event handling
  private select(event: any): void {
    const item = this.myTree.current!.getItem(event.args.element);
    const dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 4px;">' + item.label + '</div>';
    this.myDropDownButton.current!.setContent(dropDownContent);
  }
}

export default App;
