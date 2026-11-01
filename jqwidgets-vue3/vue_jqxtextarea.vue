<template>
        <textarea v-bind:id="id" :value="modelValue" @input="twoWayBinding"></textarea>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxtextarea.js';

    export default {
        props: {
            modelValue: null,
            disabled: {
                default: false,
                type: Boolean
            },
            displayMember: String,
            dropDownWidth: Number,
            height: [Number, String],
            hint: {
                default: true,
                type: Boolean
            },
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
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxTextArea" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
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
            function _hint (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTextArea('hint', arg)
                } else {
                    return JQXLite(componentSelector).jqxTextArea('hint');
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
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __pushModel__();
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','displayMember','dropDownWidth','height','hint','items','maxLength','minLength','opened','placeHolder','popupZIndex','query','renderer','roundedCorners','rtl','scrollBarSize','searchMode','source','theme','valueMember','width'];
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
                 get hint() {
                     return _hint();
                 },
                 set hint(newValue) {
                     _hint(newValue);
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
            let __model__, __syncingModel__ = false;
            function __pushModel__() {
                const v = props.modelValue;
                __model__ = v;
                if (v === undefined || v === null) return;
                __syncingModel__ = true;
                try { JQXLite(componentSelector).jqxTextArea('val', v); } finally { __syncingModel__ = false; }
            }
            function twoWayBinding() {
                if (__syncingModel__) return;
                const value = JQXLite(componentSelector).jqxTextArea('val');
                __model__ = value;
                context.emit('update:modelValue', value);
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
				if (hasChanges) JQXLite(componentSelector).jqxTextArea(changed);
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
				try { element.jqxTextArea('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, destroy, focus, refresh, render, selectAll, val, twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
