import React from 'react';
import ReactDOM from 'react-dom';

import JqxDragDrop from '../../../jqwidgets-react/react_jqxdragdrop.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
  componentDidMount(){
    this.refs.DragDrop.on('dragStart', (event) => {
      this.addEvent(event.type, event.args.position);
    });
    this.refs.DragDrop.on('dragEnd', (event) => {
      this.addEvent(event.type, event.args.position);
    });
    this.refs.DragDrop.on('dropTargetEnter', (event) => {
      this.addEvent(event.type, event.args.position);
    });
    this.refs.DragDrop.on('dropTargetLeave', (event) => {
      this.addEvent(event.type, event.args.position);
    });
    this.centerLabels();
  }

  addEvent(type, position) {
      this.refs.Panel.prepend('<div class="row">Event: ' + type + ', (' + position.left.toString().substring(0,2) + ', ' + position.top.toString().substring(0,2) + ')</div>');
  }

  centerLabels() {
    let labels = document.getElementsByClassName('label');
    for (let i = 0; i < labels.length; i++)
    {
        let parentHeight = labels[i].parentElement.offsetHeight;
        let elementheight = labels[i].clientHeight;
        let top = (parentHeight - elementheight) / 2;
        labels[i].style.top = top + 'px';
    }
  }

  render () {
    return (
      <div className="main-container">
         <div id="draggable-parent">
           <JqxDragDrop ref='DragDrop' restricter={'parent'} dropTarget={'.drop-target'} className="draggable">
              <div className="label">I can be dragged only inside my parent</div>
           </JqxDragDrop>
           <div className="drop-target"><div className="label">I am a drop target</div></div>
         </div>
         <JqxPanel ref='Panel' width={260} height={330} className="events"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
