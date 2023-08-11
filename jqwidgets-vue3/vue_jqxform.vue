<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxinput.js';
    import '../jqwidgets/jqxpasswordinput.js';
    import '../jqwidgets/jqxnumberinput.js';
    import '../jqwidgets/jqxradiobutton.js';
    import '../jqwidgets/jqxcheckbox.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxlistbox.js';
    import '../jqwidgets/jqxdropdownlist.js';
    import '../jqwidgets/jqxcombobox.js';
    import '../jqwidgets/jqxmaskedinput.js';
    import '../jqwidgets/globalization/globalize.js'
    import '../jqwidgets/jqxcalendar.js';
    import '../jqwidgets/jqxdatetimeinput.js';
    import '../jqwidgets/jqxform.js';

    export default {
        props: {
            padding: Object,
            backgroundColor: String,
            borderColor: String,
            value: Object,
            template: Array,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["formDataChange","buttonClick"],
        setup(props, context) {
			const id = "jqxForm" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxForm(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxForm(usedProps[i]);
                }
                return resultToReturn;
            }
            function getInstance() {
                return JQXLite(componentSelector).jqxForm('getInstance');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxForm('refresh');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxForm('destroy');  
            }
            function hideComponent(name) {
                JQXLite(componentSelector).jqxForm('hideComponent', name);  
            }
            function showComponent(name) {
                JQXLite(componentSelector).jqxForm('showComponent', name);  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxForm('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxForm('val');
                }
            }
            function submit(action, target, method) {
                return JQXLite(componentSelector).jqxForm('submit', action, target, method);  
            }
            function getComponentByName(name) {
                return JQXLite(componentSelector).jqxForm('getComponentByName', name);  
            }
            function _padding (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxForm('padding', arg)
                } else {
                    return JQXLite(componentSelector).jqxForm('padding');
                }
            }
            function _backgroundColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxForm('backgroundColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxForm('backgroundColor');
                }
            }
            function _borderColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxForm('borderColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxForm('borderColor');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxForm('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxForm('value');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxForm('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxForm('template');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxForm(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['padding','backgroundColor','borderColor','value','template'];
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
                 get padding() {
                     return _padding();
                 },
                 set padding(newValue) {
                     _padding(newValue);
                 },
                 get backgroundColor() {
                     return _backgroundColor();
                 },
                 set backgroundColor(newValue) {
                     _backgroundColor(newValue);
                 },
                 get borderColor() {
                     return _borderColor();
                 },
                 set borderColor(newValue) {
                     _borderColor(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('formDataChange', function (event) { that.emit('formDataChange', event); });
                JQXLite(componentSelector).on('buttonClick', function (event) { that.emit('buttonClick', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxForm(widgetOptions);
			})
			return {id, componentSelector, getInstance,refresh,destroy,hideComponent,showComponent,val,submit,getComponentByName, setOptions, options, getOptions, createComponent};
        },
    }
</script>
