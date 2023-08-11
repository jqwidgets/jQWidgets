<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxbuttongroup.js';

    export default {
        props: {
            disabled: {
                default: false,
                type: Boolean
            },
            enableHover: {
                default: false,
                type: Boolean
            },
            mode: String,
            rtl: {
                default: false,
                type: Boolean
            },
            template: String,
            theme: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["buttonclick","selected","unselected"],
        setup(props, context) {
			const id = "jqxButtonGroup" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxButtonGroup(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxButtonGroup(usedProps[i]);
                }
                return resultToReturn;
            }
            function disableAt(index) {
                JQXLite(componentSelector).jqxButtonGroup('disableAt', index);  
            }
            function disable() {
                JQXLite(componentSelector).jqxButtonGroup('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxButtonGroup('destroy');  
            }
            function enable() {
                JQXLite(componentSelector).jqxButtonGroup('enable');  
            }
            function enableAt(index) {
                JQXLite(componentSelector).jqxButtonGroup('enableAt', index);  
            }
            function getSelection() {
                return JQXLite(componentSelector).jqxButtonGroup('getSelection');  
            }
            function render() {
                JQXLite(componentSelector).jqxButtonGroup('render');  
            }
            function setSelection(index) {
                JQXLite(componentSelector).jqxButtonGroup('setSelection', index);  
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('disabled');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('enableHover');
                }
            }
            function _mode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('mode', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('mode');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('rtl');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxButtonGroup('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxButtonGroup('theme');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxButtonGroup(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['disabled','enableHover','mode','rtl','template','theme'];
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
                 get enableHover() {
                     return _enableHover();
                 },
                 set enableHover(newValue) {
                     _enableHover(newValue);
                 },
                 get mode() {
                     return _mode();
                 },
                 set mode(newValue) {
                     _mode(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
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

                JQXLite(componentSelector).on('buttonclick', function (event) { that.emit('buttonclick', event); });
                JQXLite(componentSelector).on('selected', function (event) { that.emit('selected', event); });
                JQXLite(componentSelector).on('unselected', function (event) { that.emit('unselected', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxButtonGroup(widgetOptions);
			})
			return {id, componentSelector, disableAt,disable,destroy,enable,enableAt,getSelection,render,setSelection, setOptions, options, getOptions, createComponent};
        },
    }
</script>
