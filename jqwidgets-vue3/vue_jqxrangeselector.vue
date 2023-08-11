<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/jqxrangeselector.js';

    export default {
        props: {
            disabled: {
                default: false,
                type: Boolean
            },
            groupLabelsFormatFunction: Function,
            height: [Number, String],
            labelsFormat: String,
            labelsFormatFunction: Function,
            labelsOnTicks: {
                default: true,
                type: Boolean
            },
            markersFormat: String,
            markersFormatFunction: Function,
            majorTicksInterval: [Number, String, Object],
            minorTicksInterval: [Number, String, Object],
            max: [Number, String, Date],
            min: [Number, String, Date],
            moveOnClick: {
                default: true,
                type: Boolean
            },
            padding: [String, Number],
            range: Object,
            resizable: {
                default: true,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            showGroupLabels: {
                default: false,
                type: Boolean
            },
            showMinorTicks: {
                default: false,
                type: Boolean
            },
            snapToTicks: {
                default: true,
                type: Boolean
            },
            showMajorLabels: {
                default: false,
                type: Boolean
            },
            showMarkers: {
                default: true,
                type: Boolean
            },
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["change"],
        setup(props, context) {
			const id = "jqxRangeSelector" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxRangeSelector(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxRangeSelector(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxRangeSelector('destroy');  
            }
            function getRange() {
                return JQXLite(componentSelector).jqxRangeSelector('getRange');  
            }
            function render() {
                JQXLite(componentSelector).jqxRangeSelector('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxRangeSelector('refresh');  
            }
            function setRange(from, to) {
                JQXLite(componentSelector).jqxRangeSelector('setRange', from, to);  
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('disabled');
                }
            }
            function _groupLabelsFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('groupLabelsFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('groupLabelsFormatFunction');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('height');
                }
            }
            function _labelsFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('labelsFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('labelsFormat');
                }
            }
            function _labelsFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('labelsFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('labelsFormatFunction');
                }
            }
            function _labelsOnTicks (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('labelsOnTicks', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('labelsOnTicks');
                }
            }
            function _markersFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('markersFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('markersFormat');
                }
            }
            function _markersFormatFunction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('markersFormatFunction', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('markersFormatFunction');
                }
            }
            function _majorTicksInterval (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('majorTicksInterval', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('majorTicksInterval');
                }
            }
            function _minorTicksInterval (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('minorTicksInterval', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('minorTicksInterval');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('max');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('min');
                }
            }
            function _moveOnClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('moveOnClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('moveOnClick');
                }
            }
            function _padding (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('padding', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('padding');
                }
            }
            function _range (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('range', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('range');
                }
            }
            function _resizable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('resizable', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('resizable');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('rtl');
                }
            }
            function _showGroupLabels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('showGroupLabels', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('showGroupLabels');
                }
            }
            function _showMinorTicks (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('showMinorTicks', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('showMinorTicks');
                }
            }
            function _snapToTicks (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('snapToTicks', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('snapToTicks');
                }
            }
            function _showMajorLabels (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('showMajorLabels', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('showMajorLabels');
                }
            }
            function _showMarkers (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('showMarkers', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('showMarkers');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRangeSelector('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxRangeSelector('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxRangeSelector(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','groupLabelsFormatFunction','height','labelsFormat','labelsFormatFunction','labelsOnTicks','markersFormat','markersFormatFunction','majorTicksInterval','minorTicksInterval','max','min','moveOnClick','padding','range','resizable','rtl','showGroupLabels','showMinorTicks','snapToTicks','showMajorLabels','showMarkers','theme','width'];
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
                 get groupLabelsFormatFunction() {
                     return _groupLabelsFormatFunction();
                 },
                 set groupLabelsFormatFunction(newValue) {
                     _groupLabelsFormatFunction(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get labelsFormat() {
                     return _labelsFormat();
                 },
                 set labelsFormat(newValue) {
                     _labelsFormat(newValue);
                 },
                 get labelsFormatFunction() {
                     return _labelsFormatFunction();
                 },
                 set labelsFormatFunction(newValue) {
                     _labelsFormatFunction(newValue);
                 },
                 get labelsOnTicks() {
                     return _labelsOnTicks();
                 },
                 set labelsOnTicks(newValue) {
                     _labelsOnTicks(newValue);
                 },
                 get markersFormat() {
                     return _markersFormat();
                 },
                 set markersFormat(newValue) {
                     _markersFormat(newValue);
                 },
                 get markersFormatFunction() {
                     return _markersFormatFunction();
                 },
                 set markersFormatFunction(newValue) {
                     _markersFormatFunction(newValue);
                 },
                 get majorTicksInterval() {
                     return _majorTicksInterval();
                 },
                 set majorTicksInterval(newValue) {
                     _majorTicksInterval(newValue);
                 },
                 get minorTicksInterval() {
                     return _minorTicksInterval();
                 },
                 set minorTicksInterval(newValue) {
                     _minorTicksInterval(newValue);
                 },
                 get max() {
                     return _max();
                 },
                 set max(newValue) {
                     _max(newValue);
                 },
                 get min() {
                     return _min();
                 },
                 set min(newValue) {
                     _min(newValue);
                 },
                 get moveOnClick() {
                     return _moveOnClick();
                 },
                 set moveOnClick(newValue) {
                     _moveOnClick(newValue);
                 },
                 get padding() {
                     return _padding();
                 },
                 set padding(newValue) {
                     _padding(newValue);
                 },
                 get range() {
                     return _range();
                 },
                 set range(newValue) {
                     _range(newValue);
                 },
                 get resizable() {
                     return _resizable();
                 },
                 set resizable(newValue) {
                     _resizable(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get showGroupLabels() {
                     return _showGroupLabels();
                 },
                 set showGroupLabels(newValue) {
                     _showGroupLabels(newValue);
                 },
                 get showMinorTicks() {
                     return _showMinorTicks();
                 },
                 set showMinorTicks(newValue) {
                     _showMinorTicks(newValue);
                 },
                 get snapToTicks() {
                     return _snapToTicks();
                 },
                 set snapToTicks(newValue) {
                     _snapToTicks(newValue);
                 },
                 get showMajorLabels() {
                     return _showMajorLabels();
                 },
                 set showMajorLabels(newValue) {
                     _showMajorLabels(newValue);
                 },
                 get showMarkers() {
                     return _showMarkers();
                 },
                 set showMarkers(newValue) {
                     _showMarkers(newValue);
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

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxRangeSelector(widgetOptions);
			})
			return {id, componentSelector, destroy,getRange,render,refresh,setRange, setOptions, options, getOptions, createComponent};
        },
    }
</script>
