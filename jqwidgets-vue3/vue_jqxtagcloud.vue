<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxdata.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxtagcloud.js';

    export default {
        props: {
            alterTextCase: String,
            disabled: {
                default: false,
                type: Boolean
            },
            displayLimit: Number,
            displayMember: String,
            displayValue: {
                default: false,
                type: Boolean
            },
            fontSizeUnit: String,
            height: [Number, String],
            maxColor: String,
            maxFontSize: Number,
            maxValueToDisplay: Number,
            minColor: String,
            minFontSize: Number,
            minValueToDisplay: Number,
            rtl: {
                default: false,
                type: Boolean
            },
            sortBy: String,
            sortOrder: String,
            source: Object,
            tagRenderer: Function,
            takeTopWeightedItems: {
                default: false,
                type: Boolean
            },
            textColor: String,
            urlBase: String,
            urlMember: String,
            valueMember: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["bindingComplete","itemClick"],
        setup(props, context) {
			const id = "jqxTagCloud" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxTagCloud(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxTagCloud(usedProps[i]);
                }
                return resultToReturn;
            }
            function destroy() {
                JQXLite(componentSelector).jqxTagCloud('destroy');  
            }
            function findTagIndex(tag) {
                return JQXLite(componentSelector).jqxTagCloud('findTagIndex', tag);  
            }
            function getHiddenTagsList() {
                return JQXLite(componentSelector).jqxTagCloud('getHiddenTagsList');  
            }
            function getRenderedTags() {
                return JQXLite(componentSelector).jqxTagCloud('getRenderedTags');  
            }
            function getTagsList() {
                return JQXLite(componentSelector).jqxTagCloud('getTagsList');  
            }
            function hideItem(index) {
                JQXLite(componentSelector).jqxTagCloud('hideItem', index);  
            }
            function insertAt(index, item) {
                JQXLite(componentSelector).jqxTagCloud('insertAt', index, item);  
            }
            function removeAt(index) {
                JQXLite(componentSelector).jqxTagCloud('removeAt', index);  
            }
            function updateAt(index, item) {
                JQXLite(componentSelector).jqxTagCloud('updateAt', index, item);  
            }
            function showItem(index) {
                JQXLite(componentSelector).jqxTagCloud('showItem', index);  
            }
            function _alterTextCase (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('alterTextCase', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('alterTextCase');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('disabled');
                }
            }
            function _displayLimit (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('displayLimit', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('displayLimit');
                }
            }
            function _displayMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('displayMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('displayMember');
                }
            }
            function _displayValue (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('displayValue', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('displayValue');
                }
            }
            function _fontSizeUnit (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('fontSizeUnit', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('fontSizeUnit');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('height');
                }
            }
            function _maxColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('maxColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('maxColor');
                }
            }
            function _maxFontSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('maxFontSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('maxFontSize');
                }
            }
            function _maxValueToDisplay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('maxValueToDisplay', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('maxValueToDisplay');
                }
            }
            function _minColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('minColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('minColor');
                }
            }
            function _minFontSize (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('minFontSize', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('minFontSize');
                }
            }
            function _minValueToDisplay (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('minValueToDisplay', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('minValueToDisplay');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('rtl');
                }
            }
            function _sortBy (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('sortBy', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('sortBy');
                }
            }
            function _sortOrder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('sortOrder', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('sortOrder');
                }
            }
            function _source (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('source', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('source');
                }
            }
            function _tagRenderer (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('tagRenderer', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('tagRenderer');
                }
            }
            function _takeTopWeightedItems (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('takeTopWeightedItems', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('takeTopWeightedItems');
                }
            }
            function _textColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('textColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('textColor');
                }
            }
            function _urlBase (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('urlBase', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('urlBase');
                }
            }
            function _urlMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('urlMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('urlMember');
                }
            }
            function _valueMember (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('valueMember', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('valueMember');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxTagCloud('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxTagCloud('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxTagCloud(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['alterTextCase','disabled','displayLimit','displayMember','displayValue','fontSizeUnit','height','maxColor','maxFontSize','maxValueToDisplay','minColor','minFontSize','minValueToDisplay','rtl','sortBy','sortOrder','source','tagRenderer','takeTopWeightedItems','textColor','urlBase','urlMember','valueMember','width'];
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
                 get alterTextCase() {
                     return _alterTextCase();
                 },
                 set alterTextCase(newValue) {
                     _alterTextCase(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get displayLimit() {
                     return _displayLimit();
                 },
                 set displayLimit(newValue) {
                     _displayLimit(newValue);
                 },
                 get displayMember() {
                     return _displayMember();
                 },
                 set displayMember(newValue) {
                     _displayMember(newValue);
                 },
                 get displayValue() {
                     return _displayValue();
                 },
                 set displayValue(newValue) {
                     _displayValue(newValue);
                 },
                 get fontSizeUnit() {
                     return _fontSizeUnit();
                 },
                 set fontSizeUnit(newValue) {
                     _fontSizeUnit(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get maxColor() {
                     return _maxColor();
                 },
                 set maxColor(newValue) {
                     _maxColor(newValue);
                 },
                 get maxFontSize() {
                     return _maxFontSize();
                 },
                 set maxFontSize(newValue) {
                     _maxFontSize(newValue);
                 },
                 get maxValueToDisplay() {
                     return _maxValueToDisplay();
                 },
                 set maxValueToDisplay(newValue) {
                     _maxValueToDisplay(newValue);
                 },
                 get minColor() {
                     return _minColor();
                 },
                 set minColor(newValue) {
                     _minColor(newValue);
                 },
                 get minFontSize() {
                     return _minFontSize();
                 },
                 set minFontSize(newValue) {
                     _minFontSize(newValue);
                 },
                 get minValueToDisplay() {
                     return _minValueToDisplay();
                 },
                 set minValueToDisplay(newValue) {
                     _minValueToDisplay(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get sortBy() {
                     return _sortBy();
                 },
                 set sortBy(newValue) {
                     _sortBy(newValue);
                 },
                 get sortOrder() {
                     return _sortOrder();
                 },
                 set sortOrder(newValue) {
                     _sortOrder(newValue);
                 },
                 get source() {
                     return _source();
                 },
                 set source(newValue) {
                     _source(newValue);
                 },
                 get tagRenderer() {
                     return _tagRenderer();
                 },
                 set tagRenderer(newValue) {
                     _tagRenderer(newValue);
                 },
                 get takeTopWeightedItems() {
                     return _takeTopWeightedItems();
                 },
                 set takeTopWeightedItems(newValue) {
                     _takeTopWeightedItems(newValue);
                 },
                 get textColor() {
                     return _textColor();
                 },
                 set textColor(newValue) {
                     _textColor(newValue);
                 },
                 get urlBase() {
                     return _urlBase();
                 },
                 set urlBase(newValue) {
                     _urlBase(newValue);
                 },
                 get urlMember() {
                     return _urlMember();
                 },
                 set urlMember(newValue) {
                     _urlMember(newValue);
                 },
                 get valueMember() {
                     return _valueMember();
                 },
                 set valueMember(newValue) {
                     _valueMember(newValue);
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

                JQXLite(componentSelector).on('bindingComplete', function (event) { that.emit('bindingComplete', event); });
                JQXLite(componentSelector).on('itemClick', function (event) { that.emit('itemClick', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxTagCloud(widgetOptions);
			})
			return {id, componentSelector, destroy,findTagIndex,getHiddenTagsList,getRenderedTags,getTagsList,hideItem,insertAt,removeAt,updateAt,showItem, setOptions, options, getOptions, createComponent};
        },
    }
</script>
