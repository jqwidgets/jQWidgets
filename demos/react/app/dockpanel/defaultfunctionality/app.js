import React from 'react';
import ReactDOM from 'react-dom';

import JqxDockPanel from '../../../jqwidgets-react/react_jqxdockpanel.js';

class App extends React.Component {
  componentDidMount(){
    document.getElementById('layout').addEventListener('click', (event) => {
        layoutOnClick(event);
        this.refs.DockPanel.refresh();
    },true);
  }
  render () {
    let dockPanel1HTML = `
      <div id='first' dock='left' style='background: #486974;'>First Div</div>
      <div id='second' dock='top' style='height: 100px; background: #368ba7;'>Second Div</div>
      <div id='third' dock='right' style='background: #df7169;'>Third Div</div>
      <div id='fourth' style='background: #a73654;'>Fourth Div</div>
    `;
    let dockPanel2HTML = `
      <div id='Div1' dock='left' style='background: #486974;'>1</div>
      <div id='Div2' dock='top' style='background: #368ba7;'>2</div>
      <div id='Div3' dock='right' style='background: #df7169;'>3</div>
      <div id='Div4' dock='bottom' style='background: #a73654;'>4</div>
    `;
    return (
      <div id='jqxWidget' style={{ width: 300, height: 600, fontSize: 13, fontFamily: 'Verdana' }}>
          <JqxDockPanel className='DockPanel' ref='DockPanel' template={dockPanel1HTML}
            width={300} height={210}
          />
          <br />
          <div>Layout Types:</div>
          <div id='layout'>
              <img title='click to apply a new layout' alt='layout types' src='../../../../images/LayoutTypes.png' />
          </div>
          <br />
          <div>Spiral:</div>
          <JqxDockPanel className='DockPanel' template={dockPanel2HTML}
            width={300} height={210} lastchildfill={false}
          />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

for (let i = 0; i < 4; i++)
{
    document.getElementsByClassName('DockPanel')[0].children[0].children[i].style.color = 'white';
    document.getElementsByClassName('DockPanel')[1].children[0].children[i].style.color = 'white';

    document.getElementsByClassName('DockPanel')[1].children[0].children[i].style.width = '20px';
    document.getElementsByClassName('DockPanel')[1].children[0].children[i].style.height = '20px';
}

function layoutOnClick (event) {
  let firstElement = document.getElementById('first');
  let secondElement = document.getElementById('second');
  let thirdElement = document.getElementById('third');
  let fourthElement = document.getElementById('fourth');

  let position = parseInt(event.clientX) - parseInt(event.target.offsetLeft);

  if (position < 55)
  {
      firstElement.setAttribute('dock', 'bottom');
      firstElement.style.height = '105px';
      secondElement.setAttribute('dock', 'left');
      secondElement.style.width = '100px';
      thirdElement.setAttribute('dock', 'left');
      thirdElement.style.width = '100px';
      fourthElement.setAttribute('dock', 'left');
      fourthElement.style.width = '100px';
  } else
      if (position < 115)
      {
          for (let i = 0; i < 4; i++)
          {
              document.getElementsByClassName('DockPanel')[0].children[0].children[i].style.width = '100px';
          }
          firstElement.setAttribute('dock', 'left');
          secondElement.setAttribute('dock', 'right');
          thirdElement.setAttribute('dock', 'bottom');
          thirdElement.style.height = '140px';
          fourthElement.setAttribute('dock', 'top');
          fourthElement.style.height = '70px';
      } else if (position < 175)
      {
          for (let i = 0; i < 4; i++)
          {
              document.getElementsByClassName('DockPanel')[0].children[0].children[i].style.width = '150px';
          }
          firstElement.setAttribute('dock', 'left');
          secondElement.setAttribute('dock', 'left');
          thirdElement.setAttribute('dock', 'left');
          fourthElement.setAttribute('dock', 'left');

      } else if (position < 235)
      {
          for (let i = 0; i < 4; i++)
          {
              document.getElementsByClassName('DockPanel')[0].children[0].children[i].style.height = '70px';
          }
          firstElement.setAttribute('dock', 'top');
          secondElement.setAttribute('dock', 'top');
          thirdElement.setAttribute('dock', 'top');
          fourthElement.setAttribute('dock', 'top');
      }
      else
      {
          for (let i = 0; i < 4; i++)
          {
              document.getElementsByClassName('DockPanel')[0].children[0].children[i].style.width = '100px';
          }
          firstElement.setAttribute('dock', 'left');
          secondElement.setAttribute('dock', 'left');
          thirdElement.setAttribute('dock', 'left');
          fourthElement.setAttribute('dock', 'left');
      }
 }
