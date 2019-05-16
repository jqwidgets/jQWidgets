import * as React from 'react';
 


import './App.css';

import JqxDraw, { IDrawProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdraw';

class App extends React.PureComponent<{}, IDrawProps> {

    private myDraw = React.createRef<JqxDraw>();

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        const size = this.myDraw.current!.getSize();

        const circleElement = this.myDraw.current!.circle(250, 150, 50, {});
        this.myDraw.current!.attr(circleElement, { fill: 'lightblue', stroke: 'darkblue' });

        this.myDraw.current!.rect(0, 0, size.width, size.height, { stroke: '#777777', fill: 'transparent' });
        this.myDraw.current!.path('M 100,100 L 150, 130 C 130,130 180,190 150,150', { stroke: '#777777', fill: 'red' });
        this.myDraw.current!.path('M 300,300 L 350, 330 C 330,330 380,390 350,350 Z', { stroke: '#777777', fill: 'yellow' });

        this.myDraw.current!.line(600, 100, 600, 200, { stroke: 'blue', 'stroke-width': 6 });
        this.myDraw.current!.line(550, 50, 650, 90, { stroke: 'green', 'stroke-width': 6 });

        this.myDraw.current!.text('Drawing shapes', 50, 20, undefined, undefined, 0, { 'class': 'largeText', fill: 'yellow', stroke: 'orange' }, false, 'center', 'center', 'centermiddle');
        this.myDraw.current!.text('This is rotated text', 600, 300, undefined, undefined, 45, { 'class': 'smallText' }, false, 'center', 'center', 'centermiddle');

        const circleUp = this.myDraw.current!.circle(50, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
        const pathUp = this.myDraw.current!.path('M30 460 L 70 460 L50 430 Z', { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
        const circleDown = this.myDraw.current!.circle(120, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
        const pathDown = this.myDraw.current!.path('M100 440 L 140 440 L120 470 Z', { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
        this.myDraw.current!.text('Click these buttons:', 20, 390);

        const moveCircle = (moveUp: boolean): void => {
            const circleY = parseInt(this.myDraw.current!.getAttr(circleElement, 'cy'), 10);
            this.myDraw.current!.attr(circleElement, { cy: circleY + (moveUp ? -10 : 10) });
        }

        this.myDraw.current!.on(circleUp, 'click', (): void => { moveCircle(true); });
        this.myDraw.current!.on(pathUp, 'click', (): void => { moveCircle(true); });
        this.myDraw.current!.on(circleDown, 'click', (): void => { moveCircle(false); });
        this.myDraw.current!.on(pathDown, 'click', (): void => { moveCircle(false); });
        this.myDraw.current!.refresh();
    }

    public render() {
        return (
            <JqxDraw ref={this.myDraw} style={{ width: '800px', height: '500px' }} />
        );
    }
}

export default App;