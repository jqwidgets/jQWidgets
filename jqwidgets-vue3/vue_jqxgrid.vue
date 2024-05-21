<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxdata.export.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxbuttongroup.js';
    import '../jqwidgets/jqxscrollbar.js'
    import '../jqwidgets/jqxmenu.js'
    import '../jqwidgets/jqxlistbox.js'
    import '../jqwidgets/jqxdropdownlist.js'
    import '../jqwidgets/jqxcombobox.js'
    import '../jqwidgets/jqxnumberinput.js'
    import '../jqwidgets/jqxcheckbox.js'
    import '../jqwidgets/globalization/globalize.js'
    import '../jqwidgets/jqxcalendar.js'
    import '../jqwidgets/jqxnumberinput.js'
    import '../jqwidgets/jqxdatetimeinput.js'
    import '../jqwidgets/jqxgrid.js'
    import '../jqwidgets/jqxgrid.edit.js'
    import '../jqwidgets/jqxgrid.pager.js'
    import '../jqwidgets/jqxgrid.selection.js'
    import '../jqwidgets/jqxgrid.filter.js'
    import '../jqwidgets/jqxgrid.sort.js'
    import '../jqwidgets/jqxgrid.storage.js'
    import '../jqwidgets/jqxgrid.grouping.js'
    import '../jqwidgets/jqxgrid.export.js'
    import '../jqwidgets/jqxgrid.columnsresize.js'
    import '../jqwidgets/jqxgrid.columnsreorder.js'
    import '../jqwidgets/jqxgrid.aggregates.js'
    import '../jqwidgets/jqxgrid.chart.js'

    export default {
        props: {
            altrows: {
                default: false,
                type: Boolean
            },
            altstart: Number,
            altstep: Number,
            autoshowloadelement: {
                default: true,
                type: Boolean
            },
            autoshowfiltericon: {
                default: true,
                type: Boolean
            },
            autoshowcolumnsmenubutton: {
                default: true,
                type: Boolean
            },
            showcolumnlines: {
                default: true,
                type: Boolean
            },
            showrowlines: {
                default: true,
                type: Boolean
            },
            showcolumnheaderlines: {
                default: true,
                type: Boolean
            },
            adaptive: {
                default: false,
                type: Boolean
            },
            compact: {
                default: false,
                type: Boolean
            },
            contextmenuitems: [],
            contextmenuenabled: [],
            contextmenuwidth: [],
            contextmenuheight: [],
            contextmenuitemclick: [],
            adaptivewidth: Number,
            commandcolumn: {
                default: false,
                type: Boolean
            },
            commandcolumnrenderer: Function,
            clipboard: {
                default: true,
                type: Boolean
            },
            closeablegroups: {
                default: true,
                type: Boolean
            },
            columnsmenuwidth: Number,
            columnmenuopening: Function,
            columnmenuclosing: Function,
            cellhover: Function,
            enablekeyboarddelete: {
                default: true,
                type: Boolean
            },
            enableellipsis: {
                default: true,
                type: Boolean
            },
            enablemousewheel: {
                default: true,
                type: Boolean
            },
            enableanimations: {
                default: true,
                type: Boolean
            },
            enabletooltips: {
                default: false,
                type: Boolean
            },
            enablehover: {
                default: true,
                type: Boolean
            },
            enablebrowserselection: {
                default: false,
                type: Boolean
            },
            everpresentrowposition: String,
            everpresentrowheight: Number,
            everpresentrowactions: String,
            everpresentrowactionsmode: String,
            filterrowheight: Number,
            filtermode: String,
            groupsrenderer: Function,
            groupcolumnrenderer: Function,
            groupsexpandedbydefault: {
                default: false,
                type: Boolean
            },
            handlekeyboardnavigation: Function,
            pagerrenderer: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            showdefaultloadelement: {
                default: true,
                type: Boolean
            },
            showfiltercolumnbackground: {
                default: true,
                type: Boolean
            },
            showfiltermenuitems: {
                default: true,
                type: Boolean
            },
            showpinnedcolumnbackground: {
                default: true,
                type: Boolean
            },
            showsortcolumnbackground: {
                default: true,
                type: Boolean
            },
            showsortmenuitems: {
                default: true,
                type: Boolean
            },
            showgroupmenuitems: {
                default: true,
                type: Boolean
            },
            showrowdetailscolumn: {
                default: true,
                type: Boolean
            },
            showheader: {
                default: true,
                type: Boolean
            },
            showgroupsheader: {
                default: true,
                type: Boolean
            },
            showaggregates: {
                default: false,
                type: Boolean
            },
            showgroupaggregates: {
                default: false,
                type: Boolean
            },
            showeverpresentrow: {
                default: false,
                type: Boolean
            },
            showfilterrow: {
                default: false,
                type: Boolean
            },
            showemptyrow: {
                default: true,
                type: Boolean
            },
            showstatusbar: {
                default: false,
                type: Boolean
            },
            statusbarheight: Number,
            showtoolbar: {
                default: false,
                type: Boolean
            },
            showfilterbar: {
                default: false,
                type: Boolean
            },
            filterbarmode: String,
            selectionmode: String,
            updatefilterconditions: Function,
            updatefilterpanel: Function,
            theme: String,
            toolbarheight: Number,
            autoheight: {
                default: false,
                type: Boolean
            },
            autorowheight: {
                default: false,
                type: Boolean
            },
            columnsheight: Number,
            deferreddatafields: Array,
            groupsheaderheight: Number,
            groupindentwidth: Number,
            height: [String, Number],
            pagerheight: Number,
            rowsheight: Number,
            scrollbarsize: Number,
            scrollmode: String,
            scrollfeedback: Function,
            width: [String, Number],
            autosavestate: {
                default: false,
                type: Boolean
            },
            autoloadstate: {
                default: false,
                type: Boolean
            },
            columns: Array,
            enableSanitize: {
                default: false,
                type: Boolean
            },
            cardview: {
                default: false,
                type: Boolean
            },
            cardviewcolumns: [],
            cardheight: Number,
            cardsize: Number,
            columngroups: Array,
            columnsmenu: {
                default: true,
                type: Boolean
            },
            columnsresize: {
                default: false,
                type: Boolean
            },
            columnsautoresize: {
                default: true,
                type: Boolean
            },
            columnsreorder: {
                default: false,
                type: Boolean
            },
            charting: Object,
            disabled: {
                default: false,
                type: Boolean
            },
            editable: {
                default: false,
                type: Boolean
            },
            batcheditable: {
                default: false,
                type: Boolean
            },
            editmode: String,
            filter: Function,
            filterable: {
                default: false,
                type: Boolean
            },
            groupable: {
                default: false,
                type: Boolean
            },
            groups: Array,
            horizontalscrollbarstep: Number,
            horizontalscrollbarlargestep: Number,
            initrowdetails: Function,
            disablerowdetails: Function,
            keyboardnavigation: {
                default: true,
                type: Boolean
            },
            localization: Object,
            pagesize: Number,
            pagesizeoptions: Array,
            pagermode: String,
            pagerbuttonscount: Number,
            pageable: {
                default: false,
                type: Boolean
            },
            autofill: {
                default: false,
                type: Boolean
            },
            rowdetails: {
                default: false,
                type: Boolean
            },
            rowdetailstemplate: Object,
            ready: Function,
            rendered: Function,
            renderstatusbar: Function,
            rendertoolbar: Function,
            rendergridrows: Function,
            sortable: {
                default: false,
                type: Boolean
            },
            sortmode: String,
            sortmodekey: String,
            selectedrowindex: Number,
            selectedrowindexes: Array,
            source: Object,
            sorttogglestates: Number,
            updatedelay: Number,
            virtualmode: {
                default: false,
                type: Boolean
            },
            verticalscrollbarstep: Number,
            verticalscrollbarlargestep: Number,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["bindingcomplete","columnresized","columnreordered","columnclick","cellclick","celldoubleclick","cellselect","cellunselect","cellvaluechanged","cellbeginedit","cellendedit","filter","groupschanged","groupexpand","groupcollapse","pagechanged","pagesizechanged","rowclick","rowdoubleclick","rowselect","rowunselect","rowexpand","rowcollapse","sort"],
        setup(props, context) {
			const id = "jqxGrid" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxGrid(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxGrid(usedProps[i]);
                }
                return resultToReturn;
            }
            function autoresizecolumns(type) {
                JQXLite(componentSelector).jqxGrid('autoresizecolumns', type);  
            }
            function autoresizecolumn(dataField, type) {
                JQXLite(componentSelector).jqxGrid('autoresizecolumn', dataField, type);  
            }
            function beginupdate() {
                JQXLite(componentSelector).jqxGrid('beginupdate');  
            }
            function clear() {
                JQXLite(componentSelector).jqxGrid('clear');  
            }
            function createChart(type, dataSource) {
                JQXLite(componentSelector).jqxGrid('createChart', type, dataSource);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxGrid('destroy');  
            }
            function endupdate() {
                JQXLite(componentSelector).jqxGrid('endupdate');  
            }
            function ensurerowvisible(rowBoundIndex) {
                JQXLite(componentSelector).jqxGrid('ensurerowvisible', rowBoundIndex);  
            }
            function focus() {
                JQXLite(componentSelector).jqxGrid('focus');  
            }
            function getcolumnindex(dataField) {
                return JQXLite(componentSelector).jqxGrid('getcolumnindex', dataField);  
            }
            function getcolumn(dataField) {
                return JQXLite(componentSelector).jqxGrid('getcolumn', dataField);  
            }
            function getcolumnproperty(dataField, propertyName) {
                return JQXLite(componentSelector).jqxGrid('getcolumnproperty', dataField, propertyName);  
            }
            function getrowid(rowBoundIndex) {
                return JQXLite(componentSelector).jqxGrid('getrowid', rowBoundIndex);  
            }
            function getrowdata(rowBoundIndex) {
                return JQXLite(componentSelector).jqxGrid('getrowdata', rowBoundIndex);  
            }
            function getrowdatabyid(rowID) {
                return JQXLite(componentSelector).jqxGrid('getrowdatabyid', rowID);  
            }
            function getrowboundindexbyid(rowID) {
                return JQXLite(componentSelector).jqxGrid('getrowboundindexbyid', rowID);  
            }
            function getrowboundindex(rowDisplayIndex) {
                return JQXLite(componentSelector).jqxGrid('getrowboundindex', rowDisplayIndex);  
            }
            function getrows() {
                return JQXLite(componentSelector).jqxGrid('getrows');  
            }
            function getboundrows() {
                return JQXLite(componentSelector).jqxGrid('getboundrows');  
            }
            function getdisplayrows() {
                return JQXLite(componentSelector).jqxGrid('getdisplayrows');  
            }
            function getdatainformation() {
                return JQXLite(componentSelector).jqxGrid('getdatainformation');  
            }
            function getsortinformation() {
                return JQXLite(componentSelector).jqxGrid('getsortinformation');  
            }
            function getpaginginformation() {
                return JQXLite(componentSelector).jqxGrid('getpaginginformation');  
            }
            function hidecolumn(dataField) {
                JQXLite(componentSelector).jqxGrid('hidecolumn', dataField);  
            }
            function hideloadelement() {
                JQXLite(componentSelector).jqxGrid('hideloadelement');  
            }
            function hiderowdetails(rowBoundIndex) {
                JQXLite(componentSelector).jqxGrid('hiderowdetails', rowBoundIndex);  
            }
            function iscolumnvisible(dataField) {
                return JQXLite(componentSelector).jqxGrid('iscolumnvisible', dataField);  
            }
            function iscolumnpinned(dataField) {
                return JQXLite(componentSelector).jqxGrid('iscolumnpinned', dataField);  
            }
            function localizestrings(localizationobject) {
                JQXLite(componentSelector).jqxGrid('localizestrings', localizationobject);  
            }
            function pincolumn(dataField) {
                JQXLite(componentSelector).jqxGrid('pincolumn', dataField);  
            }
            function refreshdata() {
                JQXLite(componentSelector).jqxGrid('refreshdata');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxGrid('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxGrid('render');  
            }
            function scrolloffset(top, left) {
                JQXLite(componentSelector).jqxGrid('scrolloffset', top, left);  
            }
            function scrollposition() {
                return JQXLite(componentSelector).jqxGrid('scrollposition');  
            }
            function showloadelement() {
                JQXLite(componentSelector).jqxGrid('showloadelement');  
            }
            function showrowdetails(rowBoundIndex) {
                JQXLite(componentSelector).jqxGrid('showrowdetails', rowBoundIndex);  
            }
            function setcolumnindex(dataField, index) {
                JQXLite(componentSelector).jqxGrid('setcolumnindex', dataField, index);  
            }
            function setcolumnproperty(dataField, propertyName, propertyValue) {
                JQXLite(componentSelector).jqxGrid('setcolumnproperty', dataField, propertyName, propertyValue);  
            }
            function showcolumn(dataField) {
                JQXLite(componentSelector).jqxGrid('showcolumn', dataField);  
            }
            function unpincolumn(dataField) {
                JQXLite(componentSelector).jqxGrid('unpincolumn', dataField);  
            }
            function updatebounddata(type) {
                JQXLite(componentSelector).jqxGrid('updatebounddata', type);  
            }
            function updating() {
                return JQXLite(componentSelector).jqxGrid('updating');  
            }
            function getsortcolumn() {
                return JQXLite(componentSelector).jqxGrid('getsortcolumn');  
            }
            function removesort() {
                JQXLite(componentSelector).jqxGrid('removesort');  
            }
            function sortby(dataField, sortOrder) {
                JQXLite(componentSelector).jqxGrid('sortby', dataField, sortOrder);  
            }
            function addgroup(dataField) {
                JQXLite(componentSelector).jqxGrid('addgroup', dataField);  
            }
            function cleargroups() {
                JQXLite(componentSelector).jqxGrid('cleargroups');  
            }
            function collapsegroup(group) {
                JQXLite(componentSelector).jqxGrid('collapsegroup', group);  
            }
            function collapseallgroups() {
                JQXLite(componentSelector).jqxGrid('collapseallgroups');  
            }
            function expandallgroups() {
                JQXLite(componentSelector).jqxGrid('expandallgroups');  
            }
            function expandgroup(group) {
                JQXLite(componentSelector).jqxGrid('expandgroup', group);  
            }
            function getrootgroupscount() {
                return JQXLite(componentSelector).jqxGrid('getrootgroupscount');  
            }
            function getgroup(groupIndex) {
                return JQXLite(componentSelector).jqxGrid('getgroup', groupIndex);  
            }
            function insertgroup(groupIndex, dataField) {
                JQXLite(componentSelector).jqxGrid('insertgroup', groupIndex, dataField);  
            }
            function iscolumngroupable() {
                return JQXLite(componentSelector).jqxGrid('iscolumngroupable');  
            }
            function removegroupat(groupIndex) {
                JQXLite(componentSelector).jqxGrid('removegroupat', groupIndex);  
            }
            function removegroup(dataField) {
                JQXLite(componentSelector).jqxGrid('removegroup', dataField);  
            }
            function addfilter(dataField, filterGroup, refreshGrid) {
                JQXLite(componentSelector).jqxGrid('addfilter', dataField, filterGroup, refreshGrid);  
            }
            function applyfilters() {
                JQXLite(componentSelector).jqxGrid('applyfilters');  
            }
            function clearfilters() {
                JQXLite(componentSelector).jqxGrid('clearfilters');  
            }
            function getfilterinformation() {
                return JQXLite(componentSelector).jqxGrid('getfilterinformation');  
            }
            function getcolumnat(index) {
                return JQXLite(componentSelector).jqxGrid('getcolumnat', index);  
            }
            function removefilter(dataField, refreshGrid) {
                JQXLite(componentSelector).jqxGrid('removefilter', dataField, refreshGrid);  
            }
            function refreshfilterrow() {
                JQXLite(componentSelector).jqxGrid('refreshfilterrow');  
            }
            function gotopage(pagenumber) {
                JQXLite(componentSelector).jqxGrid('gotopage', pagenumber);  
            }
            function gotoprevpage() {
                JQXLite(componentSelector).jqxGrid('gotoprevpage');  
            }
            function gotonextpage() {
                JQXLite(componentSelector).jqxGrid('gotonextpage');  
            }
            function addrow(rowIds, data, rowPosition) {
                JQXLite(componentSelector).jqxGrid('addrow', rowIds, data, rowPosition);  
            }
            function begincelledit(rowBoundIndex, dataField) {
                JQXLite(componentSelector).jqxGrid('begincelledit', rowBoundIndex, dataField);  
            }
            function beginrowedit(rowBoundIndex) {
                JQXLite(componentSelector).jqxGrid('beginrowedit', rowBoundIndex);  
            }
            function closemenu() {
                JQXLite(componentSelector).jqxGrid('closemenu');  
            }
            function deleterow(rowIds) {
                JQXLite(componentSelector).jqxGrid('deleterow', rowIds);  
            }
            function endcelledit(rowBoundIndex, dataField, confirmChanges) {
                JQXLite(componentSelector).jqxGrid('endcelledit', rowBoundIndex, dataField, confirmChanges);  
            }
            function endrowedit(rowBoundIndex, confirmChanges) {
                JQXLite(componentSelector).jqxGrid('endrowedit', rowBoundIndex, confirmChanges);  
            }
            function getcell(rowBoundIndex, datafield) {
                return JQXLite(componentSelector).jqxGrid('getcell', rowBoundIndex, datafield);  
            }
            function getcellatposition(left, top) {
                return JQXLite(componentSelector).jqxGrid('getcellatposition', left, top);  
            }
            function getcelltext(rowBoundIndex, dataField) {
                return JQXLite(componentSelector).jqxGrid('getcelltext', rowBoundIndex, dataField);  
            }
            function getcelltextbyid(rowID, dataField) {
                return JQXLite(componentSelector).jqxGrid('getcelltextbyid', rowID, dataField);  
            }
            function getcellvaluebyid(rowID, dataField) {
                return JQXLite(componentSelector).jqxGrid('getcellvaluebyid', rowID, dataField);  
            }
            function getcellvalue(rowBoundIndex, dataField) {
                return JQXLite(componentSelector).jqxGrid('getcellvalue', rowBoundIndex, dataField);  
            }
            function isBindingCompleted() {
                return JQXLite(componentSelector).jqxGrid('isBindingCompleted');  
            }
            function openmenu(dataField) {
                JQXLite(componentSelector).jqxGrid('openmenu', dataField);  
            }
            function setcellvalue(rowBoundIndex, dataField, value) {
                JQXLite(componentSelector).jqxGrid('setcellvalue', rowBoundIndex, dataField, value);  
            }
            function setcellvaluebyid(rowID, dataField, value) {
                JQXLite(componentSelector).jqxGrid('setcellvaluebyid', rowID, dataField, value);  
            }
            function showvalidationpopup(rowBoundIndex, dataField, validationMessage) {
                JQXLite(componentSelector).jqxGrid('showvalidationpopup', rowBoundIndex, dataField, validationMessage);  
            }
            function updaterow(rowIds, data) {
                JQXLite(componentSelector).jqxGrid('updaterow', rowIds, data);  
            }
            function clearselection() {
                JQXLite(componentSelector).jqxGrid('clearselection');  
            }
            function getselectedrowindex() {
                return JQXLite(componentSelector).jqxGrid('getselectedrowindex');  
            }
            function getselectedrowindexes() {
                return JQXLite(componentSelector).jqxGrid('getselectedrowindexes');  
            }
            function getselectedcell() {
                return JQXLite(componentSelector).jqxGrid('getselectedcell');  
            }
            function getselectedcells() {
                return JQXLite(componentSelector).jqxGrid('getselectedcells');  
            }
            function selectcell(rowBoundIndex, dataField) {
                JQXLite(componentSelector).jqxGrid('selectcell', rowBoundIndex, dataField);  
            }
            function selectallrows() {
                JQXLite(componentSelector).jqxGrid('selectallrows');  
            }
            function selectrow(rowBoundIndex) {
                JQXLite(componentSelector).jqxGrid('selectrow', rowBoundIndex);  
            }
            function unselectrow(rowBoundIndex) {
                JQXLite(componentSelector).jqxGrid('unselectrow', rowBoundIndex);  
            }
            function unselectcell(rowBoundIndex, dataField) {
                JQXLite(componentSelector).jqxGrid('unselectcell', rowBoundIndex, dataField);  
            }
            function getcolumnaggregateddata(dataField, aggregates) {
                return JQXLite(componentSelector).jqxGrid('getcolumnaggregateddata', dataField, aggregates);  
            }
            function refreshaggregates() {
                JQXLite(componentSelector).jqxGrid('refreshaggregates');  
            }
            function renderaggregates() {
                JQXLite(componentSelector).jqxGrid('renderaggregates');  
            }
            function exportdata(dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet) {
                return JQXLite(componentSelector).jqxGrid('exportdata', dataType, fileName, exportHeader, rows, exportHiddenColumns, serverURL, charSet);  
            }
            function exportview(dataType, fileName) {
                return JQXLite(componentSelector).jqxGrid('exportview', dataType, fileName);  
            }
            function openColumnChooser(columns, header) {
                JQXLite(componentSelector).jqxGrid('openColumnChooser', columns, header);  
            }
            function getstate() {
                return JQXLite(componentSelector).jqxGrid('getstate');  
            }
            function loadstate(stateobject) {
                JQXLite(componentSelector).jqxGrid('loadstate', stateobject);  
            }
            function savestate() {
                return JQXLite(componentSelector).jqxGrid('savestate');  
            }
            function _altrows (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('altrows', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('altrows');
                }
            }
            function _altstart (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('altstart', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('altstart');
                }
            }
            function _altstep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('altstep', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('altstep');
                }
            }
            function _autoshowloadelement (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('autoshowloadelement', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('autoshowloadelement');
                }
            }
            function _autoshowfiltericon (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('autoshowfiltericon', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('autoshowfiltericon');
                }
            }
            function _autoshowcolumnsmenubutton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('autoshowcolumnsmenubutton', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('autoshowcolumnsmenubutton');
                }
            }
            function _showcolumnlines (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showcolumnlines', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showcolumnlines');
                }
            }
            function _showrowlines (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showrowlines', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showrowlines');
                }
            }
            function _showcolumnheaderlines (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showcolumnheaderlines', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showcolumnheaderlines');
                }
            }
            function _adaptive (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('adaptive', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('adaptive');
                }
            }
            function _compact (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('compact', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('compact');
                }
            }
            function _contextmenuitems (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('contextmenuitems', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('contextmenuitems');
                }
            }
            function _contextmenuenabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('contextmenuenabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('contextmenuenabled');
                }
            }
            function _contextmenuwidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('contextmenuwidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('contextmenuwidth');
                }
            }
            function _contextmenuheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('contextmenuheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('contextmenuheight');
                }
            }
            function _contextmenuitemclick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('contextmenuitemclick', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('contextmenuitemclick');
                }
            }
            function _adaptivewidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('adaptivewidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('adaptivewidth');
                }
            }
            function _commandcolumn (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('commandcolumn', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('commandcolumn');
                }
            }
            function _commandcolumnrenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('commandcolumnrenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('commandcolumnrenderer');
                }
            }
            function _clipboard (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('clipboard', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('clipboard');
                }
            }
            function _closeablegroups (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('closeablegroups', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('closeablegroups');
                }
            }
            function _columnsmenuwidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columnsmenuwidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columnsmenuwidth');
                }
            }
            function _columnmenuopening (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columnmenuopening', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columnmenuopening');
                }
            }
            function _columnmenuclosing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columnmenuclosing', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columnmenuclosing');
                }
            }
            function _cellhover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('cellhover', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('cellhover');
                }
            }
            function _enablekeyboarddelete (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('enablekeyboarddelete', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('enablekeyboarddelete');
                }
            }
            function _enableellipsis (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('enableellipsis', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('enableellipsis');
                }
            }
            function _enablemousewheel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('enablemousewheel', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('enablemousewheel');
                }
            }
            function _enableanimations (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('enableanimations', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('enableanimations');
                }
            }
            function _enabletooltips (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('enabletooltips', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('enabletooltips');
                }
            }
            function _enablehover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('enablehover', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('enablehover');
                }
            }
            function _enablebrowserselection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('enablebrowserselection', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('enablebrowserselection');
                }
            }
            function _everpresentrowposition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('everpresentrowposition', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('everpresentrowposition');
                }
            }
            function _everpresentrowheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('everpresentrowheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('everpresentrowheight');
                }
            }
            function _everpresentrowactions (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('everpresentrowactions', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('everpresentrowactions');
                }
            }
            function _everpresentrowactionsmode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('everpresentrowactionsmode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('everpresentrowactionsmode');
                }
            }
            function _filterrowheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('filterrowheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('filterrowheight');
                }
            }
            function _filtermode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('filtermode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('filtermode');
                }
            }
            function _groupsrenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('groupsrenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('groupsrenderer');
                }
            }
            function _groupcolumnrenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('groupcolumnrenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('groupcolumnrenderer');
                }
            }
            function _groupsexpandedbydefault (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('groupsexpandedbydefault', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('groupsexpandedbydefault');
                }
            }
            function _handlekeyboardnavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('handlekeyboardnavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('handlekeyboardnavigation');
                }
            }
            function _pagerrenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('pagerrenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('pagerrenderer');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('rtl');
                }
            }
            function _showdefaultloadelement (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showdefaultloadelement', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showdefaultloadelement');
                }
            }
            function _showfiltercolumnbackground (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showfiltercolumnbackground', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showfiltercolumnbackground');
                }
            }
            function _showfiltermenuitems (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showfiltermenuitems', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showfiltermenuitems');
                }
            }
            function _showpinnedcolumnbackground (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showpinnedcolumnbackground', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showpinnedcolumnbackground');
                }
            }
            function _showsortcolumnbackground (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showsortcolumnbackground', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showsortcolumnbackground');
                }
            }
            function _showsortmenuitems (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showsortmenuitems', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showsortmenuitems');
                }
            }
            function _showgroupmenuitems (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showgroupmenuitems', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showgroupmenuitems');
                }
            }
            function _showrowdetailscolumn (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showrowdetailscolumn', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showrowdetailscolumn');
                }
            }
            function _showheader (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showheader', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showheader');
                }
            }
            function _showgroupsheader (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showgroupsheader', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showgroupsheader');
                }
            }
            function _showaggregates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showaggregates', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showaggregates');
                }
            }
            function _showgroupaggregates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showgroupaggregates', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showgroupaggregates');
                }
            }
            function _showeverpresentrow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showeverpresentrow', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showeverpresentrow');
                }
            }
            function _showfilterrow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showfilterrow', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showfilterrow');
                }
            }
            function _showemptyrow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showemptyrow', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showemptyrow');
                }
            }
            function _showstatusbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showstatusbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showstatusbar');
                }
            }
            function _statusbarheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('statusbarheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('statusbarheight');
                }
            }
            function _showtoolbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showtoolbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showtoolbar');
                }
            }
            function _showfilterbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('showfilterbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('showfilterbar');
                }
            }
            function _filterbarmode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('filterbarmode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('filterbarmode');
                }
            }
            function _selectionmode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('selectionmode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('selectionmode');
                }
            }
            function _updatefilterconditions (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('updatefilterconditions', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('updatefilterconditions');
                }
            }
            function _updatefilterpanel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('updatefilterpanel', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('updatefilterpanel');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('theme');
                }
            }
            function _toolbarheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('toolbarheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('toolbarheight');
                }
            }
            function _autoheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('autoheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('autoheight');
                }
            }
            function _autorowheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('autorowheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('autorowheight');
                }
            }
            function _columnsheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columnsheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columnsheight');
                }
            }
            function _deferreddatafields (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('deferreddatafields', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('deferreddatafields');
                }
            }
            function _groupsheaderheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('groupsheaderheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('groupsheaderheight');
                }
            }
            function _groupindentwidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('groupindentwidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('groupindentwidth');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('height');
                }
            }
            function _pagerheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('pagerheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('pagerheight');
                }
            }
            function _rowsheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('rowsheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('rowsheight');
                }
            }
            function _scrollbarsize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('scrollbarsize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('scrollbarsize');
                }
            }
            function _scrollmode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('scrollmode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('scrollmode');
                }
            }
            function _scrollfeedback (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('scrollfeedback', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('scrollfeedback');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('width');
                }
            }
            function _autosavestate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('autosavestate', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('autosavestate');
                }
            }
            function _autoloadstate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('autoloadstate', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('autoloadstate');
                }
            }
            function _columns (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columns', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columns');
                }
            }
            function _enableSanitize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('enableSanitize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('enableSanitize');
                }
            }
            function _cardview (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('cardview', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('cardview');
                }
            }
            function _cardviewcolumns (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('cardviewcolumns', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('cardviewcolumns');
                }
            }
            function _cardheight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('cardheight', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('cardheight');
                }
            }
            function _cardsize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('cardsize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('cardsize');
                }
            }
            function _columngroups (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columngroups', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columngroups');
                }
            }
            function _columnsmenu (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columnsmenu', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columnsmenu');
                }
            }
            function _columnsresize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columnsresize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columnsresize');
                }
            }
            function _columnsautoresize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columnsautoresize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columnsautoresize');
                }
            }
            function _columnsreorder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('columnsreorder', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('columnsreorder');
                }
            }
            function _charting (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('charting', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('charting');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('disabled');
                }
            }
            function _editable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('editable', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('editable');
                }
            }
            function _batcheditable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('batcheditable', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('batcheditable');
                }
            }
            function _editmode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('editmode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('editmode');
                }
            }
            function _filter (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('filter', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('filter');
                }
            }
            function _filterable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('filterable', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('filterable');
                }
            }
            function _groupable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('groupable', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('groupable');
                }
            }
            function _groups (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('groups', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('groups');
                }
            }
            function _horizontalscrollbarstep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('horizontalscrollbarstep', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('horizontalscrollbarstep');
                }
            }
            function _horizontalscrollbarlargestep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('horizontalscrollbarlargestep', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('horizontalscrollbarlargestep');
                }
            }
            function _initrowdetails (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('initrowdetails', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('initrowdetails');
                }
            }
            function _disablerowdetails (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('disablerowdetails', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('disablerowdetails');
                }
            }
            function _keyboardnavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('keyboardnavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('keyboardnavigation');
                }
            }
            function _localization (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('localization', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('localization');
                }
            }
            function _pagesize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('pagesize', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('pagesize');
                }
            }
            function _pagesizeoptions (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('pagesizeoptions', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('pagesizeoptions');
                }
            }
            function _pagermode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('pagermode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('pagermode');
                }
            }
            function _pagerbuttonscount (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('pagerbuttonscount', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('pagerbuttonscount');
                }
            }
            function _pageable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('pageable', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('pageable');
                }
            }
            function _autofill (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('autofill', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('autofill');
                }
            }
            function _rowdetails (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('rowdetails', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('rowdetails');
                }
            }
            function _rowdetailstemplate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('rowdetailstemplate', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('rowdetailstemplate');
                }
            }
            function _ready (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('ready', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('ready');
                }
            }
            function _rendered (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('rendered', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('rendered');
                }
            }
            function _renderstatusbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('renderstatusbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('renderstatusbar');
                }
            }
            function _rendertoolbar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('rendertoolbar', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('rendertoolbar');
                }
            }
            function _rendergridrows (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('rendergridrows', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('rendergridrows');
                }
            }
            function _sortable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('sortable', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('sortable');
                }
            }
            function _sortmode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('sortmode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('sortmode');
                }
            }
            function _sortmodekey (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('sortmodekey', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('sortmodekey');
                }
            }
            function _selectedrowindex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('selectedrowindex', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('selectedrowindex');
                }
            }
            function _selectedrowindexes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('selectedrowindexes', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('selectedrowindexes');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('source');
                }
            }
            function _sorttogglestates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('sorttogglestates', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('sorttogglestates');
                }
            }
            function _updatedelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('updatedelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('updatedelay');
                }
            }
            function _virtualmode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('virtualmode', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('virtualmode');
                }
            }
            function _verticalscrollbarstep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('verticalscrollbarstep', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('verticalscrollbarstep');
                }
            }
            function _verticalscrollbarlargestep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxGrid('verticalscrollbarlargestep', arg)
                } else {
                    return JQXLite(componentSelector).jqxGrid('verticalscrollbarlargestep');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxGrid(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['altrows','altstart','altstep','autoshowloadelement','autoshowfiltericon','autoshowcolumnsmenubutton','showcolumnlines','showrowlines','showcolumnheaderlines','adaptive','compact','contextmenuitems','contextmenuenabled','contextmenuwidth','contextmenuheight','contextmenuitemclick','adaptivewidth','commandcolumn','commandcolumnrenderer','clipboard','closeablegroups','columnsmenuwidth','columnmenuopening','columnmenuclosing','cellhover','enablekeyboarddelete','enableellipsis','enablemousewheel','enableanimations','enabletooltips','enablehover','enablebrowserselection','everpresentrowposition','everpresentrowheight','everpresentrowactions','everpresentrowactionsmode','filterrowheight','filtermode','groupsrenderer','groupcolumnrenderer','groupsexpandedbydefault','handlekeyboardnavigation','pagerrenderer','rtl','showdefaultloadelement','showfiltercolumnbackground','showfiltermenuitems','showpinnedcolumnbackground','showsortcolumnbackground','showsortmenuitems','showgroupmenuitems','showrowdetailscolumn','showheader','showgroupsheader','showaggregates','showgroupaggregates','showeverpresentrow','showfilterrow','showemptyrow','showstatusbar','statusbarheight','showtoolbar','showfilterbar','filterbarmode','selectionmode','updatefilterconditions','updatefilterpanel','theme','toolbarheight','autoheight','autorowheight','columnsheight','deferreddatafields','groupsheaderheight','groupindentwidth','height','pagerheight','rowsheight','scrollbarsize','scrollmode','scrollfeedback','width','autosavestate','autoloadstate','columns','enableSanitize','cardview','cardviewcolumns','cardheight','cardsize','columngroups','columnsmenu','columnsresize','columnsautoresize','columnsreorder','charting','disabled','editable','batcheditable','editmode','filter','filterable','groupable','groups','horizontalscrollbarstep','horizontalscrollbarlargestep','initrowdetails','disablerowdetails','keyboardnavigation','localization','pagesize','pagesizeoptions','pagermode','pagerbuttonscount','pageable','autofill','rowdetails','rowdetailstemplate','ready','rendered','renderstatusbar','rendertoolbar','rendergridrows','sortable','sortmode','sortmodekey','selectedrowindex','selectedrowindexes','source','sorttogglestates','updatedelay','virtualmode','verticalscrollbarstep','verticalscrollbarlargestep'];
                const componentProps = props;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1 && componentProps[prop] !== undefined) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            }
            const options = {
                 get altrows() {
                     return _altrows();
                 },
                 set altrows(newValue) {
                     _altrows(newValue);
                 },
                 get altstart() {
                     return _altstart();
                 },
                 set altstart(newValue) {
                     _altstart(newValue);
                 },
                 get altstep() {
                     return _altstep();
                 },
                 set altstep(newValue) {
                     _altstep(newValue);
                 },
                 get autoshowloadelement() {
                     return _autoshowloadelement();
                 },
                 set autoshowloadelement(newValue) {
                     _autoshowloadelement(newValue);
                 },
                 get autoshowfiltericon() {
                     return _autoshowfiltericon();
                 },
                 set autoshowfiltericon(newValue) {
                     _autoshowfiltericon(newValue);
                 },
                 get autoshowcolumnsmenubutton() {
                     return _autoshowcolumnsmenubutton();
                 },
                 set autoshowcolumnsmenubutton(newValue) {
                     _autoshowcolumnsmenubutton(newValue);
                 },
                 get showcolumnlines() {
                     return _showcolumnlines();
                 },
                 set showcolumnlines(newValue) {
                     _showcolumnlines(newValue);
                 },
                 get showrowlines() {
                     return _showrowlines();
                 },
                 set showrowlines(newValue) {
                     _showrowlines(newValue);
                 },
                 get showcolumnheaderlines() {
                     return _showcolumnheaderlines();
                 },
                 set showcolumnheaderlines(newValue) {
                     _showcolumnheaderlines(newValue);
                 },
                 get adaptive() {
                     return _adaptive();
                 },
                 set adaptive(newValue) {
                     _adaptive(newValue);
                 },
                 get compact() {
                     return _compact();
                 },
                 set compact(newValue) {
                     _compact(newValue);
                 },
                 get contextmenuitems() {
                     return _contextmenuitems();
                 },
                 set contextmenuitems(newValue) {
                     _contextmenuitems(newValue);
                 },
                 get contextmenuenabled() {
                     return _contextmenuenabled();
                 },
                 set contextmenuenabled(newValue) {
                     _contextmenuenabled(newValue);
                 },
                 get contextmenuwidth() {
                     return _contextmenuwidth();
                 },
                 set contextmenuwidth(newValue) {
                     _contextmenuwidth(newValue);
                 },
                 get contextmenuheight() {
                     return _contextmenuheight();
                 },
                 set contextmenuheight(newValue) {
                     _contextmenuheight(newValue);
                 },
                 get contextmenuitemclick() {
                     return _contextmenuitemclick();
                 },
                 set contextmenuitemclick(newValue) {
                     _contextmenuitemclick(newValue);
                 },
                 get adaptivewidth() {
                     return _adaptivewidth();
                 },
                 set adaptivewidth(newValue) {
                     _adaptivewidth(newValue);
                 },
                 get commandcolumn() {
                     return _commandcolumn();
                 },
                 set commandcolumn(newValue) {
                     _commandcolumn(newValue);
                 },
                 get commandcolumnrenderer() {
                     return _commandcolumnrenderer();
                 },
                 set commandcolumnrenderer(newValue) {
                     _commandcolumnrenderer(newValue);
                 },
                 get clipboard() {
                     return _clipboard();
                 },
                 set clipboard(newValue) {
                     _clipboard(newValue);
                 },
                 get closeablegroups() {
                     return _closeablegroups();
                 },
                 set closeablegroups(newValue) {
                     _closeablegroups(newValue);
                 },
                 get columnsmenuwidth() {
                     return _columnsmenuwidth();
                 },
                 set columnsmenuwidth(newValue) {
                     _columnsmenuwidth(newValue);
                 },
                 get columnmenuopening() {
                     return _columnmenuopening();
                 },
                 set columnmenuopening(newValue) {
                     _columnmenuopening(newValue);
                 },
                 get columnmenuclosing() {
                     return _columnmenuclosing();
                 },
                 set columnmenuclosing(newValue) {
                     _columnmenuclosing(newValue);
                 },
                 get cellhover() {
                     return _cellhover();
                 },
                 set cellhover(newValue) {
                     _cellhover(newValue);
                 },
                 get enablekeyboarddelete() {
                     return _enablekeyboarddelete();
                 },
                 set enablekeyboarddelete(newValue) {
                     _enablekeyboarddelete(newValue);
                 },
                 get enableellipsis() {
                     return _enableellipsis();
                 },
                 set enableellipsis(newValue) {
                     _enableellipsis(newValue);
                 },
                 get enablemousewheel() {
                     return _enablemousewheel();
                 },
                 set enablemousewheel(newValue) {
                     _enablemousewheel(newValue);
                 },
                 get enableanimations() {
                     return _enableanimations();
                 },
                 set enableanimations(newValue) {
                     _enableanimations(newValue);
                 },
                 get enabletooltips() {
                     return _enabletooltips();
                 },
                 set enabletooltips(newValue) {
                     _enabletooltips(newValue);
                 },
                 get enablehover() {
                     return _enablehover();
                 },
                 set enablehover(newValue) {
                     _enablehover(newValue);
                 },
                 get enablebrowserselection() {
                     return _enablebrowserselection();
                 },
                 set enablebrowserselection(newValue) {
                     _enablebrowserselection(newValue);
                 },
                 get everpresentrowposition() {
                     return _everpresentrowposition();
                 },
                 set everpresentrowposition(newValue) {
                     _everpresentrowposition(newValue);
                 },
                 get everpresentrowheight() {
                     return _everpresentrowheight();
                 },
                 set everpresentrowheight(newValue) {
                     _everpresentrowheight(newValue);
                 },
                 get everpresentrowactions() {
                     return _everpresentrowactions();
                 },
                 set everpresentrowactions(newValue) {
                     _everpresentrowactions(newValue);
                 },
                 get everpresentrowactionsmode() {
                     return _everpresentrowactionsmode();
                 },
                 set everpresentrowactionsmode(newValue) {
                     _everpresentrowactionsmode(newValue);
                 },
                 get filterrowheight() {
                     return _filterrowheight();
                 },
                 set filterrowheight(newValue) {
                     _filterrowheight(newValue);
                 },
                 get filtermode() {
                     return _filtermode();
                 },
                 set filtermode(newValue) {
                     _filtermode(newValue);
                 },
                 get groupsrenderer() {
                     return _groupsrenderer();
                 },
                 set groupsrenderer(newValue) {
                     _groupsrenderer(newValue);
                 },
                 get groupcolumnrenderer() {
                     return _groupcolumnrenderer();
                 },
                 set groupcolumnrenderer(newValue) {
                     _groupcolumnrenderer(newValue);
                 },
                 get groupsexpandedbydefault() {
                     return _groupsexpandedbydefault();
                 },
                 set groupsexpandedbydefault(newValue) {
                     _groupsexpandedbydefault(newValue);
                 },
                 get handlekeyboardnavigation() {
                     return _handlekeyboardnavigation();
                 },
                 set handlekeyboardnavigation(newValue) {
                     _handlekeyboardnavigation(newValue);
                 },
                 get pagerrenderer() {
                     return _pagerrenderer();
                 },
                 set pagerrenderer(newValue) {
                     _pagerrenderer(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get showdefaultloadelement() {
                     return _showdefaultloadelement();
                 },
                 set showdefaultloadelement(newValue) {
                     _showdefaultloadelement(newValue);
                 },
                 get showfiltercolumnbackground() {
                     return _showfiltercolumnbackground();
                 },
                 set showfiltercolumnbackground(newValue) {
                     _showfiltercolumnbackground(newValue);
                 },
                 get showfiltermenuitems() {
                     return _showfiltermenuitems();
                 },
                 set showfiltermenuitems(newValue) {
                     _showfiltermenuitems(newValue);
                 },
                 get showpinnedcolumnbackground() {
                     return _showpinnedcolumnbackground();
                 },
                 set showpinnedcolumnbackground(newValue) {
                     _showpinnedcolumnbackground(newValue);
                 },
                 get showsortcolumnbackground() {
                     return _showsortcolumnbackground();
                 },
                 set showsortcolumnbackground(newValue) {
                     _showsortcolumnbackground(newValue);
                 },
                 get showsortmenuitems() {
                     return _showsortmenuitems();
                 },
                 set showsortmenuitems(newValue) {
                     _showsortmenuitems(newValue);
                 },
                 get showgroupmenuitems() {
                     return _showgroupmenuitems();
                 },
                 set showgroupmenuitems(newValue) {
                     _showgroupmenuitems(newValue);
                 },
                 get showrowdetailscolumn() {
                     return _showrowdetailscolumn();
                 },
                 set showrowdetailscolumn(newValue) {
                     _showrowdetailscolumn(newValue);
                 },
                 get showheader() {
                     return _showheader();
                 },
                 set showheader(newValue) {
                     _showheader(newValue);
                 },
                 get showgroupsheader() {
                     return _showgroupsheader();
                 },
                 set showgroupsheader(newValue) {
                     _showgroupsheader(newValue);
                 },
                 get showaggregates() {
                     return _showaggregates();
                 },
                 set showaggregates(newValue) {
                     _showaggregates(newValue);
                 },
                 get showgroupaggregates() {
                     return _showgroupaggregates();
                 },
                 set showgroupaggregates(newValue) {
                     _showgroupaggregates(newValue);
                 },
                 get showeverpresentrow() {
                     return _showeverpresentrow();
                 },
                 set showeverpresentrow(newValue) {
                     _showeverpresentrow(newValue);
                 },
                 get showfilterrow() {
                     return _showfilterrow();
                 },
                 set showfilterrow(newValue) {
                     _showfilterrow(newValue);
                 },
                 get showemptyrow() {
                     return _showemptyrow();
                 },
                 set showemptyrow(newValue) {
                     _showemptyrow(newValue);
                 },
                 get showstatusbar() {
                     return _showstatusbar();
                 },
                 set showstatusbar(newValue) {
                     _showstatusbar(newValue);
                 },
                 get statusbarheight() {
                     return _statusbarheight();
                 },
                 set statusbarheight(newValue) {
                     _statusbarheight(newValue);
                 },
                 get showtoolbar() {
                     return _showtoolbar();
                 },
                 set showtoolbar(newValue) {
                     _showtoolbar(newValue);
                 },
                 get showfilterbar() {
                     return _showfilterbar();
                 },
                 set showfilterbar(newValue) {
                     _showfilterbar(newValue);
                 },
                 get filterbarmode() {
                     return _filterbarmode();
                 },
                 set filterbarmode(newValue) {
                     _filterbarmode(newValue);
                 },
                 get selectionmode() {
                     return _selectionmode();
                 },
                 set selectionmode(newValue) {
                     _selectionmode(newValue);
                 },
                 get updatefilterconditions() {
                     return _updatefilterconditions();
                 },
                 set updatefilterconditions(newValue) {
                     _updatefilterconditions(newValue);
                 },
                 get updatefilterpanel() {
                     return _updatefilterpanel();
                 },
                 set updatefilterpanel(newValue) {
                     _updatefilterpanel(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get toolbarheight() {
                     return _toolbarheight();
                 },
                 set toolbarheight(newValue) {
                     _toolbarheight(newValue);
                 },
                 get autoheight() {
                     return _autoheight();
                 },
                 set autoheight(newValue) {
                     _autoheight(newValue);
                 },
                 get autorowheight() {
                     return _autorowheight();
                 },
                 set autorowheight(newValue) {
                     _autorowheight(newValue);
                 },
                 get columnsheight() {
                     return _columnsheight();
                 },
                 set columnsheight(newValue) {
                     _columnsheight(newValue);
                 },
                 get deferreddatafields() {
                     return _deferreddatafields();
                 },
                 set deferreddatafields(newValue) {
                     _deferreddatafields(newValue);
                 },
                 get groupsheaderheight() {
                     return _groupsheaderheight();
                 },
                 set groupsheaderheight(newValue) {
                     _groupsheaderheight(newValue);
                 },
                 get groupindentwidth() {
                     return _groupindentwidth();
                 },
                 set groupindentwidth(newValue) {
                     _groupindentwidth(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get pagerheight() {
                     return _pagerheight();
                 },
                 set pagerheight(newValue) {
                     _pagerheight(newValue);
                 },
                 get rowsheight() {
                     return _rowsheight();
                 },
                 set rowsheight(newValue) {
                     _rowsheight(newValue);
                 },
                 get scrollbarsize() {
                     return _scrollbarsize();
                 },
                 set scrollbarsize(newValue) {
                     _scrollbarsize(newValue);
                 },
                 get scrollmode() {
                     return _scrollmode();
                 },
                 set scrollmode(newValue) {
                     _scrollmode(newValue);
                 },
                 get scrollfeedback() {
                     return _scrollfeedback();
                 },
                 set scrollfeedback(newValue) {
                     _scrollfeedback(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
                 get autosavestate() {
                     return _autosavestate();
                 },
                 set autosavestate(newValue) {
                     _autosavestate(newValue);
                 },
                 get autoloadstate() {
                     return _autoloadstate();
                 },
                 set autoloadstate(newValue) {
                     _autoloadstate(newValue);
                 },
                 get columns() {
                     return _columns();
                 },
                 set columns(newValue) {
                     _columns(newValue);
                 },
                 get enableSanitize() {
                     return _enableSanitize();
                 },
                 set enableSanitize(newValue) {
                     _enableSanitize(newValue);
                 },
                 get cardview() {
                     return _cardview();
                 },
                 set cardview(newValue) {
                     _cardview(newValue);
                 },
                 get cardviewcolumns() {
                     return _cardviewcolumns();
                 },
                 set cardviewcolumns(newValue) {
                     _cardviewcolumns(newValue);
                 },
                 get cardheight() {
                     return _cardheight();
                 },
                 set cardheight(newValue) {
                     _cardheight(newValue);
                 },
                 get cardsize() {
                     return _cardsize();
                 },
                 set cardsize(newValue) {
                     _cardsize(newValue);
                 },
                 get columngroups() {
                     return _columngroups();
                 },
                 set columngroups(newValue) {
                     _columngroups(newValue);
                 },
                 get columnsmenu() {
                     return _columnsmenu();
                 },
                 set columnsmenu(newValue) {
                     _columnsmenu(newValue);
                 },
                 get columnsresize() {
                     return _columnsresize();
                 },
                 set columnsresize(newValue) {
                     _columnsresize(newValue);
                 },
                 get columnsautoresize() {
                     return _columnsautoresize();
                 },
                 set columnsautoresize(newValue) {
                     _columnsautoresize(newValue);
                 },
                 get columnsreorder() {
                     return _columnsreorder();
                 },
                 set columnsreorder(newValue) {
                     _columnsreorder(newValue);
                 },
                 get charting() {
                     return _charting();
                 },
                 set charting(newValue) {
                     _charting(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get editable() {
                     return _editable();
                 },
                 set editable(newValue) {
                     _editable(newValue);
                 },
                 get batcheditable() {
                     return _batcheditable();
                 },
                 set batcheditable(newValue) {
                     _batcheditable(newValue);
                 },
                 get editmode() {
                     return _editmode();
                 },
                 set editmode(newValue) {
                     _editmode(newValue);
                 },
                 get filter() {
                     return _filter();
                 },
                 set filter(newValue) {
                     _filter(newValue);
                 },
                 get filterable() {
                     return _filterable();
                 },
                 set filterable(newValue) {
                     _filterable(newValue);
                 },
                 get groupable() {
                     return _groupable();
                 },
                 set groupable(newValue) {
                     _groupable(newValue);
                 },
                 get groups() {
                     return _groups();
                 },
                 set groups(newValue) {
                     _groups(newValue);
                 },
                 get horizontalscrollbarstep() {
                     return _horizontalscrollbarstep();
                 },
                 set horizontalscrollbarstep(newValue) {
                     _horizontalscrollbarstep(newValue);
                 },
                 get horizontalscrollbarlargestep() {
                     return _horizontalscrollbarlargestep();
                 },
                 set horizontalscrollbarlargestep(newValue) {
                     _horizontalscrollbarlargestep(newValue);
                 },
                 get initrowdetails() {
                     return _initrowdetails();
                 },
                 set initrowdetails(newValue) {
                     _initrowdetails(newValue);
                 },
                 get disablerowdetails() {
                     return _disablerowdetails();
                 },
                 set disablerowdetails(newValue) {
                     _disablerowdetails(newValue);
                 },
                 get keyboardnavigation() {
                     return _keyboardnavigation();
                 },
                 set keyboardnavigation(newValue) {
                     _keyboardnavigation(newValue);
                 },
                 get localization() {
                     return _localization();
                 },
                 set localization(newValue) {
                     _localization(newValue);
                 },
                 get pagesize() {
                     return _pagesize();
                 },
                 set pagesize(newValue) {
                     _pagesize(newValue);
                 },
                 get pagesizeoptions() {
                     return _pagesizeoptions();
                 },
                 set pagesizeoptions(newValue) {
                     _pagesizeoptions(newValue);
                 },
                 get pagermode() {
                     return _pagermode();
                 },
                 set pagermode(newValue) {
                     _pagermode(newValue);
                 },
                 get pagerbuttonscount() {
                     return _pagerbuttonscount();
                 },
                 set pagerbuttonscount(newValue) {
                     _pagerbuttonscount(newValue);
                 },
                 get pageable() {
                     return _pageable();
                 },
                 set pageable(newValue) {
                     _pageable(newValue);
                 },
                 get autofill() {
                     return _autofill();
                 },
                 set autofill(newValue) {
                     _autofill(newValue);
                 },
                 get rowdetails() {
                     return _rowdetails();
                 },
                 set rowdetails(newValue) {
                     _rowdetails(newValue);
                 },
                 get rowdetailstemplate() {
                     return _rowdetailstemplate();
                 },
                 set rowdetailstemplate(newValue) {
                     _rowdetailstemplate(newValue);
                 },
                 get ready() {
                     return _ready();
                 },
                 set ready(newValue) {
                     _ready(newValue);
                 },
                 get rendered() {
                     return _rendered();
                 },
                 set rendered(newValue) {
                     _rendered(newValue);
                 },
                 get renderstatusbar() {
                     return _renderstatusbar();
                 },
                 set renderstatusbar(newValue) {
                     _renderstatusbar(newValue);
                 },
                 get rendertoolbar() {
                     return _rendertoolbar();
                 },
                 set rendertoolbar(newValue) {
                     _rendertoolbar(newValue);
                 },
                 get rendergridrows() {
                     return _rendergridrows();
                 },
                 set rendergridrows(newValue) {
                     _rendergridrows(newValue);
                 },
                 get sortable() {
                     return _sortable();
                 },
                 set sortable(newValue) {
                     _sortable(newValue);
                 },
                 get sortmode() {
                     return _sortmode();
                 },
                 set sortmode(newValue) {
                     _sortmode(newValue);
                 },
                 get sortmodekey() {
                     return _sortmodekey();
                 },
                 set sortmodekey(newValue) {
                     _sortmodekey(newValue);
                 },
                 get selectedrowindex() {
                     return _selectedrowindex();
                 },
                 set selectedrowindex(newValue) {
                     _selectedrowindex(newValue);
                 },
                 get selectedrowindexes() {
                     return _selectedrowindexes();
                 },
                 set selectedrowindexes(newValue) {
                     _selectedrowindexes(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get sorttogglestates() {
                     return _sorttogglestates();
                 },
                 set sorttogglestates(newValue) {
                     _sorttogglestates(newValue);
                 },
                 get updatedelay() {
                     return _updatedelay();
                 },
                 set updatedelay(newValue) {
                     _updatedelay(newValue);
                 },
                 get virtualmode() {
                     return _virtualmode();
                 },
                 set virtualmode(newValue) {
                     _virtualmode(newValue);
                 },
                 get verticalscrollbarstep() {
                     return _verticalscrollbarstep();
                 },
                 set verticalscrollbarstep(newValue) {
                     _verticalscrollbarstep(newValue);
                 },
                 get verticalscrollbarlargestep() {
                     return _verticalscrollbarlargestep();
                 },
                 set verticalscrollbarlargestep(newValue) {
                     _verticalscrollbarlargestep(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('bindingcomplete', function (event) { that.emit('bindingcomplete', event); });
                JQXLite(componentSelector).on('columnresized', function (event) { that.emit('columnresized', event); });
                JQXLite(componentSelector).on('columnreordered', function (event) { that.emit('columnreordered', event); });
                JQXLite(componentSelector).on('columnclick', function (event) { that.emit('columnclick', event); });
                JQXLite(componentSelector).on('cellclick', function (event) { that.emit('cellclick', event); });
                JQXLite(componentSelector).on('celldoubleclick', function (event) { that.emit('celldoubleclick', event); });
                JQXLite(componentSelector).on('cellselect', function (event) { that.emit('cellselect', event); });
                JQXLite(componentSelector).on('cellunselect', function (event) { that.emit('cellunselect', event); });
                JQXLite(componentSelector).on('cellvaluechanged', function (event) { that.emit('cellvaluechanged', event); });
                JQXLite(componentSelector).on('cellbeginedit', function (event) { that.emit('cellbeginedit', event); });
                JQXLite(componentSelector).on('cellendedit', function (event) { that.emit('cellendedit', event); });
                JQXLite(componentSelector).on('filter', function (event) { that.emit('filter', event); });
                JQXLite(componentSelector).on('groupschanged', function (event) { that.emit('groupschanged', event); });
                JQXLite(componentSelector).on('groupexpand', function (event) { that.emit('groupexpand', event); });
                JQXLite(componentSelector).on('groupcollapse', function (event) { that.emit('groupcollapse', event); });
                JQXLite(componentSelector).on('pagechanged', function (event) { that.emit('pagechanged', event); });
                JQXLite(componentSelector).on('pagesizechanged', function (event) { that.emit('pagesizechanged', event); });
                JQXLite(componentSelector).on('rowclick', function (event) { that.emit('rowclick', event); });
                JQXLite(componentSelector).on('rowdoubleclick', function (event) { that.emit('rowdoubleclick', event); });
                JQXLite(componentSelector).on('rowselect', function (event) { that.emit('rowselect', event); });
                JQXLite(componentSelector).on('rowunselect', function (event) { that.emit('rowunselect', event); });
                JQXLite(componentSelector).on('rowexpand', function (event) { that.emit('rowexpand', event); });
                JQXLite(componentSelector).on('rowcollapse', function (event) { that.emit('rowcollapse', event); });
                JQXLite(componentSelector).on('sort', function (event) { that.emit('sort', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxGrid(widgetOptions);
			})
			return {id, componentSelector, autoresizecolumns,autoresizecolumn,beginupdate,clear,createChart,destroy,endupdate,ensurerowvisible,focus,getcolumnindex,getcolumn,getcolumnproperty,getrowid,getrowdata,getrowdatabyid,getrowboundindexbyid,getrowboundindex,getrows,getboundrows,getdisplayrows,getdatainformation,getsortinformation,getpaginginformation,hidecolumn,hideloadelement,hiderowdetails,iscolumnvisible,iscolumnpinned,localizestrings,pincolumn,refreshdata,refresh,render,scrolloffset,scrollposition,showloadelement,showrowdetails,setcolumnindex,setcolumnproperty,showcolumn,unpincolumn,updatebounddata,updating,getsortcolumn,removesort,sortby,addgroup,cleargroups,collapsegroup,collapseallgroups,expandallgroups,expandgroup,getrootgroupscount,getgroup,insertgroup,iscolumngroupable,removegroupat,removegroup,addfilter,applyfilters,clearfilters,getfilterinformation,getcolumnat,removefilter,refreshfilterrow,gotopage,gotoprevpage,gotonextpage,addrow,begincelledit,beginrowedit,closemenu,deleterow,endcelledit,endrowedit,getcell,getcellatposition,getcelltext,getcelltextbyid,getcellvaluebyid,getcellvalue,isBindingCompleted,openmenu,setcellvalue,setcellvaluebyid,showvalidationpopup,updaterow,clearselection,getselectedrowindex,getselectedrowindexes,getselectedcell,getselectedcells,selectcell,selectallrows,selectrow,unselectrow,unselectcell,getcolumnaggregateddata,refreshaggregates,renderaggregates,exportdata,exportview,openColumnChooser,getstate,loadstate,savestate, setOptions, options, getOptions, createComponent};
        },
    }
</script>
