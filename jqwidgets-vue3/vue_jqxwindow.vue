<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxwindow.js';

    export default {
        props: {
            autoOpen: {
                default: true,
                type: Boolean
            },
            animationType: String,
            collapsed: {
                default: false,
                type: Boolean
            },
            collapseAnimationDuration: Number,
            content: String,
            closeAnimationDuration: Number,
            closeButtonSize: Number,
            closeButtonAction: String,
            cancelButton: [Object, String],
            dragArea: Object,
            draggable: {
                default: true,
                type: Boolean
            },
            disabled: {
                default: false,
                type: Boolean
            },
            height: [Number, String],
            initContent: Function,
            isModal: {
                default: false,
                type: Boolean
            },
            keyboardCloseKey: Number,
            keyboardNavigation: {
                default: true,
                type: Boolean
            },
            minHeight: Number,
            maxHeight: Number,
            minWidth: Number,
            maxWidth: Number,
            modalOpacity: [Number, String],
            modalZIndex: Number,
            modalBackgroundZIndex: Number,
            okButton: [String, Object],
            position: [String, Object],
            rtl: {
                default: false,
                type: Boolean
            },
            resizable: {
                default: true,
                type: Boolean
            },
            showAnimationDuration: Number,
            showCloseButton: {
                default: true,
                type: Boolean
            },
            showCollapseButton: {
                default: false,
                type: Boolean
            },
            theme: String,
            title: String,
            width: [Number, String],
            zIndex: Number,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["close","collapse","expand","moving","moved","open","resizing","resized"],
        setup(props, context) {
			const id = "jqxWindow" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxWindow(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxWindow(usedProps[i]);
                }
                return resultToReturn;
            }
            function bringToFront() {
                JQXLite(componentSelector).jqxWindow('bringToFront');  
            }
            function close() {
                JQXLite(componentSelector).jqxWindow('close');  
            }
            function collapse() {
                JQXLite(componentSelector).jqxWindow('collapse');  
            }
            function closeAll() {
                JQXLite(componentSelector).jqxWindow('closeAll');  
            }
            function disable() {
                JQXLite(componentSelector).jqxWindow('disable');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxWindow('destroy');  
            }
            function enable() {
                JQXLite(componentSelector).jqxWindow('enable');  
            }
            function expand() {
                JQXLite(componentSelector).jqxWindow('expand');  
            }
            function focus() {
                JQXLite(componentSelector).jqxWindow('focus');  
            }
            function isOpen() {
                return JQXLite(componentSelector).jqxWindow('isOpen');  
            }
            function move(top, left) {
                JQXLite(componentSelector).jqxWindow('move', top, left);  
            }
            function open() {
                JQXLite(componentSelector).jqxWindow('open');  
            }
            function hide() {
                JQXLite(componentSelector).jqxWindow('hide');  
            }
            function resize(top, left) {
                JQXLite(componentSelector).jqxWindow('resize', top, left);  
            }
            function setTitle(title) {
                JQXLite(componentSelector).jqxWindow('setTitle', title);  
            }
            function setContent(content) {
                JQXLite(componentSelector).jqxWindow('setContent', content);  
            }
            function _autoOpen (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('autoOpen', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('autoOpen');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('animationType');
                }
            }
            function _collapsed (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('collapsed', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('collapsed');
                }
            }
            function _collapseAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('collapseAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('collapseAnimationDuration');
                }
            }
            function _content (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('content', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('content');
                }
            }
            function _closeAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('closeAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('closeAnimationDuration');
                }
            }
            function _closeButtonSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('closeButtonSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('closeButtonSize');
                }
            }
            function _closeButtonAction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('closeButtonAction', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('closeButtonAction');
                }
            }
            function _cancelButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('cancelButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('cancelButton');
                }
            }
            function _dragArea (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('dragArea', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('dragArea');
                }
            }
            function _draggable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('draggable', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('draggable');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('disabled');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('height');
                }
            }
            function _initContent (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('initContent', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('initContent');
                }
            }
            function _isModal (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('isModal', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('isModal');
                }
            }
            function _keyboardCloseKey (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('keyboardCloseKey', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('keyboardCloseKey');
                }
            }
            function _keyboardNavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('keyboardNavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('keyboardNavigation');
                }
            }
            function _minHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('minHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('minHeight');
                }
            }
            function _maxHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('maxHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('maxHeight');
                }
            }
            function _minWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('minWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('minWidth');
                }
            }
            function _maxWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('maxWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('maxWidth');
                }
            }
            function _modalOpacity (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('modalOpacity', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('modalOpacity');
                }
            }
            function _modalZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('modalZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('modalZIndex');
                }
            }
            function _modalBackgroundZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('modalBackgroundZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('modalBackgroundZIndex');
                }
            }
            function _okButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('okButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('okButton');
                }
            }
            function _position (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('position', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('position');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('rtl');
                }
            }
            function _resizable (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('resizable', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('resizable');
                }
            }
            function _showAnimationDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('showAnimationDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('showAnimationDuration');
                }
            }
            function _showCloseButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('showCloseButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('showCloseButton');
                }
            }
            function _showCollapseButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('showCollapseButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('showCollapseButton');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('theme');
                }
            }
            function _title (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('title', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('title');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('width');
                }
            }
            function _zIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxWindow('zIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxWindow('zIndex');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxWindow(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['autoOpen','animationType','collapsed','collapseAnimationDuration','content','closeAnimationDuration','closeButtonSize','closeButtonAction','cancelButton','dragArea','draggable','disabled','height','initContent','isModal','keyboardCloseKey','keyboardNavigation','minHeight','maxHeight','minWidth','maxWidth','modalOpacity','modalZIndex','modalBackgroundZIndex','okButton','position','rtl','resizable','showAnimationDuration','showCloseButton','showCollapseButton','theme','title','width','zIndex'];
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
                 get autoOpen() {
                     return _autoOpen();
                 },
                 set autoOpen(newValue) {
                     _autoOpen(newValue);
                 },
                 get animationType() {
                     return _animationType();
                 },
                 set animationType(newValue) {
                     _animationType(newValue);
                 },
                 get collapsed() {
                     return _collapsed();
                 },
                 set collapsed(newValue) {
                     _collapsed(newValue);
                 },
                 get collapseAnimationDuration() {
                     return _collapseAnimationDuration();
                 },
                 set collapseAnimationDuration(newValue) {
                     _collapseAnimationDuration(newValue);
                 },
                 get content() {
                     return _content();
                 },
                 set content(newValue) {
                     _content(newValue);
                 },
                 get closeAnimationDuration() {
                     return _closeAnimationDuration();
                 },
                 set closeAnimationDuration(newValue) {
                     _closeAnimationDuration(newValue);
                 },
                 get closeButtonSize() {
                     return _closeButtonSize();
                 },
                 set closeButtonSize(newValue) {
                     _closeButtonSize(newValue);
                 },
                 get closeButtonAction() {
                     return _closeButtonAction();
                 },
                 set closeButtonAction(newValue) {
                     _closeButtonAction(newValue);
                 },
                 get cancelButton() {
                     return _cancelButton();
                 },
                 set cancelButton(newValue) {
                     _cancelButton(newValue);
                 },
                 get dragArea() {
                     return _dragArea();
                 },
                 set dragArea(newValue) {
                     _dragArea(newValue);
                 },
                 get draggable() {
                     return _draggable();
                 },
                 set draggable(newValue) {
                     _draggable(newValue);
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
                 get isModal() {
                     return _isModal();
                 },
                 set isModal(newValue) {
                     _isModal(newValue);
                 },
                 get keyboardCloseKey() {
                     return _keyboardCloseKey();
                 },
                 set keyboardCloseKey(newValue) {
                     _keyboardCloseKey(newValue);
                 },
                 get keyboardNavigation() {
                     return _keyboardNavigation();
                 },
                 set keyboardNavigation(newValue) {
                     _keyboardNavigation(newValue);
                 },
                 get minHeight() {
                     return _minHeight();
                 },
                 set minHeight(newValue) {
                     _minHeight(newValue);
                 },
                 get maxHeight() {
                     return _maxHeight();
                 },
                 set maxHeight(newValue) {
                     _maxHeight(newValue);
                 },
                 get minWidth() {
                     return _minWidth();
                 },
                 set minWidth(newValue) {
                     _minWidth(newValue);
                 },
                 get maxWidth() {
                     return _maxWidth();
                 },
                 set maxWidth(newValue) {
                     _maxWidth(newValue);
                 },
                 get modalOpacity() {
                     return _modalOpacity();
                 },
                 set modalOpacity(newValue) {
                     _modalOpacity(newValue);
                 },
                 get modalZIndex() {
                     return _modalZIndex();
                 },
                 set modalZIndex(newValue) {
                     _modalZIndex(newValue);
                 },
                 get modalBackgroundZIndex() {
                     return _modalBackgroundZIndex();
                 },
                 set modalBackgroundZIndex(newValue) {
                     _modalBackgroundZIndex(newValue);
                 },
                 get okButton() {
                     return _okButton();
                 },
                 set okButton(newValue) {
                     _okButton(newValue);
                 },
                 get position() {
                     return _position();
                 },
                 set position(newValue) {
                     _position(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get resizable() {
                     return _resizable();
                 },
                 set resizable(newValue) {
                     _resizable(newValue);
                 },
                 get showAnimationDuration() {
                     return _showAnimationDuration();
                 },
                 set showAnimationDuration(newValue) {
                     _showAnimationDuration(newValue);
                 },
                 get showCloseButton() {
                     return _showCloseButton();
                 },
                 set showCloseButton(newValue) {
                     _showCloseButton(newValue);
                 },
                 get showCollapseButton() {
                     return _showCollapseButton();
                 },
                 set showCollapseButton(newValue) {
                     _showCollapseButton(newValue);
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
                 get zIndex() {
                     return _zIndex();
                 },
                 set zIndex(newValue) {
                     _zIndex(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('collapse', function (event) { that.emit('collapse', event); });
                JQXLite(componentSelector).on('expand', function (event) { that.emit('expand', event); });
                JQXLite(componentSelector).on('moving', function (event) { that.emit('moving', event); });
                JQXLite(componentSelector).on('moved', function (event) { that.emit('moved', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector).on('resizing', function (event) { that.emit('resizing', event); });
                JQXLite(componentSelector).on('resized', function (event) { that.emit('resized', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxWindow(widgetOptions);
			})
			return {id, componentSelector, bringToFront,close,collapse,closeAll,disable,destroy,enable,expand,focus,isOpen,move,open,hide,resize,setTitle,setContent, setOptions, options, getOptions, createComponent};
        },
    }
</script>
