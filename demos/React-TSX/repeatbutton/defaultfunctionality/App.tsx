import * as React from 'react';
 


import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxprogressbar';
import JqxRepeatButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrepeatbutton';

class App extends React.PureComponent<{}> {

    private myProgressBar = React.createRef<JqxProgressBar>();

    constructor(props: {}) {
        super(props);
        this.repeatOnClick = this.repeatOnClick.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxRepeatButton theme={'material-purple'} style={{ marginLeft: '25px' }} onClick={this.repeatOnClick}
                    width={180} delay={10}>
                    Click Me!
                </JqxRepeatButton>

                <JqxProgressBar theme={'material-purple'} ref={this.myProgressBar} style={{ marginTop: '10px' }}
                    width={250} height={25} max={30} />
            </div>
        );
    }

    private repeatOnClick(): void {
        let currentValue = this.myProgressBar.current!.val();
        currentValue += 1;
        this.myProgressBar.current!.setOptions({ animationDuration: 0, value: currentValue });
    }
}

export default App;
