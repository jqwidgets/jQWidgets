import React from 'react';
import ReactDOM from 'react-dom';

import JqxNavBar from '../../../jqwidgets-react/react_jqxnavbar.js';

class App extends React.Component {
    render () {
      let navBar1InnerHtml =
      '<ul>' +
          '<li>1</li>' +
          '<li>2</li>' +
      '</ul>';
      let navBar2InnerHtml =
      '<ul>' +
          '<li>1</li>' +
          '<li>2</li>' +
          '<li>3</li>' +
      '</ul>';
      let navBar3InnerHtml =
      '<ul>' +
          '<li>1</li>' +
          '<li>2</li>' +
          '<li>3</li>' +
          '<li>4</li>' +
      '</ul>';
      let navBar4InnerHtml =
      '<ul>' +
          '<li>1</li>' +
          '<li>2</li>' +
          '<li>3</li>' +
          '<li>4</li>' +
          '<li>5</li>' +
      '</ul>';
      let navBar5InnerHtml =
      '<ul>' +
          '<li>1</li>' +
          '<li>2</li>' +
          '<li>3</li>' +
          '<li>4</li>' +
          '<li>5</li>' +
          '<li>6</li>' +
          '<li>7</li>' +
          '<li>8</li>' +
      '</ul>';
      let navBar6InnerHtml =
      '<ul>' +
          '<li>1</li>' +
          '<li>2</li>' +
          '<li>3</li>' +
      '</ul>';
        return (
            <div>
                NavBar with 2 Items. Each item is with 50% width.
                <br />
                <JqxNavBar template={navBar1InnerHtml} height={40} selectedItem={0}/>
                <br />
                NavBar with 3 Items. Each item is with 33.33% width.
                <br />
                <JqxNavBar template={navBar2InnerHtml} height={40} selectedItem={0}/>
                <br />
                NavBar with 4 Items. Each item is with 25% width.
                <br />
                <JqxNavBar template={navBar3InnerHtml} height={40} selectedItem={0}/>
                <br />
                NavBar with 5 Items. Each item is with 20% width.
                <br />
                <JqxNavBar template={navBar4InnerHtml} height={40} selectedItem={0}/>
                <br />
                NavBar with more than 5 Items. Items are displayed in 2 columns and each item is with 50% width.
                <br />
                <JqxNavBar template={navBar5InnerHtml} height={160} selectedItem={0}/>
                <br />
                NavBar with "columns" set to ['30%', '50%', '20%'].
                <br />
                <JqxNavBar template={navBar6InnerHtml} height={40} selectedItem={0} columns={['30%', '50%', '20%']}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
