/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createGridPaging(selector, eventsSelector, eventsLogDomId, paginginfoDomId) {
    var url = "../../sampledata/orders.xml";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [
            { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
            { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },
            { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress' },
            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },
            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:OrderID',
        url: url,
        pager: function (pagenum, pagesize, oldpagenum) {
            // callback called when a page or page size is changed.
        }
    };
    var dataAdapter = new $.jqx.dataAdapter(source);

    // initialization options - validated in typescript
    // jqwidgets.GridOptions has generated TS definition
    var options: jqwidgets.GridOptions = {
        width: 850,
        source: dataAdapter,
        selectionmode: 'multiplerowsextended',
        sortable: true,
        pageable: true,
        autoheight: true,
        columnsresize: true,
        columns: [
            { text: 'Ship Name', datafield: 'ShipName', width: 250 },
            { text: 'Shipped Date', datafield: 'ShippedDate', width: 230, cellsformat: 'D' },
            { text: 'Freight', datafield: 'Freight', width: 130, cellsformat: 'F2', cellsalign: 'right' },
            { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
            { text: 'Ship City', datafield: 'ShipCity', width: 100 },
            { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
        ]
    };
    // creates an instance
    var myGrid: jqwidgets.jqxGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);

    var eventsOptions: jqwidgets.PanelOptions = { width: 300, height: 300 };
    var eventsInstance: jqwidgets.jqxPanel = jqwidgets.createInstance(eventsSelector, 'jqxPanel', eventsOptions);
    var eventsLog = document.getElementById(eventsLogDomId);
    var pageInfo = document.getElementById(paginginfoDomId);

    myGrid.addEventHandler('pagechanged', function (event) {
        eventsLog.style.display = 'block';
        var eventsDom = document.getElementById(eventsSelector.substr(1));
        var eventsDomItems = eventsDom.getElementsByClassName('logged');
        if (eventsDomItems.length >= 5) {
            eventsInstance.clearcontent();
        }

        var args = event.args;
        var eventData = "pagechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + "</div>";
        eventsInstance.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
        // get page information.
        var paginginformation = myGrid.getpaginginformation();
        pageInfo.innerHTML = "<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>";
    });

    myGrid.addEventHandler('pagesizechanged', function (event) {
        eventsLog.style.display = 'block';
        eventsInstance.clearcontent();
        var args = event.args;
        var eventData = "pagesizechanged <div>Page:" + args.pagenum + ", Page Size: " + args.pagesize + ", Old Page Size: " + args.oldpagesize + "</div>";
        eventsInstance.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
        // get page information.          
        var paginginformation = myGrid.getpaginginformation();
        pageInfo.innerHTML = "<div style='margin-top: 5px;'>Page:" + paginginformation.pagenum + ", Page Size: " + paginginformation.pagesize + ", Pages Count: " + paginginformation.pagescount + "</div>";
    });
}