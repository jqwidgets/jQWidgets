import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxDrawComponent } from 'jqwidgets-ng/jqxdraw';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDraw', { static: false }) myDraw: jqxDrawComponent;

	getWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		
		return 800;
	}

    ngAfterViewInit(): void {
        let size = this.myDraw.getSize();

        let circleElement = this.myDraw.circle(250, 150, 50, {});
        this.myDraw.attr(circleElement, { fill: 'lightblue', stroke: 'darkblue' });

        let borderElement = this.myDraw.rect(0, 0, size.width, size.height, { stroke: '#777777', fill: 'transparent' });

        let pathElement = this.myDraw.path('M 100,100 L 150, 130 C 130,130 180,190 150,150', { stroke: '#777777', fill: 'red' });

        let areaElement = this.myDraw.path('M 300,300 L 350, 330 C 330,330 380,390 350,350 Z', { stroke: '#777777', fill: 'yellow' });

        this.myDraw.line(600, 100, 600, 200, { stroke: 'blue', 'stroke-width': 6 });
        this.myDraw.line(550, 50, 650, 90, { stroke: 'green', 'stroke-width': 6 });

        this.myDraw.text('Drawing shapes', 50, 20, undefined, undefined, 0, { 'class': 'largeText', fill: 'yellow', stroke: 'orange' }, false, 'center', 'center', 'centermiddle');
        this.myDraw.text('This is rotated text', 600, 300, undefined, undefined, 45, { 'class': 'smallText' }, false, 'center', 'center', 'centermiddle');

        let circleUp = this.myDraw.circle(50, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
        let pathUp = this.myDraw.path('M30 460 L 70 460 L50 430 Z', { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
        let circleDown = this.myDraw.circle(120, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
        let pathDown = this.myDraw.path('M100 440 L 140 440 L120 470 Z', { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
        this.myDraw.text('Click these buttons:', 20, 390);

        let moveCircle = (moveUp: boolean): void => {
            let circleY = parseInt(this.myDraw.getAttr(circleElement, 'cy'));
            this.myDraw.attr(circleElement, { cy: circleY + (moveUp ? -10 : 10) });
        }

        this.myDraw.on(circleUp, 'click', (): void => { moveCircle(true); });
        this.myDraw.on(pathUp, 'click', (): void => { moveCircle(true); });
        this.myDraw.on(circleDown, 'click', (): void => { moveCircle(false); });
        this.myDraw.on(pathDown, 'click', (): void => { moveCircle(false); });
        this.myDraw.refresh();
    }
}
