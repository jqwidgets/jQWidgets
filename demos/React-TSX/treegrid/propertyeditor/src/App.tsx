import * as React from 'react';
 

import * as ReactDOM from "react-dom";

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxTreeGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';
// import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';
// 


class App extends React.PureComponent<{}, any> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();
    private input = React.createRef<JqxInput>();
    private inputs: any[] = [];
    private inputsRefs: any = {};

    private references: any[] = [];

    constructor(props: {}) {
        super(props);

        /* tslint:disable:no-console */

        this.setRef = this.setRef.bind(this);
        this.click = this.click.bind(this);

        this.cellValueChanged = this.cellValueChanged.bind(this);

        const data: any[] = [
            { "property": "Name", "type": "string", "value": "jqxTreeGrid" },
            {
                "children": [
                    { "property": "X", "value": "0", "type": "number" },
                    { "property": "Y", "value": "0", "type": "number" }
                ],
                "property": "Location",
                "type": "string", "value": "0, 0"
            },
            {
                "children": [
                    { "property": "Width", "value": "200", "type": "number" },
                    { "property": "Height", "value": "200", "type": "number" }
                ],
                "property": "Size", "type": "string", "value": "200, 200"
            },
            { "property": "Background", "type": "color", "value": "#4621BC" },
            { "property": "Color", "type": "color", "value": "#B1B11B" },
            { "property": "Alignment", "type": "align", "value": "Left" },
            { "property": "Enabled", "type": "bool", "value": "true" }
        ];

        const source: any = {
            dataFields: [
                { name: 'property', type: 'string' },
                { name: 'value', type: 'string' },
                { name: 'type', type: 'string' },
                { name: 'children', type: 'array' }
            ],
            dataType: 'json',
            hierarchy:
            {
                root: 'children'
            },
            localData: data
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { editable: false, dataField: 'property', text: 'Property Name', width: 200 },
                {
                    columnType: 'custom',
                    // creates an editor depending on the 'type' value.
                    createEditor: (rowKey: any, cellvalue: any, editor: any, cellText: any, width: any, height: any): void => {
                        const row = this.myTreeGrid.current!.getRow(rowKey);
                        const type = row.type;
                        console.log('createEditor');

                        switch (type) {
                            case 'string':
                            case 'number':
                                // let inputContainer = document.createElement('input');
                                // inputContainer.id = 'myInput';
                                // inputContainer.style.cssText = 'height: 100%; border: none';
                                // editor[0].appendChild(inputContainer);
                                // this.myInput = jqwidgets.createInstance('#myInput', 'jqxInput', { width: '100%', height: '100%' });
                                console.log('%cnumber', 'color: yellow;');

                                // VUE approach
                                // let inputContainer = document.createElement('input');
                                // inputContainer.id = 'myInput';
                                // inputContainer.style.cssText = 'height: 100%; border: none';
                                // editor[0].appendChild(inputContainer);
                                // this['inputRow' + rowKey] = jqwidgets.createInstance('#myInput', 'jqxInput', { width: '100%', height: '100%' });
                                // break;


                                const inputDom = document.createElement('div');
                                inputDom.style.cssText = 'overflow: hidden; position: relative; height: 100%; width: 100%;';
                                editor[0].appendChild(inputDom);

                                const inputComponent = <JqxInput theme={'material-purple'} ref={this.input} key={rowKey} width={'100%'} height={'100%'} source={['Item 1', 'Item 2', 'Item 3', 'Item 4']} />;
                                // const inputComponent = <JqxInput theme={'material-purple'} ref={this.input[rowKey]} key={rowKey} width={'100%'} height={'100%'} source={['Item 1', 'Item 2', 'Item 3', 'Item 4']} />;

                                const inputReference = ReactDOM.render(inputComponent, inputDom);

                                const inputObject: any = {};
                                inputObject[rowKey] = inputReference;
                                this.inputs.push(inputObject);

                                // console.log(1001, inputComponent, rowKey, 2002, inputReference, 5555, this.inputs);
                                this.inputsRefs[rowKey] = inputReference;

                                break;
                            case 'align':
                                console.log('align');

                                // let dropDownListContainer = document.createElement('div');
                                // dropDownListContainer.id = 'myDropDownList';
                                // dropDownListContainer.style.cssText = 'height: 100%; border: none';
                                // editor[0].appendChild(dropDownListContainer);
                                // let options =
                                // {
                                //     width: '100%', height: '100%', autoDropDownHeight: true, source: ['Left', 'Center', 'Right']
                                // };
                                // this.myDropDownList = jqwidgets.createInstance('#myDropDownList', 'jqxDropDownList', options);
                                break;
                            case 'color':
                                // if (rowKey === '3') {
                                //     let dropDownButtonContainer = document.createElement('div');
                                //     dropDownButtonContainer.id = 'myDropDownButton1';
                                //     dropDownButtonContainer.style.cssText = 'height: 100%; border: none';
                                //     dropDownButtonContainer.innerHTML = '<div style="padding: 5px;"><div class="myColorPicker1"></div></div>';
                                //     editor[0].appendChild(dropDownButtonContainer);
                                //     let myDropDownButton1 = jqwidgets.createInstance('#myDropDownButton1', 'jqxDropDownButton', { width: '100%', height: '100%' });
                                //     this.myColorPicker1 = jqwidgets.createInstance(`.myColorPicker1`, 'jqxColorPicker', { width: 220, height: 220 });
                                //     this.myColorPicker1.addEventHandler('colorchange', (event: any): void => {
                                //         myDropDownButton1.setContent(this.getTextElementByColor(event.args.color));
                                //     });
                                // } else {
                                //     let dropDownButtonContainer = document.createElement('div');
                                //     dropDownButtonContainer.id = 'myDropDownButton2';
                                //     dropDownButtonContainer.style.cssText = 'height: 100%; border: none';
                                //     dropDownButtonContainer.innerHTML = '<div style="padding: 5px;"><div class="myColorPicker2"></div></div>';
                                //     editor[0].appendChild(dropDownButtonContainer);
                                //     let myDropDownButton2 = jqwidgets.createInstance('#myDropDownButton2', 'jqxDropDownButton', { width: '100%', height: '100%' });
                                //     this.myColorPicker2 = jqwidgets.createInstance(`.myColorPicker2`, 'jqxColorPicker', { width: 220, height: 220 });
                                //     this.myColorPicker2.addEventHandler('colorchange', (event: any): void => {
                                //         myDropDownButton2.setContent(this.getTextElementByColor(event.args.color));
                                //     });
                                // }
                                console.log('color');

                                break;
                            case 'bool':
                                console.log('bool');

                                // let checkBoxContainer = document.createElement('div');
                                // checkBoxContainer.id = 'myCheckBox';
                                // checkBoxContainer.style.cssText = 'margin-top: 6px; margin-left: -8px; left: 50%; position: relative';
                                // editor[0].appendChild(checkBoxContainer);
                                // this.myCheckBox = jqwidgets.createInstance('#myCheckBox', 'jqxCheckBox', { checked: cellvalue });
                                break;
                        }
                    },
                    dataField: 'value',
                    // returns the value of the custom editor.
                    getEditorValue: (rowKey: any, cellvalue: any, editor: any): any => {
                        console.log('%cgetEditorValue', 'color: greenyellow;');

                        const row = this.myTreeGrid.current!.getRow(rowKey);
                        // const inputItem = React.createRef<JqxInput>();
                        // inputItem = this.inputsRefs[rowKey];
                        const item = this.inputsRefs[rowKey];
                        // const querySelector = document.querySelector(item._id);
                        // console.log('getEditorValue', rowKey, item, this.references, 'cellvalue', cellvalue, editor, this.input);

                        // console.log(item!.getOptions('value'), editor[0]!.children[0]!.children[0].value, this.input.current!);
                        console.log(item!.getOptions('value'), editor[0]!.children[0]!.children[0].value);

                        // console.log('getEditorValue', rowKey, item, this.references[0]!.getOptions('value'));
                        // console.log('getEditorValue', rowKey, item, item._id, 7557, editor, querySelector);
                        // console.log('getEditorValue', row, rowKey, this.inputs, 7777, this.inputsRefs);

                        switch (row.type) {
                            case 'string':
                            // return this.myInput.val(1);
                            case 'number':
                            // let number = parseFloat(this.myInput.val());
                            // if (isNaN(number)) {
                            //     return 0;
                            // }
                            // else return number;
                            // return "Item X";
                            case 'align':
                            // return this.myDropDownList.val(1);
                            case 'color':
                            // if (rowKey === '3') {
                            //     let color = this.myColorPicker1.getColor();
                            //     return '#' + color.hex;
                            // } else {
                            //     let color = this.myColorPicker2.getColor();
                            //     return '#' + color.hex;
                            // }
                            case 'bool':
                            // return this.myCheckBox.val();
                        }
                        return '';
                    },
                    // updates the editor's value.
                    initEditor: (rowKey: any, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
                        const row = this.myTreeGrid.current!.getRow(rowKey);
                        console.log('%cinitEditor', 'color: orange;');

                        console.log(this, editor, row);


                        // let row = this.$refs.myTreeGrid.getRow(rowKey);
                        // switch (row.type) {
                        //     case 'string':
                        //     case 'number':
                        //         this['inputRow' + rowKey].val(cellvalue);
                        //         break;
                        //     case 'align':
                        //         this.myDropDownList.val(cellvalue);
                        //         break;
                        //     case 'color':
                        //         if (rowKey === '3') {
                        //             this.myColorPicker1.setColor(cellvalue);
                        //         } else {
                        //             this.myColorPicker2.setColor(cellvalue);
                        //         }
                        //         break;
                        //     case 'bool':
                        //         this.myCheckBox.val(cellvalue);
                        //         break;
                        // }
                    },
                    text: 'Value',
                    width: 230,
                }
            ],
            inRefs: [],
            source: dataAdapter
        }
    }

    public render() {
        return (
            <div>
                <JqxButton theme={'material-purple'} onClick={this.click}>Check</JqxButton>

                <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                    onCellValueChanged={this.cellValueChanged}
                    source={this.state.source}
                    altRows={true}
                    autoRowHeight={true}
                    editable={true}
                    columns={this.state.columns}
                    />
            </div>
        );
    }

    private setRef = (ref: any) => {
        this.references.push(ref);
        // // console.log(7007, ref, this.state.inRefs);
        // console.log(7007, ref);

        /* tslint:disable:no-string-literal */
        console.log(ref)
        ref = React.createRef<JqxInput>();

        console.log(ref);

        // this.state.inRefs.push(this['ref']);

        return ref;
    }

    // Event handling
    private cellValueChanged(event: any): void {
        // const args = event.args;
        // this.rowKey = args.key;
        // this.updateButtons('Select');
        // console.log(1001, event, this.state.inRefs);
        console.log(1001, this.state.inRefs);

    }

    private click(event: any): void {
        console.log(this.input.current!, this.input.current!.val());
    }
}

export default App;
