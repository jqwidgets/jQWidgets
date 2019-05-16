import * as React from 'react';
 


import JqxDockPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdockpanel';

class App extends React.PureComponent<{}> {

    private myDockPanel = React.createRef<JqxDockPanel>();
    private first = React.createRef<HTMLDivElement>();
    private second = React.createRef<HTMLDivElement>();
    private third = React.createRef<HTMLDivElement>();
    private fourth = React.createRef<HTMLDivElement>();
    private left = React.createRef<HTMLDivElement>();
    private top = React.createRef<HTMLDivElement>();
    private right = React.createRef<HTMLDivElement>();
    private bottom = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.clickOnLayout = this.clickOnLayout.bind(this);
        this.layoutOnClick = this.layoutOnClick.bind(this);
    }

    public componentDidMount() {
        this.left.current!.setAttribute('dock', 'left');
        this.top.current!.setAttribute('dock', 'top');
        this.top.current!.style.height = '20px';
        this.right.current!.setAttribute('dock', 'right');
        this.bottom.current!.setAttribute('dock', 'bottom');
        this.bottom.current!.style.height = '20px';
    }

    public render() {

        return (
            <div style={{ width: '300px', height: '600px', fontSize: '13px', fontFamily: 'Verdana' }}>
                <JqxDockPanel  ref={this.myDockPanel} style={{ color: 'white' }} width={300} height={210}>
                    <div ref={this.first} data-dock='left' style={{ background: '#486974' }}>
                        First Div
                    </div>
                    <div ref={this.second} data-dock='top' style={{ height: '100px', background: '#368ba7' }}>
                        Second Div
                    </div>
                    <div ref={this.third} data-dock='right' style={{ background: '#df7169' }}>
                        Third Div
                    </div>
                    <div ref={this.fourth} style={{ background: '#a73654' }}>
                        Fourth Div
                    </div>
                </JqxDockPanel>
                <br />
                <div>Layout Types:</div>
                <div onClick={this.clickOnLayout}>
                    <img title={'click to apply a new layout'} alt={'layout types'} src={'https://www.jqwidgets.com/react/images/LayoutTypes.png'} />
                </div>
                <br />
                <div>Spiral:</div>
                <JqxDockPanel  style={{ color: 'white' }} width={300} height={210} lastchildfill={false}>
                    <div ref={this.left} style={{ background: '#486974', width: '20px' }}>
                        1
                    </div>
                    <div ref={this.top} style={{ background: '#368ba7' }}>
                        2
                    </div>
                    <div ref={this.right} style={{ background: '#df7169', width: '20px' }}>
                        3
                    </div>
                    <div ref={this.bottom} style={{ background: '#a73654' }}>
                        4
                    </div>
                </JqxDockPanel>
            </div>
        );
    }

    private layoutOnClick(event: any): void {
        const layoutsLength = 4;
        const firstElement = this.first.current!;
        const secondElement = this.second.current!;
        const thirdElement = this.third.current!;
        const fourthElement = this.fourth.current!;

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
    }

    private clickOnLayout(event: any): void {
        this.layoutOnClick(event);
        this.myDockPanel.current!.refresh();
    };
}

export default App;