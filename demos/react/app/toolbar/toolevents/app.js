import React from 'react';
import ReactDOM from 'react-dom';

import JqxToolBar from '../../../jqwidgets-react/react_jqxtoolbar.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
    render () {
        let tools = 'input | input | dropdownlist | custom';
        let theme = '';
        let initTools = (type, index, tool, menuToolIninitialization) => {
            switch (index) {
                case 0:
                    tool.jqxInput({ width: 130, placeHolder: 'Enter width...' });
                    tool.on('change', () => {
                        let shape = document.getElementById('shape');
                        shape.style.width = tool.val() +  'px';
                    });
                    break;
                case 1:
                    tool.jqxInput({ width: 130, placeHolder: 'Enter height...' });
                    tool.on('change', () => {
                        let shape = document.getElementById('shape');
                        shape.style.height = tool.val() +  'px';
                    });
                    break;
                case 2:
                    let shape = document.getElementById('shape');
                    tool.jqxDropDownList({ width: 130, source: ['square', 'circle'], placeHolder: 'Choose shape...' });
                    tool.on('change', (event) => {
                        let args = event.args;
                        if (args) {
                            let label = args.item.label;
                            if (label == 'square') {
                                shape.style.borderRadius = 0;
                            } else {
                                shape.style.borderRadius = '50%';
                            }
                        }
                    });
                    break;
                case 3:                    
                    tool.append("<div style='padding: 3px;'><div></div></div>");
                    let colorPicker = tool.children().children();
                    let getTextElementByColor = (color) => {
                        if (color == 'transparent' || color.hex == '') {
                            return $("<div style='text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;'>transparent</div>");
                        }
                        let element = $("<div style='text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;'>#" + color.hex + "</div>");
                        let nThreshold = 105;
                        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
                        element.css('color', foreColor);
                        element.css('background', '#' + color.hex);
                        element.addClass('jqx-rc-all');
                        return element;
                    }
                    colorPicker.on('colorchange', (event) => {
                        let shape = document.getElementById('shape');
                        tool.jqxDropDownButton('setContent', getTextElementByColor(event.args.color));
                        shape.style.backgroundColor =  '#' + event.args.color.hex;
                    });
                    colorPicker.jqxColorPicker({ color: '0F2B70', colorMode: 'hue', width: 220, height: 220 });
                    tool.jqxDropDownButton({ width: 130, height: 21 });
                    tool.jqxDropDownButton('setContent', getTextElementByColor(new $.jqx.color({ hex: '0F2B70' })));
                    break;
            }
        }
        return (
            <div>

                <JqxToolBar ref='myToolBar'
                    width={670} height={35}
                    initTools={initTools} tools={tools}
                />
                <div  style={{marginTop: 20, marginBottom: 50, fontSize: 'small', fontFamily: 'Verdana'}}>
                    Modify the shape by changing the options in the toolbar.</div>
                <div id='shape' style={{width: 200, height: 200, border: '1px solid #222222', borderRadius: '50%',
                    backgroundColor: '#0F2B70'}}>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
