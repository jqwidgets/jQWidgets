<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdraw.js';

    export default {
        props: {
            renderEngine: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const id = "jqxDraw" + JQXLite.generateID();
			const componentSelector = '#' + id;
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
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxDraw(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['renderEngine'];
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
            }
            function __wireEvents__() {
                const that = context;

            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxDraw(widgetOptions);
			})
			return {id, componentSelector, attr,circle,clear,getAttr,getSize,line,measureText,on,off,path,pieslice,refresh,rect,saveAsJPEG,saveAsPNG,text, setOptions, options, getOptions, createComponent};
        },
    }
</script>
