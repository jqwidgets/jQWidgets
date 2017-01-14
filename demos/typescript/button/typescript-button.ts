/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createButton(ButtonSelector, SubmitButtonSelector, HTMLButtonSelector, ImageButtonSelector, TextImageButtonSelector, DisabledButtonSelector)
{   
    // initialization options - validated in typescript
    // jqwidgets.ButtonOptions has generated TS definition
    let ButtonOptions: jqwidgets.ButtonOptions =
    {
        width: 120, height: 40
    };
    let ImageOptions: jqwidgets.ButtonOptions =
    {
        width: 120, height: 40, imgSrc: "../../../images/facebook.png"
    };
    let TextOptions: jqwidgets.ButtonOptions =
    {
        width: 120, height: 40, textImageRelation: "imageBeforeText", textPosition: "left", imgSrc: "../../../images/twitter.png"
    };
    let DisabledOptions: jqwidgets.ButtonOptions =
    {
        disabled: true, width: 120, height: 40
    };

    // creates an instance
    let myButton: jqwidgets.jqxButton = jqwidgets.createInstance(ButtonSelector, 'jqxButton', ButtonOptions);
    let mySubmitButton: jqwidgets.jqxButton = jqwidgets.createInstance(SubmitButtonSelector, 'jqxButton', ButtonOptions); 
    let myHTMLButton: jqwidgets.jqxButton = jqwidgets.createInstance(HTMLButtonSelector, 'jqxButton', ButtonOptions);
    let myImageButton: jqwidgets.jqxButton = jqwidgets.createInstance(ImageButtonSelector, 'jqxButton', ImageOptions);
    let myTextImageButton: jqwidgets.jqxButton = jqwidgets.createInstance(TextImageButtonSelector, 'jqxButton', TextOptions);
    let myDisabledButton: jqwidgets.jqxButton = jqwidgets.createInstance(DisabledButtonSelector, 'jqxButton', DisabledOptions);

    //Events
    let eventsContainer = document.getElementById('events');

    //Normal Button Events
    document.getElementById('jqxButton').addEventListener('click', function ()
    {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>Button Clicked</span>';
    }, true);
    document.getElementById('jqxSubmitButton').addEventListener('click', function ()
    {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>Submit Button Clicked</span>';
    }, true);
    document.getElementById('jqxHTMLButton').addEventListener('click', function ()
    {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>HTML Button Clicked</span>';
        ButtonOptions = {
            value: "<span style='font-style: italic;'>Thanks for clicking me!</span>"
        }
        myHTMLButton.setOptions(ButtonOptions);
    }, true);

    //Image Button Events
    document.getElementById('jqxImageButton').addEventListener('click', function ()
    {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>Image Button Clicked</span>';
    }, true);

    //Text Button Events
    document.getElementById('jqxTextImageButton').addEventListener('click', function ()
    {
        eventsContainer.innerHTML = '';
        eventsContainer.innerHTML = '<span>Text/Image Button Clicked</span>';
        TextOptions = {
            textImageRelation: "textBeforeImage", imgPosition: "left", textPosition: "center"
        }
        myTextImageButton.setOptions(TextOptions);
    }, true);
}
