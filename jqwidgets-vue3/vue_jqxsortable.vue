<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxsortable.js';

    export default {
        props: {
            appendTo: String,
            axis: String,
            cancel: String,
            connectWith: String,
            containment: String,
            cursor: String,
            cursorAt: Object,
            delay: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            distance: Number,
            dropOnEmpty: {
                default: true,
                type: Boolean
            },
            forceHelperSize: {
                default: false,
                type: Boolean
            },
            forcePlaceholderSize: {
                default: false,
                type: Boolean
            },
            grid: Array,
            handle: String,
            helper: String,
            items: String,
            opacity: Number,
            placeholderShow: String,
            revert: {
                default: false,
                type: Boolean
            },
            scroll: {
                default: true,
                type: Boolean
            },
            scrollSensitivity: Number,
            scrollSpeed: Number,
            tolerance: String,
            zIndex: Number,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["activate","beforeStop","change","deactivate","out","over","receive","remove","sort","start","stop","update"],
        setup(props, context) {
			const id = "jqxSortable" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxSortable(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxSortable(usedProps[i]);
                }
                return resultToReturn;
            }
            function cancelMethod() {
                JQXLite(componentSelector).jqxSortable('cancelMethod');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxSortable('destroy');  
            }
            function disable() {
                JQXLite(componentSelector).jqxSortable('disable');  
            }
            function enable() {
                JQXLite(componentSelector).jqxSortable('enable');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxSortable('refresh');  
            }
            function refreshPositions() {
                JQXLite(componentSelector).jqxSortable('refreshPositions');  
            }
            function serialize(object) {
                return JQXLite(componentSelector).jqxSortable('serialize', object);  
            }
            function toArray() {
                return JQXLite(componentSelector).jqxSortable('toArray');  
            }
            function _appendTo (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('appendTo', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('appendTo');
                }
            }
            function _axis (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('axis', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('axis');
                }
            }
            function _cancel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('cancel', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('cancel');
                }
            }
            function _connectWith (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('connectWith', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('connectWith');
                }
            }
            function _containment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('containment', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('containment');
                }
            }
            function _cursor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('cursor', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('cursor');
                }
            }
            function _cursorAt (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('cursorAt', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('cursorAt');
                }
            }
            function _delay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('delay', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('delay');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('disabled');
                }
            }
            function _distance (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('distance', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('distance');
                }
            }
            function _dropOnEmpty (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('dropOnEmpty', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('dropOnEmpty');
                }
            }
            function _forceHelperSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('forceHelperSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('forceHelperSize');
                }
            }
            function _forcePlaceholderSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('forcePlaceholderSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('forcePlaceholderSize');
                }
            }
            function _grid (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('grid', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('grid');
                }
            }
            function _handle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('handle', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('handle');
                }
            }
            function _helper (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('helper', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('helper');
                }
            }
            function _items (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('items', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('items');
                }
            }
            function _opacity (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('opacity', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('opacity');
                }
            }
            function _placeholderShow (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('placeholderShow', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('placeholderShow');
                }
            }
            function _revert (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('revert', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('revert');
                }
            }
            function _scroll (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('scroll', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('scroll');
                }
            }
            function _scrollSensitivity (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('scrollSensitivity', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('scrollSensitivity');
                }
            }
            function _scrollSpeed (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('scrollSpeed', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('scrollSpeed');
                }
            }
            function _tolerance (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('tolerance', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('tolerance');
                }
            }
            function _zIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxSortable('zIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxSortable('zIndex');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxSortable(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['appendTo','axis','cancel','connectWith','containment','cursor','cursorAt','delay','disabled','distance','dropOnEmpty','forceHelperSize','forcePlaceholderSize','grid','handle','helper','items','opacity','placeholderShow','revert','scroll','scrollSensitivity','scrollSpeed','tolerance','zIndex'];
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
                 get axis() {
                     return _axis();
                 },
                 set axis(newValue) {
                     _axis(newValue);
                 },
                 get cancel() {
                     return _cancel();
                 },
                 set cancel(newValue) {
                     _cancel(newValue);
                 },
                 get connectWith() {
                     return _connectWith();
                 },
                 set connectWith(newValue) {
                     _connectWith(newValue);
                 },
                 get containment() {
                     return _containment();
                 },
                 set containment(newValue) {
                     _containment(newValue);
                 },
                 get cursor() {
                     return _cursor();
                 },
                 set cursor(newValue) {
                     _cursor(newValue);
                 },
                 get cursorAt() {
                     return _cursorAt();
                 },
                 set cursorAt(newValue) {
                     _cursorAt(newValue);
                 },
                 get delay() {
                     return _delay();
                 },
                 set delay(newValue) {
                     _delay(newValue);
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
                 get dropOnEmpty() {
                     return _dropOnEmpty();
                 },
                 set dropOnEmpty(newValue) {
                     _dropOnEmpty(newValue);
                 },
                 get forceHelperSize() {
                     return _forceHelperSize();
                 },
                 set forceHelperSize(newValue) {
                     _forceHelperSize(newValue);
                 },
                 get forcePlaceholderSize() {
                     return _forcePlaceholderSize();
                 },
                 set forcePlaceholderSize(newValue) {
                     _forcePlaceholderSize(newValue);
                 },
                 get grid() {
                     return _grid();
                 },
                 set grid(newValue) {
                     _grid(newValue);
                 },
                 get handle() {
                     return _handle();
                 },
                 set handle(newValue) {
                     _handle(newValue);
                 },
                 get helper() {
                     return _helper();
                 },
                 set helper(newValue) {
                     _helper(newValue);
                 },
                 get items() {
                     return _items();
                 },
                 set items(newValue) {
                     _items(newValue);
                 },
                 get opacity() {
                     return _opacity();
                 },
                 set opacity(newValue) {
                     _opacity(newValue);
                 },
                 get placeholderShow() {
                     return _placeholderShow();
                 },
                 set placeholderShow(newValue) {
                     _placeholderShow(newValue);
                 },
                 get revert() {
                     return _revert();
                 },
                 set revert(newValue) {
                     _revert(newValue);
                 },
                 get scroll() {
                     return _scroll();
                 },
                 set scroll(newValue) {
                     _scroll(newValue);
                 },
                 get scrollSensitivity() {
                     return _scrollSensitivity();
                 },
                 set scrollSensitivity(newValue) {
                     _scrollSensitivity(newValue);
                 },
                 get scrollSpeed() {
                     return _scrollSpeed();
                 },
                 set scrollSpeed(newValue) {
                     _scrollSpeed(newValue);
                 },
                 get tolerance() {
                     return _tolerance();
                 },
                 set tolerance(newValue) {
                     _tolerance(newValue);
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

                JQXLite(componentSelector).on('activate', function (event) { that.emit('activate', event); });
                JQXLite(componentSelector).on('beforeStop', function (event) { that.emit('beforeStop', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
                JQXLite(componentSelector).on('deactivate', function (event) { that.emit('deactivate', event); });
                JQXLite(componentSelector).on('out', function (event) { that.emit('out', event); });
                JQXLite(componentSelector).on('over', function (event) { that.emit('over', event); });
                JQXLite(componentSelector).on('receive', function (event) { that.emit('receive', event); });
                JQXLite(componentSelector).on('remove', function (event) { that.emit('remove', event); });
                JQXLite(componentSelector).on('sort', function (event) { that.emit('sort', event); });
                JQXLite(componentSelector).on('start', function (event) { that.emit('start', event); });
                JQXLite(componentSelector).on('stop', function (event) { that.emit('stop', event); });
                JQXLite(componentSelector).on('update', function (event) { that.emit('update', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxSortable(widgetOptions);
			})
			return {id, componentSelector, cancelMethod,destroy,disable,enable,refresh,refreshPositions,serialize,toArray, setOptions, options, getOptions, createComponent};
        },
    }
</script>
