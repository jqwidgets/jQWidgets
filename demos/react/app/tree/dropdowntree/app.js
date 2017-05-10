import React from 'react';
import ReactDOM from 'react-dom';

import JqxDropDownButton from '../../../jqwidgets-react/react_jqxdropdownbutton.js';
import JqxTree from '../../../jqwidgets-react/react_jqxtree.js';

class App extends React.Component
{
    componentDidMount()
    {
        this.refs.DropDownButton.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');
        this.refs.Tree.on('select', (event) =>
        {
           let item = this.refs.Tree.getItem(event.args.element);
           let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 4px;">' + item.label + '</div>';
           this.refs.DropDownButton.setContent(dropDownContent);
        });
    }
    render()
    {
        let treeHtml = `
          <ul>
            <li item-selected='true'>Home</li>
            <li item-expanded='true'>Solutions
              <ul>
                  <li>Education</li>
                  <li>Financial services</li>
                  <li>Government</li>
                  <li>Manufacturing</li>
                  <li>Solutions
                      <ul>
                          <li>eLearning</li>
                          <li>Mobile</li>
                          <li>RIA</li>
                          <li>Training</li>
                      </ul>
                  </li>
              </ul>
            </li>
            <li>Products
              <ul>
                  <li>PC products</li>
                  <li>Mobile products</li>
                  <li>All products</li>
              </ul>
            </li>
          </ul>
        `;
    return (
        <JqxDropDownButton ref='DropDownButton' style={{ float: 'left'}} width={150} height={25}>
            <JqxTree ref='Tree' template={treeHtml} style={{ border: 'none' }} width={200} height={220} />
        </JqxDropDownButton>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
