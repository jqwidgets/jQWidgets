<template>
        <textarea v-bind:id="id" :value="modelValue" @input="twoWayBinding"></textarea>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxtextarea.js';

    export default {
        props: {
            modelValue: String,
            disabled: {
                default: false,
                type: Boolean
            },
            displayMember: String,
            dropDownWidth: Number,
            height: [Number, String],
            items: Number,
            maxLength: Number,
            minLength: Number,
            opened: {
                default: false,
                type: Boolean
            },
            placeHolder: String,
            popupZIndex: Number,
            query: String,
            renderer: Function,
            roundedCorners: {
                default: true,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            scrollBarSize: Number,
            searchMode: String,
            source: [Array, Function, Object],
            theme: String,
            valueMember: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change","close","open","select"],
        setup(props, context) {
			const id = "jqxTextArea" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTextArea(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTextArea(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxTextArea('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxTextArea('focus');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxTextArea('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxTextArea('render');  
            }
            function selectAll() {
                JQXLite(componentSelector).jqxTextArea('selectAll');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('val');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('disabled');
                }
            }
            function _displayMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('displayMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('displayMember');
                }
            }
            function _dropDownWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('dropDownWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('dropDownWidth');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('height');
                }
            }
            function _items (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('items', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('items');
                }
            }
            function _maxLength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('maxLength', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('maxLength');
                }
            }
            function _minLength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('minLength', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('minLength');
                }
            }
            function _opened (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('opened', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('opened');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('placeHolder');
                }
            }
            function _popupZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('popupZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('popupZIndex');
                }
            }
            function _query (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('query', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('query');
                }
            }
            function _renderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('renderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('renderer');
                }
            }
            function _roundedCorners (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('roundedCorners', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('roundedCorners');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('rtl');
                }
            }
            function _scrollBarSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('scrollBarSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('scrollBarSize');
                }
            }
            function _searchMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('searchMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('searchMode');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('source');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('theme');
                }
            }
            function _valueMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('valueMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('valueMember');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTextArea(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','displayMember','dropDownWidth','height','items','maxLength','minLength','opened','placeHolder','popupZIndex','query','renderer','roundedCorners','rtl','scrollBarSize','searchMode','source','theme','valueMember','width'];
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
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get displayMember() {
                     return _displayMember();
                 },
                 set displayMember(newValue) {
                     _displayMember(newValue);
                 },
                 get dropDownWidth() {
                     return _dropDownWidth();
                 },
                 set dropDownWidth(newValue) {
                     _dropDownWidth(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get items() {
                     return _items();
                 },
                 set items(newValue) {
                     _items(newValue);
                 },
                 get maxLength() {
                     return _maxLength();
                 },
                 set maxLength(newValue) {
                     _maxLength(newValue);
                 },
                 get minLength() {
                     return _minLength();
                 },
                 set minLength(newValue) {
                     _minLength(newValue);
                 },
                 get opened() {
                     return _opened();
                 },
                 set opened(newValue) {
                     _opened(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get popupZIndex() {
                     return _popupZIndex();
                 },
                 set popupZIndex(newValue) {
                     _popupZIndex(newValue);
                 },
                 get query() {
                     return _query();
                 },
                 set query(newValue) {
                     _query(newValue);
                 },
                 get renderer() {
                     return _renderer();
                 },
                 set renderer(newValue) {
                     _renderer(newValue);
                 },
                 get roundedCorners() {
                     return _roundedCorners();
                 },
                 set roundedCorners(newValue) {
                     _roundedCorners(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get scrollBarSize() {
                     return _scrollBarSize();
                 },
                 set scrollBarSize(newValue) {
                     _scrollBarSize(newValue);
                 },
                 get searchMode() {
                     return _searchMode();
                 },
                 set searchMode(newValue) {
                     _searchMode(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get valueMember() {
                     return _valueMember();
                 },
                 set valueMember(newValue) {
                     _valueMember(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function twoWayBinding () {
				const element = JQXLite(componentSelector).jqxTextArea('element');
                context.emit('input', element.value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector + ' textarea').on('change', function (event) { that.emit('change', event); });
                JQXLite(componentSelector + ' textarea').on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector + ' textarea').on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector + ' textarea').on('select', function (event) { that.emit('select', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxTextArea(widgetOptions);
			})
			return {id, componentSelector, destroy,focus,refresh,render,selectAll,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
