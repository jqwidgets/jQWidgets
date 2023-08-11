<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxtreemap.js';
    import '../jqwidgets/jqxtooltip.js';

    export default {
        props: {
            baseColor: String,
            colorRanges: [Array, Object],
            colorRange: Number,
            colorMode: String,
            displayMember: String,
            height: [Number, String],
            hoverEnabled: {
                default: false,
                type: Boolean
            },
            headerHeight: Number,
            legendLabel: String,
            legendPosition: Object,
            legendScaleCallback: Function,
            renderCallbacks: Object,
            selectionEnabled: {
                default: true,
                type: Boolean
            },
            showLegend: {
                default: true,
                type: Boolean
            },
            source: [Object, Array],
            theme: String,
            valueMember: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["bindingComplete"],
        setup(props, context) {
			const id = "jqxTreeMap" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTreeMap(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTreeMap(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxTreeMap('destroy');  
            }
            function render() {
                JQXLite(componentSelector).jqxTreeMap('render');  
            }
            function _baseColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('baseColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('baseColor');
                }
            }
            function _colorRanges (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('colorRanges', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('colorRanges');
                }
            }
            function _colorRange (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('colorRange', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('colorRange');
                }
            }
            function _colorMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('colorMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('colorMode');
                }
            }
            function _displayMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('displayMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('displayMember');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('height');
                }
            }
            function _hoverEnabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('hoverEnabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('hoverEnabled');
                }
            }
            function _headerHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('headerHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('headerHeight');
                }
            }
            function _legendLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('legendLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('legendLabel');
                }
            }
            function _legendPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('legendPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('legendPosition');
                }
            }
            function _legendScaleCallback (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('legendScaleCallback', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('legendScaleCallback');
                }
            }
            function _renderCallbacks (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('renderCallbacks', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('renderCallbacks');
                }
            }
            function _selectionEnabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('selectionEnabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('selectionEnabled');
                }
            }
            function _showLegend (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('showLegend', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('showLegend');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('source');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('theme');
                }
            }
            function _valueMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('valueMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('valueMember');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTreeMap('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxTreeMap('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTreeMap(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['baseColor','colorRanges','colorRange','colorMode','displayMember','height','hoverEnabled','headerHeight','legendLabel','legendPosition','legendScaleCallback','renderCallbacks','selectionEnabled','showLegend','source','theme','valueMember','width'];
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
                 get baseColor() {
                     return _baseColor();
                 },
                 set baseColor(newValue) {
                     _baseColor(newValue);
                 },
                 get colorRanges() {
                     return _colorRanges();
                 },
                 set colorRanges(newValue) {
                     _colorRanges(newValue);
                 },
                 get colorRange() {
                     return _colorRange();
                 },
                 set colorRange(newValue) {
                     _colorRange(newValue);
                 },
                 get colorMode() {
                     return _colorMode();
                 },
                 set colorMode(newValue) {
                     _colorMode(newValue);
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
                 get hoverEnabled() {
                     return _hoverEnabled();
                 },
                 set hoverEnabled(newValue) {
                     _hoverEnabled(newValue);
                 },
                 get headerHeight() {
                     return _headerHeight();
                 },
                 set headerHeight(newValue) {
                     _headerHeight(newValue);
                 },
                 get legendLabel() {
                     return _legendLabel();
                 },
                 set legendLabel(newValue) {
                     _legendLabel(newValue);
                 },
                 get legendPosition() {
                     return _legendPosition();
                 },
                 set legendPosition(newValue) {
                     _legendPosition(newValue);
                 },
                 get legendScaleCallback() {
                     return _legendScaleCallback();
                 },
                 set legendScaleCallback(newValue) {
                     _legendScaleCallback(newValue);
                 },
                 get renderCallbacks() {
                     return _renderCallbacks();
                 },
                 set renderCallbacks(newValue) {
                     _renderCallbacks(newValue);
                 },
                 get selectionEnabled() {
                     return _selectionEnabled();
                 },
                 set selectionEnabled(newValue) {
                     _selectionEnabled(newValue);
                 },
                 get showLegend() {
                     return _showLegend();
                 },
                 set showLegend(newValue) {
                     _showLegend(newValue);
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
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('bindingComplete', function (event) { that.emit('bindingComplete', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxTreeMap(widgetOptions);
			})
			return {id, componentSelector, destroy,render, setOptions, options, getOptions, createComponent};
        },
    }
</script>
