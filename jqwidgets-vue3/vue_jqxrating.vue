<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxrating.js';

    export default {
        props: {
            modelValue: null,
            count: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            itemHeight: Number,
            itemWidth: Number,
            precision: Number,
            singleVote: {
                default: false,
                type: Boolean
            },
            theme: String,
            value: Number,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxRating" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxRating(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxRating(usedProps[i]);
                }
                return resultToReturn;
            }
            function disable() {
                JQXLite(componentSelector).jqxRating('disable');  
            }
            function enable() {
                JQXLite(componentSelector).jqxRating('enable');  
            }
            function getValue() {
                return JQXLite(componentSelector).jqxRating('getValue');  
            }
            function setValue(value) {
                JQXLite(componentSelector).jqxRating('setValue', value);  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxRating('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxRating('val');
                }
            }
            function _count (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('count', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('count');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('height');
                }
            }
            function _itemHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('itemHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('itemHeight');
                }
            }
            function _itemWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('itemWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('itemWidth');
                }
            }
            function _precision (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('precision', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('precision');
                }
            }
            function _singleVote (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('singleVote', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('singleVote');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('theme');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRating('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxRating('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxRating(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __pushModel__();
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['count','disabled','height','itemHeight','itemWidth','precision','singleVote','theme','value','width'];
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
                 get count() {
                     return _count();
                 },
                 set count(newValue) {
                     _count(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get itemHeight() {
                     return _itemHeight();
                 },
                 set itemHeight(newValue) {
                     _itemHeight(newValue);
                 },
                 get itemWidth() {
                     return _itemWidth();
                 },
                 set itemWidth(newValue) {
                     _itemWidth(newValue);
                 },
                 get precision() {
                     return _precision();
                 },
                 set precision(newValue) {
                     _precision(newValue);
                 },
                 get singleVote() {
                     return _singleVote();
                 },
                 set singleVote(newValue) {
                     _singleVote(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
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
                try { JQXLite(componentSelector).jqxRating('val', v); } finally { __syncingModel__ = false; }
            }
            function twoWayBinding() {
                if (__syncingModel__) return;
                const value = JQXLite(componentSelector).jqxRating('val');
                __model__ = value;
                context.emit('update:modelValue', value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
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
				if (hasChanges) JQXLite(componentSelector).jqxRating(changed);
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
			})
			return {id, componentSelector, disable, enable, getValue, setValue, val, twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
