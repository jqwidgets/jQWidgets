<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/globalization/globalize.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/jqxdatetimeinput.js';
    import '../jqwidgets/jqxcalendar.js';

    export default {
        props: {
            modelValue: String,
            animationType: String,
            allowNullDate: {
                default: true,
                type: Boolean
            },
            allowKeyboardDelete: {
                default: true,
                type: Boolean
            },
            clearString: String,
            culture: String,
            closeDelay: Number,
            closeCalendarAfterSelection: {
                default: true,
                type: Boolean
            },
            dropDownHorizontalAlignment: String,
            dropDownVerticalAlignment: String,
            disabled: {
                default: false,
                type: Boolean
            },
            enableBrowserBoundsDetection: {
                default: false,
                type: Boolean
            },
            enableAbsoluteSelection: {
                default: false,
                type: Boolean
            },
            editMode: String,
            firstDayOfWeek: Number,
            formatString: String,
            height: [Number, String],
            min: Date,
            max: Date,
            openDelay: Number,
            placeHolder: String,
            popupZIndex: Number,
            rtl: {
                default: false,
                type: Boolean
            },
            readonly: {
                default: false,
                type: Boolean
            },
            showFooter: {
                default: false,
                type: Boolean
            },
            selectionMode: String,
            showWeekNumbers: {
                default: true,
                type: Boolean
            },
            showTimeButton: {
                default: false,
                type: Boolean
            },
            showCalendarButton: {
                default: true,
                type: Boolean
            },
            showDeleteButton: {
                default: false,
                type: Boolean
            },
            theme: String,
            template: String,
            textAlign: String,
            todayString: String,
            value: [Date, null],
            width: [Number, String],
            yearCutoff: Number,
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change","close","open","textchanged","valueChanged"],
        setup(props, context) {
			const id = "jqxDateTimeInput" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxDateTimeInput(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxDateTimeInput(usedProps[i]);
                }
                return resultToReturn;
            }
            function close() {
                JQXLite(componentSelector).jqxDateTimeInput('close');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxDateTimeInput('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxDateTimeInput('focus');  
            }
            function getRange() {
                return JQXLite(componentSelector).jqxDateTimeInput('getRange');  
            }
            function getText() {
                return JQXLite(componentSelector).jqxDateTimeInput('getText');  
            }
            function getDate() {
                return JQXLite(componentSelector).jqxDateTimeInput('getDate');  
            }
            function getMaxDate() {
                return JQXLite(componentSelector).jqxDateTimeInput('getMaxDate');  
            }
            function getMinDate() {
                return JQXLite(componentSelector).jqxDateTimeInput('getMinDate');  
            }
            function open() {
                JQXLite(componentSelector).jqxDateTimeInput('open');  
            }
            function setRange(date, date2) {
                JQXLite(componentSelector).jqxDateTimeInput('setRange', date, date2);  
            }
            function setMinDate(date) {
                JQXLite(componentSelector).jqxDateTimeInput('setMinDate', date);  
            }
            function setMaxDate(date) {
                JQXLite(componentSelector).jqxDateTimeInput('setMaxDate', date);  
            }
            function setDate(date) {
                JQXLite(componentSelector).jqxDateTimeInput('setDate', date);  
            }
            function val(value, value2) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('val', value, value2)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('val');
                }
            }
            function _animationType (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('animationType', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('animationType');
                }
            }
            function _allowNullDate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('allowNullDate', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('allowNullDate');
                }
            }
            function _allowKeyboardDelete (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('allowKeyboardDelete', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('allowKeyboardDelete');
                }
            }
            function _clearString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('clearString', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('clearString');
                }
            }
            function _culture (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('culture', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('culture');
                }
            }
            function _closeDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('closeDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('closeDelay');
                }
            }
            function _closeCalendarAfterSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('closeCalendarAfterSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('closeCalendarAfterSelection');
                }
            }
            function _dropDownHorizontalAlignment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('dropDownHorizontalAlignment', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('dropDownHorizontalAlignment');
                }
            }
            function _dropDownVerticalAlignment (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('dropDownVerticalAlignment', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('dropDownVerticalAlignment');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('disabled');
                }
            }
            function _enableBrowserBoundsDetection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('enableBrowserBoundsDetection', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('enableBrowserBoundsDetection');
                }
            }
            function _enableAbsoluteSelection (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('enableAbsoluteSelection', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('enableAbsoluteSelection');
                }
            }
            function _editMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('editMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('editMode');
                }
            }
            function _firstDayOfWeek (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('firstDayOfWeek', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('firstDayOfWeek');
                }
            }
            function _formatString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('formatString', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('formatString');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('height');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('min');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('max');
                }
            }
            function _openDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('openDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('openDelay');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('placeHolder');
                }
            }
            function _popupZIndex (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('popupZIndex', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('popupZIndex');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('rtl');
                }
            }
            function _readonly (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('readonly', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('readonly');
                }
            }
            function _showFooter (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('showFooter', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('showFooter');
                }
            }
            function _selectionMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('selectionMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('selectionMode');
                }
            }
            function _showWeekNumbers (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('showWeekNumbers', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('showWeekNumbers');
                }
            }
            function _showTimeButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('showTimeButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('showTimeButton');
                }
            }
            function _showCalendarButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('showCalendarButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('showCalendarButton');
                }
            }
            function _showDeleteButton (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('showDeleteButton', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('showDeleteButton');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('theme');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('template');
                }
            }
            function _textAlign (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('textAlign', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('textAlign');
                }
            }
            function _todayString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('todayString', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('todayString');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('width');
                }
            }
            function _yearCutoff (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxDateTimeInput('yearCutoff', arg)
                } else {
                    return JQXLite(componentSelector).jqxDateTimeInput('yearCutoff');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxDateTimeInput(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['animationType','allowNullDate','allowKeyboardDelete','clearString','culture','closeDelay','closeCalendarAfterSelection','dropDownHorizontalAlignment','dropDownVerticalAlignment','disabled','enableBrowserBoundsDetection','enableAbsoluteSelection','editMode','firstDayOfWeek','formatString','height','min','max','openDelay','placeHolder','popupZIndex','rtl','readonly','showFooter','selectionMode','showWeekNumbers','showTimeButton','showCalendarButton','showDeleteButton','theme','template','textAlign','todayString','value','width','yearCutoff'];
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
                 get allowNullDate() {
                     return _allowNullDate();
                 },
                 set allowNullDate(newValue) {
                     _allowNullDate(newValue);
                 },
                 get allowKeyboardDelete() {
                     return _allowKeyboardDelete();
                 },
                 set allowKeyboardDelete(newValue) {
                     _allowKeyboardDelete(newValue);
                 },
                 get clearString() {
                     return _clearString();
                 },
                 set clearString(newValue) {
                     _clearString(newValue);
                 },
                 get culture() {
                     return _culture();
                 },
                 set culture(newValue) {
                     _culture(newValue);
                 },
                 get closeDelay() {
                     return _closeDelay();
                 },
                 set closeDelay(newValue) {
                     _closeDelay(newValue);
                 },
                 get closeCalendarAfterSelection() {
                     return _closeCalendarAfterSelection();
                 },
                 set closeCalendarAfterSelection(newValue) {
                     _closeCalendarAfterSelection(newValue);
                 },
                 get dropDownHorizontalAlignment() {
                     return _dropDownHorizontalAlignment();
                 },
                 set dropDownHorizontalAlignment(newValue) {
                     _dropDownHorizontalAlignment(newValue);
                 },
                 get dropDownVerticalAlignment() {
                     return _dropDownVerticalAlignment();
                 },
                 set dropDownVerticalAlignment(newValue) {
                     _dropDownVerticalAlignment(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get enableBrowserBoundsDetection() {
                     return _enableBrowserBoundsDetection();
                 },
                 set enableBrowserBoundsDetection(newValue) {
                     _enableBrowserBoundsDetection(newValue);
                 },
                 get enableAbsoluteSelection() {
                     return _enableAbsoluteSelection();
                 },
                 set enableAbsoluteSelection(newValue) {
                     _enableAbsoluteSelection(newValue);
                 },
                 get editMode() {
                     return _editMode();
                 },
                 set editMode(newValue) {
                     _editMode(newValue);
                 },
                 get firstDayOfWeek() {
                     return _firstDayOfWeek();
                 },
                 set firstDayOfWeek(newValue) {
                     _firstDayOfWeek(newValue);
                 },
                 get formatString() {
                     return _formatString();
                 },
                 set formatString(newValue) {
                     _formatString(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get min() {
                     return _min();
                 },
                 set min(newValue) {
                     _min(newValue);
                 },
                 get max() {
                     return _max();
                 },
                 set max(newValue) {
                     _max(newValue);
                 },
                 get openDelay() {
                     return _openDelay();
                 },
                 set openDelay(newValue) {
                     _openDelay(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
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
                 get readonly() {
                     return _readonly();
                 },
                 set readonly(newValue) {
                     _readonly(newValue);
                 },
                 get showFooter() {
                     return _showFooter();
                 },
                 set showFooter(newValue) {
                     _showFooter(newValue);
                 },
                 get selectionMode() {
                     return _selectionMode();
                 },
                 set selectionMode(newValue) {
                     _selectionMode(newValue);
                 },
                 get showWeekNumbers() {
                     return _showWeekNumbers();
                 },
                 set showWeekNumbers(newValue) {
                     _showWeekNumbers(newValue);
                 },
                 get showTimeButton() {
                     return _showTimeButton();
                 },
                 set showTimeButton(newValue) {
                     _showTimeButton(newValue);
                 },
                 get showCalendarButton() {
                     return _showCalendarButton();
                 },
                 set showCalendarButton(newValue) {
                     _showCalendarButton(newValue);
                 },
                 get showDeleteButton() {
                     return _showDeleteButton();
                 },
                 set showDeleteButton(newValue) {
                     _showDeleteButton(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
                 },
                 get textAlign() {
                     return _textAlign();
                 },
                 set textAlign(newValue) {
                     _textAlign(newValue);
                 },
                 get todayString() {
                     return _todayString();
                 },
                 set todayString(newValue) {
                     _todayString(newValue);
                 },
                 get value() {
                     return _value();
                 },
                 set value(newValue) {
                     _value(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
                 get yearCutoff() {
                     return _yearCutoff();
                 },
                 set yearCutoff(newValue) {
                     _yearCutoff(newValue);
                 },
            }
            function twoWayBinding() {
                const value = JQXLite(componentSelector).jqxDateTimeInput('value');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector).on('textchanged', function (event) { that.emit('textchanged', event); });
                JQXLite(componentSelector).on('valueChanged', function (event) { that.emit('valueChanged', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxDateTimeInput(widgetOptions);
			})
			return {id, componentSelector, close,destroy,focus,getRange,getText,getDate,getMaxDate,getMinDate,open,setRange,setMinDate,setMaxDate,setDate,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
