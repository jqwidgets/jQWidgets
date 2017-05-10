import React from 'react';
import ReactDOM from 'react-dom';

import JqxDraw from '../../../jqwidgets-react/react_jqxdraw.js';

class App extends React.Component {
  componentDidMount(){
    let size = this.refs.Draw.getSize();

    let circleElement = this.refs.Draw.circle(250, 150, 50, {});
    this.refs.Draw.attr(circleElement, { fill: 'lightblue', stroke: 'darkblue' });

    let borderElement = this.refs.Draw.rect(0, 0, size.width, size.height, { stroke: '#777777', fill: 'transparent' });

    let pathElement = this.refs.Draw.path("M 100,100 L 150, 130 C 130,130 180,190 150,150", { stroke: '#777777', fill: 'red' });

    let areaElement = this.refs.Draw.path("M 300,300 L 350, 330 C 330,330 380,390 350,350 Z", { stroke: '#777777', fill: 'yellow' });

    this.refs.Draw.line(600, 100, 600, 200, { stroke: 'blue', 'stroke-width': 6 });
    this.refs.Draw.line(550, 50, 650, 90, { stroke: 'green', 'stroke-width': 6 });

    this.refs.Draw.text("Drawing shapes", 50, 20, undefined, undefined, 0, { 'class': 'largeText', fill: 'yellow', stroke: 'orange' }, false, 'center', 'center', 'centermiddle');
    this.refs.Draw.text("This is rotated text", 600, 300, undefined, undefined, 45, { 'class': 'smallText' }, false, 'center', 'center', 'centermiddle');

    let circleUp = this.refs.Draw.circle(50, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
    let pathUp = this.refs.Draw.path("M30 460 L 70 460 L50 430 Z", { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
    let circleDown = this.refs.Draw.circle(120, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
    let pathDown = this.refs.Draw.path("M100 440 L 140 440 L120 470 Z", { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
    this.refs.Draw.text("Click these buttons:", 20, 390);

    let moveCircle = (moveUp) => {
        let circleY = parseInt(this.refs.Draw.getAttr(circleElement, 'cy'));
        this.refs.Draw.attr(circleElement, { cy: circleY + (moveUp ? -10 : 10) });
    }
    this.refs.Draw.on(circleUp, 'click', () => { moveCircle(true); });
    this.refs.Draw.on(pathUp, 'click', () => { moveCircle(true); });
    this.refs.Draw.on(circleDown, 'click', () => { moveCircle(false); });
    this.refs.Draw.on(pathDown, 'click', () => { moveCircle(false); });
    this.refs.Draw.refresh();
  }

  render() {
    return (
      <JqxDraw ref='Draw' style={{ width: 850, height: 500 }}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
