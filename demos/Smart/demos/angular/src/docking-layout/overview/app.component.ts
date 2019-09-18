import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {smartDockingLayout} from '@smarthtmlelements/smart-elements/source/modules/smart.dockinglayout.js';
import {smartSlider} from  '@smarthtmlelements/smart-elements/source/modules/smart.slider.js';
import {smartTextBox, smartMultilineTextBox} from  '@smarthtmlelements/smart-elements/source/modules/smart.textbox.js';
import {smartTabs} from  '@smarthtmlelements/smart-elements/source/modules/smart.tabs.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    layout: any = [
        {
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    type: 'LayoutGroup',
                    items: [
                        {
                            type: 'LayoutPanel',
                            id: 'tabPanel',
                            label: 'Input',
                            items: [{
                                label: 'TextBox Tab',
                                content: '<smart-multiline-text-box id="multiLine">Write more text here ...</smart-multiline-text-box>'
                            },
                            {
                                label: 'Slider Tab',
                                content: '<smart-slider id="slider"></smart-slider>'
                            }],
                            size: '50%'
                        },
                        {
                            type: 'LayoutPanel',
                            label: 'Output',
                            items: [
                                {
                                    id: 'outputTab',
                                    label: 'Output',
                                    headerPosition: 'none',
                                    content: 'Write more text here ...'
                                }
                            ]
                        }
                    ],
                    orientation: 'vertical',
                    size: '50%'
                },
                {
                    id: 'item0',
                    label: 'Tabs 0',
                    items: [{
                        label: 'Tab A',
                        selected: true,
                        content: 'What is Lorem Ipsum?\n' +
                            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of' + 'type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in ' + 'the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                            'Why do we use it?\n' +
                            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal ' + 'distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their' + 'default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on ' + 'purpose (injected humour and the like).'
                    }]
                }]
        }];

		ngAfterViewInit(): void {

        document.readyState === 'complete' ? init() : window.onload = init;
			function init() {
				document.getElementById('tabPanel').addEventListener('change', (event: any) => {
					if (event.target instanceof smartSlider) {
						document.getElementById('outputTab').innerHTML = event.detail.value;
					}
					else if (event.target instanceof smartMultilineTextBox) {
						document.getElementById('outputTab').innerHTML = event.target.value;
					}
					else if (event.target instanceof smartTabs) {
						const selectedTabItem = event.target.getElementsByTagName('smart-tab-item')[event.target.selectedIndex];

						if (selectedTabItem === undefined) {
							return;
						}

						if (selectedTabItem.label.toLowerCase().indexOf('slider') > -1) {
							document.getElementById('outputTab').innerHTML = selectedTabItem.querySelector('smart-slider').value;
						}
						else if (selectedTabItem.label.toLowerCase().indexOf('textbox') > -1) {
							document.getElementById('outputTab').innerHTML = selectedTabItem.querySelector('smart-multiline-text-box').value;
						}
					}
				});
			}
    }
}
