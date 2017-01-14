/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createKnob(selector) {
    // initialization options - validated in typescript
    // jqwidgets.KnobOptions has generated TS definition
    let options: jqwidgets.KnobOptions = {
        value: 60,
        min: 0,
        max: 100,
        startAngle: 120,
        endAngle: 420,
        snapToStep: true,
        rotation: 'clockwise',
        style: {
            stroke: '#dfe3e9', strokeWidth: 3,
            fill: { color: '#fefefe', gradientType: "linear", gradientStops: [[0, 1], [50, 0.9], [100, 1]] }
        },
        marks: {
            colorRemaining: { color: 'grey', border: 'grey' },
            colorProgress: { color: '#00a4e1', border: '#00a4e1' },
            type: 'line',
            offset: '71%',
            thickness: 3,
            size: '6%',
            majorSize: '9%',
            majorInterval: 10,
            minorInterval: 2
        },
        labels: {
            offset: '88%',
            step: 10,
            visible: true
        },
        progressBar: {
            style: { fill: '#00a4e1', stroke: 'grey' },
            size: '9%',
            offset: '60%',
            background: { fill: 'grey', stroke: 'grey' }
        },
        pointer: { type: 'arrow', style: { fill: '#00a4e1', stroke: 'grey' }, size: '59%', offset: '49%', thickness: 20 }
    };

    // creates an instance
    let myKnob: jqwidgets.jqxKnob = jqwidgets.createInstance(selector, 'jqxKnob', options);
    myKnob.setOptions(options);
    
    let input = document.createElement("div");
    input.setAttribute("class", "inputField");
    input.setAttribute("id", "numberInput");
    document.body.appendChild(input);

    let inputOptions: jqwidgets.NumberInputOptions = {
        width: 180,
        height: '40px',
        decimal: 60,
        min: 0,
        max: 100,
        textAlign: 'center',
        decimalDigits: 1,
        inputMode: 'simple'
    };

    // create an instance of jqxNumberInput with selector - '#numberInput'
    let myNumberInput: jqwidgets.jqxNumberInput = jqwidgets.createInstance('#numberInput', 'jqxNumberInput', inputOptions);

    myNumberInput.setOptions(inputOptions);

    // you can add event
    myNumberInput.addEventHandler('mousedown', function (event) {
        event.stopPropagation();
    });

    myNumberInput.addEventHandler('keyup', function () {
        let val: any = myNumberInput.val;
        myKnob.val(val);
    });

    myNumberInput.addEventHandler('change', function ()
    {
        let val: any = myNumberInput.val;
        myKnob.val(val);
    });

    myKnob.addEventHandler('change', function (event) {
        if (event.args.changeSource == 'propertyChange' || event.args.changeSource == 'val') { return; }
        myNumberInput.val(event.args.value);        
    });

    // you can update value
    myKnob.val(25);
}