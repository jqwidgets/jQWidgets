<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdragdrop.js';

    export default {
        props: {
            appendTo: String,
            disabled: {
                default: false,
                type: Boolean
            },
            distance: Number,
            data: Object,
            dropAction: String,
            dropTarget: [String, Object],
            dragZIndex: Number,
            feedback: String,
            initFeedback: Function,
            opacity: Number,
            onDragEnd: Function,
            onDrag: Function,
            onDragStart: Function,
            onTargetDrop: Function,
            onDropTargetEnter: Function,
            onDropTargetLeave: Function,
            restricter: [String, Object],
            revert: {
                default: false,
                type: Boolean
            },
            revertDuration: Number,
            tolerance: String,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["dragStart","dragEnd","dragging","dropTargetEnter","dropTargetLeave"],
        setup(props, context) {
			const id = "jqxDragDrop" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxDragDrop(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxDragDrop(usedProps[i]);
                }
                return resultToReturn;
            }
            function _appendTo (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('appendTo', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('appendTo');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('disabled');
                }
            }
            function _distance (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('distance', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('distance');
                }
            }
            function _data (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('data', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('data');
                }
            }
            function _dropAction (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('dropAction', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('dropAction');
                }
            }
            function _dropTarget (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('dropTarget', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('dropTarget');
                }
            }
            function _dragZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('dragZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('dragZIndex');
                }
            }
            function _feedback (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('feedback', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('feedback');
                }
            }
            function _initFeedback (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('initFeedback', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('initFeedback');
                }
            }
            function _opacity (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('opacity', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('opacity');
                }
            }
            function _onDragEnd (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('onDragEnd', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('onDragEnd');
                }
            }
            function _onDrag (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('onDrag', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('onDrag');
                }
            }
            function _onDragStart (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('onDragStart', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('onDragStart');
                }
            }
            function _onTargetDrop (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('onTargetDrop', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('onTargetDrop');
                }
            }
            function _onDropTargetEnter (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('onDropTargetEnter', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('onDropTargetEnter');
                }
            }
            function _onDropTargetLeave (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('onDropTargetLeave', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('onDropTargetLeave');
                }
            }
            function _restricter (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('restricter', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('restricter');
                }
            }
            function _revert (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('revert', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('revert');
                }
            }
            function _revertDuration (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('revertDuration', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('revertDuration');
                }
            }
            function _tolerance (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDragDrop('tolerance', arg)
                } else {
                    return JQXLite(componentSelector).jqxDragDrop('tolerance');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxDragDrop(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['appendTo','disabled','distance','data','dropAction','dropTarget','dragZIndex','feedback','initFeedback','opacity','onDragEnd','onDrag','onDragStart','onTargetDrop','onDropTargetEnter','onDropTargetLeave','restricter','revert','revertDuration','tolerance'];
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
                 get appendTo() {
                     return _appendTo();
                 },
                 set appendTo(newValue) {
                     _appendTo(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get distance() {
                     return _distance();
                 },
                 set distance(newValue) {
                     _distance(newValue);
                 },
                 get data() {
                     return _data();
                 },
                 set data(newValue) {
                     _data(newValue);
                 },
                 get dropAction() {
                     return _dropAction();
                 },
                 set dropAction(newValue) {
                     _dropAction(newValue);
                 },
                 get dropTarget() {
                     return _dropTarget();
                 },
                 set dropTarget(newValue) {
                     _dropTarget(newValue);
                 },
                 get dragZIndex() {
                     return _dragZIndex();
                 },
                 set dragZIndex(newValue) {
                     _dragZIndex(newValue);
                 },
                 get feedback() {
                     return _feedback();
                 },
                 set feedback(newValue) {
                     _feedback(newValue);
                 },
                 get initFeedback() {
                     return _initFeedback();
                 },
                 set initFeedback(newValue) {
                     _initFeedback(newValue);
                 },
                 get opacity() {
                     return _opacity();
                 },
                 set opacity(newValue) {
                     _opacity(newValue);
                 },
                 get onDragEnd() {
                     return _onDragEnd();
                 },
                 set onDragEnd(newValue) {
                     _onDragEnd(newValue);
                 },
                 get onDrag() {
                     return _onDrag();
                 },
                 set onDrag(newValue) {
                     _onDrag(newValue);
                 },
                 get onDragStart() {
                     return _onDragStart();
                 },
                 set onDragStart(newValue) {
                     _onDragStart(newValue);
                 },
                 get onTargetDrop() {
                     return _onTargetDrop();
                 },
                 set onTargetDrop(newValue) {
                     _onTargetDrop(newValue);
                 },
                 get onDropTargetEnter() {
                     return _onDropTargetEnter();
                 },
                 set onDropTargetEnter(newValue) {
                     _onDropTargetEnter(newValue);
                 },
                 get onDropTargetLeave() {
                     return _onDropTargetLeave();
                 },
                 set onDropTargetLeave(newValue) {
                     _onDropTargetLeave(newValue);
                 },
                 get restricter() {
                     return _restricter();
                 },
                 set restricter(newValue) {
                     _restricter(newValue);
                 },
                 get revert() {
                     return _revert();
                 },
                 set revert(newValue) {
                     _revert(newValue);
                 },
                 get revertDuration() {
                     return _revertDuration();
                 },
                 set revertDuration(newValue) {
                     _revertDuration(newValue);
                 },
                 get tolerance() {
                     return _tolerance();
                 },
                 set tolerance(newValue) {
                     _tolerance(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('dragStart', function (event) { that.emit('dragStart', event); });
                JQXLite(componentSelector).on('dragEnd', function (event) { that.emit('dragEnd', event); });
                JQXLite(componentSelector).on('dragging', function (event) { that.emit('dragging', event); });
                JQXLite(componentSelector).on('dropTargetEnter', function (event) { that.emit('dropTargetEnter', event); });
                JQXLite(componentSelector).on('dropTargetLeave', function (event) { that.emit('dropTargetLeave', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxDragDrop(widgetOptions);
			})
			return {id, componentSelector, , setOptions, options, getOptions, createComponent};
        },
    }
</script>
