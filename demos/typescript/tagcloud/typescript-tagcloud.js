/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createTagCloud(selectorAdapter, selectorTagCloud) {
    var data = [
        { countryName: "Australia", technologyRating: 35 },
        { countryName: "United States", technologyRating: 60 },
        { countryName: "Germany", technologyRating: 55 },
        { countryName: "Brasil", technologyRating: 20 },
        { countryName: "United Kingdom", technologyRating: 50 },
        { countryName: "Japan", technologyRating: 80 }
    ];
    var source = {
        localdata: data,
        datatype: "array",
        datafields: [
            { name: 'countryName' },
            { name: 'technologyRating' }
        ]
    };
    var dataAdapter = new $.jqx.dataAdapter(source, {});
    var options = {
        width: '600px',
        source: dataAdapter,
        displayMember: 'countryName',
        valueMember: 'technologyRating'
    };
    //creates an instance
    var tagCloudInstance = jqwidgets.createInstance(selectorTagCloud, 'jqxTagCloud', options);
}
//# sourceMappingURL=typescript-tagcloud.js.map