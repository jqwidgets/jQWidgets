<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxdata.export.js';
    import '../jqwidgets/jqxexport.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxbuttongroup.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxmenu.js';
    import '../jqwidgets/jqxlistbox.js';
    import '../jqwidgets/jqxdropdownlist.js';
    import '../jqwidgets/jqxcombobox.js';
    import '../jqwidgets/jqxnumberinput.js';
    import '../jqwidgets/jqxcheckbox.js';
    import '../jqwidgets/globalization/globalize.js';
    import '../jqwidgets/jqxcalendar.js';
    import '../jqwidgets/jqxdatetimeinput.js';
    import '../jqwidgets/jqxwindow.js';
    import '../jqwidgets/jqxdragdrop.js';
    import '../jqwidgets/jqxpivot.js';
    import '../jqwidgets/jqxpivotgrid.js';
    import '../jqwidgets/jqxpivotdesigner.js';
    import '../jqwidgets/jqxinput.js';

    export default {
        props: {
            source: Object,
            localization: Object,
            scrollBarsEnabled: {
                default: true,
                type: Boolean
            },
            selectionEnabled: {
                default: true,
                type: Boolean
            },
            multipleSelectionEnabled: {
                default: true,
                type: Boolean
            },
            treeStyleRows: {
                default: true,
                type: Boolean
            },
            autoResize: {
                default: false,
                type: Boolean
            },
            itemsRenderer: Function,
            cellsRenderer: Function,
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["pivotitemexpanding","pivotitemexpanded","pivotitemcollapsing","pivotitemcollapsed","sortchanging","sortchanged","sortremoving","sortremoved","pivotitemselectionchanged","pivotcellmousedown","pivotcellmouseup","pivotcellclick","pivotcelldblclick","pivotitemmousedown","pivotitemmouseup","pivotitemclick","pivotitemdblclick"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxPivotGrid" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxPivotGrid(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxPivotGrid(usedProps[i]);
                }
                return resultToReturn;
            }
            function getInstance() {
                return JQXLite(componentSelector).jqxPivotGrid('getInstance');  
            }
            function refresh() {
                return JQXLite(componentSelector).jqxPivotGrid('refresh');  
            }
            function destroy() {
                return JQXLite(componentSelector).jqxPivotGrid('destroy');  
            }
            function getPivotRows() {
                return JQXLite(componentSelector).jqxPivotGrid('getPivotRows');  
            }
            function getPivotColumns() {
                return JQXLite(componentSelector).jqxPivotGrid('getPivotColumns');  
            }
            function getPivotCells() {
                return JQXLite(componentSelector).jqxPivotGrid('getPivotCells');  
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('source');
                }
            }
            function _localization (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('localization', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('localization');
                }
            }
            function _scrollBarsEnabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('scrollBarsEnabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('scrollBarsEnabled');
                }
            }
            function _selectionEnabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('selectionEnabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('selectionEnabled');
                }
            }
            function _multipleSelectionEnabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('multipleSelectionEnabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('multipleSelectionEnabled');
                }
            }
            function _treeStyleRows (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('treeStyleRows', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('treeStyleRows');
                }
            }
            function _autoResize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('autoResize', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('autoResize');
                }
            }
            function _itemsRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('itemsRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('itemsRenderer');
                }
            }
            function _cellsRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('cellsRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('cellsRenderer');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxPivotGrid('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxPivotGrid('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxPivotGrid(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['source','localization','scrollBarsEnabled','selectionEnabled','multipleSelectionEnabled','treeStyleRows','autoResize','itemsRenderer','cellsRenderer','theme'];
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
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get localization() {
                     return _localization();
                 },
                 set localization(newValue) {
                     _localization(newValue);
                 },
                 get scrollBarsEnabled() {
                     return _scrollBarsEnabled();
                 },
                 set scrollBarsEnabled(newValue) {
                     _scrollBarsEnabled(newValue);
                 },
                 get selectionEnabled() {
                     return _selectionEnabled();
                 },
                 set selectionEnabled(newValue) {
                     _selectionEnabled(newValue);
                 },
                 get multipleSelectionEnabled() {
                     return _multipleSelectionEnabled();
                 },
                 set multipleSelectionEnabled(newValue) {
                     _multipleSelectionEnabled(newValue);
                 },
                 get treeStyleRows() {
                     return _treeStyleRows();
                 },
                 set treeStyleRows(newValue) {
                     _treeStyleRows(newValue);
                 },
                 get autoResize() {
                     return _autoResize();
                 },
                 set autoResize(newValue) {
                     _autoResize(newValue);
                 },
                 get itemsRenderer() {
                     return _itemsRenderer();
                 },
                 set itemsRenderer(newValue) {
                     _itemsRenderer(newValue);
                 },
                 get cellsRenderer() {
                     return _cellsRenderer();
                 },
                 set cellsRenderer(newValue) {
                     _cellsRenderer(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('pivotitemexpanding', function (event) { that.emit('pivotitemexpanding', event); });
                JQXLite(componentSelector).on('pivotitemexpanded', function (event) { that.emit('pivotitemexpanded', event); });
                JQXLite(componentSelector).on('pivotitemcollapsing', function (event) { that.emit('pivotitemcollapsing', event); });
                JQXLite(componentSelector).on('pivotitemcollapsed', function (event) { that.emit('pivotitemcollapsed', event); });
                JQXLite(componentSelector).on('sortchanging', function (event) { that.emit('sortchanging', event); });
                JQXLite(componentSelector).on('sortchanged', function (event) { that.emit('sortchanged', event); });
                JQXLite(componentSelector).on('sortremoving', function (event) { that.emit('sortremoving', event); });
                JQXLite(componentSelector).on('sortremoved', function (event) { that.emit('sortremoved', event); });
                JQXLite(componentSelector).on('pivotitemselectionchanged', function (event) { that.emit('pivotitemselectionchanged', event); });
                JQXLite(componentSelector).on('pivotcellmousedown', function (event) { that.emit('pivotcellmousedown', event); });
                JQXLite(componentSelector).on('pivotcellmouseup', function (event) { that.emit('pivotcellmouseup', event); });
                JQXLite(componentSelector).on('pivotcellclick', function (event) { that.emit('pivotcellclick', event); });
                JQXLite(componentSelector).on('pivotcelldblclick', function (event) { that.emit('pivotcelldblclick', event); });
                JQXLite(componentSelector).on('pivotitemmousedown', function (event) { that.emit('pivotitemmousedown', event); });
                JQXLite(componentSelector).on('pivotitemmouseup', function (event) { that.emit('pivotitemmouseup', event); });
                JQXLite(componentSelector).on('pivotitemclick', function (event) { that.emit('pivotitemclick', event); });
                JQXLite(componentSelector).on('pivotitemdblclick', function (event) { that.emit('pivotitemdblclick', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			// The props that changed, and only those (arrays and objects by reference): all of
			// them again, on every update, reset the widget (JqxGrid bound its source again and
			// showed "Loading...", JqxDropDownList went back to its selectedIndex).
			watch(__manageProps__, (widgetOptions) => {
				if (!__hasJQXLite__ || !__created__) return;
				const changed = {};
				let hasChanges = false;
				for (const key in widgetOptions) {
					if (!Object.is(widgetOptions[key], __appliedProps__[key])) {
						changed[key] = widgetOptions[key];
						hasChanges = true;
					}
				}
				// new data resets the widget's selection: the selection the props ask for goes with it
				if ('source' in changed) {
					for (const key of ['selectedIndex', 'selectedIndexes', 'checkedIndexes', 'value']) {
						if (!(key in changed) && widgetOptions[key] !== undefined) changed[key] = widgetOptions[key];
					}
				}
				__appliedProps__ = widgetOptions;
				if (hasChanges) JQXLite(componentSelector).jqxPivotGrid(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxPivotGrid('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, getInstance, refresh, destroy, getPivotRows, getPivotColumns, getPivotCells, setOptions, options, getOptions, createComponent};
        },
    }
</script>
