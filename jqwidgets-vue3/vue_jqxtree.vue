<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxpanel.js';
    import '../jqwidgets/jqxdragdrop.js';
    import '../jqwidgets/jqxtree.js';
    import '../jqwidgets/jqxcheckbox.js';

    export default {
        props: {
            animationShowDuration: Number,
            animationHideDuration: Number,
            allowDrag: {
                default: false,
                type: Boolean
            },
            allowDrop: {
                default: false,
                type: Boolean
            },
            checkboxes: {
                default: false,
                type: Boolean
            },
            dragStart: Function,
            dragEnd: Function,
            disabled: {
                default: false,
                type: Boolean
            },
            easing: String,
            enableHover: {
                default: true,
                type: Boolean
            },
            height: [Number, String],
            hasThreeStates: {
                default: false,
                type: Boolean
            },
            incrementalSearch: {
                default: true,
                type: Boolean
            },
            keyboardNavigation: {
                default: true,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            source: [Array, Object],
            toggleIndicatorSize: Number,
            toggleMode: String,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["added","checkChange","collapse","dragStart","dragEnd","expand","itemClick","removed","select"],
        setup(props, context) {
			const id = "jqxTree" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTree(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTree(usedProps[i]);
                }
                return resultToReturn;
            }
            function addBefore(item, id) {
                JQXLite(componentSelector).jqxTree('addBefore', item, id);  
            }
            function addAfter(item, id) {
                JQXLite(componentSelector).jqxTree('addAfter', item, id);  
            }
            function addTo(item, id) {
                JQXLite(componentSelector).jqxTree('addTo', item, id);  
            }
            function clear() {
                JQXLite(componentSelector).jqxTree('clear');  
            }
            function checkAll() {
                JQXLite(componentSelector).jqxTree('checkAll');  
            }
            function checkItem(item, checked) {
                JQXLite(componentSelector).jqxTree('checkItem', item, checked);  
            }
            function collapseAll() {
                JQXLite(componentSelector).jqxTree('collapseAll');  
            }
            function collapseItem(item) {
                JQXLite(componentSelector).jqxTree('collapseItem', item);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxTree('destroy');  
            }
            function disableItem(item) {
                JQXLite(componentSelector).jqxTree('disableItem', item);  
            }
            function ensureVisible(item) {
                JQXLite(componentSelector).jqxTree('ensureVisible', item);  
            }
            function enableItem(item) {
                JQXLite(componentSelector).jqxTree('enableItem', item);  
            }
            function enableAll() {
                JQXLite(componentSelector).jqxTree('enableAll');  
            }
            function expandAll() {
                JQXLite(componentSelector).jqxTree('expandAll');  
            }
            function expandItem(item) {
                JQXLite(componentSelector).jqxTree('expandItem', item);  
            }
            function focus() {
                JQXLite(componentSelector).jqxTree('focus');  
            }
            function getCheckedItems() {
                return JQXLite(componentSelector).jqxTree('getCheckedItems');  
            }
            function getUncheckedItems() {
                return JQXLite(componentSelector).jqxTree('getUncheckedItems');  
            }
            function getItems() {
                return JQXLite(componentSelector).jqxTree('getItems');  
            }
            function getItem(element) {
                return JQXLite(componentSelector).jqxTree('getItem', element);  
            }
            function getSelectedItem() {
                return JQXLite(componentSelector).jqxTree('getSelectedItem');  
            }
            function getPrevItem(item) {
                return JQXLite(componentSelector).jqxTree('getPrevItem', item);  
            }
            function getNextItem(item) {
                return JQXLite(componentSelector).jqxTree('getNextItem', item);  
            }
            function hitTest(left, top) {
                return JQXLite(componentSelector).jqxTree('hitTest', left, top);  
            }
            function removeItem(item) {
                JQXLite(componentSelector).jqxTree('removeItem', item);  
            }
            function render() {
                JQXLite(componentSelector).jqxTree('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxTree('refresh');  
            }
            function selectItem(item) {
                JQXLite(componentSelector).jqxTree('selectItem', item);  
            }
            function uncheckAll() {
                JQXLite(componentSelector).jqxTree('uncheckAll');  
            }
            function uncheckItem(item) {
                JQXLite(componentSelector).jqxTree('uncheckItem', item);  
            }
            function updateItem(item, newItem) {
                JQXLite(componentSelector).jqxTree('updateItem', item, newItem);  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxTree('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxTree('val');
                }
            }
            function _animationShowDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('animationShowDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('animationShowDuration');
                }
            }
            function _animationHideDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('animationHideDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('animationHideDuration');
                }
            }
            function _allowDrag (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('allowDrag', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('allowDrag');
                }
            }
            function _allowDrop (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('allowDrop', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('allowDrop');
                }
            }
            function _checkboxes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('checkboxes', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('checkboxes');
                }
            }
            function _dragStart (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('dragStart', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('dragStart');
                }
            }
            function _dragEnd (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('dragEnd', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('dragEnd');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('disabled');
                }
            }
            function _easing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('easing', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('easing');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('enableHover');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('height');
                }
            }
            function _hasThreeStates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('hasThreeStates', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('hasThreeStates');
                }
            }
            function _incrementalSearch (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('incrementalSearch', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('incrementalSearch');
                }
            }
            function _keyboardNavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('keyboardNavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('keyboardNavigation');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('rtl');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('source');
                }
            }
            function _toggleIndicatorSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('toggleIndicatorSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('toggleIndicatorSize');
                }
            }
            function _toggleMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('toggleMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('toggleMode');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTree('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxTree('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTree(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationShowDuration','animationHideDuration','allowDrag','allowDrop','checkboxes','dragStart','dragEnd','disabled','easing','enableHover','height','hasThreeStates','incrementalSearch','keyboardNavigation','rtl','source','toggleIndicatorSize','toggleMode','theme','width'];
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
                 get animationShowDuration() {
                     return _animationShowDuration();
                 },
                 set animationShowDuration(newValue) {
                     _animationShowDuration(newValue);
                 },
                 get animationHideDuration() {
                     return _animationHideDuration();
                 },
                 set animationHideDuration(newValue) {
                     _animationHideDuration(newValue);
                 },
                 get allowDrag() {
                     return _allowDrag();
                 },
                 set allowDrag(newValue) {
                     _allowDrag(newValue);
                 },
                 get allowDrop() {
                     return _allowDrop();
                 },
                 set allowDrop(newValue) {
                     _allowDrop(newValue);
                 },
                 get checkboxes() {
                     return _checkboxes();
                 },
                 set checkboxes(newValue) {
                     _checkboxes(newValue);
                 },
                 get dragStart() {
                     return _dragStart();
                 },
                 set dragStart(newValue) {
                     _dragStart(newValue);
                 },
                 get dragEnd() {
                     return _dragEnd();
                 },
                 set dragEnd(newValue) {
                     _dragEnd(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get easing() {
                     return _easing();
                 },
                 set easing(newValue) {
                     _easing(newValue);
                 },
                 get enableHover() {
                     return _enableHover();
                 },
                 set enableHover(newValue) {
                     _enableHover(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get hasThreeStates() {
                     return _hasThreeStates();
                 },
                 set hasThreeStates(newValue) {
                     _hasThreeStates(newValue);
                 },
                 get incrementalSearch() {
                     return _incrementalSearch();
                 },
                 set incrementalSearch(newValue) {
                     _incrementalSearch(newValue);
                 },
                 get keyboardNavigation() {
                     return _keyboardNavigation();
                 },
                 set keyboardNavigation(newValue) {
                     _keyboardNavigation(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get toggleIndicatorSize() {
                     return _toggleIndicatorSize();
                 },
                 set toggleIndicatorSize(newValue) {
                     _toggleIndicatorSize(newValue);
                 },
                 get toggleMode() {
                     return _toggleMode();
                 },
                 set toggleMode(newValue) {
                     _toggleMode(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('added', function (event) { that.emit('added', event); });
                JQXLite(componentSelector).on('checkChange', function (event) { that.emit('checkChange', event); });
                JQXLite(componentSelector).on('collapse', function (event) { that.emit('collapse', event); });
                JQXLite(componentSelector).on('dragStart', function (event) { that.emit('dragStart', event); });
                JQXLite(componentSelector).on('dragEnd', function (event) { that.emit('dragEnd', event); });
                JQXLite(componentSelector).on('expand', function (event) { that.emit('expand', event); });
                JQXLite(componentSelector).on('itemClick', function (event) { that.emit('itemClick', event); });
                JQXLite(componentSelector).on('removed', function (event) { that.emit('removed', event); });
                JQXLite(componentSelector).on('select', function (event) { that.emit('select', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxTree(widgetOptions);
			})
			return {id, componentSelector, addBefore,addAfter,addTo,clear,checkAll,checkItem,collapseAll,collapseItem,destroy,disableItem,ensureVisible,enableItem,enableAll,expandAll,expandItem,focus,getCheckedItems,getUncheckedItems,getItems,getItem,getSelectedItem,getPrevItem,getNextItem,hitTest,removeItem,render,refresh,selectItem,uncheckAll,uncheckItem,updateItem,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
