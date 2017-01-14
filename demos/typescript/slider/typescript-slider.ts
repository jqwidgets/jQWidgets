/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createSlider(checkBoxSelector, redLevelSelector, greenLevelSelector, blueLevelSelector, colorlabelSelector, colorBlockSelector) {
    // initialization options - validated in typescript
    // jqwidgets.SliderOptions has generated TS definition
    let sliderOptions: jqwidgets.SliderOptions = {
        showTickLabels: true,
        tooltip: true,
        mode: "fixed",
        height: 60,
        min: 0,
        max: 255,
        width:300,
        ticksFrequency: 25.5,
        value: 0,
        step: 25.5,
        tickLabelFormatFunction: function (value) {
            if (value == 0) return value;
            if (value == 255) return value;
            return "";
        }
    };
    // creates an instance (red)
    let redLevel: jqwidgets.jqxSlider = jqwidgets.createInstance(redLevelSelector, 'jqxSlider', sliderOptions);
    redLevel.addEventHandler('change', function (event) {
        setColor();
    });

    // creates an instance (green)
    let greenLevel = jqwidgets.createInstance(greenLevelSelector, 'jqxSlider', sliderOptions);
    greenLevel.addEventHandler('change', function (event) {
        setColor();
    });

    // creates an instance (blue)
    let blueLevel = jqwidgets.createInstance(blueLevelSelector, 'jqxSlider', sliderOptions);
    blueLevel.addEventHandler('change', function (event) {
        setColor();
    });
    let optionsCheckBoxSelector = {
        checked: false,
        width: 200
    };

    let checkBox = jqwidgets.createInstance(checkBoxSelector, 'jqxCheckBox', optionsCheckBoxSelector);
    checkBox.addEventHandler('change', function (event) {
        let checked = event.args.checked;
        let value = 'default';
        if (!checked) {
            value = 'fixed';
            redLevel.mode = value;
            redLevel.tooltipFormatFunction = function (value) {
                if (value < 10) return value.toPrecision(1);
                if (value > 10 && value < 100) return value.toPrecision(3);
                if (value > 10 && value < 256) return value.toPrecision(4);
            };
            greenLevel.mode = value;
            greenLevel.tooltipFormatFunction = function (value) {
                if (value < 10) return value.toPrecision(1);
                if (value > 10 && value < 100) return value.toPrecision(3);
                if (value > 10 && value < 256) return value.toPrecision(4);
            };
            blueLevel.mode = value;
            blueLevel.tooltipFormatFunction = function (value) {
                if (value < 10) return value.toPrecision(1);
                if (value > 10 && value < 100) return value.toPrecision(3);
                if (value > 10 && value < 256) return value.toPrecision(4);
            };
        }
        else {
            redLevel.mode = value;
            redLevel.tooltipFormatFunction = function (value) {
                if (value < 10) return value.toPrecision(3);
                if (value > 10 && value < 100) return value.toPrecision(4);
                else return value.toPrecision(5);
            };
            greenLevel.mode = value;
            greenLevel.tooltipFormatFunction = function (value) {
                if (value < 10) return value.toPrecision(3);
                if (value > 10 && value < 100) return value.toPrecision(4);
                else return value.toPrecision(5);
            };
            blueLevel.mode = value;
            blueLevel.tooltipFormatFunction = function (value) {
                if (value < 10) return value.toPrecision(3);
                if (value > 10 && value < 100) return value.toPrecision(4);
                else return value.toPrecision(5);
            };
        }
    });

    function setColor() {
        let red = fixHex(Math.round(+redLevel.val()).toString(16)),
            green = fixHex(Math.round(greenLevel.val()).toString(16)),
            blue = fixHex(Math.round(blueLevel.val()).toString(16));
        let colorBlock = document.getElementById(colorBlockSelector);
        colorBlock.style.backgroundColor = '#' + red + green + blue;
        let colorLabel = document.getElementById(colorlabelSelector);
        colorLabel.innerHTML = ('#' + red + green + blue).toUpperCase();
        let color = getTextElement({
            r: parseInt(red, 16),
            g: parseInt(green, 16),
            b: parseInt(blue, 16)
        });

        colorLabel.style.color = color;
    }
    function fixHex(hex) {
        return (hex.length < 2) ? '0' + hex : hex;
    }
    function getTextElement(color) {
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        return foreColor;
    }

    setColor();
}
