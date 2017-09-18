var kanbanItemTamplate = '<div class="item-template" data-item-id="0">'
                        + '<div class="item-template-header" data-item-header-id="0">'
                                + '<div class="item-template-header-title" data-item-header-title-id="0"></div>'
                                + '<div class="item-template-header-avatar" data-item-avatar-id="0">'
                                + '</div>'
                                + '<div class="clearing"></div>'
                        + '</div>'
                        + '<div class="item-template-content" data-item-content-id="0" style="margin-top:5px;"></div>'
                        + '<div  data-item-footer-id="0" style="margin-top:5px;">'
                                + '<span class="item-template-footer-taggs" data-item-footer-taggs-id="0"></span>'
                        + '</div>'
                 + '</div>';


/*
           //
           //
           //START Context menu functions
           */
var contextMenuAddItem = function () { $('#button1').jqxButton({ width: '50px' }); };

var contextMenuRemoveSelectedItem = function () {
   // var that = this;
    $('#removeItemButton').jqxButton({ width: '100px' });
    $('#declineRemoveItemButton').jqxButton({ width: '100px' });
    $("#removeItemButton").on('click', function () {
        var selectedItem = $('#kanban').jqxKanban('getSelectedItem');
        if ((selectedItem !== null) && (selectedItem !== undefined)) {
            $('#kanban').jqxKanban('remove_item', selectedItem);
        }
        $("#context-menu-window").jqxWindow('close');
    });
    $("#declineRemoveItemButton").on('click', function () {
        $("#context-menu-window").jqxWindow('close');
    });
};

var contextMenuRemoveFilter = function () {
    $('#kanban').jqxKanban('_remove_filter');

};

var contextMenuExpandColumn = function () {
    $("#jqxNumberInput").jqxNumberInput({
        width: '50px',
        inputMode: 'simple',
        spinButtons: true,
        min: 0,
        max: 3,
        decimalDigits: 0
    });

    var columnNumber = 0;
    $("#jqxNumberInput").on("valueChanged", function () {
        columnNumber = $("#jqxNumberInput").val();
        $("[data-show-column-value]").text(columnNumber);
    });

    $("#showButton").jqxButton({ width: '100px' });
    $("#showButton").on('click', function () {
        columnNumber = $("#jqxNumberInput").val();
        $('#kanban').jqxKanban('_expandColumn', columnNumber);
        $("#context-menu-window").jqxWindow('close');
    });
};

var contextMenuCollapseColumn = function () {
    $("#jqxNumberInput").jqxNumberInput({
        width: '50px',
        inputMode: 'simple',
        spinButtons: true,
        min: 0,
        max: 3,
        decimalDigits: 0
    });

    var columnNumber = 0;
    $("#jqxNumberInput").on("valueChanged", function () {
        columnNumber = $("#jqxNumberInput").val();
        $("[data-hide-column-value]").text(columnNumber);
    });

    $("#hideButton").jqxButton({ width: '100px' });
    $("#hideButton").on('click', function () {
        columnNumber = $("#jqxNumberInput").val();
        $('#kanban').jqxKanban('_collapseColumn', columnNumber);
        $("#context-menu-window").jqxWindow('close');
    });
};

var contextMenuExportKanban = function () {
    var kanbanExport = $('#kanban').jqxKanban('export_kanban');
    alert(JSON.stringify(kanbanExport));
};
/*
//END Context menu functions
//
//
*/



/*     $('#kanban').on('expandColumn', function () {
               alert("Expanded column.");
           });
           $('#kanban').on('collapseColumn', function () {
               alert("Collapsed column.");
           });
           $('#kanban').on('openColumn', function () {
               alert("Opened column.");
           });
           $('#kanban').on('closeColumn', function () {
               alert("Closed column.");
           });
           $('#kanban').on('moveItem', function () {
               alert("Item repositioned.");
           });
           $('#kanban').on('selectItem', function () {
               alert("Item selected");
           });
           $('#kanban').on('filter', function () {
               alert("Filtered");
           });
*/


/* START Event Test */
$('#kanban').on('expandColumn', function () {
    alert("Expanded column.");
});
$('#kanban').on('collapseColumn', function () {
    alert("Collapsed column.");
});
$('#kanban').on('openColumn', function () {
    alert("Opened column.");
});
$('#kanban').on('closeColumn', function () {
    alert("Closed column.");
});
$('#kanban').on('moveItem', function () {
    alert("Item repositioned.");
});
$('#kanban').on('selectItem', function () {
    alert("Item selected");
});
$('#kanban').on('filter', function () {
    alert("Filtered");
});
/* END Event Test */