/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createGauge(selector, additionalSelector) {
    // initialization options - validated in typescript
    // jqwidgets.GaugeOptions has generated TS definition
    var options = {
        ranges: [
            { startValue: 0, endValue: 55, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
            { startValue: 55, endValue: 110, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
            { startValue: 110, endValue: 165, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
            { startValue: 165, endValue: 220, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }
        ],
        ticksMinor: { interval: 5, size: '5%' },
        ticksMajor: { interval: 10, size: '9%' },
        value: 0,
        colorScheme: 'scheme05',
        animationDuration: 1200
    };
    // creates an instance of the Gauge
    var myGauge = jqwidgets.createInstance(selector, 'jqxGauge', options);
    // initialization of the Input in the Gauge
    var inputOptions = { disabled: true };
    var myInput = jqwidgets.createInstance(additionalSelector, 'jqxInput', inputOptions);
    // add event
    myGauge.addEventHandler('valueChanging', function (e) {
        myInput.val(Math.round(e.args.value) + ' kph');
    });
    options.value = 140;
    myGauge.setOptions(options);
}
//# sourceMappingURL=typescript-gauge.js.map