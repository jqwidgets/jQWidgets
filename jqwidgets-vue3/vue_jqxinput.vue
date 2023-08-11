<template>
        <input type="text" v-bind:id="id" :value="modelValue" @input="twoWayBinding" />
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxinput.js';

    export default {
        props: {
            modelValue: String,
            disabled: {
                default: false,
                type: Boolean
            },
            dropDownWidth: Number,
            displayMember: String,
            height: [Number, String],
            items: Number,
            minLength: Number,
            maxLength: Number,
            opened: {
                default: false,
                type: Boolean
            },
            placeHolder: String,
            popupZIndex: Number,
            query: String,
            renderer: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            searchMode: String,
            source: [Array, Function, Object],
            theme: String,
            valueMember: String,
            width: [Number, String],
            value: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change","close","open","select"],
        setup(props, context) {
			const id = "jqxInput" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxInput(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxInput(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxInput('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxInput('focus');  
            }
            function selectAll() {
                JQXLite(componentSelector).jqxInput('selectAll');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxInput('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxInput('val');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('disabled');
                }
            }
            function _dropDownWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('dropDownWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('dropDownWidth');
                }
            }
            function _displayMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('displayMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('displayMember');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('height');
                }
            }
            function _items (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('items', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('items');
                }
            }
            function _minLength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('minLength', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('minLength');
                }
            }
            function _maxLength (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('maxLength', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('maxLength');
                }
            }
            function _opened (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('opened', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('opened');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('placeHolder');
                }
            }
            function _popupZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('popupZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('popupZIndex');
                }
            }
            function _query (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('query', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('query');
                }
            }
            function _renderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('renderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('renderer');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('rtl');
                }
            }
            function _searchMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('searchMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('searchMode');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('source');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('theme');
                }
            }
            function _valueMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('valueMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('valueMember');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('width');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('value');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxInput(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','dropDownWidth','displayMember','height','items','minLength','maxLength','opened','placeHolder','popupZIndex','query','renderer','rtl','searchMode','source','theme','valueMember','width','value'];
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
                 get dropDownWidth() {
                     return _dropDownWidth();
                 },
                 set dropDownWidth(newValue) {
                     _dropDownWidth(newValue);
                 },
                 get displayMember() {
                     return _displayMember();
                 },
                 set displayMember(newValue) {
                     _displayMember(newValue);
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
                 get minLength() {
                     return _minLength();
                 },
                 set minLength(newValue) {
                     _minLength(newValue);
                 },
                 get maxLength() {
                     return _maxLength();
                 },
                 set maxLength(newValue) {
                     _maxLength(newValue);
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
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
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
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
                 },
            }
            function twoWayBinding () {
				const element = JQXLite(componentSelector).jqxInput('element');
                context.emit('input', element.value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector).on('select', function (event) { that.emit('select', event); twoWayBinding(); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxInput(widgetOptions);
			})
			return {id, componentSelector, destroy,focus,selectAll,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
