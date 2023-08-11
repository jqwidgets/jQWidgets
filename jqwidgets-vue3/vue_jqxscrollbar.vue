<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';

    export default {
        props: {
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            largestep: Number,
            min: Number,
            max: Number,
            rtl: {
                default: false,
                type: Boolean
            },
            step: Number,
            showButtons: {
                default: true,
                type: Boolean
            },
            thumbMinSize: Number,
            theme: String,
            vertical: {
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
        emits: ["valueChanged"],
        setup(props, context) {
			const id = "jqxScrollBar" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxScrollBar(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxScrollBar(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxScrollBar('destroy');  
            }
            function isScrolling() {
                return JQXLite(componentSelector).jqxScrollBar('isScrolling');  
            }
            function setPosition(index) {
                JQXLite(componentSelector).jqxScrollBar('setPosition', index);  
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('height');
                }
            }
            function _largestep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('largestep', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('largestep');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('min');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('max');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('rtl');
                }
            }
            function _step (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('step', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('step');
                }
            }
            function _showButtons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('showButtons', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('showButtons');
                }
            }
            function _thumbMinSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('thumbMinSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('thumbMinSize');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('theme');
                }
            }
            function _vertical (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('vertical', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('vertical');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollBar('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollBar('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxScrollBar(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','height','largestep','min','max','rtl','step','showButtons','thumbMinSize','theme','vertical','value','width'];
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
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get largestep() {
                     return _largestep();
                 },
                 set largestep(newValue) {
                     _largestep(newValue);
                 },
                 get min() {
                     return _min();
                 },
                 set min(newValue) {
                     _min(newValue);
                 },
                 get max() {
                     return _max();
                 },
                 set max(newValue) {
                     _max(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get step() {
                     return _step();
                 },
                 set step(newValue) {
                     _step(newValue);
                 },
                 get showButtons() {
                     return _showButtons();
                 },
                 set showButtons(newValue) {
                     _showButtons(newValue);
                 },
                 get thumbMinSize() {
                     return _thumbMinSize();
                 },
                 set thumbMinSize(newValue) {
                     _thumbMinSize(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get vertical() {
                     return _vertical();
                 },
                 set vertical(newValue) {
                     _vertical(newValue);
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
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('valueChanged', function (event) { that.emit('valueChanged', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxScrollBar(widgetOptions);
			})
			return {id, componentSelector, destroy,isScrolling,setPosition, setOptions, options, getOptions, createComponent};
        },
    }
</script>
