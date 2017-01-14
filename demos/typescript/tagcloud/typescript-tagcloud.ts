/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />

function createTagCloud(selectorAdapter, selectorTagCloud) {
    let data = [
        { countryName: "Australia", technologyRating: 35 },
        { countryName: "United States", technologyRating: 60 },
        { countryName: "Germany", technologyRating: 55 },
        { countryName: "Brasil", technologyRating: 20 },
        { countryName: "United Kingdom", technologyRating: 50 },
        { countryName: "Japan", technologyRating: 80 }
    ];
    let source = {
            localdata: data,
            datatype: "array",
            datafields: [
                { name: 'countryName' },
                { name: 'technologyRating' }
            ]
    };
    let dataAdapter = new $.jqx.dataAdapter(source, {});

    let options: jqwidgets.TagCloudOptions = {
        width: '600px',
        source: dataAdapter,
        displayMember: 'countryName',
        valueMember: 'technologyRating'
    }

    //creates an instance
    let tagCloudInstance: jqwidgets.jqxTagCloud = jqwidgets.createInstance(selectorTagCloud, 'jqxTagCloud', options);
}