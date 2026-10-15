<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdraw.js';

    export default {
        props: {
            renderEngine: String,
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxDraw" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxDraw(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxDraw(usedProps[i]);
                }
                return resultToReturn;
            }
            function attr(element, attributes) {
                JQXLite(componentSelector).jqxDraw('attr', element, attributes);  
            }
            function circle(cx, cy, r, attributes) {
                return JQXLite(componentSelector).jqxDraw('circle', cx, cy, r, attributes);  
            }
            function clear() {
                JQXLite(componentSelector).jqxDraw('clear');  
            }
            function getAttr(element, attributes) {
                return JQXLite(componentSelector).jqxDraw('getAttr', element, attributes);  
            }
            function getSize() {
                return JQXLite(componentSelector).jqxDraw('getSize');  
            }
            function line(x1, y1, x2, y2, attributes) {
                return JQXLite(componentSelector).jqxDraw('line', x1, y1, x2, y2, attributes);  
            }
            function measureText(text, angle, attributes) {
                return JQXLite(componentSelector).jqxDraw('measureText', text, angle, attributes);  
            }
            function on(element, event, func) {
                JQXLite(componentSelector).jqxDraw('on', element, event, func);  
            }
            function off(element, event, func) {
                JQXLite(componentSelector).jqxDraw('off', element, event, func);  
            }
            function path(path, attributes) {
                return JQXLite(componentSelector).jqxDraw('path', path, attributes);  
            }
            function pieslice(cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes) {
                return JQXLite(componentSelector).jqxDraw('pieslice', cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);  
            }
            function refresh() {
                JQXLite(componentSelector).jqxDraw('refresh');  
            }
            function rect(x, y, width, height, attributes) {
                return JQXLite(componentSelector).jqxDraw('rect', x, y, width, height, attributes);  
            }
            function saveAsJPEG(image, url) {
                JQXLite(componentSelector).jqxDraw('saveAsJPEG', image, url);  
            }
            function saveAsPNG(image, url) {
                JQXLite(componentSelector).jqxDraw('saveAsPNG', image, url);  
            }
            function text(text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround) {
                return JQXLite(componentSelector).jqxDraw('text', text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);  
            }
            function _renderEngine (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDraw('renderEngine', arg)
                } else {
                    return JQXLite(componentSelector).jqxDraw('renderEngine');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDraw('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxDraw('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxDraw(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['renderEngine','theme'];
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
                 get renderEngine() {
                     return _renderEngine();
                 },
                 set renderEngine(newValue) {
                     _renderEngine(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
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
				if (hasChanges) JQXLite(componentSelector).jqxDraw(changed);
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
			return {id, componentSelector, attr, circle, clear, getAttr, getSize, line, measureText, on, off, path, pieslice, refresh, rect, saveAsJPEG, saveAsPNG, text, setOptions, options, getOptions, createComponent};
        },
    }
</script>
