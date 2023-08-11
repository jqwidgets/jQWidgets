<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxtooltip.js';
    import '../jqwidgets/globalization/globalize.js';
    import '../jqwidgets/jqxdatetimeinput.js';
    import '../jqwidgets/jqxcalendar.js';

    export default {
        props: {
            modelValue: String,
            backText: String,
            columnHeaderHeight: Number,
            clearString: String,
            culture: String,
            dayNameFormat: String,
            disabled: {
                default: false,
                type: Boolean
            },
            enableWeekend: {
                default: false,
                type: Boolean
            },
            enableViews: {
                default: true,
                type: Boolean
            },
            enableOtherMonthDays: {
                default: true,
                type: Boolean
            },
            enableFastNavigation: {
                default: true,
                type: Boolean
            },
            enableHover: {
                default: true,
                type: Boolean
            },
            enableAutoNavigation: {
                default: true,
                type: Boolean
            },
            enableTooltips: {
                default: false,
                type: Boolean
            },
            forwardText: String,
            firstDayOfWeek: Number,
            height: [Number, String],
            min: Date,
            max: Date,
            navigationDelay: Number,
            rowHeaderWidth: Number,
            readOnly: {
                default: false,
                type: Boolean
            },
            restrictedDates: Array,
            rtl: {
                default: false,
                type: Boolean
            },
            stepMonths: Number,
            showWeekNumbers: {
                default: true,
                type: Boolean
            },
            showDayNames: {
                default: true,
                type: Boolean
            },
            showOtherMonthDays: {
                default: true,
                type: Boolean
            },
            showFooter: {
                default: false,
                type: Boolean
            },
            selectionMode: String,
            specialDates: Array,
            theme: String,
            titleHeight: Number,
            titleFormat: Array,
            todayString: String,
            value: Date,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","backButtonClick","change","nextButtonClick","viewChange"],
        setup(props, context) {
			const id = "jqxCalendar" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxCalendar(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxCalendar(usedProps[i]);
                }
                return resultToReturn;
            }
            function clear() {
                JQXLite(componentSelector).jqxCalendar('clear');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxCalendar('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxCalendar('focus');  
            }
            function addSpecialDate(date, specialDateClass, text) {
                JQXLite(componentSelector).jqxCalendar('addSpecialDate', date, specialDateClass, text);  
            }
            function getMinDate() {
                return JQXLite(componentSelector).jqxCalendar('getMinDate');  
            }
            function getMaxDate() {
                return JQXLite(componentSelector).jqxCalendar('getMaxDate');  
            }
            function getDate() {
                return JQXLite(componentSelector).jqxCalendar('getDate');  
            }
            function getRange() {
                return JQXLite(componentSelector).jqxCalendar('getRange');  
            }
            function navigateForward(months) {
                JQXLite(componentSelector).jqxCalendar('navigateForward', months);  
            }
            function navigateBackward(months) {
                JQXLite(componentSelector).jqxCalendar('navigateBackward', months);  
            }
            function render() {
                JQXLite(componentSelector).jqxCalendar('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxCalendar('refresh');  
            }
            function setMinDate(date) {
                JQXLite(componentSelector).jqxCalendar('setMinDate', date);  
            }
            function setMaxDate(date) {
                JQXLite(componentSelector).jqxCalendar('setMaxDate', date);  
            }
            function setDate(date) {
                JQXLite(componentSelector).jqxCalendar('setDate', date);  
            }
            function setRange(date, date2) {
                JQXLite(componentSelector).jqxCalendar('setRange', date, date2);  
            }
            function today() {
                JQXLite(componentSelector).jqxCalendar('today');  
            }
            function val(value, value2) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('val',  value, value2)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('val');
                }
            }
            function _backText (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('backText', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('backText');
                }
            }
            function _columnHeaderHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('columnHeaderHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('columnHeaderHeight');
                }
            }
            function _clearString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('clearString', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('clearString');
                }
            }
            function _culture (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('culture', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('culture');
                }
            }
            function _dayNameFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('dayNameFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('dayNameFormat');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('disabled');
                }
            }
            function _enableWeekend (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('enableWeekend', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('enableWeekend');
                }
            }
            function _enableViews (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('enableViews', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('enableViews');
                }
            }
            function _enableOtherMonthDays (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('enableOtherMonthDays', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('enableOtherMonthDays');
                }
            }
            function _enableFastNavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('enableFastNavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('enableFastNavigation');
                }
            }
            function _enableHover (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('enableHover', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('enableHover');
                }
            }
            function _enableAutoNavigation (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('enableAutoNavigation', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('enableAutoNavigation');
                }
            }
            function _enableTooltips (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('enableTooltips', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('enableTooltips');
                }
            }
            function _forwardText (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('forwardText', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('forwardText');
                }
            }
            function _firstDayOfWeek (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('firstDayOfWeek', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('firstDayOfWeek');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('height');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('min');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('max');
                }
            }
            function _navigationDelay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('navigationDelay', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('navigationDelay');
                }
            }
            function _rowHeaderWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('rowHeaderWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('rowHeaderWidth');
                }
            }
            function _readOnly (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('readOnly', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('readOnly');
                }
            }
            function _restrictedDates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('restrictedDates', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('restrictedDates');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('rtl');
                }
            }
            function _stepMonths (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('stepMonths', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('stepMonths');
                }
            }
            function _showWeekNumbers (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('showWeekNumbers', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('showWeekNumbers');
                }
            }
            function _showDayNames (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('showDayNames', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('showDayNames');
                }
            }
            function _showOtherMonthDays (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('showOtherMonthDays', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('showOtherMonthDays');
                }
            }
            function _showFooter (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('showFooter', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('showFooter');
                }
            }
            function _selectionMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('selectionMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('selectionMode');
                }
            }
            function _specialDates (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('specialDates', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('specialDates');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('theme');
                }
            }
            function _titleHeight (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('titleHeight', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('titleHeight');
                }
            }
            function _titleFormat (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('titleFormat', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('titleFormat');
                }
            }
            function _todayString (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('todayString', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('todayString');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxCalendar('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxCalendar('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxCalendar(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['backText','columnHeaderHeight','clearString','culture','dayNameFormat','disabled','enableWeekend','enableViews','enableOtherMonthDays','enableFastNavigation','enableHover','enableAutoNavigation','enableTooltips','forwardText','firstDayOfWeek','height','min','max','navigationDelay','rowHeaderWidth','readOnly','restrictedDates','rtl','stepMonths','showWeekNumbers','showDayNames','showOtherMonthDays','showFooter','selectionMode','specialDates','theme','titleHeight','titleFormat','todayString','value','width'];
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
                 get backText() {
                     return _backText();
                 },
                 set backText(newValue) {
                     _backText(newValue);
                 },
                 get columnHeaderHeight() {
                     return _columnHeaderHeight();
                 },
                 set columnHeaderHeight(newValue) {
                     _columnHeaderHeight(newValue);
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
                 get dayNameFormat() {
                     return _dayNameFormat();
                 },
                 set dayNameFormat(newValue) {
                     _dayNameFormat(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get enableWeekend() {
                     return _enableWeekend();
                 },
                 set enableWeekend(newValue) {
                     _enableWeekend(newValue);
                 },
                 get enableViews() {
                     return _enableViews();
                 },
                 set enableViews(newValue) {
                     _enableViews(newValue);
                 },
                 get enableOtherMonthDays() {
                     return _enableOtherMonthDays();
                 },
                 set enableOtherMonthDays(newValue) {
                     _enableOtherMonthDays(newValue);
                 },
                 get enableFastNavigation() {
                     return _enableFastNavigation();
                 },
                 set enableFastNavigation(newValue) {
                     _enableFastNavigation(newValue);
                 },
                 get enableHover() {
                     return _enableHover();
                 },
                 set enableHover(newValue) {
                     _enableHover(newValue);
                 },
                 get enableAutoNavigation() {
                     return _enableAutoNavigation();
                 },
                 set enableAutoNavigation(newValue) {
                     _enableAutoNavigation(newValue);
                 },
                 get enableTooltips() {
                     return _enableTooltips();
                 },
                 set enableTooltips(newValue) {
                     _enableTooltips(newValue);
                 },
                 get forwardText() {
                     return _forwardText();
                 },
                 set forwardText(newValue) {
                     _forwardText(newValue);
                 },
                 get firstDayOfWeek() {
                     return _firstDayOfWeek();
                 },
                 set firstDayOfWeek(newValue) {
                     _firstDayOfWeek(newValue);
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
                 get navigationDelay() {
                     return _navigationDelay();
                 },
                 set navigationDelay(newValue) {
                     _navigationDelay(newValue);
                 },
                 get rowHeaderWidth() {
                     return _rowHeaderWidth();
                 },
                 set rowHeaderWidth(newValue) {
                     _rowHeaderWidth(newValue);
                 },
                 get readOnly() {
                     return _readOnly();
                 },
                 set readOnly(newValue) {
                     _readOnly(newValue);
                 },
                 get restrictedDates() {
                     return _restrictedDates();
                 },
                 set restrictedDates(newValue) {
                     _restrictedDates(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get stepMonths() {
                     return _stepMonths();
                 },
                 set stepMonths(newValue) {
                     _stepMonths(newValue);
                 },
                 get showWeekNumbers() {
                     return _showWeekNumbers();
                 },
                 set showWeekNumbers(newValue) {
                     _showWeekNumbers(newValue);
                 },
                 get showDayNames() {
                     return _showDayNames();
                 },
                 set showDayNames(newValue) {
                     _showDayNames(newValue);
                 },
                 get showOtherMonthDays() {
                     return _showOtherMonthDays();
                 },
                 set showOtherMonthDays(newValue) {
                     _showOtherMonthDays(newValue);
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
                 get specialDates() {
                     return _specialDates();
                 },
                 set specialDates(newValue) {
                     _specialDates(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get titleHeight() {
                     return _titleHeight();
                 },
                 set titleHeight(newValue) {
                     _titleHeight(newValue);
                 },
                 get titleFormat() {
                     return _titleFormat();
                 },
                 set titleFormat(newValue) {
                     _titleFormat(newValue);
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
            }
            function twoWayBinding() {
                const value = JQXLite(componentSelector).jqxCalendar('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('backButtonClick', function (event) { that.emit('backButtonClick', event); });
                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); twoWayBinding(); });
                JQXLite(componentSelector).on('nextButtonClick', function (event) { that.emit('nextButtonClick', event); });
                JQXLite(componentSelector).on('viewChange', function (event) { that.emit('viewChange', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxCalendar(widgetOptions);
			})
			return {id, componentSelector, clear,destroy,focus,addSpecialDate,getMinDate,getMaxDate,getDate,getRange,navigateForward,navigateBackward,render,refresh,setMinDate,setMaxDate,setDate,setRange,today,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
