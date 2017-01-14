/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createButton(ButtonSelector, SubmitButtonSelector, HTMLButtonSelector, ImageButtonSelector, TextImageButtonSelector, DisabledButtonSelector) {
    // initialization options - validated in typescript
    // jqwidgets.ButtonOptions has generated TS definition
    var ButtonOptions = {
        width: 120, height: 40
    };
    var ImageOptions = {
        width: 120, height: 40, imgSrc: "../../../images/facebook.png"
    };
    var TextOptions = {
        width: 120, height: 40, textImageRelation: "imageBeforeText", textPosition: "left", imgSrc: "../../../images/twitter.png"
    };
    var DisabledOptions = {
        disabled: true, width: 120, height: 40
    };
    // creates an instance
    var myButton = jqwidgets.createInstance(ButtonSelector, 'jqxButton', ButtonOptions);
    var mySubmitButton = jqwidgets.createInstance(SubmitButtonSelector, 'jqxButton', ButtonOptions);
    var myHTMLButton = jqwidgets.createInstance(HTMLButtonSelector, 'jqxButton', ButtonOptions);
    var myImageButton = jqwidgets.createInstance(ImageButtonSelector, 'jqxButton', ImageOptions);
    var myTextImageButton = jqwidgets.createInstance(TextImageButtonSelector, 'jqxButton', TextOptions);
    var myDisabledButton = jqwidgets.createInstance(DisabledButtonSelector, 'jqxButton', DisabledOptions);
    //Events
    var eventsContainer = document.getElementById('events');
    //Normal Button Events
    document.getElementById('jqxButton').addEventListener('click', function () {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>Button Clicked</span>';
    }, true);
    document.getElementById('jqxSubmitButton').addEventListener('click', function () {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>Submit Button Clicked</span>';
    }, true);
    document.getElementById('jqxHTMLButton').addEventListener('click', function () {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>HTML Button Clicked</span>';
        ButtonOptions = {
            value: "<span style='font-style: italic;'>Thanks for clicking me!</span>"
        };
        myHTMLButton.setOptions(ButtonOptions);
    }, true);
    //Image Button Events
    document.getElementById('jqxImageButton').addEventListener('click', function () {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>Image Button Clicked</span>';
    }, true);
    //Text Button Events
    document.getElementById('jqxTextImageButton').addEventListener('click', function () {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>Text/Image Button Clicked</span>';
        TextOptions = {
            textImageRelation: "textBeforeImage", imgPosition: "left", textPosition: "center"
        };
        myTextImageButton.setOptions(TextOptions);
    }, true);
}
//# sourceMappingURL=typescript-button.js.map