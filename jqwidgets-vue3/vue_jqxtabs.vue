<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxtabs.js';

    export default {
        props: {
            animationType: String,
            autoHeight: {
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
            initTabContent: Function,
            keyboardNavigation: {
                default: true,
                type: Boolean
            },
            next: Object,
            previous: Object,
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
        emits: ["add","collapsed","dragStart","dragEnd","expanded","removed","selecting","selected","tabclick","unselecting","unselected"],
        setup(props, context) {
			const id = "jqxTabs" + JQXLite.generateID();
			const componentSelector = '#' + id;
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
            function getDisabledTabsCount() {
                return JQXLite(componentSelector).jqxTabs('getDisabledTabsCount');  
            }
            function hideCloseButtonAt(index) {
                JQXLite(componentSelector).jqxTabs('hideCloseButtonAt', index);  
            }
            function hideAllCloseButtons() {
                JQXLite(componentSelector).jqxTabs('hideAllCloseButtons');  
            }
            function length() {
                return JQXLite(componentSelector).jqxTabs('length');  
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
            function _autoHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('autoHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('autoHeight');
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
            function _next (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('next', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('next');
                }
            }
            function _previous (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTabs('previous', arg)
                } else {
                    return JQXLite(componentSelector).jqxTabs('previous');
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
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationType','autoHeight','closeButtonSize','collapsible','contentTransitionDuration','disabled','enabledHover','enableScrollAnimation','enableDropAnimation','height','initTabContent','keyboardNavigation','next','previous','position','reorder','rtl','scrollAnimationDuration','selectedItem','selectionTracker','scrollable','scrollPosition','scrollStep','showCloseButtons','toggleMode','theme','width'];
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
                 get autoHeight() {
                     return _autoHeight();
                 },
                 set autoHeight(newValue) {
                     _autoHeight(newValue);
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
                 get next() {
                     return _next();
                 },
                 set next(newValue) {
                     _next(newValue);
                 },
                 get previous() {
                     return _previous();
                 },
                 set previous(newValue) {
                     _previous(newValue);
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
                JQXLite(componentSelector).on('removed', function (event) { that.emit('removed', event); });
                JQXLite(componentSelector).on('selecting', function (event) { that.emit('selecting', event); });
                JQXLite(componentSelector).on('selected', function (event) { that.emit('selected', event); });
                JQXLite(componentSelector).on('tabclick', function (event) { that.emit('tabclick', event); });
                JQXLite(componentSelector).on('unselecting', function (event) { that.emit('unselecting', event); });
                JQXLite(componentSelector).on('unselected', function (event) { that.emit('unselected', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxTabs(widgetOptions);
			})
			return {id, componentSelector, addAt,addFirst,addLast,collapse,disable,disableAt,destroy,ensureVisible,enableAt,expand,enable,focus,getTitleAt,getContentAt,getDisabledTabsCount,hideCloseButtonAt,hideAllCloseButtons,length,removeAt,removeFirst,removeLast,select,setContentAt,setTitleAt,showCloseButtonAt,showAllCloseButtons,val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
