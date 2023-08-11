<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxexpander.js';

    export default {
        props: {
            animationType: String,
            arrowPosition: String,
            collapseAnimationDuration: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            expanded: {
                default: true,
                type: Boolean
            },
            expandAnimationDuration: Number,
            height: [Number, String],
            headerPosition: String,
            initContent: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            showArrow: {
                default: true,
                type: Boolean
            },
            theme: String,
            toggleMode: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["collapsing","collapsed","expanding","expanded"],
        setup(props, context) {
			const id = "jqxExpander" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxExpander(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxExpander(usedProps[i]);
                }
                return resultToReturn;
            }
            function collapse() {
                JQXLite(componentSelector).jqxExpander('collapse');  
            }
            function disable() {
                JQXLite(componentSelector).jqxExpander('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxExpander('destroy');  
            }
            function enable() {
                JQXLite(componentSelector).jqxExpander('enable');  
            }
            function expand() {
                JQXLite(componentSelector).jqxExpander('expand');  
            }
            function focus() {
                JQXLite(componentSelector).jqxExpander('focus');  
            }
            function getContent() {
                return JQXLite(componentSelector).jqxExpander('getContent');  
            }
            function getHeaderContent() {
                return JQXLite(componentSelector).jqxExpander('getHeaderContent');  
            }
            function invalidate() {
                JQXLite(componentSelector).jqxExpander('invalidate');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxExpander('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxExpander('render');  
            }
            function setHeaderContent(headerContent) {
                JQXLite(componentSelector).jqxExpander('setHeaderContent', headerContent);  
            }
            function setContent(content) {
                JQXLite(componentSelector).jqxExpander('setContent', content);  
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('animationType');
                }
            }
            function _arrowPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('arrowPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('arrowPosition');
                }
            }
            function _collapseAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('collapseAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('collapseAnimationDuration');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('disabled');
                }
            }
            function _expanded (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('expanded', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('expanded');
                }
            }
            function _expandAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('expandAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('expandAnimationDuration');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('height');
                }
            }
            function _headerPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('headerPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('headerPosition');
                }
            }
            function _initContent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('initContent', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('initContent');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('rtl');
                }
            }
            function _showArrow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('showArrow', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('showArrow');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('theme');
                }
            }
            function _toggleMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('toggleMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('toggleMode');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxExpander('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxExpander('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxExpander(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expanded','expandAnimationDuration','height','headerPosition','initContent','rtl','showArrow','theme','toggleMode','width'];
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
                 get arrowPosition() {
                     return _arrowPosition();
                 },
                 set arrowPosition(newValue) {
                     _arrowPosition(newValue);
                 },
                 get collapseAnimationDuration() {
                     return _collapseAnimationDuration();
                 },
                 set collapseAnimationDuration(newValue) {
                     _collapseAnimationDuration(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get expanded() {
                     return _expanded();
                 },
                 set expanded(newValue) {
                     _expanded(newValue);
                 },
                 get expandAnimationDuration() {
                     return _expandAnimationDuration();
                 },
                 set expandAnimationDuration(newValue) {
                     _expandAnimationDuration(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get headerPosition() {
                     return _headerPosition();
                 },
                 set headerPosition(newValue) {
                     _headerPosition(newValue);
                 },
                 get initContent() {
                     return _initContent();
                 },
                 set initContent(newValue) {
                     _initContent(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get showArrow() {
                     return _showArrow();
                 },
                 set showArrow(newValue) {
                     _showArrow(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get toggleMode() {
                     return _toggleMode();
                 },
                 set toggleMode(newValue) {
                     _toggleMode(newValue);
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

                JQXLite(componentSelector).on('collapsing', function (event) { that.emit('collapsing', event); });
                JQXLite(componentSelector).on('collapsed', function (event) { that.emit('collapsed', event); });
                JQXLite(componentSelector).on('expanding', function (event) { that.emit('expanding', event); });
                JQXLite(componentSelector).on('expanded', function (event) { that.emit('expanded', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxExpander(widgetOptions);
			})
			return {id, componentSelector, collapse,disable,destroy,enable,expand,focus,getContent,getHeaderContent,invalidate,refresh,render,setHeaderContent,setContent, setOptions, options, getOptions, createComponent};
        },
    }
</script>
