<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxheatmap.js';

    export default {
        props: {
            xAxis: Object,
            yAxis: Object,
            paletteSettings: Object,
            legendSettings: Object,
            source: Array,
            title: String,
            width: [String, Number],
            tooltipRender: Function,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxHeatMap" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxHeatMap(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxHeatMap(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxHeatMap('destroy');  
            }
            function setLegendPosition(position) {
                JQXLite(componentSelector).jqxHeatMap('setLegendPosition', position);  
            }
            function setOpposedXAxisPosition(opposedPosition) {
                JQXLite(componentSelector).jqxHeatMap('setOpposedXAxisPosition', opposedPosition);  
            }
            function setOpposedYAxisPosition(opposedPosition) {
                JQXLite(componentSelector).jqxHeatMap('setOpposedYAxisPosition', opposedPosition);  
            }
            function reverseXAxisPosition(isInversed) {
                JQXLite(componentSelector).jqxHeatMap('reverseXAxisPosition', isInversed);  
            }
            function reverseYAxisPosition(isInversed) {
                JQXLite(componentSelector).jqxHeatMap('reverseYAxisPosition', isInversed);  
            }
            function setPaletteType(type) {
                JQXLite(componentSelector).jqxHeatMap('setPaletteType', type);  
            }
            function _xAxis (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxHeatMap('xAxis', arg)
                } else {
                    return JQXLite(componentSelector).jqxHeatMap('xAxis');
                }
            }
            function _yAxis (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxHeatMap('yAxis', arg)
                } else {
                    return JQXLite(componentSelector).jqxHeatMap('yAxis');
                }
            }
            function _paletteSettings (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxHeatMap('paletteSettings', arg)
                } else {
                    return JQXLite(componentSelector).jqxHeatMap('paletteSettings');
                }
            }
            function _legendSettings (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxHeatMap('legendSettings', arg)
                } else {
                    return JQXLite(componentSelector).jqxHeatMap('legendSettings');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxHeatMap('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxHeatMap('source');
                }
            }
            function _title (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxHeatMap('title', arg)
                } else {
                    return JQXLite(componentSelector).jqxHeatMap('title');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxHeatMap('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxHeatMap('width');
                }
            }
            function _tooltipRender (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxHeatMap('tooltipRender', arg)
                } else {
                    return JQXLite(componentSelector).jqxHeatMap('tooltipRender');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxHeatMap(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['xAxis','yAxis','paletteSettings','legendSettings','source','title','width','tooltipRender'];
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
                 get xAxis() {
                     return _xAxis();
                 },
                 set xAxis(newValue) {
                     _xAxis(newValue);
                 },
                 get yAxis() {
                     return _yAxis();
                 },
                 set yAxis(newValue) {
                     _yAxis(newValue);
                 },
                 get paletteSettings() {
                     return _paletteSettings();
                 },
                 set paletteSettings(newValue) {
                     _paletteSettings(newValue);
                 },
                 get legendSettings() {
                     return _legendSettings();
                 },
                 set legendSettings(newValue) {
                     _legendSettings(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get title() {
                     return _title();
                 },
                 set title(newValue) {
                     _title(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
                 get tooltipRender() {
                     return _tooltipRender();
                 },
                 set tooltipRender(newValue) {
                     _tooltipRender(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

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
				if (hasChanges) JQXLite(componentSelector).jqxHeatMap(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxHeatMap('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, destroy, setLegendPosition, setOpposedXAxisPosition, setOpposedYAxisPosition, reverseXAxisPosition, reverseYAxisPosition, setPaletteType, setOptions, options, getOptions, createComponent};
        },
    }
</script>
