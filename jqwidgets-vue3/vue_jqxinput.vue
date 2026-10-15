<template>
        <input type="text" v-bind:id="id" :value="modelValue" @input="twoWayBinding" />
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxinput.js';

    export default {
        props: {
            modelValue: null,
            aiKey: String,
            disabled: {
                default: false,
                type: Boolean
            },
            dropDownWidth: Number,
            displayMember: String,
            height: [Number, String],
            items: Number,
            inlineAutoComplete: {
                default: "",
                type: Boolean
            },
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
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxInput" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
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
            function _aiKey (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('aiKey', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('aiKey');
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
            function _inlineAutoComplete (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxInput('inlineAutoComplete', arg)
                } else {
                    return JQXLite(componentSelector).jqxInput('inlineAutoComplete');
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
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __pushModel__();
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['aiKey','disabled','dropDownWidth','displayMember','height','items','inlineAutoComplete','minLength','maxLength','opened','placeHolder','popupZIndex','query','renderer','rtl','searchMode','source','theme','valueMember','width','value'];
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
                 get aiKey() {
                     return _aiKey();
                 },
                 set aiKey(newValue) {
                     _aiKey(newValue);
                 },
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
                 get inlineAutoComplete() {
                     return _inlineAutoComplete();
                 },
                 set inlineAutoComplete(newValue) {
                     _inlineAutoComplete(newValue);
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
            let __model__, __syncingModel__ = false;
            function __pushModel__() {
                const v = props.modelValue;
                __model__ = v;
                if (v === undefined || v === null) return;
                __syncingModel__ = true;
                try { JQXLite(componentSelector).jqxInput('val', v); } finally { __syncingModel__ = false; }
            }
            function twoWayBinding() {
                if (__syncingModel__) return;
                const value = JQXLite(componentSelector).jqxInput('val');
                __model__ = value;
                context.emit('update:modelValue', value);
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
				if (hasChanges) JQXLite(componentSelector).jqxInput(changed);
				if ('source' in changed) __pushModel__();
			}, { flush: 'post' });
			// v-model: a model changed outside goes into the widget
			watch(() => props.modelValue, (value) => {
				if (__hasJQXLite__ && __created__ && value !== __model__) __pushModel__();
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxInput('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, destroy, focus, selectAll, val, twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
