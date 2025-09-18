import * as React from 'react';
import { useEffect, useRef } from 'react';
import './App.css';
import JqxDraw, { IDrawProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdraw';

const App = () => {
    const myDraw = useRef<JqxDraw>(null);

    useEffect(() => {
        const draw = myDraw.current;
        if (!draw) return;

        const size = draw.getSize();

        const circleElement = draw.circle(250, 150, 50, {});
        draw.attr(circleElement, { fill: 'lightblue', stroke: 'darkblue' });

        draw.rect(0, 0, size.width, size.height, { stroke: '#777777', fill: 'transparent' });
        draw.path('M 100,100 L 150, 130 C 130,130 180,190 150,150', { stroke: '#777777', fill: 'red' });
        draw.path('M 300,300 L 350, 330 C 330,330 380,390 350,350 Z', { stroke: '#777777', fill: 'yellow' });

        draw.line(600, 100, 600, 200, { stroke: 'blue', 'stroke-width': 6 });
        draw.line(550, 50, 650, 90, { stroke: 'green', 'stroke-width': 6 });

        draw.text('Drawing shapes', 50, 20, undefined, undefined, 0, { 'class': 'largeText', fill: 'yellow', stroke: 'orange' }, false, 'center', 'center', 'centermiddle');
        draw.text('This is rotated text', 600, 300, undefined, undefined, 45, { 'class': 'smallText' }, false, 'center', 'center', 'centermiddle');

        const circleUp = draw.circle(50, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
        const pathUp = draw.path('M30 460 L 70 460 L50 430 Z', { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
        const circleDown = draw.circle(120, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
        const pathDown = draw.path('M100 440 L 140 440 L120 470 Z', { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
        draw.text('Click these buttons:', 20, 390);

        const moveCircle = (moveUp: boolean): void => {
            const circleY = parseInt(draw.getAttr(circleElement, 'cy'), 10);
            draw.attr(circleElement, { cy: circleY + (moveUp ? -10 : 10) });
        };

        draw.on(circleUp, 'click', () => { moveCircle(true); });
        draw.on(pathUp, 'click', () => { moveCircle(true); });
        draw.on(circleDown, 'click', () => { moveCircle(false); });
        draw.on(pathDown, 'click', () => { moveCircle(false); });
        draw.refresh();
    }, []);

    return (
        <JqxDraw ref={myDraw} style={{ width: '800px', height: '500px' }} />
    );
};

export default App;