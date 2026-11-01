<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onMounted, onUnmounted, watch } from 'vue';
	let __ssrIdCounter__ = 0;
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxnavigationbar.js';

    export default {
        props: {
            animationType: String,
            arrowPosition: String,
            collapseAnimationDuration: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            easing: String,
            expandAnimationDuration: Number,
            expandMode: String,
            expandedIndexes: Array,
            height: [Number, String],
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
        emits: ["collapsingItem","collapsedItem","expandingItem","expandedItem"],
        setup(props, context) {
			const __hasJQXLite__ = typeof JQXLite !== 'undefined';
			const id = "jqxNavigationBar" + (__hasJQXLite__ ? JQXLite.generateID() : 'SSR' + (++__ssrIdCounter__));
			const componentSelector = '#' + id;
			let __appliedProps__ = {}, __created__ = false, __host__ = null;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxNavigationBar(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxNavigationBar(usedProps[i]);
                }
                return resultToReturn;
            }
            function add(header, content) {
                JQXLite(componentSelector).jqxNavigationBar('add', header, content);  
            }
            function collapseAt(index) {
                JQXLite(componentSelector).jqxNavigationBar('collapseAt', index);  
            }
            function disableAt(index) {
                JQXLite(componentSelector).jqxNavigationBar('disableAt', index);  
            }
            function disable() {
                JQXLite(componentSelector).jqxNavigationBar('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxNavigationBar('destroy');  
            }
            function expandAt(index) {
                JQXLite(componentSelector).jqxNavigationBar('expandAt', index);  
            }
            function enableAt(index) {
                JQXLite(componentSelector).jqxNavigationBar('enableAt', index);  
            }
            function enable() {
                JQXLite(componentSelector).jqxNavigationBar('enable');  
            }
            function focus() {
                JQXLite(componentSelector).jqxNavigationBar('focus');  
            }
            function getHeaderContentAt(index) {
                return JQXLite(componentSelector).jqxNavigationBar('getHeaderContentAt', index);  
            }
            function getContentAt(index) {
                return JQXLite(componentSelector).jqxNavigationBar('getContentAt', index);  
            }
            function hideArrowAt(index) {
                JQXLite(componentSelector).jqxNavigationBar('hideArrowAt', index);  
            }
            function invalidate() {
                JQXLite(componentSelector).jqxNavigationBar('invalidate');  
            }
            function insert(Index, header, content) {
                JQXLite(componentSelector).jqxNavigationBar('insert', Index, header, content);  
            }
            function refresh() {
                JQXLite(componentSelector).jqxNavigationBar('refresh');  
            }
            function render() {
                JQXLite(componentSelector).jqxNavigationBar('render');  
            }
            function remove(index) {
                JQXLite(componentSelector).jqxNavigationBar('remove', index);  
            }
            function setContentAt(index, item) {
                JQXLite(componentSelector).jqxNavigationBar('setContentAt', index, item);  
            }
            function setHeaderContentAt(index, item) {
                JQXLite(componentSelector).jqxNavigationBar('setHeaderContentAt', index, item);  
            }
            function showArrowAt(index) {
                JQXLite(componentSelector).jqxNavigationBar('showArrowAt', index);  
            }
            function update(index, header, content) {
                JQXLite(componentSelector).jqxNavigationBar('update', index, header, content);  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('val');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('animationType');
                }
            }
            function _arrowPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('arrowPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('arrowPosition');
                }
            }
            function _collapseAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('collapseAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('collapseAnimationDuration');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('disabled');
                }
            }
            function _easing (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('easing', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('easing');
                }
            }
            function _expandAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('expandAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('expandAnimationDuration');
                }
            }
            function _expandMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('expandMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('expandMode');
                }
            }
            function _expandedIndexes (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('expandedIndexes', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('expandedIndexes');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('height');
                }
            }
            function _initContent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('initContent', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('initContent');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('rtl');
                }
            }
            function _showArrow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('showArrow', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('showArrow');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('theme');
                }
            }
            function _toggleMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('toggleMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('toggleMode');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNavigationBar('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxNavigationBar('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxNavigationBar(widgetOptions);
                __appliedProps__ = widgetOptions;
                __created__ = true;
                __host__ = JQXLite(componentSelector)[0];
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationType','arrowPosition','collapseAnimationDuration','disabled','easing','expandAnimationDuration','expandMode','expandedIndexes','height','initContent','rtl','showArrow','theme','toggleMode','width'];
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
                 get easing() {
                     return _easing();
                 },
                 set easing(newValue) {
                     _easing(newValue);
                 },
                 get expandAnimationDuration() {
                     return _expandAnimationDuration();
                 },
                 set expandAnimationDuration(newValue) {
                     _expandAnimationDuration(newValue);
                 },
                 get expandMode() {
                     return _expandMode();
                 },
                 set expandMode(newValue) {
                     _expandMode(newValue);
                 },
                 get expandedIndexes() {
                     return _expandedIndexes();
                 },
                 set expandedIndexes(newValue) {
                     _expandedIndexes(newValue);
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

                JQXLite(componentSelector).on('collapsingItem', function (event) { that.emit('collapsingItem', event); });
                JQXLite(componentSelector).on('collapsedItem', function (event) { that.emit('collapsedItem', event); });
                JQXLite(componentSelector).on('expandingItem', function (event) { that.emit('expandingItem', event); });
                JQXLite(componentSelector).on('expandedItem', function (event) { that.emit('expandedItem', event); });
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
				if (hasChanges) JQXLite(componentSelector).jqxNavigationBar(changed);
			}, { flush: 'post' });

			onUnmounted(() => {
				if (!__hasJQXLite__) return;
				__created__ = false;
				// (not '#id': the element is no longer on the page, and the widget was never destroyed)
				const element = JQXLite(__host__ || componentSelector);
				__host__ = null;
				if (!element || element.length === 0) return;
				element.off();
				try { element.jqxNavigationBar('destroy'); } catch (e) { /* already destroyed */ }
			})
			return {id, componentSelector, add, collapseAt, disableAt, disable, destroy, expandAt, enableAt, enable, focus, getHeaderContentAt, getContentAt, hideArrowAt, invalidate, insert, refresh, render, remove, setContentAt, setHeaderContentAt, showArrowAt, update, val, setOptions, options, getOptions, createComponent};
        },
    }
</script>
