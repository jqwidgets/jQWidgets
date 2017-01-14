 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDrawComponent } from '../../../../../jqwidgets-ts/angular_jqxdraw';

@Component({
    selector: 'my-app',
    template: `<jqxDraw [width]='850' [height]='500' #drawReference></jqxDraw>`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('drawReference') myDraw: jqxDrawComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            let size = this.myDraw.getSize();
            let circleElement = this.myDraw.circle(250, 150, 50, { fill: 'lightblue', stroke: 'darkblue' });

            let borderElement = this.myDraw.rect(0, 0, size.width, size.height, { stroke: '#777777', fill: 'transparent' });

            let pathElement = this.myDraw.path("M 100,100 L 150, 130 C 130,130 180,190 150,150", { stroke: '#777777', fill: 'red' });

            let areaElement = this.myDraw.path("M 300,300 L 350, 330 C 330,330 380,390 350,350 Z", { stroke: '#777777', fill: 'yellow' });

            this.myDraw.line(600, 100, 600, 200, { stroke: 'blue', 'stroke-width': 6 });
            this.myDraw.line(550, 50, 650, 90, { stroke: 'green', 'stroke-width': 6 });

            this.myDraw.text("Drawing shapes", 50, 20, undefined, undefined, 0, { 'class': 'largeText', fill: 'yellow', stroke: 'orange' }, false, 'center', 'center', 'centermiddle');
            this.myDraw.text("This is rotated text", 600, 300, undefined, undefined, 45, { 'class': 'smallText' }, false, 'center', 'center', 'centermiddle');
            this.myDraw.text("Click these buttons:", 20, 390);

            (<HTMLElement>document.getElementsByClassName('smallText')[0]).style.fontSize = '16px';
            (<HTMLElement>document.getElementsByClassName('largeText')[0]).style.fontSize = '36px';

            let circleUp = this.myDraw.circle(50, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
            let pathUp = this.myDraw.path("M30 460 L 70 460 L50 430 Z", { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
            let circleDown = this.myDraw.circle(120, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
            let pathDown = this.myDraw.path("M100 440 L 140 440 L120 470 Z", { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });

            let moveCircle = (moveUp: boolean): void =>
            {
                let circleY = parseInt(this.myDraw.getAttr(circleElement, 'cy'));
                this.myDraw.attr(circleElement, { cy: circleY + (moveUp ? -10 : 10) });
            }

            this.myDraw.on(circleUp, 'click', () => { moveCircle(true); });
            this.myDraw.on(pathUp, 'click', () => { moveCircle(true); });
            this.myDraw.on(circleDown, 'click', () => { moveCircle(false); });
            this.myDraw.on(pathDown, 'click', () => { moveCircle(false); });

            this.myDraw.refresh();
        });    
    }
}
