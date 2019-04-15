import * as React from 'react';
 


import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

export interface IState extends IListBoxProps {
    source2: IListBoxProps['source'];
    renderer2: IListBoxProps['renderer'];
}

class App extends React.PureComponent<{}, IState> {

    private myTextArea = React.createRef<JqxTextArea>();
    private dragStartLog = React.createRef<HTMLDivElement>();
    private dragEndLog = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.dragStartA = this.dragStartA.bind(this);
        this.dragStartB = this.dragStartB.bind(this);
        this.dragEndA = this.dragEndA.bind(this);
        this.dragEndB = this.dragEndB.bind(this);

        this.state = {
            dragEnd: (dragItem: any, dropItem: any): boolean => {
                if (dragItem.label === 'Frappuccino') {
                    return false;
                }
                return true;
            },
            dragStart: (item: any): boolean => {
                if (item.label === 'Breve') {
                    return false;
                }
                return true;
            },
            renderer: (index: number, label: string, value: string): string => {
                if (label === 'Breve') {
                    return '<span style="color: red;">' + label + '</span>';
                }

                return label;
            },
            renderer2: (index: number, label: string, value: string): string => {
                if (label === 'Frappuccino') {
                    return '<span style="color: red">' + label + '</span>';
                }

                return label;
            },
            source: [
                'Affogato',
                'Americano',
                'Bicerin',
                'Breve',
                'Café Bombón',
                'Café au lait',
                'Caffé Corretto',
                'Café Crema',
                'Caffé Latte',
                'Caffé macchiato',
                'Café mélange',
                'Coffee milk',
                'Cafe mocha'
            ],
            source2: [
                'Cappuccino',
                'Carajillo',
                'Cortado',
                'Cuban espresso',
                'Espresso',
                'Eiskaffee',
                'The Flat White',
                'Frappuccino',
                'Galao',
                'Greek frappé coffee',
                'Iced Coffee﻿',
                'Indian filter coffee',
                'Instant coffee',
                'Irish coffee',
                'Liqueur coffee'
            ]
        }
    }

    public render() {
        return (
            <div>
                <JqxListBox theme={'material-purple'} style={{ float: 'left' }} onDragStart={this.dragStartA} onDragEnd={this.dragEndA}
                    width={200} height={250} allowDrop={true} allowDrag={true} source={this.state.source}
                    dragStart={this.state.dragStart} renderer={this.state.renderer} />

                <JqxListBox theme={'material-purple'} style={{ marginLeft: '20px', float: 'left' }}
                    onDragStart={this.dragStartB} onDragEnd={this.dragEndB}
                    width={200} height={250} allowDrop={true} allowDrag={true} source={this.state.source2}
                    dragEnd={this.state.dragEnd} renderer={this.state.renderer2} />

                <div style={{ width: '200px', height: '200px', float: 'left', marginLeft: '20px' }}>
                    <JqxTextArea theme={'material-purple'} ref={this.myTextArea} width={200} height={100} />
                </div>
                <div style={{ fontSize: '13px', fontFamily: 'Verdana', paddingTop: '20px', clear: 'both' }}>
                    <b>Events Log:</b>
                    <div ref={this.dragStartLog} />
                    <div ref={this.dragEndLog} />
                    <br />
                    <b>Note:</b>
                    <br />
                    Dragging of "Breve" is disabled.
                    <br />
                    Dropping of "Frappuccino" is disabled.
                </div>
            </div>
        );
    }

    // Events
    private dragStartA(event: any): void {
        this.onDragStart(event);
    };

    private dragStartB(event: any): void {
        this.onDragStart(event);
    };

    private dragEndA(event: any): void {
        this.onDragEnd(event);
    };

    private dragEndB(event: any): void {
        this.onDragEnd(event);
    };

    private onDragStart(event: any): void {
        this.dragStartLog.current!.innerHTML = 'Drag Start: ' + event.args.label;
        this.dragEndLog.current!.innerHTML = '';
    }

    private onDragEnd(event: any): void {
        this.dragEndLog.current!.innerHTML = 'Drag End';
        if (event.args.label) {
            const ev = event.args.originalEvent;
            let x = ev.pageX;
            let y = ev.pageY;

            if (event.args.originalEvent && event.args.originalEvent.originalEvent && event.args.originalEvent.originalEvent.touches) {
                const touch = event.args.originalEvent.originalEvent.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            }
           
            const textareaElement = document.getElementsByTagName('textarea')[0];
            const clientRect = textareaElement.getBoundingClientRect();

            if (x >= clientRect.left && x <= clientRect.right) {
                if (y >= clientRect.top && y <= clientRect.bottom) {
                    this.myTextArea.current!.val(event.args.label);
                }
            }           
        }
    }
}

export default App;