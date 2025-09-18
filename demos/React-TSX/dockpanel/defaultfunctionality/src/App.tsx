import * as React from 'react';
import { useRef, useEffect, useCallback } from 'react';
import JqxDockPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdockpanel';

function App() {
    const myDockPanel = useRef<JqxDockPanel>(null);
    const first = useRef<HTMLDivElement>(null);
    const second = useRef<HTMLDivElement>(null);
    const third = useRef<HTMLDivElement>(null);
    const fourth = useRef<HTMLDivElement>(null);
    const left = useRef<HTMLDivElement>(null);
    const top = useRef<HTMLDivElement>(null);
    const right = useRef<HTMLDivElement>(null);
    const bottom = useRef<HTMLDivElement>(null);

    useEffect(() => {
        first.current!.setAttribute('dock', 'left');
        second.current!.setAttribute('dock', 'top');
        second.current!.style.height = '100px';
        third.current!.setAttribute('dock', 'right');
        left.current!.setAttribute('dock', 'left');
        top.current!.setAttribute('dock', 'top');
        top.current!.style.height = '20px';
        right.current!.setAttribute('dock', 'right');
        bottom.current!.setAttribute('dock', 'bottom');
        bottom.current!.style.height = '20px';
        myDockPanel.current!.refresh();
    }, []);

    const layoutOnClick = useCallback((event: any) => {
        const layoutsLength = 4;
        const firstElement = first.current!;
        const secondElement = second.current!;
        const thirdElement = third.current!;
        const fourthElement = fourth.current!;

        const position = parseInt(event.clientX, 10) - parseInt(event.target.offsetLeft, 10);

        if (position < 55) {
            firstElement.setAttribute('dock', 'bottom');
            firstElement.style.height = '105px';
            secondElement.setAttribute('dock', 'left');
            secondElement.style.width = '100px';
            thirdElement.setAttribute('dock', 'left');
            thirdElement.style.width = '100px';
            fourthElement.setAttribute('dock', 'left');
            fourthElement.style.width = '100px';
        } else if (position < 115) {
            for (let i = 0; i < layoutsLength; i++) {
                const child = document.querySelector('.jqx-dockpanel')!.firstChild!.childNodes[i] as HTMLDivElement;
                child.style.width = '100px';
            }
            firstElement.setAttribute('dock', 'left');
            secondElement.setAttribute('dock', 'right');
            thirdElement.setAttribute('dock', 'bottom');
            thirdElement.style.height = '140px';
            fourthElement.setAttribute('dock', 'top');
            fourthElement.style.height = '70px';
        } else if (position < 175) {
            for (let i = 0; i < layoutsLength; i++) {
                const child = document.querySelector('.jqx-dockpanel')!.firstChild!.childNodes[i] as HTMLDivElement;
                child.style.width = '150px';
            }
            firstElement.setAttribute('dock', 'left');
            secondElement.setAttribute('dock', 'left');
            thirdElement.setAttribute('dock', 'left');
            fourthElement.setAttribute('dock', 'left');
        } else if (position < 235) {
            for (let i = 0; i < layoutsLength; i++) {
                const child = document.querySelector('.jqx-dockpanel')!.firstChild!.childNodes[i] as HTMLDivElement;
                child.style.height = '70px';
            }
            firstElement.setAttribute('dock', 'top');
            secondElement.setAttribute('dock', 'top');
            thirdElement.setAttribute('dock', 'top');
            fourthElement.setAttribute('dock', 'top');
        }
        else {
            for (let i = 0; i < layoutsLength; i++) {
                const child = document.querySelector('.jqx-dockpanel')!.firstChild!.childNodes[i] as HTMLDivElement;
                child.style.width = '100px';
            }
            firstElement.setAttribute('dock', 'left');
            secondElement.setAttribute('dock', 'left');
            thirdElement.setAttribute('dock', 'left');
            fourthElement.setAttribute('dock', 'left');
        }
    }, []);

    const clickOnLayout = useCallback((event: any) => {
        layoutOnClick(event);
        myDockPanel.current!.refresh();
    }, [layoutOnClick]);

    return (
        <div style={{ width: '300px', height: '600px', fontSize: '13px', fontFamily: 'Verdana' }}>
            <JqxDockPanel ref={myDockPanel} style={{ color: 'white' }} width={300} height={210}>
                <div ref={first} style={{ background: '#486974' }}>
                    First Div
                </div>
                <div ref={second} style={{ background: '#368ba7' }}>
                    Second Div
                </div>
                <div ref={third} style={{ background: '#df7169' }}>
                    Third Div
                </div>
                <div ref={fourth} style={{ background: '#a73654' }}>
                    Fourth Div
                </div>
            </JqxDockPanel>
            <br />
            <div>Layout Types:</div>
            <div onClick={clickOnLayout}>
                <img title={'click to apply a new layout'} alt={'layout types'} src={'https://www.jqwidgets.com/react/images/LayoutTypes.png'} />
            </div>
            <br />
            <div>Spiral:</div>
            <JqxDockPanel style={{ color: 'white' }} width={300} height={210} lastchildfill={false}>
                <div ref={left} style={{ background: '#486974', width: '20px' }}>
                    1
                </div>
                <div ref={top} style={{ background: '#368ba7' }}>
                    2
                </div>
                <div ref={right} style={{ background: '#df7169', width: '20px' }}>
                    3
                </div>
                <div ref={bottom} style={{ background: '#a73654' }}>
                    4
                </div>
            </JqxDockPanel>
        </div>
    );
}

export default App;