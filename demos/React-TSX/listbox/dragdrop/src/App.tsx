import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

const App = () => {
    const myTextArea = useRef<JqxTextArea>(null);
    const dragStartLog = useRef<HTMLDivElement>(null);
    const dragEndLog = useRef<HTMLDivElement>(null);

    const source: IListBoxProps['source'] = [
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
    ];

    const source2: IListBoxProps['source'] = [
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
    ];

    const dragStart = useCallback((item: any): boolean => {
        if (item.label === 'Breve') {
            return false;
        }
        return true;
    }, []);

    const dragEnd = useCallback((dragItem: any, dropItem: any): boolean => {
        if (dragItem.label === 'Frappuccino') {
            return false;
        }
        return true;
    }, []);

    const renderer = useCallback((index: number, label: string, value: string): string => {
        if (label === 'Breve') {
            return '<span style="color: red;">' + label + '</span>';
        }
        return label;
    }, []);

    const renderer2 = useCallback((index: number, label: string, value: string): string => {
        if (label === 'Frappuccino') {
            return '<span style="color: red">' + label + '</span>';
        }
        return label;
    }, []);

    const onDragStart = useCallback((event: any) => {
        if (dragStartLog.current) {
            dragStartLog.current.innerHTML = 'Drag Start: ' + event.args.label;
        }
        if (dragEndLog.current) {
            dragEndLog.current.innerHTML = '';
        }
    }, []);

    const onDragEnd = useCallback((event: any) => {
        if (dragEndLog.current) {
            dragEndLog.current.innerHTML = 'Drag End';
        }
        if (event.args.label) {
            let x = event.args.originalEvent?.pageX;
            let y = event.args.originalEvent?.pageY;
            if (
                event.args.originalEvent &&
                event.args.originalEvent.originalEvent &&
                event.args.originalEvent.originalEvent.touches
            ) {
                const touch = event.args.originalEvent.originalEvent.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            }
            const textareaElement = document.getElementsByTagName('textarea')[0];
            if (textareaElement) {
                const clientRect = textareaElement.getBoundingClientRect();
                if (
                    x >= clientRect.left &&
                    x <= clientRect.right &&
                    y >= clientRect.top &&
                    y <= clientRect.bottom
                ) {
                    if (myTextArea.current) {
                        myTextArea.current.val(event.args.label);
                    }
                }
            }
        }
    }, []);

    const dragStartA = useCallback((event: any) => {
        onDragStart(event);
    }, [onDragStart]);

    const dragStartB = useCallback((event: any) => {
        onDragStart(event);
    }, [onDragStart]);

    const dragEndA = useCallback((event: any) => {
        onDragEnd(event);
    }, [onDragEnd]);

    const dragEndB = useCallback((event: any) => {
        onDragEnd(event);
    }, [onDragEnd]);

    return (
        <div>
            <JqxListBox
                theme="material-purple"
                style={{ float: 'left' }}
                onDragStart={dragStartA}
                onDragEnd={dragEndA}
                width={200}
                height={250}
                allowDrop={true}
                allowDrag={true}
                source={source}
                dragStart={dragStart}
                renderer={renderer}
            />
            <JqxListBox
                theme="material-purple"
                style={{ marginLeft: '20px', float: 'left' }}
                onDragStart={dragStartB}
                onDragEnd={dragEndB}
                width={200}
                height={250}
                allowDrop={true}
                allowDrag={true}
                source={source2}
                dragEnd={dragEnd}
                renderer={renderer2}
            />
            <div style={{ width: '200px', height: '200px', float: 'left', marginLeft: '20px' }}>
                <JqxTextArea theme="material-purple" ref={myTextArea} width={200} height={100} />
            </div>
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', paddingTop: '20px', clear: 'both' }}>
                <b>Events Log:</b>
                <div ref={dragStartLog} />
                <div ref={dragEndLog} />
                <br />
                <b>Note:</b>
                <br />
                Dragging of "Breve" is disabled.
                <br />
                Dropping of "Frappuccino" is disabled.
            </div>
        </div>
    );
};

export default App;