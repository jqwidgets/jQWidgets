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
    import '../jqwidgets/jqxtabs.js';

    export default {
        props: {
            animationType: String,
            arrowButtonSize: Number,
            autoHeight: {
                default: true,
                type: Boolean
            },
            canCloseAllTabs: {
                default: true,
                type: Boolean
            },
            closeButtonSize: Number,
            collapsible: {
                default: false,
                type: Boolean
            },
            contentTransitionDuration: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            enabledHover: {
                default: true,
                type: Boolean
            },
            enableScrollAnimation: {
                default: true,
                type: Boolean
            },
            enableDropAnimation: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            headerHeight: Number,
            initTabContent: Function,
            keyboardNavigation: {
                default: true,
                type: Boolean
            },
            position: String,
            reorder: {
                default: false,
                type: Boolean
            },
            rtl: {
                default: false,
                type: Boolean
            },
            scrollAnimationDuration: Number,
            selectedItem: Number,
            selectionTracker: {
                default: false,
                type: Boolean
            },
            selectionTrackerAnimationDuration: Number,
            scrollable: {
                default: true,
                type: Boolean
            },
            scrollPosition: String,
            scrollStep: Number,
            showCloseButtons: {
                default: false,
                type: Boolean
            },
            toggleMode: String,
            theme: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["add","collapsed","dragStart","dragEnd","expanded","locked","removed","selecting","selected","tabclick","unlocked","unselecting","unselected"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxTabs" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTabs(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTabs(usedProps[i]);
                }
                return resultToReturn;
            }
            function addAt(index, title, content) {
                JQXLite(componentSelector).jqxTabs('addAt', index, title, content);  
            }
            function addFirst(htmlElement1, htmlElement2) {
                JQXLite(componentSelector).jqxTabs('addFirst', htmlElement1, htmlElement2);  
            }
            function addLast(htmlElement1, htmlElement2) {
                JQXLite(componentSelector).jqxTabs('addLast', htmlElement1, htmlElement2);  
            }
            function collapse() {
                JQXLite(componentSelector).jqxTabs('collapse');  
            }
            function disable() {
                JQXLite(componentSelector).jqxTabs('disable');  
            }
            function disableAt(index) {
                JQXLite(componentSelector).jqxTabs('disableAt', index);  
            }
            function destroy() {
                JQXLite(componentSelector).jqxTabs('destroy');  
            }
            function ensureVisible(index) {
                JQXLite(componentSelector).jqxTabs('ensureVisible', index);  
            }
            function enableAt(index) {
                JQXLite(componentSelector).jqxTabs('enableAt', index);  
            }
            function expand() {
                JQXLite(componentSelector).jqxTabs('expand');  
            }
            function first() {
                JQXLite(componentSelector).jqxTabs('first');  
            }
            function enable() {
                JQXLite(componentSelector).jqxTabs('enable');  
            }
            function focus() {
                JQXLite(componentSelector).jqxTabs('focus');  
            }
            function getTitleAt(index) {
                return JQXLite(componentSelector).jqxTabs('getTitleAt', index);  
            }
            function getContentAt(index) {
                return JQXLite(componentSelector).jqxTabs('getContentAt', index);  
            }
            function getEnabledTabsCount() {
                return JQXLite(componentSelector).jqxTabs('getEnabledTabsCount');  
            }
            function getDisabledTabsCount() {
                return JQXLite(componentSelector).jqxTabs('getDisabledTabsCount');  
            }
            function hideCloseButtonAt(index) {
                JQXLite(componentSelector).jqxTabs('hideCloseButtonAt', index);  
            }
            function hideAllCloseButtons() {
                JQXLite(componentSelector).jqxTabs('hideAllCloseButtons');  
            }
            function isDisabled(index) {
                return JQXLite(componentSelector).jqxTabs('isDisabled', index);  
            }
            function last() {
                JQXLite(componentSelector).jqxTabs('last');  
            }
            function length() {
                return JQXLite(componentSelector).jqxTabs('length');  
            }
            function lockAt(index) {
                JQXLite(componentSelector).jqxTabs('lockAt', index);  
            }
            function lockAll() {
                JQXLite(componentSelector).jqxTabs('lockAll');  
            }
            function next(index) {
                return JQXLite(componentSelector).jqxTabs('next', index);  
            }
            function previous(index) {
                return JQXLite(componentSelector).jqxTabs('previous', index);  
            }
            function removeAt(index) {
                JQXLite(componentSelector).jqxTabs('removeAt', index);  
            }
            function removeFirst() {
                JQXLite(componentSelector).jqxTabs('removeFirst');  
            }
            function removeLast() {
                JQXLite(componentSelector).jqxTabs('removeLast');  
            }
            function select(index) {
                JQXLite(componentSelector).jqxTabs('select', index);  
            }
            function setContentAt(index, htmlElement) {
                JQXLite(componentSelector).jqxTabs('setContentAt', index, htmlElement);  
            }
            function setTitleAt(index, htmlElement) {
                JQXLite(componentSelector).jqxTabs('setTitleAt', index, htmlElement);  
            }
            function showCloseButtonAt(index) {
                JQXLite(componentSelector).jqxTabs('showCloseButtonAt', index);  
            }
            function showAllCloseButtons() {
                JQXLite(componentSelector).jqxTabs('showAllCloseButtons');  
            }
            function unlockAt(index) {
                JQXLite(componentSelector).jqxTabs('unlockAt', index);  
            }
            function unlockAll() {
                JQXLite(componentSelector).jqxTabs('unlockAll');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxTabs('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxTabs('val');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('animationType');
                }
            }
            function _arrowButtonSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('arrowButtonSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('arrowButtonSize');
                }
            }
            function _autoHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('autoHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('autoHeight');
                }
            }
            function _canCloseAllTabs (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('canCloseAllTabs', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('canCloseAllTabs');
                }
            }
            function _closeButtonSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('closeButtonSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('closeButtonSize');
                }
            }
            function _collapsible (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('collapsible', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('collapsible');
                }
            }
            function _contentTransitionDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('contentTransitionDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('contentTransitionDuration');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('disabled');
                }
            }
            function _enabledHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('enabledHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('enabledHover');
                }
            }
            function _enableScrollAnimation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('enableScrollAnimation', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('enableScrollAnimation');
                }
            }
            function _enableDropAnimation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('enableDropAnimation', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('enableDropAnimation');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('height');
                }
            }
            function _headerHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('headerHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('headerHeight');
                }
            }
            function _initTabContent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('initTabContent', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('initTabContent');
                }
            }
            function _keyboardNavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('keyboardNavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('keyboardNavigation');
                }
            }
            function _position (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('position', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('position');
                }
            }
            function _reorder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('reorder', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('reorder');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('rtl');
                }
            }
            function _scrollAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('scrollAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('scrollAnimationDuration');
                }
            }
            function _selectedItem (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('selectedItem', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('selectedItem');
                }
            }
            function _selectionTracker (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('selectionTracker', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('selectionTracker');
                }
            }
            function _selectionTrackerAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('selectionTrackerAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('selectionTrackerAnimationDuration');
                }
            }
            function _scrollable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('scrollable', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('scrollable');
                }
            }
            function _scrollPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('scrollPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('scrollPosition');
                }
            }
            function _scrollStep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('scrollStep', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('scrollStep');
                }
            }
            function _showCloseButtons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('showCloseButtons', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('showCloseButtons');
                }
            }
            function _toggleMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('toggleMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('toggleMode');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('theme');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTabs(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationType','arrowButtonSize','autoHeight','canCloseAllTabs','closeButtonSize','collapsible','contentTransitionDuration','disabled','enabledHover','enableScrollAnimation','enableDropAnimation','height','headerHeight','initTabContent','keyboardNavigation','position','reorder','rtl','scrollAnimationDuration','selectedItem','selectionTracker','selectionTrackerAnimationDuration','scrollable','scrollPosition','scrollStep','showCloseButtons','toggleMode','theme','width'];
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
                 get arrowButtonSize() {
                     return _arrowButtonSize();
                 },
                 set arrowButtonSize(newValue) {
                     _arrowButtonSize(newValue);
                 },
                 get autoHeight() {
                     return _autoHeight();
                 },
                 set autoHeight(newValue) {
                     _autoHeight(newValue);
                 },
                 get canCloseAllTabs() {
                     return _canCloseAllTabs();
                 },
                 set canCloseAllTabs(newValue) {
                     _canCloseAllTabs(newValue);
                 },
                 get closeButtonSize() {
                     return _closeButtonSize();
                 },
                 set closeButtonSize(newValue) {
                     _closeButtonSize(newValue);
                 },
                 get collapsible() {
                     return _collapsible();
                 },
                 set collapsible(newValue) {
                     _collapsible(newValue);
                 },
                 get contentTransitionDuration() {
                     return _contentTransitionDuration();
                 },
                 set contentTransitionDuration(newValue) {
                     _contentTransitionDuration(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get enabledHover() {
                     return _enabledHover();
                 },
                 set enabledHover(newValue) {
                     _enabledHover(newValue);
                 },
                 get enableScrollAnimation() {
                     return _enableScrollAnimation();
                 },
                 set enableScrollAnimation(newValue) {
                     _enableScrollAnimation(newValue);
                 },
                 get enableDropAnimation() {
                     return _enableDropAnimation();
                 },
                 set enableDropAnimation(newValue) {
                     _enableDropAnimation(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get headerHeight() {
                     return _headerHeight();
                 },
                 set headerHeight(newValue) {
                     _headerHeight(newValue);
                 },
                 get initTabContent() {
                     return _initTabContent();
                 },
                 set initTabContent(newValue) {
                     _initTabContent(newValue);
                 },
                 get keyboardNavigation() {
                     return _keyboardNavigation();
                 },
                 set keyboardNavigation(newValue) {
                     _keyboardNavigation(newValue);
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
                 get scrollAnimationDuration() {
                     return _scrollAnimationDuration();
                 },
                 set scrollAnimationDuration(newValue) {
                     _scrollAnimationDuration(newValue);
                 },
                 get selectedItem() {
                     return _selectedItem();
                 },
                 set selectedItem(newValue) {
                     _selectedItem(newValue);
                 },
                 get selectionTracker() {
                     return _selectionTracker();
                 },
                 set selectionTracker(newValue) {
                     _selectionTracker(newValue);
                 },
                 get selectionTrackerAnimationDuration() {
                     return _selectionTrackerAnimationDuration();
                 },
                 set selectionTrackerAnimationDuration(newValue) {
                     _selectionTrackerAnimationDuration(newValue);
                 },
                 get scrollable() {
                     return _scrollable();
                 },
                 set scrollable(newValue) {
                     _scrollable(newValue);
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
                 get showCloseButtons() {
                     return _showCloseButtons();
                 },
                 set showCloseButtons(newValue) {
                     _showCloseButtons(newValue);
                 },
                 get toggleMode() {
                     return _toggleMode();
                 },
                 set toggleMode(newValue) {
                     _toggleMode(newValue);
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

                JQXLite(componentSelector).on('add', function (event) { that.emit('add', event); });
                JQXLite(componentSelector).on('collapsed', function (event) { that.emit('collapsed', event); });
                JQXLite(componentSelector).on('dragStart', function (event) { that.emit('dragStart', event); });
                JQXLite(componentSelector).on('dragEnd', function (event) { that.emit('dragEnd', event); });
                JQXLite(componentSelector).on('expanded', function (event) { that.emit('expanded', event); });
                JQXLite(componentSelector).on('locked', function (event) { that.emit('locked', event); });
                JQXLite(componentSelector).on('removed', function (event) { that.emit('removed', event); });
                JQXLite(componentSelector).on('selecting', function (event) { that.emit('selecting', event); });
                JQXLite(componentSelector).on('selected', function (event) { that.emit('selected', event); });
                JQXLite(componentSelector).on('tabclick', function (event) { that.emit('tabclick', event); });
                JQXLite(componentSelector).on('unlocked', function (event) { that.emit('unlocked', event); });
                JQXLite(componentSelector).on('unselecting', function (event) { that.emit('unselecting', event); });
                JQXLite(componentSelector).on('unselected', function (event) { that.emit('unselected', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxTabs(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxTabs('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, addAt, addFirst, addLast, collapse, disable, disableAt, destroy, ensureVisible, enableAt, expand, first, enable, focus, getTitleAt, getContentAt, getEnabledTabsCount, getDisabledTabsCount, hideCloseButtonAt, hideAllCloseButtons, isDisabled, last, length, lockAt, lockAll, next, previous, removeAt, removeFirst, removeLast, select, setContentAt, setTitleAt, showCloseButtonAt, showAllCloseButtons, unlockAt, unlockAll, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
