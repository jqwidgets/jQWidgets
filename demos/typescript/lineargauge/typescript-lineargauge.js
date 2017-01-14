/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createLinearGauge(selector) {
    // initialization options - validated in typescript
    // jqwidgets.LinearGaugeOptions has generated TS definition
    var options = {
        orientation: 'vertical',
        width: 100,
        height: 350,
        ticksMajor: { size: '10%', interval: 10 },
        ticksMinor: { size: '5%', interval: 2.5, style: { 'stroke-width': 1, stroke: '#aaaaaa' } },
        max: 60,
        pointer: { size: '5%' },
        colorScheme: 'scheme05',
        labels: {
            interval: 20,
            formatValue: function (value, position) {
                if (position === 'far') {
                    value = (9 / 5) * value + 32;
                    if (value === -76) {
                        return '°F';
                    }
                    return value + '°';
                }
                if (value === -60) {
                    return '°C';
                }
                return value + '°';
            }
        },
        ranges: [
            { startValue: -10, endValue: 10, style: { fill: '#FFF157', stroke: '#FFF157' } },
            { startValue: 10, endValue: 35, style: { fill: '#FFA200', stroke: '#FFA200' } },
            { startValue: 35, endValue: 60, style: { fill: '#FF4800', stroke: '#FF4800' } }],
        animationDuration: 1500
    };
    // Creates an instance of the LinearGauge
    var myLinearGauge = jqwidgets.createInstance(selector, 'jqxLinearGauge', options);
    options.value = 40;
    myLinearGauge.setOptions(options);
}
//# sourceMappingURL=typescript-lineargauge.js.map