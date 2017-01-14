/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createColorPicker(ColorPickerSelector, ScrollViewSelector, DropDownSelector) {
    // initialization options - validated in typescript
    // jqwidgets.ColorPickerOptions has generated TS definition
    var ColorPickerOptions = {
        colorMode: 'hue', width: 220, height: 220
    };
    var ScrollViewOptions = {
        slideShow: true, width: 500, height: 350, showButtons: false
    };
    var DropDownOptions = {
        width: 150, height: 22
    };
    // creates an instance
    var myColorPicker = jqwidgets.createInstance(ColorPickerSelector, 'jqxColorPicker', ColorPickerOptions);
    var myScrollView = jqwidgets.createInstance(ScrollViewSelector, 'jqxScrollView', ScrollViewOptions);
    var myDropDownButton = jqwidgets.createInstance(DropDownSelector, 'jqxDropDownButton', DropDownOptions);
    myDropDownButton.setContent(getTextElementByColor({ hex: "FFAABB" }));
    myColorPicker.addEventHandler('colorchange', function (event) {
        myDropDownButton.setContent(getTextElementByColor(event.args.color));
        document.getElementById('photoGallery').style.borderColor = '#' + event.args.color.hex;
    });
}
function getTextElementByColor(color) {
    if (color == 'transparent' || color.hex == "") {
        return '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;">transparent</div>';
    }
    var nThreshold = 105;
    var bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
    var foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
    var element = '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
    return element;
}
//# sourceMappingURL=typescript-colorpicker.js.map