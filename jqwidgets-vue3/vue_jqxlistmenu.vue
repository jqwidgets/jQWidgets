<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxscrollbar.js';
    import '../jqwidgets/jqxlistmenu.js';

    export default {
        props: {
            alwaysShowNavigationArrows: {
                default: false,
                type: Boolean
            },
            animationType: String,
            animationDuration: Number,
            autoSeparators: {
                default: false,
                type: Boolean
            },
            backLabel: String,
            disabled: {
                default: false,
                type: Boolean
            },
            enableScrolling: {
                default: true,
                type: Boolean
            },
            filterCallback: Function,
            height: [String, Number],
            headerAnimationDuration: Number,
            placeHolder: String,
            readOnly: {
                default: false,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            roundedCorners: {
                default: true,
                type: Boolean
            },
            showNavigationArrows: {
                default: true,
                type: Boolean
            },
            showFilter: {
                default: false,
                type: Boolean
            },
            showHeader: {
                default: true,
                type: Boolean
            },
            showBackButton: {
                default: true,
                type: Boolean
            },
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: [],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxListMenu" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxListMenu(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxListMenu(usedProps[i]);
                }
                return resultToReturn;
            }
            function back() {
                JQXLite(componentSelector).jqxListMenu('back');  
            }
            function changePage(Item) {
                JQXLite(componentSelector).jqxListMenu('changePage', Item);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxListMenu('destroy');  
            }
            function disable() {
                JQXLite(componentSelector).jqxListMenu('disable');  
            }
            function enable() {
                JQXLite(componentSelector).jqxListMenu('enable');  
            }
            function _alwaysShowNavigationArrows (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('alwaysShowNavigationArrows', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('alwaysShowNavigationArrows');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('animationType');
                }
            }
            function _animationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('animationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('animationDuration');
                }
            }
            function _autoSeparators (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('autoSeparators', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('autoSeparators');
                }
            }
            function _backLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('backLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('backLabel');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('disabled');
                }
            }
            function _enableScrolling (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('enableScrolling', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('enableScrolling');
                }
            }
            function _filterCallback (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('filterCallback', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('filterCallback');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('height');
                }
            }
            function _headerAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('headerAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('headerAnimationDuration');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('placeHolder');
                }
            }
            function _readOnly (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('readOnly', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('readOnly');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('rtl');
                }
            }
            function _roundedCorners (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('roundedCorners', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('roundedCorners');
                }
            }
            function _showNavigationArrows (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('showNavigationArrows', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('showNavigationArrows');
                }
            }
            function _showFilter (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('showFilter', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('showFilter');
                }
            }
            function _showHeader (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('showHeader', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('showHeader');
                }
            }
            function _showBackButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('showBackButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('showBackButton');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxListMenu('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxListMenu('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxListMenu(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['alwaysShowNavigationArrows','animationType','animationDuration','autoSeparators','backLabel','disabled','enableScrolling','filterCallback','height','headerAnimationDuration','placeHolder','readOnly','rtl','roundedCorners','showNavigationArrows','showFilter','showHeader','showBackButton','theme','width'];
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
                 get alwaysShowNavigationArrows() {
                     return _alwaysShowNavigationArrows();
                 },
                 set alwaysShowNavigationArrows(newValue) {
                     _alwaysShowNavigationArrows(newValue);
                 },
                 get animationType() {
                     return _animationType();
                 },
                 set animationType(newValue) {
                     _animationType(newValue);
                 },
                 get animationDuration() {
                     return _animationDuration();
                 },
                 set animationDuration(newValue) {
                     _animationDuration(newValue);
                 },
                 get autoSeparators() {
                     return _autoSeparators();
                 },
                 set autoSeparators(newValue) {
                     _autoSeparators(newValue);
                 },
                 get backLabel() {
                     return _backLabel();
                 },
                 set backLabel(newValue) {
                     _backLabel(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get enableScrolling() {
                     return _enableScrolling();
                 },
                 set enableScrolling(newValue) {
                     _enableScrolling(newValue);
                 },
                 get filterCallback() {
                     return _filterCallback();
                 },
                 set filterCallback(newValue) {
                     _filterCallback(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get headerAnimationDuration() {
                     return _headerAnimationDuration();
                 },
                 set headerAnimationDuration(newValue) {
                     _headerAnimationDuration(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get readOnly() {
                     return _readOnly();
                 },
                 set readOnly(newValue) {
                     _readOnly(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get roundedCorners() {
                     return _roundedCorners();
                 },
                 set roundedCorners(newValue) {
                     _roundedCorners(newValue);
                 },
                 get showNavigationArrows() {
                     return _showNavigationArrows();
                 },
                 set showNavigationArrows(newValue) {
                     _showNavigationArrows(newValue);
                 },
                 get showFilter() {
                     return _showFilter();
                 },
                 set showFilter(newValue) {
                     _showFilter(newValue);
                 },
                 get showHeader() {
                     return _showHeader();
                 },
                 set showHeader(newValue) {
                     _showHeader(newValue);
                 },
                 get showBackButton() {
                     return _showBackButton();
                 },
                 set showBackButton(newValue) {
                     _showBackButton(newValue);
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
				if (hasChanges) JQXLite(componentSelector).jqxListMenu(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxListMenu('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, back, changePage, destroy, disable, enable, setOptions, options, getOptions, createComponent};
        },
    }
</script>
