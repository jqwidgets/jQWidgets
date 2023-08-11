<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollview.js';

    export default {
        props: {
            animationDuration: Number,
            bounceEnabled: {
                default: true,
                type: Boolean
            },
            buttonsOffset: Array,
            currentPage: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            moveThreshold: Number,
            showButtons: {
                default: true,
                type: Boolean
            },
            slideShow: {
                default: false,
                type: Boolean
            },
            slideDuration: Number,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["pageChanged"],
        setup(props, context) {
			const id = "jqxScrollView" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxScrollView(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxScrollView(usedProps[i]);
                }
                return resultToReturn;
            }
            function back() {
                JQXLite(componentSelector).jqxScrollView('back');  
            }
            function changePage(index) {
                JQXLite(componentSelector).jqxScrollView('changePage', index);  
            }
            function forward() {
                JQXLite(componentSelector).jqxScrollView('forward');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxScrollView('refresh');  
            }
            function _animationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('animationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('animationDuration');
                }
            }
            function _bounceEnabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('bounceEnabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('bounceEnabled');
                }
            }
            function _buttonsOffset (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('buttonsOffset', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('buttonsOffset');
                }
            }
            function _currentPage (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('currentPage', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('currentPage');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('height');
                }
            }
            function _moveThreshold (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('moveThreshold', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('moveThreshold');
                }
            }
            function _showButtons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('showButtons', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('showButtons');
                }
            }
            function _slideShow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('slideShow', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('slideShow');
                }
            }
            function _slideDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('slideDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('slideDuration');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxScrollView(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDuration','bounceEnabled','buttonsOffset','currentPage','disabled','height','moveThreshold','showButtons','slideShow','slideDuration','theme','width'];
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
                 get animationDuration() {
                     return _animationDuration();
                 },
                 set animationDuration(newValue) {
                     _animationDuration(newValue);
                 },
                 get bounceEnabled() {
                     return _bounceEnabled();
                 },
                 set bounceEnabled(newValue) {
                     _bounceEnabled(newValue);
                 },
                 get buttonsOffset() {
                     return _buttonsOffset();
                 },
                 set buttonsOffset(newValue) {
                     _buttonsOffset(newValue);
                 },
                 get currentPage() {
                     return _currentPage();
                 },
                 set currentPage(newValue) {
                     _currentPage(newValue);
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
                 get moveThreshold() {
                     return _moveThreshold();
                 },
                 set moveThreshold(newValue) {
                     _moveThreshold(newValue);
                 },
                 get showButtons() {
                     return _showButtons();
                 },
                 set showButtons(newValue) {
                     _showButtons(newValue);
                 },
                 get slideShow() {
                     return _slideShow();
                 },
                 set slideShow(newValue) {
                     _slideShow(newValue);
                 },
                 get slideDuration() {
                     return _slideDuration();
                 },
                 set slideDuration(newValue) {
                     _slideDuration(newValue);
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

                JQXLite(componentSelector).on('pageChanged', function (event) { that.emit('pageChanged', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxScrollView(widgetOptions);
			})
			return {id, componentSelector, back,changePage,forward,refresh, setOptions, options, getOptions, createComponent};
        },
    }
</script>
