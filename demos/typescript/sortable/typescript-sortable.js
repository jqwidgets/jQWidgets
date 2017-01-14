/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createSortable(selector) {
    var firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven"];
    var lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan"];
    var titles = ["Sales Representative", "Vice President, Sales", "Sales Representative", "Sales Representative", "Sales Manager"];
    var sortableList = '';
    for (var i = 0; i < firstNames.length; i++) {
        var imgurl = '../../../images/' + firstNames[i].toLowerCase() + '.png';
        var img = '<img height="50" width="40" src="' + imgurl + '"/>';
        var element = '<div><table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table></div>';
        sortableList = sortableList + element;
    }
    document.getElementById(selector).innerHTML = sortableList;
    //creating an instance
    var sortableinstance = jqwidgets.createInstance('#' + selector, 'jqxSortable');
}
//# sourceMappingURL=typescript-sortable.js.map