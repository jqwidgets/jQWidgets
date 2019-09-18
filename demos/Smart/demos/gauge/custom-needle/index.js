function computeArrowHeadPoints(radius, distance, angle, base, height) {
    const sin = Math.sin(angle),
        cos = Math.cos(angle),
        hPointX = radius + (distance - height) * sin,
        hPointY = radius + (distance - height) * cos,
        startPointX1 = hPointX + base * cos,
        startPointY1 = hPointY - base * sin,
        startPointX2 = hPointX - base * cos,
        startPointY2 = hPointY + base * sin,
        endPointX = radius + distance * sin,
        endPointY = radius + distance * cos,

        points = 'M ' + startPointX1 + ',' + startPointY1 + ' L ' + startPointX2 + ',' + startPointY2 + ' L ' + endPointX + ',' + endPointY + ' Z';

    return points;
}

function computeArrowBodyPoints(radius, angle, width, length) {
    const sin = Math.sin(angle),
        cos = Math.cos(angle),
        endX1 = radius - width * cos + length * sin,
        endY1 = radius + width * sin + length * cos,
        endX2 = radius + width * cos + length * sin,
        endY2 = radius - width * sin + length * cos,
        startX1 = radius + width * cos,
        startY1 = radius - width * sin,
        startX2 = radius - width * cos,
        startY2 = radius + width * sin,

        points = 'M ' + startX1 + ',' + startY1 + ' L ' + startX2 + ',' + startY2 + ' L ' + endX1 + ',' + endY1 + ' ' + endX2 + ',' + endY2;

    return points;
}

function customDrawNeedleFunction(element, renderer, radius, angle, distance) {
    const arrowHeadPoints = computeArrowHeadPoints(radius, radius - distance, angle, 10, 20),
        arrowBodyPoints = computeArrowBodyPoints(radius, angle, 5, radius - distance - 19),

        arrowHead = renderer.path(arrowHeadPoints, { 'class': 'arrow-head' }),
        arrowBody = renderer.path(arrowBodyPoints, { 'class': 'arrow-body' });

    // return an array of all custom SVG elements
    return [arrowHead, arrowBody];
}