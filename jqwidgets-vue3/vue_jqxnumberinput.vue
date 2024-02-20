<template>
        <div v-bind:id="id"></div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxnumberinput.js';

    export default {
        props: {
            modelValue: String,
            allowNull: {
                default: true,
                type: Boolean
            },
            decimal: Number,
            disabled: {
                default: false,
                type: Boolean
            },
            decimalDigits: Number,
            decimalSeparator: String,
            digits: Number,
            groupSeparator: String,
            groupSize: Number,
            height: [Number, String],
            inputMode: String,
            min: Number,
            max: Number,
            negativeSymbol: String,
            placeHolder: String,
            promptChar: String,
            rtl: {
                default: false,
                type: Boolean
            },
            readOnly: {
                default: false,
                type: Boolean
            },
            spinMode: String,
            spinButtons: {
                default: false,
                type: Boolean
            },
            spinButtonsWidth: Number,
            spinButtonsStep: Number,
            symbol: String,
            symbolPosition: String,
            textAlign: String,
            template: String,
            theme: String,
            value: Number,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["update:modelValue","change","textchanged","valueChanged"],
        setup(props, context) {
			const id = "jqxNumberInput" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxNumberInput(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxNumberInput(usedProps[i]);
                }
                return resultToReturn;
            }
            function clear() {
                JQXLite(componentSelector).jqxNumberInput('clear');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxNumberInput('destroy');  
            }
            function focus() {
                JQXLite(componentSelector).jqxNumberInput('focus');  
            }
            function getDecimal() {
                return JQXLite(componentSelector).jqxNumberInput('getDecimal');  
            }
            function setDecimal(index) {
                JQXLite(componentSelector).jqxNumberInput('setDecimal', index);  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('val');
                }
            }
            function _allowNull (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('allowNull', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('allowNull');
                }
            }
            function _decimal (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('decimal', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('decimal');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('disabled');
                }
            }
            function _decimalDigits (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('decimalDigits', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('decimalDigits');
                }
            }
            function _decimalSeparator (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('decimalSeparator', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('decimalSeparator');
                }
            }
            function _digits (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('digits', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('digits');
                }
            }
            function _groupSeparator (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('groupSeparator', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('groupSeparator');
                }
            }
            function _groupSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('groupSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('groupSize');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('height');
                }
            }
            function _inputMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('inputMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('inputMode');
                }
            }
            function _min (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('min', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('min');
                }
            }
            function _max (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('max', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('max');
                }
            }
            function _negativeSymbol (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('negativeSymbol', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('negativeSymbol');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('placeHolder');
                }
            }
            function _promptChar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('promptChar', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('promptChar');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('rtl');
                }
            }
            function _readOnly (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('readOnly', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('readOnly');
                }
            }
            function _spinMode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('spinMode', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('spinMode');
                }
            }
            function _spinButtons (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('spinButtons', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('spinButtons');
                }
            }
            function _spinButtonsWidth (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('spinButtonsWidth', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('spinButtonsWidth');
                }
            }
            function _spinButtonsStep (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('spinButtonsStep', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('spinButtonsStep');
                }
            }
            function _symbol (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('symbol', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('symbol');
                }
            }
            function _symbolPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('symbolPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('symbolPosition');
                }
            }
            function _textAlign (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('textAlign', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('textAlign');
                }
            }
            function _template (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('template', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('template');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('theme');
                }
            }
            function _value (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('value', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('value');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxNumberInput('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxNumberInput('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxNumberInput(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['allowNull','decimal','disabled','decimalDigits','decimalSeparator','digits','groupSeparator','groupSize','height','inputMode','min','max','negativeSymbol','placeHolder','promptChar','rtl','readOnly','spinMode','spinButtons','spinButtonsWidth','spinButtonsStep','symbol','symbolPosition','textAlign','template','theme','value','width'];
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
                 get allowNull() {
                     return _allowNull();
                 },
                 set allowNull(newValue) {
                     _allowNull(newValue);
                 },
                 get decimal() {
                     return _decimal();
                 },
                 set decimal(newValue) {
                     _decimal(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get decimalDigits() {
                     return _decimalDigits();
                 },
                 set decimalDigits(newValue) {
                     _decimalDigits(newValue);
                 },
                 get decimalSeparator() {
                     return _decimalSeparator();
                 },
                 set decimalSeparator(newValue) {
                     _decimalSeparator(newValue);
                 },
                 get digits() {
                     return _digits();
                 },
                 set digits(newValue) {
                     _digits(newValue);
                 },
                 get groupSeparator() {
                     return _groupSeparator();
                 },
                 set groupSeparator(newValue) {
                     _groupSeparator(newValue);
                 },
                 get groupSize() {
                     return _groupSize();
                 },
                 set groupSize(newValue) {
                     _groupSize(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get inputMode() {
                     return _inputMode();
                 },
                 set inputMode(newValue) {
                     _inputMode(newValue);
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
                 get negativeSymbol() {
                     return _negativeSymbol();
                 },
                 set negativeSymbol(newValue) {
                     _negativeSymbol(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get promptChar() {
                     return _promptChar();
                 },
                 set promptChar(newValue) {
                     _promptChar(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get readOnly() {
                     return _readOnly();
                 },
                 set readOnly(newValue) {
                     _readOnly(newValue);
                 },
                 get spinMode() {
                     return _spinMode();
                 },
                 set spinMode(newValue) {
                     _spinMode(newValue);
                 },
                 get spinButtons() {
                     return _spinButtons();
                 },
                 set spinButtons(newValue) {
                     _spinButtons(newValue);
                 },
                 get spinButtonsWidth() {
                     return _spinButtonsWidth();
                 },
                 set spinButtonsWidth(newValue) {
                     _spinButtonsWidth(newValue);
                 },
                 get spinButtonsStep() {
                     return _spinButtonsStep();
                 },
                 set spinButtonsStep(newValue) {
                     _spinButtonsStep(newValue);
                 },
                 get symbol() {
                     return _symbol();
                 },
                 set symbol(newValue) {
                     _symbol(newValue);
                 },
                 get symbolPosition() {
                     return _symbolPosition();
                 },
                 set symbolPosition(newValue) {
                     _symbolPosition(newValue);
                 },
                 get textAlign() {
                     return _textAlign();
                 },
                 set textAlign(newValue) {
                     _textAlign(newValue);
                 },
                 get template() {
                     return _template();
                 },
                 set template(newValue) {
                     _template(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
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
				const element = JQXLite(componentSelector).jqxNumberInput('element');
                const value = JQXLite(componentSelector).jqxNumberInput('val');
                context.emit('input', value);
                context.emit('update:modelValue', element.value);
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('change', function (event) { that.emit('change', event); });
                JQXLite(componentSelector).on('textchanged', function (event) { that.emit('textchanged', event); });
                JQXLite(componentSelector).on('valueChanged', function (event) { that.emit('valueChanged', event); twoWayBinding(); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxNumberInput(widgetOptions);
			})
			return {id, componentSelector, clear,destroy,focus,getDecimal,setDecimal,val,twoWayBinding, setOptions, options, getOptions, createComponent};
        },
    }
</script>
