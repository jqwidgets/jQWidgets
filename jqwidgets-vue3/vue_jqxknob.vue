<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdraw.js';
    import '../jqwidgets/jqxknob.js';

    export default {
        props: {
            allowValueChangeOnClick: {
                default: true,
                type: Boolean
            },
            allowValueChangeOnDrag: {
                default: true,
                type: Boolean
            },
            allowValueChangeOnMouseWheel: {
                default: true,
                type: Boolean
            },
            changing: Function,
            dragEndAngle: Number,
            dragStartAngle: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            dial: Object,
            endAngle: Number,
            height: [Number, String],
            labels: Object,
            marks: Object,
            min: Number,
            max: Number,
            progressBar: Object,
            pointer: [Array, Object],
            pointerGrabAction: String,
            rotation: String,
            startAngle: Number,
            spinner: Object,
            styles: Object,
            step: [Number, String],
            snapToStep: {
                default: true,
                type: Boolean
            },
            value: [Number, Array],
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["change"],
        setup(props, context) {
			const id = "jqxKnob" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxKnob(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxKnob(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxKnob('destroy');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxKnob('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxKnob('val');
                }
            }
            function _allowValueChangeOnClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('allowValueChangeOnClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('allowValueChangeOnClick');
                }
            }
            function _allowValueChangeOnDrag (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('allowValueChangeOnDrag', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('allowValueChangeOnDrag');
                }
            }
            function _allowValueChangeOnMouseWheel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('allowValueChangeOnMouseWheel', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('allowValueChangeOnMouseWheel');
                }
            }
            function _changing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('changing', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('changing');
                }
            }
            function _dragEndAngle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('dragEndAngle', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('dragEndAngle');
                }
            }
            function _dragStartAngle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('dragStartAngle', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('dragStartAngle');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('disabled');
                }
            }
            function _dial (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('dial', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('dial');
                }
            }
            function _endAngle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('endAngle', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('endAngle');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('height');
                }
            }
            function _labels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('labels', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('labels');
                }
            }
            function _marks (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('marks', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('marks');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('min');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('max');
                }
            }
            function _progressBar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('progressBar', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('progressBar');
                }
            }
            function _pointer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('pointer', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('pointer');
                }
            }
            function _pointerGrabAction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('pointerGrabAction', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('pointerGrabAction');
                }
            }
            function _rotation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('rotation', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('rotation');
                }
            }
            function _startAngle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('startAngle', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('startAngle');
                }
            }
            function _spinner (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('spinner', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('spinner');
                }
            }
            function _styles (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('styles', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('styles');
                }
            }
            function _step (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('step', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('step');
                }
            }
            function _snapToStep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('snapToStep', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('snapToStep');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxKnob('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxKnob('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxKnob(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['allowValueChangeOnClick','allowValueChangeOnDrag','allowValueChangeOnMouseWheel','changing','dragEndAngle','dragStartAngle','disabled','dial','endAngle','height','labels','marks','min','max','progressBar','pointer','pointerGrabAction','rotation','startAngle','spinner','styles','step','snapToStep','value','width'];
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
                 get allowValueChangeOnClick() {
                     return _allowValueChangeOnClick();
                 },
                 set allowValueChangeOnClick(newValue) {
                     _allowValueChangeOnClick(newValue);
                 },
                 get allowValueChangeOnDrag() {
                     return _allowValueChangeOnDrag();
                 },
                 set allowValueChangeOnDrag(newValue) {
                     _allowValueChangeOnDrag(newValue);
                 },
                 get allowValueChangeOnMouseWheel() {
                     return _allowValueChangeOnMouseWheel();
                 },
                 set allowValueChangeOnMouseWheel(newValue) {
                     _allowValueChangeOnMouseWheel(newValue);
                 },
                 get changing() {
                     return _changing();
                 },
                 set changing(newValue) {
                     _changing(newValue);
                 },
                 get dragEndAngle() {
                     return _dragEndAngle();
                 },
                 set dragEndAngle(newValue) {
                     _dragEndAngle(newValue);
                 },
                 get dragStartAngle() {
                     return _dragStartAngle();
                 },
                 set dragStartAngle(newValue) {
                     _dragStartAngle(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get dial() {
                     return _dial();
                 },
                 set dial(newValue) {
                     _dial(newValue);
                 },
                 get endAngle() {
                     return _endAngle();
                 },
                 set endAngle(newValue) {
                     _endAngle(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get labels() {
                     return _labels();
                 },
                 set labels(newValue) {
                     _labels(newValue);
                 },
                 get marks() {
                     return _marks();
                 },
                 set marks(newValue) {
                     _marks(newValue);
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
                 get progressBar() {
                     return _progressBar();
                 },
                 set progressBar(newValue) {
                     _progressBar(newValue);
                 },
                 get pointer() {
                     return _pointer();
                 },
                 set pointer(newValue) {
                     _pointer(newValue);
                 },
                 get pointerGrabAction() {
                     return _pointerGrabAction();
                 },
                 set pointerGrabAction(newValue) {
                     _pointerGrabAction(newValue);
                 },
                 get rotation() {
                     return _rotation();
                 },
                 set rotation(newValue) {
                     _rotation(newValue);
                 },
                 get startAngle() {
                     return _startAngle();
                 },
                 set startAngle(newValue) {
                     _startAngle(newValue);
                 },
                 get spinner() {
                     return _spinner();
                 },
                 set spinner(newValue) {
                     _spinner(newValue);
                 },
                 get styles() {
                     return _styles();
                 },
                 set styles(newValue) {
                     _styles(newValue);
                 },
                 get step() {
                     return _step();
                 },
                 set step(newValue) {
                     _step(newValue);
                 },
                 get snapToStep() {
                     return _snapToStep();
                 },
                 set snapToStep(newValue) {
                     _snapToStep(newValue);
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

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxKnob(widgetOptions);
			})
			return {id, componentSelector, destroy,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
