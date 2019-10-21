import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxToolBarComponent } from 'jqwidgets-ng/jqxtoolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myToolbar', { static: false }) myToolBar: jqxToolBarComponent;
    @ViewChild('shape', { static: false }) shape: ElementRef;

	getWidth() : any {
		if (document.body.offsetWidth < 700) {
			return '90%';
		}
		
		return 700;
	}
	
    theme: string = '';
    tools: string = 'input | input | dropdownlist | custom';
    initTools: any = (type: any, index: number, tool: any, menuToolIninitialization: any): void => {
        switch (index) {
            case 0:
                tool.jqxInput({ width: 130, placeHolder: 'Enter width...' });
                tool.on('change', () => {
                    this.shape.nativeElement.style.width = tool.val() + 'px';
                });
                break;
            case 1:
                tool.jqxInput({ width: 130, placeHolder: 'Enter height...' });
                tool.on('change', () => {
                    this.shape.nativeElement.style.height = tool.val() + 'px';
                });
                break;
            case 2:
                tool.jqxDropDownList({ width: 130, source: ['square', 'circle'], placeHolder: 'Choose shape...' });
                tool.on('change', (event) => {
                    let args = event.args;
                    if (args) {
                        let label = args.item.label;
                        if (label == 'square') {
                            this.shape.nativeElement.style.borderRadius = 0;
                        } else {
                            this.shape.nativeElement.style.borderRadius = '50%';
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
                    tool.jqxDropDownButton('setContent', getTextElementByColor(event.args.color));
                    this.shape.nativeElement.style.backgroundColor = '#' + event.args.color.hex;
                });
                colorPicker.jqxColorPicker({ color: '0F2B70', colorMode: 'hue', width: 220, height: 220 });
                tool.jqxDropDownButton({ width: 130, height: 21 });
                tool.jqxDropDownButton('setContent', getTextElementByColor(new jqx.color({ hex: '0F2B70' })));
                break;
        }
    }
}