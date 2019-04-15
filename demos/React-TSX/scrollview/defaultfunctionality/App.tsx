import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxScrollView from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscrollview';

class App extends React.PureComponent<{}, {}> {
    private myScrollView = React.createRef<JqxScrollView>();

    constructor(props: {}) {
        super(props);

        this.onStartClicked = this.onStartClicked.bind(this);
        this.onStopClicked = this.onStopClicked.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxScrollView theme={'material-purple'} ref={this.myScrollView} width={600} height={450} buttonsOffset={[0, 0]}>
                    <div><div className="photo" style={{ backgroundImage: "url(./assets/images/imageNature1.jpg)" }} /></div>
                    <div><div className="photo" style={{ backgroundImage: "url(./assets/images/imageNature2.jpg)" }} /></div>
                    <div><div className="photo" style={{ backgroundImage: "url(./assets/images/imageNature3.jpg)" }} /></div>
                    <div><div className="photo" style={{ backgroundImage: "url(./assets/images/imageNature4.jpg)" }} /></div>
                </JqxScrollView>

                <div id="buttons">
                    <JqxButton theme={'material-purple'} onClick={this.onStartClicked} width={120}>Start Slideshow</JqxButton>
                    <JqxButton theme={'material-purple'} onClick={this.onStopClicked} width={120}>Stop Slideshow</JqxButton>
                </div>
            </div>
        );
    }

    // Event handling
    private onStartClicked(event: any): void {
        this.myScrollView.current!.setOptions({ slideShow: true });
    }

    private onStopClicked(event: any): void {
        this.myScrollView.current!.setOptions({ slideShow: false });
    }
}

export default App;
