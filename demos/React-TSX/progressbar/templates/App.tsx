import * as React from 'react';
 


import JqxProgressBar, { IProgressBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';

class App extends React.PureComponent<{}, IProgressBarProps> {

    private myProgressBar2 = React.createRef<JqxProgressBar>();
    private myProgressBar3 = React.createRef<JqxProgressBar>();
    private myProgressBar4 = React.createRef<JqxProgressBar>();
    private myProgressBar5 = React.createRef<JqxProgressBar>();
    private myProgressBar6 = React.createRef<JqxProgressBar>();

    constructor(props: {}) {
        super(props);

        this.state = {
            renderText: (text, value) => {
                if (value! < 55) {
                    return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
                }
                return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
            }
        }
    }

    public componentDidMount() {
        const values: any = {};
        const addInterval = (id: number, progressBar: any, intervalStep: number) => {
            values[id] = { value: 0 };
            values[id].interval = setInterval(() => {
                values[id].value++;
                if (values[id].value === 100) {
                    clearInterval(values[id].interval);
                }

                progressBar.current!.val(values[id].value);
            }, intervalStep);
        };

        addInterval(2, this.myProgressBar2, 20);
        addInterval(3, this.myProgressBar3, 30);
        addInterval(4, this.myProgressBar4, 40);
        addInterval(5, this.myProgressBar5, 50);
        addInterval(6, this.myProgressBar6, 60);
    }

    public render() {
        return (
            <div style={{ fontSize: '13px', fontFamily: 'Verdana', float: 'left' }}>
                <div style={{ marginTop: '10px' }}>Primary</div>
                <JqxProgressBar theme={'material-purple'} ref={this.myProgressBar2}
                    width={250} height={30} animationDuration={0} showText={true}
                    renderText={this.state.renderText} template={'primary'} value={0} />
                <div style={{ marginTop: '10px' }}>Success</div>
                <JqxProgressBar theme={'material-purple'} ref={this.myProgressBar3}
                    width={250} height={30} animationDuration={0} showText={true}
                    renderText={this.state.renderText}
                    template={'success'} value={0} />

                <div style={{ marginTop: '10px' }}>Info</div>
                <JqxProgressBar theme={'material-purple'} ref={this.myProgressBar4}
                    width={250} height={30} animationDuration={0} showText={true}
                    renderText={this.state.renderText} template={'info'} value={0} />

                <div style={{ marginTop: '10px' }}>Warning</div>
                <JqxProgressBar theme={'material-purple'} ref={this.myProgressBar5}
                    width={250} height={30} animationDuration={0} showText={true}
                    renderText={this.state.renderText} template={'warning'} value={0} />

                <div style={{ marginTop: '10px' }}>Danger</div>
                <JqxProgressBar theme={'material-purple'} ref={this.myProgressBar6}
                    width={250} height={30} animationDuration={0} showText={true}
                    renderText={this.state.renderText} template={'danger'} value={0} />
            </div >
        );
    }
}

export default App;