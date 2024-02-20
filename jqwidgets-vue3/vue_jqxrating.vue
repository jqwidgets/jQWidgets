<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxrating.js';

    export default {
        props: {
            modelValue: String,
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
            value: Number,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change"],
        setup(props, context) {
			const id = "jqxRating" + JQXLite.generateID();
			const componentSelector = '#' + id;
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
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['count','disabled','height','itemHeight','itemWidth','precision','singleVote','value','width'];
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
            function twoWayBinding() {
				const element = JQXLite(componentSelector).jqxRating('element');
                const value = JQXLite(componentSelector).jqxRating('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxRating(widgetOptions);
			})
			return {id, componentSelector, disable,enable,getValue,setValue,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
