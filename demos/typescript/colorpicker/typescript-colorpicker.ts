/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createColorPicker(ColorPickerSelector, ScrollViewSelector, DropDownSelector)
{   
    // initialization options - validated in typescript
    // jqwidgets.ColorPickerOptions has generated TS definition
    let ColorPickerOptions: jqwidgets.ColorPickerOptions =
    {
        colorMode: 'hue', width: 220, height: 220
    };
    let ScrollViewOptions: jqwidgets.ScrollViewOptions =
    {
        slideShow: true, width: 500, height: 350, showButtons: false
    };
    let DropDownOptions: jqwidgets.DropDownButtonOptions =
    {
        width: 150, height: 22
    };

    // creates an instance
    let myColorPicker: jqwidgets.jqxColorPicker = jqwidgets.createInstance(ColorPickerSelector, 'jqxColorPicker', ColorPickerOptions);
    let myScrollView: jqwidgets.jqxScrollView = jqwidgets.createInstance(ScrollViewSelector, 'jqxScrollView', ScrollViewOptions);
    let myDropDownButton: jqwidgets.jqxDropDownButton = jqwidgets.createInstance(DropDownSelector, 'jqxDropDownButton', DropDownOptions);   

    myDropDownButton.setContent(getTextElementByColor({ hex: "FFAABB" }));

    myColorPicker.addEventHandler('colorchange', function (event)
    {
        myDropDownButton.setContent(getTextElementByColor(event.args.color));
        document.getElementById('photoGallery').style.borderColor = '#' + event.args.color.hex;
    });
}

function getTextElementByColor(color)
{
    if (color == 'transparent' || color.hex == "")
    {
        return '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;">transparent</div>';
    }
    let nThreshold = 105;
    let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
    let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
    let element = '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
    return element;
}