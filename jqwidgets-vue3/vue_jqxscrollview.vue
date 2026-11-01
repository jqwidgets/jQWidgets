<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
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
            carouselString: String,
            currentPage: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            dragEnabled: {
                default: true,
                type: Boolean
            },
            height: [Number, String],
            moveThreshold: Number,
            showButtons: {
                default: true,
                type: Boolean
            },
            slideString: String,
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
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxScrollView" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
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
            function destroy() {
                JQXLite(componentSelector).jqxScrollView('destroy');  
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
            function _carouselString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('carouselString', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('carouselString');
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
            function _dragEnabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('dragEnabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('dragEnabled');
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
            function _slideString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxScrollView('slideString', arg)
                } else {
                    return JQXLite(componentSelector).jqxScrollView('slideString');
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
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationDuration','bounceEnabled','buttonsOffset','carouselString','currentPage','disabled','dragEnabled','height','moveThreshold','showButtons','slideString','slideShow','slideDuration','theme','width'];
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
                 get carouselString() {
                     return _carouselString();
                 },
                 set carouselString(newValue) {
                     _carouselString(newValue);
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
                 get dragEnabled() {
                     return _dragEnabled();
                 },
                 set dragEnabled(newValue) {
                     _dragEnabled(newValue);
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
                 get slideString() {
                     return _slideString();
                 },
                 set slideString(newValue) {
                     _slideString(newValue);
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
				if (hasChanges) JQXLite(componentSelector).jqxScrollView(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxScrollView('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, back, changePage, destroy, forward, refresh, setOptions, options, getOptions, createComponent};
        },
    }
</script>
