import * as React from 'react';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxTree, { ITreeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtree';

function App() {
  const myTree = React.useRef<JqxTree>(null);
  const myDropDownButton = React.useRef<JqxDropDownButton>(null);
  const home = React.useRef<HTMLLIElement>(null);
  const solutions = React.useRef<HTMLLIElement>(null);

  const select = React.useCallback((event: any) => {
    const item = myTree.current!.getItem(event.args.element);
    const dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 4px;">' + item.label + '</div>';
    myDropDownButton.current!.setContent(dropDownContent);
  }, []);

  React.useEffect(() => {
    myTree.current!.selectItem(home.current);
    myTree.current!.expandItem(solutions.current);
    myDropDownButton.current!.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');
  }, []);

  return (
    <JqxDropDownButton theme={'material-purple'} ref={myDropDownButton} width={150} height={25}>
      <JqxTree
        theme={'material-purple'}
        ref={myTree}
        style={{ border: 'none' }}
        onSelect={select}
        width={200}
        height={220}
      >
        <ul>
          <li ref={home}>Home</li>
          <li ref={solutions}>
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

export default App;