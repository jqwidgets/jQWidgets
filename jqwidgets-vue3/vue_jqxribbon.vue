<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxribbon.js';

    export default {
        props: {
            animationType: String,
            animationDelay: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            initContent: Function,
            mode: String,
            popupCloseMode: String,
            position: String,
            reorder: {
                default: false,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            selectedIndex: Number,
            selectionMode: String,
            scrollPosition: String,
            scrollStep: Number,
            scrollDelay: Number,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["change","reorder","select","unselect"],
        setup(props, context) {
			const id = "jqxRibbon" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxRibbon(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxRibbon(usedProps[i]);
                }
                return resultToReturn;
            }
            function addAt(index, item) {
                JQXLite(componentSelector).jqxRibbon('addAt', index, item);  
            }
            function clearSelection() {
                JQXLite(componentSelector).jqxRibbon('clearSelection');  
            }
            function disableAt(index) {
                JQXLite(componentSelector).jqxRibbon('disableAt', index);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxRibbon('destroy');  
            }
            function enableAt(index) {
                JQXLite(componentSelector).jqxRibbon('enableAt', index);  
            }
            function hideAt(index) {
                JQXLite(componentSelector).jqxRibbon('hideAt', index);  
            }
            function removeAt(index) {
                JQXLite(componentSelector).jqxRibbon('removeAt', index);  
            }
            function render() {
                JQXLite(componentSelector).jqxRibbon('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxRibbon('refresh');  
            }
            function selectAt(index) {
                JQXLite(componentSelector).jqxRibbon('selectAt', index);  
            }
            function showAt(index) {
                JQXLite(componentSelector).jqxRibbon('showAt', index);  
            }
            function setPopupLayout(index, layout, width, height) {
                JQXLite(componentSelector).jqxRibbon('setPopupLayout', index, layout, width, height);  
            }
            function updateAt(index, item) {
                JQXLite(componentSelector).jqxRibbon('updateAt', index, item);  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('val');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('animationType');
                }
            }
            function _animationDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('animationDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('animationDelay');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('height');
                }
            }
            function _initContent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('initContent', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('initContent');
                }
            }
            function _mode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('mode', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('mode');
                }
            }
            function _popupCloseMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('popupCloseMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('popupCloseMode');
                }
            }
            function _position (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('position', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('position');
                }
            }
            function _reorder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('reorder', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('reorder');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('rtl');
                }
            }
            function _selectedIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('selectedIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('selectedIndex');
                }
            }
            function _selectionMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('selectionMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('selectionMode');
                }
            }
            function _scrollPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('scrollPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('scrollPosition');
                }
            }
            function _scrollStep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('scrollStep', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('scrollStep');
                }
            }
            function _scrollDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('scrollDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('scrollDelay');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxRibbon('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxRibbon('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxRibbon(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationType','animationDelay','disabled','height','initContent','mode','popupCloseMode','position','reorder','rtl','selectedIndex','selectionMode','scrollPosition','scrollStep','scrollDelay','theme','width'];
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
                 get animationType() {
                     return _animationType();
                 },
                 set animationType(newValue) {
                     _animationType(newValue);
                 },
                 get animationDelay() {
                     return _animationDelay();
                 },
                 set animationDelay(newValue) {
                     _animationDelay(newValue);
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
                 get initContent() {
                     return _initContent();
                 },
                 set initContent(newValue) {
                     _initContent(newValue);
                 },
                 get mode() {
                     return _mode();
                 },
                 set mode(newValue) {
                     _mode(newValue);
                 },
                 get popupCloseMode() {
                     return _popupCloseMode();
                 },
                 set popupCloseMode(newValue) {
                     _popupCloseMode(newValue);
                 },
                 get position() {
                     return _position();
                 },
                 set position(newValue) {
                     _position(newValue);
                 },
                 get reorder() {
                     return _reorder();
                 },
                 set reorder(newValue) {
                     _reorder(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get selectedIndex() {
                     return _selectedIndex();
                 },
                 set selectedIndex(newValue) {
                     _selectedIndex(newValue);
                 },
                 get selectionMode() {
                     return _selectionMode();
                 },
                 set selectionMode(newValue) {
                     _selectionMode(newValue);
                 },
                 get scrollPosition() {
                     return _scrollPosition();
                 },
                 set scrollPosition(newValue) {
                     _scrollPosition(newValue);
                 },
                 get scrollStep() {
                     return _scrollStep();
                 },
                 set scrollStep(newValue) {
                     _scrollStep(newValue);
                 },
                 get scrollDelay() {
                     return _scrollDelay();
                 },
                 set scrollDelay(newValue) {
                     _scrollDelay(newValue);
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
                JQXLite(componentSelector).on('reorder', function (event) { that.emit('reorder', event); });
                JQXLite(componentSelector).on('select', function (event) { that.emit('select', event); });
                JQXLite(componentSelector).on('unselect', function (event) { that.emit('unselect', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxRibbon(widgetOptions);
			})
			return {id, componentSelector, addAt,clearSelection,disableAt,destroy,enableAt,hideAt,removeAt,render,refresh,selectAt,showAt,setPopupLayout,updateAt,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
