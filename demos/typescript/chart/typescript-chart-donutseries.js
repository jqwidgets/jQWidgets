/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createChartDonutSeries(selector) {
    var data_source_mobile = {
        datatype: "csv",
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        url: '../../sampledata/mobile_browsers_share_dec2011.txt'
    };
    var dataAdapter_mobile = new $.jqx.dataAdapter(data_source_mobile, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + data_source_mobile.url + '" : ' + error); } });
    var data_source_desktop = {
        datatype: "csv",
        datafields: [
            { name: 'Browser' },
            { name: 'Share' }
        ],
        url: '../../sampledata/desktop_browsers_share_dec2011.txt'
    };
    var dataAdapter_desktop = new $.jqx.dataAdapter(data_source_desktop, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + data_source_desktop.url + '" : ' + error); } });
    // initialization options - validated in typescript
    // jqwidgets.ChartOptions has generated TS definition
    var options = {
        title: "Mobile & Desktop browsers share",
        description: "(source: wikipedia.org)",
        enableAnimations: true,
        showLegend: true,
        showBorderLine: true,
        legendLayout: { left: 520, top: 170, width: 300, height: 200, flow: 'vertical' },
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
        seriesGroups: [
            {
                type: 'donut',
                offsetX: 250,
                source: dataAdapter_mobile,
                xAxis: {
                    formatSettings: { prefix: 'Mobile ' }
                },
                series: [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        labelRadius: 120,
                        initialAngle: 10,
                        radius: 130,
                        innerRadius: 90,
                        centerOffset: 0,
                        formatSettings: { sufix: '%', decimalPlaces: 1 }
                    }
                ]
            },
            {
                type: 'donut',
                offsetX: 250,
                source: dataAdapter_desktop,
                colorScheme: 'scheme02',
                xAxis: {
                    formatSettings: { prefix: 'Desktop ' }
                },
                series: [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        labelRadius: 120,
                        initialAngle: 10,
                        radius: 70,
                        innerRadius: 30,
                        centerOffset: 0,
                        formatSettings: { sufix: '%', decimalPlaces: 1 }
                    }
                ]
            }
        ]
    };
    // creates an instance
    var myChart = jqwidgets.createInstance(selector, 'jqxChart', options);
}
//# sourceMappingURL=typescript-chart-donutseries.js.map