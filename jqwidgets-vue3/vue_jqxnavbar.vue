<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxnavbar.js';

    export default {
        props: {
            columns: Array,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            minimized: {
                default: false,
                type: Boolean
            },
            minimizeButtonPosition: String,
            minimizedHeight: Number,
            minimizedTitle: String,
            orientation: String,
            popupAnimationDelay: Number,
            rtl: {
                default: false,
                type: Boolean
            },
            selection: {
                default: true,
                type: Boolean
            },
            selectedItem: Number,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["change"],
        setup(props, context) {
			const id = "jqxNavBar" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxNavBar(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxNavBar(usedProps[i]);
                }
                return resultToReturn;
            }
            function close() {
                JQXLite(componentSelector).jqxNavBar('close');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxNavBar('destroy');  
            }
            function getSelectedIndex() {
                return JQXLite(componentSelector).jqxNavBar('getSelectedIndex');  
            }
            function open() {
                JQXLite(componentSelector).jqxNavBar('open');  
            }
            function selectAt(index) {
                JQXLite(componentSelector).jqxNavBar('selectAt', index);  
            }
            function _columns (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('columns', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('columns');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('height');
                }
            }
            function _minimized (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('minimized', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('minimized');
                }
            }
            function _minimizeButtonPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('minimizeButtonPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('minimizeButtonPosition');
                }
            }
            function _minimizedHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('minimizedHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('minimizedHeight');
                }
            }
            function _minimizedTitle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('minimizedTitle', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('minimizedTitle');
                }
            }
            function _orientation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('orientation', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('orientation');
                }
            }
            function _popupAnimationDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('popupAnimationDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('popupAnimationDelay');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('rtl');
                }
            }
            function _selection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('selection', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('selection');
                }
            }
            function _selectedItem (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('selectedItem', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('selectedItem');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavBar('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavBar('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxNavBar(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['columns','disabled','height','minimized','minimizeButtonPosition','minimizedHeight','minimizedTitle','orientation','popupAnimationDelay','rtl','selection','selectedItem','theme','width'];
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
                 get columns() {
                     return _columns();
                 },
                 set columns(newValue) {
                     _columns(newValue);
                 },
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
                 get minimized() {
                     return _minimized();
                 },
                 set minimized(newValue) {
                     _minimized(newValue);
                 },
                 get minimizeButtonPosition() {
                     return _minimizeButtonPosition();
                 },
                 set minimizeButtonPosition(newValue) {
                     _minimizeButtonPosition(newValue);
                 },
                 get minimizedHeight() {
                     return _minimizedHeight();
                 },
                 set minimizedHeight(newValue) {
                     _minimizedHeight(newValue);
                 },
                 get minimizedTitle() {
                     return _minimizedTitle();
                 },
                 set minimizedTitle(newValue) {
                     _minimizedTitle(newValue);
                 },
                 get orientation() {
                     return _orientation();
                 },
                 set orientation(newValue) {
                     _orientation(newValue);
                 },
                 get popupAnimationDelay() {
                     return _popupAnimationDelay();
                 },
                 set popupAnimationDelay(newValue) {
                     _popupAnimationDelay(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get selection() {
                     return _selection();
                 },
                 set selection(newValue) {
                     _selection(newValue);
                 },
                 get selectedItem() {
                     return _selectedItem();
                 },
                 set selectedItem(newValue) {
                     _selectedItem(newValue);
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
				JQXLite(componentSelector).jqxNavBar(widgetOptions);
			})
			return {id, componentSelector, close,destroy,getSelectedIndex,open,selectAt, setOptions, options, getOptions, createComponent};
        },
    }
</script>
