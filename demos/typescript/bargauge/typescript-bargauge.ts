/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createBarGauge(selector)
{   
    // initialization options - validated in typescript
    // jqwidgets.BarGaugeOptions has generated TS definition
    let options: jqwidgets.BarGaugeOptions =
    {
        colorScheme: "scheme02", width: 600, height: 600,
        values: [102, 115, 130, 137], max: 150, tooltip: {
            visible: true, formatFunction: function (value)
            {
                let realVal = parseInt(value);
                return ('Year: 2016<br/>Price Index:' + realVal);
            }
        }
    };

    // creates an instance
    let myBarGauge: jqwidgets.jqxBarGauge = jqwidgets.createInstance(selector, 'jqxBarGauge', options);   
}