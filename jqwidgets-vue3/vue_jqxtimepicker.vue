<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdraw.js';
    import '../jqwidgets/jqxtimepicker.js';

    export default {
        props: {
            autoSwitchToMinutes: {
                default: false,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            footer: {
                default: false,
                type: Boolean
            },
            footerTemplate: String,
            format: String,
            height: [Number, String],
            minuteInterval: Number,
            name: String,
            readonly: {
                default: false,
                type: Boolean
            },
            selection: String,
            theme: String,
            unfocusable: {
                default: false,
                type: Boolean
            },
            value: Date,
            view: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["change"],
        setup(props, context) {
			const id = "jqxTimePicker" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTimePicker(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTimePicker(usedProps[i]);
                }
                return resultToReturn;
            }
            function setHours(hours) {
                JQXLite(componentSelector).jqxTimePicker('setHours', hours);  
            }
            function setMinutes(minutes) {
                JQXLite(componentSelector).jqxTimePicker('setMinutes', minutes);  
            }
            function _autoSwitchToMinutes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('autoSwitchToMinutes', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('autoSwitchToMinutes');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('disabled');
                }
            }
            function _footer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('footer', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('footer');
                }
            }
            function _footerTemplate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('footerTemplate', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('footerTemplate');
                }
            }
            function _format (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('format', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('format');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('height');
                }
            }
            function _minuteInterval (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('minuteInterval', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('minuteInterval');
                }
            }
            function _name (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('name', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('name');
                }
            }
            function _readonly (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('readonly', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('readonly');
                }
            }
            function _selection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('selection', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('selection');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('theme');
                }
            }
            function _unfocusable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('unfocusable', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('unfocusable');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('value');
                }
            }
            function _view (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('view', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('view');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTimePicker('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxTimePicker('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTimePicker(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['autoSwitchToMinutes','disabled','footer','footerTemplate','format','height','minuteInterval','name','readonly','selection','theme','unfocusable','value','view','width'];
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
                 get autoSwitchToMinutes() {
                     return _autoSwitchToMinutes();
                 },
                 set autoSwitchToMinutes(newValue) {
                     _autoSwitchToMinutes(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get footer() {
                     return _footer();
                 },
                 set footer(newValue) {
                     _footer(newValue);
                 },
                 get footerTemplate() {
                     return _footerTemplate();
                 },
                 set footerTemplate(newValue) {
                     _footerTemplate(newValue);
                 },
                 get format() {
                     return _format();
                 },
                 set format(newValue) {
                     _format(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get minuteInterval() {
                     return _minuteInterval();
                 },
                 set minuteInterval(newValue) {
                     _minuteInterval(newValue);
                 },
                 get name() {
                     return _name();
                 },
                 set name(newValue) {
                     _name(newValue);
                 },
                 get readonly() {
                     return _readonly();
                 },
                 set readonly(newValue) {
                     _readonly(newValue);
                 },
                 get selection() {
                     return _selection();
                 },
                 set selection(newValue) {
                     _selection(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get unfocusable() {
                     return _unfocusable();
                 },
                 set unfocusable(newValue) {
                     _unfocusable(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
                 },
                 get view() {
                     return _view();
                 },
                 set view(newValue) {
                     _view(newValue);
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
				JQXLite(componentSelector).jqxTimePicker(widgetOptions);
			})
			return {id, componentSelector, setHours,setMinutes, setOptions, options, getOptions, createComponent};
        },
    }
</script>
