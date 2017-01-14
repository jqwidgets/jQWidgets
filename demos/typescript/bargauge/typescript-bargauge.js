/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createBarGauge(selector) {
    // initialization options - validated in typescript
    // jqwidgets.BarGaugeOptions has generated TS definition
    var options = {
        colorScheme: "scheme02", width: 600, height: 600,
        values: [102, 115, 130, 137], max: 150, tooltip: {
            visible: true, formatFunction: function (value) {
                var realVal = parseInt(value);
                return ('Year: 2016<br/>Price Index:' + realVal);
            }
        }
    };
    // creates an instance
    var myBarGauge = jqwidgets.createInstance(selector, 'jqxBarGauge', options);
}
//# sourceMappingURL=typescript-bargauge.js.map