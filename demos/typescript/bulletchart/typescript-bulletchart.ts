/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createBulletChart(selector)
{   
    // initialization options - validated in typescript
    // jqwidgets.BulletChartOptions has generated TS definition
    let options: jqwidgets.BulletChartOptions =
    {
        width: 500,
        height: 80,
        barSize: "40%",
        title: "Revenue 2014 YTD",
        description: "(U.S. $ in thousands)",
        ranges: [
            { startValue: 0, endValue: 200, opacity: 0.5 },
            { startValue: 200, endValue: 250,  opacity: 0.3 },
            { startValue: 250, endValue: 300,  opacity: 0.1 }
        ],
        pointer: { value: 270, label: "Revenue 2014 YTD", size: 8, color: "Black" },
        target: { value: 260, label: "Revenue 2013 YTD", size: 4, color: "Black" },
        ticks: { position: "both", interval: 50, size: 10 },
        labelsFormat: "c",
        showTooltip: true
    };

    // creates an instance
    let myBulletChart: jqwidgets.jqxBulletChart = jqwidgets.createInstance(selector, 'jqxBulletChart', options);   
}