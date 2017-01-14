/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDraw(selector) {
    // initialization options - validated in typescript
    // jqwidgets.DrawOptions has generated TS definition
    var options = {};
    // creates an instance
    var myDraw = jqwidgets.createInstance(selector, 'jqxDraw', options);
    var renderer = myDraw.getInstance();
    var size = renderer.getSize();
    // create a circle
    // params: cx, cy, radius, params
    var circleElement = renderer.circle(250, 150, 50, {});
    // set the fill color and border color of the circle
    // params: element, attributes
    renderer.attr(circleElement, { fill: 'lightblue', stroke: 'darkblue' });
    // draw a rectangle around the entire area
    // params: x, y, width, height, attributes
    var borderElement = renderer.rect(0, 0, size.width, size.height, { stroke: '#777777', fill: 'transparent' });
    // draw a path
    // params: line command, attributes
    var pathElement = renderer.path("M 100,100 L 150, 130 C 130,130 180,190 150,150", { stroke: '#777777', fill: 'red' });
    // draw an area
    // params: line command, attributes
    var areaElement = renderer.path("M 300,300 L 350, 330 C 330,330 380,390 350,350 Z", { stroke: '#777777', fill: 'yellow' });
    // draw a line
    // params: x1, y1, x2, y2, attributes
    renderer.line(600, 100, 600, 200, { stroke: 'blue', 'stroke-width': 6 });
    renderer.line(550, 50, 650, 90, { stroke: 'green', 'stroke-width': 6 });
    // draw text
    // params: text, x, y, width, height, angle, params, clip, halign, valign, rotateAround
    renderer.text("Drawing shapes", 50, 20, undefined, undefined, 0, { 'class': 'largeText', fill: 'yellow', stroke: 'orange' }, false, 'center', 'center', 'centermiddle');
    renderer.text("This is rotated text", 600, 300, undefined, undefined, 45, { 'class': 'smallText' }, false, 'center', 'center', 'centermiddle');
    // add an event handler to the circle element
    var circleUp = renderer.circle(50, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
    var pathUp = renderer.path("M30 460 L 70 460 L50 430 Z", { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
    var circleDown = renderer.circle(120, 450, 30, { fill: '#DEDEDE', stroke: '#777777' });
    var pathDown = renderer.path("M100 440 L 140 440 L120 470 Z", { fill: 'transparent', stroke: '#777777', 'stroke-width': 1 });
    renderer.text("Click these buttons:", 20, 390);
    var moveCircle = function (moveUp) {
        var circleY = parseInt(renderer.getAttr(circleElement, 'cy'));
        renderer.attr(circleElement, { cy: circleY + (moveUp ? -10 : 10) });
    };
    renderer.on(circleUp, 'click', function () { moveCircle(true); });
    renderer.on(pathUp, 'click', function () { moveCircle(true); });
    renderer.on(circleDown, 'click', function () { moveCircle(false); });
    renderer.on(pathDown, 'click', function () { moveCircle(false); });
    renderer.refresh();
}
//# sourceMappingURL=typescript-draw.js.map