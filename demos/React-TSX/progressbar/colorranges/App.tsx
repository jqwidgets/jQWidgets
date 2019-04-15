import * as React from 'react';
 


import JqxProgressBar, { IProgressBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';

export interface IState extends IProgressBarProps {
    horizontalColorRanges: IProgressBarProps['colorRanges'];
    verticalColorRanges: IProgressBarProps['colorRanges'];
}

class App extends React.PureComponent<{}, IState> {

    private myProgressBar = React.createRef<JqxProgressBar>();
    private myVerticalProgressBar = React.createRef<JqxProgressBar>();

    constructor(props: {}) {
        super(props);

        this.state = {
            horizontalColorRanges: [{ stop: 20, color: '#33b5e5' }, { stop: 50, color: '#98ca00' }, { stop: 80, color: '#ff4444' }, { stop: 100, color: '#aa66cc' }],
            renderText: (text: string, value: number): string => {
                if (value < 60) {
                    return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
                }
                return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
            },
            verticalColorRanges: [{ stop: 40, color: '#f0ad4e' }, { stop: 59, color: '#5bc0de' }, { stop: 70, color: '#5cb85c' }, { stop: 100, color: '#d9534f' }]
        }
    }

    public componentDidMount() {
        let value = 0;
        const interval = setInterval(() => {
            value++;

            if (value === 100) {
                clearInterval(interval);
            }

            this.myProgressBar.current!.val(value);
            this.myVerticalProgressBar.current!.val(value);
        }, 20);
    }

    public render() {
        return (
            <div>
                <div style={{ marginTop: '10px' }}>Horizontal</div>            
                <JqxProgressBar theme={'material-purple'} ref={this.myProgressBar}
                    width={250} height={30} value={0} showText={true} orientation={'horizontal'}
                    renderText={this.state.renderText} colorRanges={this.state.horizontalColorRanges} />

                <div style={{ marginTop: '10px' }}>Vertical</div>
                <JqxProgressBar theme={'material-purple'} ref={this.myVerticalProgressBar}
                    width={30} height={250} value={0} showText={true} orientation={'vertical'}
                    renderText={this.state.renderText} colorRanges={this.state.verticalColorRanges} />
            </div>
        );
    }
}

export default App;