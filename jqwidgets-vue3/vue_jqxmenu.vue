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
    import '../jqwidgets/jqxmenu.js';

    export default {
        props: {
            animationShowDuration: Number,
            animationHideDuration: Number,
            animationHideDelay: Number,
            animationShowDelay: Number,
            autoCloseInterval: Number,
            autoSizeMainItems: {
                default: false,
                type: Boolean
            },
            autoCloseOnClick: {
                default: true,
                type: Boolean
            },
            autoOpenPopup: {
                default: true,
                type: Boolean
            },
            autoOpen: {
                default: true,
                type: Boolean
            },
            autoCloseOnMouseLeave: {
                default: true,
                type: Boolean
            },
            clickToOpen: {
                default: false,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            enableHover: {
                default: true,
                type: Boolean
            },
            easing: String,
            height: [Number, String],
            keyboardNavigation: {
                default: false,
                type: Boolean
            },
            minimizeWidth: [String, Number],
            mode: String,
            popupZIndex: Number,
            rtl: {
                default: false,
                type: Boolean
            },
            showTopLevelArrows: {
                default: false,
                type: Boolean
            },
            source: [Array, Object],
            theme: String,
            title: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["closed","itemclick","shown"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxMenu" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxMenu(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxMenu(usedProps[i]);
                }
                return resultToReturn;
            }
            function closeItem(itemID) {
                JQXLite(componentSelector).jqxMenu('closeItem', itemID);  
            }
            function close() {
                JQXLite(componentSelector).jqxMenu('close');  
            }
            function disable(itemID, value) {
                JQXLite(componentSelector).jqxMenu('disable', itemID, value);  
            }
            function disableItem(itemID) {
                JQXLite(componentSelector).jqxMenu('disableItem', itemID);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxMenu('destroy');  
            }
            function enableItem(itemID) {
                JQXLite(componentSelector).jqxMenu('enableItem', itemID);  
            }
            function focus() {
                JQXLite(componentSelector).jqxMenu('focus');  
            }
            function hideItem(itemID) {
                JQXLite(componentSelector).jqxMenu('hideItem', itemID);  
            }
            function minimize() {
                JQXLite(componentSelector).jqxMenu('minimize');  
            }
            function open(left, top) {
                JQXLite(componentSelector).jqxMenu('open', left, top);  
            }
            function openItem(itemID) {
                JQXLite(componentSelector).jqxMenu('openItem', itemID);  
            }
            function restore() {
                JQXLite(componentSelector).jqxMenu('restore');  
            }
            function setItemOpenDirection(item, horizontaldirection, verticaldirection) {
                JQXLite(componentSelector).jqxMenu('setItemOpenDirection', item, horizontaldirection, verticaldirection);  
            }
            function showItem(itemID) {
                JQXLite(componentSelector).jqxMenu('showItem', itemID);  
            }
            function _animationShowDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('animationShowDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('animationShowDuration');
                }
            }
            function _animationHideDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('animationHideDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('animationHideDuration');
                }
            }
            function _animationHideDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('animationHideDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('animationHideDelay');
                }
            }
            function _animationShowDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('animationShowDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('animationShowDelay');
                }
            }
            function _autoCloseInterval (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('autoCloseInterval', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('autoCloseInterval');
                }
            }
            function _autoSizeMainItems (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('autoSizeMainItems', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('autoSizeMainItems');
                }
            }
            function _autoCloseOnClick (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('autoCloseOnClick', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('autoCloseOnClick');
                }
            }
            function _autoOpenPopup (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('autoOpenPopup', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('autoOpenPopup');
                }
            }
            function _autoOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('autoOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('autoOpen');
                }
            }
            function _autoCloseOnMouseLeave (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('autoCloseOnMouseLeave', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('autoCloseOnMouseLeave');
                }
            }
            function _clickToOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('clickToOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('clickToOpen');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('disabled');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('enableHover');
                }
            }
            function _easing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('easing', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('easing');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('height');
                }
            }
            function _keyboardNavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('keyboardNavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('keyboardNavigation');
                }
            }
            function _minimizeWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('minimizeWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('minimizeWidth');
                }
            }
            function _mode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('mode', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('mode');
                }
            }
            function _popupZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('popupZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('popupZIndex');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('rtl');
                }
            }
            function _showTopLevelArrows (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('showTopLevelArrows', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('showTopLevelArrows');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('source');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('theme');
                }
            }
            function _title (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('title', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('title');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxMenu('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxMenu('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxMenu(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationShowDuration','animationHideDuration','animationHideDelay','animationShowDelay','autoCloseInterval','autoSizeMainItems','autoCloseOnClick','autoOpenPopup','autoOpen','autoCloseOnMouseLeave','clickToOpen','disabled','enableHover','easing','height','keyboardNavigation','minimizeWidth','mode','popupZIndex','rtl','showTopLevelArrows','source','theme','title','width'];
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
                 get animationShowDuration() {
                     return _animationShowDuration();
                 },
                 set animationShowDuration(newValue) {
                     _animationShowDuration(newValue);
                 },
                 get animationHideDuration() {
                     return _animationHideDuration();
                 },
                 set animationHideDuration(newValue) {
                     _animationHideDuration(newValue);
                 },
                 get animationHideDelay() {
                     return _animationHideDelay();
                 },
                 set animationHideDelay(newValue) {
                     _animationHideDelay(newValue);
                 },
                 get animationShowDelay() {
                     return _animationShowDelay();
                 },
                 set animationShowDelay(newValue) {
                     _animationShowDelay(newValue);
                 },
                 get autoCloseInterval() {
                     return _autoCloseInterval();
                 },
                 set autoCloseInterval(newValue) {
                     _autoCloseInterval(newValue);
                 },
                 get autoSizeMainItems() {
                     return _autoSizeMainItems();
                 },
                 set autoSizeMainItems(newValue) {
                     _autoSizeMainItems(newValue);
                 },
                 get autoCloseOnClick() {
                     return _autoCloseOnClick();
                 },
                 set autoCloseOnClick(newValue) {
                     _autoCloseOnClick(newValue);
                 },
                 get autoOpenPopup() {
                     return _autoOpenPopup();
                 },
                 set autoOpenPopup(newValue) {
                     _autoOpenPopup(newValue);
                 },
                 get autoOpen() {
                     return _autoOpen();
                 },
                 set autoOpen(newValue) {
                     _autoOpen(newValue);
                 },
                 get autoCloseOnMouseLeave() {
                     return _autoCloseOnMouseLeave();
                 },
                 set autoCloseOnMouseLeave(newValue) {
                     _autoCloseOnMouseLeave(newValue);
                 },
                 get clickToOpen() {
                     return _clickToOpen();
                 },
                 set clickToOpen(newValue) {
                     _clickToOpen(newValue);
                 },
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
                 get easing() {
                     return _easing();
                 },
                 set easing(newValue) {
                     _easing(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get keyboardNavigation() {
                     return _keyboardNavigation();
                 },
                 set keyboardNavigation(newValue) {
                     _keyboardNavigation(newValue);
                 },
                 get minimizeWidth() {
                     return _minimizeWidth();
                 },
                 set minimizeWidth(newValue) {
                     _minimizeWidth(newValue);
                 },
                 get mode() {
                     return _mode();
                 },
                 set mode(newValue) {
                     _mode(newValue);
                 },
                 get popupZIndex() {
                     return _popupZIndex();
                 },
                 set popupZIndex(newValue) {
                     _popupZIndex(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get showTopLevelArrows() {
                     return _showTopLevelArrows();
                 },
                 set showTopLevelArrows(newValue) {
                     _showTopLevelArrows(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get title() {
                     return _title();
                 },
                 set title(newValue) {
                     _title(newValue);
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

                JQXLite(componentSelector).on('closed', function (event) { that.emit('closed', event); });
                JQXLite(componentSelector).on('itemclick', function (event) { that.emit('itemclick', event); });
                JQXLite(componentSelector).on('shown', function (event) { that.emit('shown', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxMenu(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxMenu('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, closeItem, close, disable, disableItem, destroy, enableItem, focus, hideItem, minimize, open, openItem, restore, setItemOpenDirection, showItem, setOptions, options, getOptions, createComponent};
        },
    }
</script>
