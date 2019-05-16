import * as React from 'react';
 


import './App.css';

import 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcolorpicker';
import JqxToolbar, { IToolBarProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar';

class App extends React.PureComponent<{}, IToolBarProps> {
    private myToolBar = React.createRef<JqxToolbar>();
    private shape = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);

        this.state = {
            initTools: (type: any, index: any, tool: any, menuToolIninitialization: any) => {
                switch (index) {
                    case 0:
                        tool.jqxInput({ width: 130, placeHolder: 'Enter width...' });
                        tool.on('change', () => {
                            this.shape.current!.style.width = tool.val() + 'px';
                        });
                        break;
                    case 1:
                        tool.jqxInput({ width: 130, placeHolder: 'Enter height...' });
                        tool.on('change', () => {
                            this.shape.current!.style.height = tool.val() + 'px';
                        });
                        break;
                    case 2:
                        tool.jqxDropDownList({ width: 130, source: ['square', 'circle'], placeHolder: 'Choose shape...' });
                        tool.on('change', (event: any) => {
                            const args = event.args;
                            if (args) {
                                const label = args.item.label;
                                if (label === 'square') {
                                    this.shape.current!.style.borderRadius = '0px';
                                } else {
                                    this.shape.current!.style.borderRadius = '50%';
                                }
                            }
                        });
                        break;
                    case 3:
                        tool.append("<div style='padding: 3px;'><div></div></div>");
                        const colorPicker = tool.children().children();
                        const getTextElementByColor = (color: any) => {
                            if (color === 'transparent' || color.hex === '') {
                                return "<div style='text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;'>transparent</div>"
                            }

                            const element = document.createElement("div");
                            element.style.cssText = "text-shadow: none; position: relative; padding-bottom: 0px; margin-top: 0px;";
                            element.innerText = `#${color.hex}`;

                            const nThreshold = 105;
                            const bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
                            const foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';

                            element.style.cssText = `color: ${foreColor}; background: #${color.hex}`;

                            element.className += element.className + ' ' + 'jqx-rc-all';
                            return element;
                        }
                        colorPicker.on('colorchange', (event: any) => {
                            tool.jqxDropDownButton('setContent', getTextElementByColor(event.args.color));
                            this.shape.current!.style.backgroundColor = '#' + event.args.color.hex;
                        });
                        colorPicker.jqxColorPicker({ color: '0F2B70', colorMode: 'hue', width: 220, height: 220 });
                        tool.jqxDropDownButton({ width: 130, height: 22 });
                        tool.jqxDropDownButton('setContent', getTextElementByColor(new jqx.color({ hex: '0F2B70' })));
                        break;
                }
            },
            tools: 'input | input | dropdownlist | custom'
        }
    }

    public render() {
        return (
            <div>
                <JqxToolbar ref={this.myToolBar}
                    width={'100%'}
                    height={35}
                    tools={this.state.tools}
                    initTools={this.state.initTools}
                />

                <div style={{ marginTop: 20, marginBottom: 50, fontSize: 'small', fontFamily: 'Verdana' }}>
                    Modify the shape by changing the options in the toolbar.
				</div>

                <div ref={this.shape}
                    style={{
                        backgroundColor: '#0F2B70',
                        border: '1px solid #222222',
                        borderRadius: '50%',
                        height: 200,
                        width: 200,
                    }}
                />
            </div>
        );
    }
}

export default App;
